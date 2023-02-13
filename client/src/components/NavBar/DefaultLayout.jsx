import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import logo from "../../assets/imgs/peace.png";
import styles from "./styles.module.scss";

export const DefaultLayout = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.navContainer}>
        {/* Logo */}
        <div>
          <img
            src={logo}
            alt="logo"
            className={styles.navLogo}
            onClick={() => navigate("/")}
          />
          <span className="text-success">{user?.name.toUpperCase()}</span>
        </div>

        {/* Nav Links / Dropdown Categories*/}
        <div className={styles.navLinks}>
          <li>
            <a
              onClick={() => {
                navigate("/random");
              }}
            >
              Random
            </a>
          </li>

          <li>
            <a
              onClick={() => {
                navigate("/trend");
              }}
            >
              Trending
            </a>
          </li>

          {/* <li>
            <a
              onClick={() => {
                navigate("/form");
              }}
            >
              useForm
            </a>
          </li> */}

          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Categories GIfs
            </button>

            <ul className="dropdown-menu">
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => {
                    navigate("/categories/animes");
                  }}
                >
                  Animes
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate("/categories/animals");
                  }}
                  className="dropdown-item"
                  type="button"
                >
                  Animals
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate("/categories/celebrities");
                  }}
                  className="dropdown-item"
                  type="button"
                >
                  Celebrities
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Upload & LoIn/Out */}
        <div className={styles.actionBtns}>
          <button
            className="btn btn-sm btn-success"
            onClick={() => navigate(`/upload/${user._id}`)}
          >
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
                  onClick={() => navigate("/list")}
                  className="dropdown-item"
                  type="button"
                >
                  My Gifs
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
        </div>
        {/* Container Wrapper */}
      </div>
      <div className="container">{children}</div>
    </>
  );
};
