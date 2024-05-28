import "./Header.scss";
import Avatar from "../Avatar/Avatar";
// import Search from "../../assets/icons/search.svg";
// import Upload from "../../assets/icons/upload.svg";

function Header(props) {
  return (
    <header className="header">
      <img
        className="header__logo"
        src="src/assets/logos/BrainFlix-logo.svg"
        alt="BrainFlix logo white play button blue background"
      ></img>
      <div className="main-nav">
        <search className="main-nav__search">
          <form className="main-nav__form" action="./search">
            {/* <i className="main-nav__search-icon"></i> */}
            <input
              className="main-nav__input"
              type="search"
              name="search-field"
              id="search"
              placeholder="Search"
            />
          </form>
        </search>
        <Avatar
          className="main-nav__user"
          src="src/assets/images/Mohan-muruge.jpg"
          alt="User profile picture"
        />
      </div>
      <button className="main-nav__upload">Upload</button>
    </header>
  );
}

export default Header;
