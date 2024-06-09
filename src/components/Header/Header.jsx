import { Link } from "react-router-dom";
import "./Header.scss";
import Search from "../Search/Search";
import Avatar from "../Avatar/Avatar";
import Image from "../../assets/images/Mohan-muruge.jpg";
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
            alt="white play symbol on blue background"
          ></img>
        </Link>
        <div className="main-nav">
          <div className="main-nav__site">
            <Search />
            <Avatar
              className="main-nav__avatar main-nav__avatar--mobile"
              image={Image}
              alt="User profile picture"
            />
          </div>
          <div className="main-nav__user">
            <Link className="main-nav__link" to={"/upload"}>
              <Button
                className="main-nav__upload button"
                btnLabel="Upload"
                icon={Upload}
                iconClass="main-nav__upload-icon"
                altText="up arrow above horizontal line"
              />
            </Link>
            <Avatar
              className="main-nav__avatar main-nav__avatar--tablet"
              image={Image}
              alt="User profile picture"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
