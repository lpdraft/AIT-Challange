import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const logInUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        user
      );
      if (response.data.success) {
        localStorage.setItem("token", response.data.data);
        toast.success("Logged In successfully!");
        navigate("/");
      } else {
        toast.error("Your password or email is wrong!");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
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
        <h3>
          <Link to="/register">
            No Account? Click here to get <b>Registered</b>
          </Link>
        </h3>
      </div>
    </div>
  );
};
