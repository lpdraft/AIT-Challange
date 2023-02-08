import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  // console.log(user);
  return (
    <div className="container">
      <div className="text-center">
        <img src={user.pic} style={{ width: "50px", height: "50px" }} />
      </div>
      <div className="card p-3">
        <h1 className="text-center mt-3">
          Hello, <span style={{ color: "red" }}>{`${user.name}`}</span>
        </h1>
        <h2>
          Email: <span>{user.email}</span>
        </h2>
        <p>isAdmin: {`${user.isAdmin}`}</p>
        <p>lastUpdate: {`${user.updatedAt}`}</p>
        <button
          className="btn btn-outline-info"
          onClick={() => navigate(`/edit-profile/${user._id}`)}
        >
          EditInfo
        </button>
      </div>
    </div>
  );
};
