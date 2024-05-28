function Header(props) {
  return (
    <header className="header">
      <img
        className="header__logo"
        src="src/assets/logos/BrainFlix-logo.svg"
        alt="BrainFlix logo - white play button blue background"
      ></img>
      <div className="main-nav">
        <search className="main-nav__search" aria-placeholder="Search"></search>
        <img
          className="main-nav__user"
          src="src/assets/images/Mohan-muruge.jpg"
          alt="User profile picture"
        ></img>
        <button className="main-nav__upload">Upload</button>
      </div>
    </header>
  );
}

export default Header;
