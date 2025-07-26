import { useState } from "react";
import "./loginPage.css";
import { Link } from "react-router-dom";

export default function SignInPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Handle sign-in logic here
    alert(`Signed in as ${form.name}`);
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              className="login-input"
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
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
            Sign Up
          </button>
        </form>
        <p style={{ marginTop: "20px" }}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
