import logo from "../../assets/imgs/peace.png";
import navBarCss from "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="navContainer">
      {/* Logo */}
      <div>
        <Link to="/">
          <img src={logo} alt="logo" className="navLogo" />
        </Link>
      </div>
      {/* Nav Links */}
      <div className="navLinks">
        <li>
          <a>Trending</a>
        </li>
        <li>
          <a>Entertainment</a>
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
        <button className="btn btn-danger">Upload</button>

        <Link to="/auth/login">
          <button className="btn btn-success">LogIn/Out</button>
        </Link>
      </div>
    </div>
  );
};
