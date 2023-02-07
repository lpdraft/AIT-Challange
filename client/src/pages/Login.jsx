import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const logInUser = (e) => {
    e.preventDefault();

    console.log(user);
    toast.success("Logged In successfully!");
  };
  return (
    <div className="container mt-5">
      <h1 className="text-center">Login Page</h1>
      <hr />
      {/* Form Data */}
      <form onSubmit={logInUser}>
        <div className="form-group">
          <input
            className="form-control"
            type="email"
            name="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Your email..."
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Your password..."
          />
        </div>

        <div className="form-group  d-flex justify-content-center">
          <button type="submit" className="btn btn-secondary mt-3 p-3">
            LogIn
          </button>
        </div>
      </form>

      <div className="d-flex justify-content-center">
        <Link to="auth/register">
          No Account? Click here to get<b>Registered</b>
        </Link>
      </div>
    </div>
  );
};
