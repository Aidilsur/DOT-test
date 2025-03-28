import { InputHTMLAttributes } from "react";
import Style from "../style/input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const TextInput = ({ label, ...props }: InputProps) => {
  return (
    <div className={Style.inputGroup}>
      <label htmlFor={props.id}>{label}</label>
      <input {...props} className={Style.input} />
    </div>
  );
};

export default TextInput;
