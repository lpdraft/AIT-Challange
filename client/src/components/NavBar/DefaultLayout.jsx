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
            onClick={() => {
              navigate("/");
            }}
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
          <li>
            <a>Stickers</a>
          </li>
        </div>
        {/* Upload & LoIn/Out */}
        <div className="actionBtns">
          <button className="btn btn-sm btn-info">
            <i>Upload</i>
          </button>

          <button
            className="btn btn-sm btn-danger"
            onClick={() => {
              localStorage.removeItem("token");
              window.location.reload();
            }}
          >
            LogOut
          </button>
        </div>
      </div>
      <div className="container">{children}</div>
    </>
  );
};
