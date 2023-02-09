import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { DefaultLayout } from "../components";
import { toast } from "react-hot-toast";
import axios from "axios";

import { SetUser } from "../redux/features/userSlice";

export const PrivateRoute = ({ children }) => {
  const [readyToRender, setReadyToRender] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  const getUserData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/user-data",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data.success) {
        toast.success("Welcome Home");
        dispatch(SetUser(response.data.data));
      } else {
        toast.error("Can't find user");
      }
      setReadyToRender(true);
    } catch (error) {
      localStorage.removeItem("token");

      setReadyToRender(true);

      navigate("/login");
      console.log(error);
    }
  };

  useEffect(() => {
    if (user === null) {
      getUserData();
    }
  }, []);

  return (
    <div>{readyToRender && <DefaultLayout>{children}</DefaultLayout>}</div>
  );
};
