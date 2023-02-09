import logo from "../../assets/imgs/peace.png";
import navBarCss from "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export const DefaultLayout = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  return (
    <>
      <div className="navContainer">
        {/* Logo */}
        <div>
          <img
            src={logo}
            alt="logo"
            className="navLogo"
            onClick={() => navigate("/")}
          />

          <span className="text-success">{user?.name.toUpperCase()}</span>
        </div>
        {/* Nav Links */}
        <div className="navLinks">
          <li>
            <a
              onClick={() => {
                navigate("/trend");
              }}
            >
              Trending
            </a>
          </li>
          <li>
            <a>Sports</a>
          </li>
          <li>
            <a>Artists</a>
          </li>
        </div>
        {/* Upload & LoIn/Out */}
        <div className="actionBtns">
          <button className="btn btn-sm btn-success">
            <i>Upload</i>
          </button>

          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Profile
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <li>
                <button
                  onClick={() => navigate("/profile")}
                  className="dropdown-item"
                  type="button"
                >
                  MyProfile
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate(`/edit-profile/${user._id}`)}
                  className="dropdown-item"
                  type="button"
                >
                  Edit
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => {
                    localStorage.removeItem("token");
                    window.location.reload();
                  }}
                >
                  LogOut
                </button>
              </li>
            </ul>
          </div>

          {/* ----------------- */}
        </div>
      </div>
      <div className="container">{children}</div>
    </>
  );
};
