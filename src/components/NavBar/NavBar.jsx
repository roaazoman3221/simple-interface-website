import "./NavBar.css"
import { useState } from "react";

function NavBar({ openSignIn }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar-content">
      <div className="navbar-links">
        <div className="navbar-comps">
          <h3 className="nav-title">Roaa Alzoman</h3>

          <div className="nav-pages">
            <a href="#" className="home">Home</a>
            <a href="#" className="about">About</a>
          </div>
        </div>
      </div>

      <div className="btns">
        <button
          className="sign-in-btn"
          onClick={openSignIn}
        >
          Sign In
        </button>

        <button className="bars" onClick={() => setMenuOpen(!menuOpen)}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      <div className={`side-menu ${menuOpen ? "open" : ""}`}>
        <a href="#" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#" onClick={() => setMenuOpen(false)}>About</a>
      </div>

      
      {menuOpen && <div className="overlay-menu" onClick={() => setMenuOpen(false)}></div>}
    </div>
  )
}

export default NavBar
