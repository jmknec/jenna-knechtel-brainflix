import { Link } from "react-router-dom";
import "./Header.scss";
import Search from "../Search/Search";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import Upload from "../../assets/icons/upload.svg";

function Header(props) {
  return (
    <header className="header">
      <div className="header__content">
        <Link to={"/"}>
          <img
            className="header__logo"
            src="src/assets/logos/BrainFlix-logo.svg"
            alt="White play symbol on blue background"
          ></img>
        </Link>
        <div className="main-nav">
          <div className="main-nav__site">
            <Search />
            <Avatar
              className="main-nav__avatar main-nav__avatar--mobile"
              image="http://localhost:8080/images/Mohan-muruge.jpg"
              alt="Side profile of default user Mohan Muruge"
            />
          </div>
          <div className="main-nav__user">
            <Link className="main-nav__link" to={"/upload"}>
              <Button
                className="main-nav__upload button"
                btnLabel="Upload"
                icon={Upload}
                iconClass="main-nav__upload-icon"
                altText="Up arrow above horizontal line"
              />
            </Link>
            <Avatar
              className="main-nav__avatar main-nav__avatar--tablet"
              image="http://localhost:8080/images/Mohan-muruge.jpg"
              alt="Side profile of default user Mohan Muruge"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
