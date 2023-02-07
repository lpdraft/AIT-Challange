import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const registerNewUser = (e) => {
    e.preventDefault();

    console.log(user);
  };
  return (
    <div className="container mt-5">
      <h1 className="text-center">Register Page</h1>
      <hr />
      {/* Form Data */}
      <form onSubmit={registerNewUser}>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            placeholder="Provide your name"
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="email"
            name="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Provide email"
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Write a secure password"
          />
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-secondary mt-2 p-2">
            Register
          </button>
        </div>
      </form>

      <Link to="auth/login">
        Have account? Click here to <b>Login</b>
      </Link>
    </div>
  );
};
