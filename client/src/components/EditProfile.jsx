import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";
import toast from "react-hot-toast";

export const EditProfile = () => {
  const [user, setUser] = useState({
    name: "",
    hobbies: "",
    avatar: "",
  });

  const { userId } = useParams();

  const navigate = useNavigate();

  const updateUserInfo = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.patch(
        `http://localhost:5000/api/users/edit-profile/${userId}`,
        user
      );

      if (response.data.success) {
        toast.success("User updated successully!");
        navigate("/");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };
  return (
    <div className="container mt-5">
      <h1 className="text-center">Edit Profile</h1>
      <hr />
      {/* Form Data */}
      <form onSubmit={updateUserInfo}>
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
            type="text"
            value={user.avatar}
            onChange={(e) => setUser({ ...user, avatar: e.target.value })}
            placeholder="Insert pic URL here..."
          />
        </div>

        <div className="form-group d-flex justify-content-center">
          <button type="submit" className="btn btn-secondary mt-3 p-3">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
