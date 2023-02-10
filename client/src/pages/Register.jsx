import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import toast from "react-hot-toast";
// import { FileUploader } from "react-drag-drop-files";

export const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    hobbies: "",
    password: "",
  });

  // const fileTypes = ["JPG", "PNG", "GIF"];

  const navigate = useNavigate();

  const registerNewUser = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/register",
        user
      );

      if (response.data.success) {
        toast.success("User registered successully!");
        navigate("/login");
      } else {
        toast.error("User already exists!");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
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
            placeholder="Provide your name.."
          />
        </div>

        <div className="form-group">
          <input
            className="form-control"
            type="email"
            name="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Provide email.."
          />
        </div>

        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="hobbies"
            value={user.hobbies}
            onChange={(e) => setUser({ ...user, hobbies: e.target.value })}
            placeholder="Any hobbie?"
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

        {/* <div className="form-group">
          <FileUploader
            handleChange={handleChange}
            name="file"
            types={fileTypes}
          />
        </div> */}

        <div className="form-group d-flex justify-content-center">
          <button type="submit" className="btn btn-secondary mt-3 p-3">
            Register
          </button>
        </div>
      </form>

      <div className="d-flex justify-content-center">
        <Link to="/login">
          <h5>
            Have account? Click here to <b>Login</b>
          </h5>
        </Link>
      </div>
    </div>
  );
};
