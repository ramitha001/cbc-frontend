import { useState } from "react";
import "./loginPage.css";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Handle login logic here
    alert(`Logged in as ${form.email}`);
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              className="login-input"
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              className="login-input"
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <button className="login-button" type="submit">
            Login
          </button>
        </form>
        <p style={{ marginTop: "20px" }}>
          Don't have an account? <Link to="/signInPage">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}