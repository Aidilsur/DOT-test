import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import styles from "../style/numberInput.module.css";

interface NumberInputProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  label?: string;
}

const NumberInput: React.FC<NumberInputProps> = ({
  value,
  onChange,
  min = 1,
  max,
}) => {
  const handleDecrease = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleIncrease = () => {
    if (!max || value < max) {
      onChange(value + 1);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputGroup}>
        <button
          onClick={handleDecrease}
          disabled={value <= min}
          className={styles.button}
        >
          <FaMinus />
        </button>
        <input type="text" value={value} readOnly className={styles.input} />
        <button
          onClick={handleIncrease}
          disabled={max !== undefined && value >= max}
          className={styles.button}
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default NumberInput;
