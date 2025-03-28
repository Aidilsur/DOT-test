import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { users } from "../data/dummyUser";
import { loginSuccess } from "../state/authSlice";
import Style from "../style/login.module.css";
import { showToast } from "../utils/toast";
import TextInput from "../components/TextInput";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      showToast("error", "Please fill in all fields");
      return;
    }

    const user = users.find(
      (u) => u.email === formData.email && u.password === formData.password
    );

    if (user) {
      const token = btoa(`${user.email}:${Date.now()}`);
      dispatch(loginSuccess({ user, token }));
      showToast("success", "Login successful!");
      navigate("/");
    } else {
      showToast("error", "Invalid credentials");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className={Style.container}>
      <div className={Style.loginCard}>
        <h1>Welcome Back!</h1>
        <p className={Style.subtitle}>Please login to continue</p>

        <form onSubmit={handleSubmit} className={Style.form}>
          <TextInput
            type="email"
            id="email"
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          <TextInput
            type="password"
            id="password"
            name="password"
            label="Password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
