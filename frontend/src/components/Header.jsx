import { useSelector } from "react-redux";

function Header() {
  const currentUser = useSelector((state) => state.user.currentUser);

  // for mobile nav
  function changingNav() {
    const mobileNav = document.getElementById("mobile-nav");

    if (mobileNav.style.display === "flex") {
      mobileNav.style.display = "none";
    } else {
      mobileNav.style.display = "flex";
    }
  }

  // for dark-lightmode

  function darkMode() {
    const themeBtn = document.querySelector("body");
    themeBtn.classList.toggle("dark-mode");
  }

  return (
    <header className="container">
      <div className="header__element">
        <h1 className="header__logo">
          <a
            href="/"
            style={{ textDecoration: "none", color: "var(--clr-dark-2)" }}
          >
            Renaissance Reads<span className="header__dot">.</span>
          </a>
        </h1>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="header__burgerbtn"
          onClick={changingNav}
        >
          <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

        <div className="header__links">
          <a href="/">Home</a>
          {/* <a href="/blogs">Blog</a> */}
          <a href="/library">Library</a>

          {currentUser ? (
            <a href="/profile">
              <img
                className="header__usericon"
                src={currentUser.profile}
                alt=""
              />
            </a>
          ) : (
            <a href="/login">
              <button className="btn">Sign in</button>
            </a>
          )}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="header__usericon"
            id="sunicon"
            onClick={darkMode}
          >
            <path d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
          </svg>
        </div>
      </div>
      <hr className="header__line" />

      <div className="mobile-nav " id="mobile-nav">
        <a href="/">Home</a>
        {/* <a href="/blogs">Blog</a> */}
        <a href="/library">Library</a>
        <div>
          {currentUser ? (
            <a href="profile">
              <img
                className="header__usericon"
                src={currentUser.profile}
                alt=""
              />
            </a>
          ) : (
            <a href="/login">
              <button className="btn">Sign in</button>
            </a>
          )}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="header__usericon"
          id="sunicon"
          onClick={darkMode}
        >
          <path d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
        </svg>
      </div>
    </header>
  );
}

export default Header;
