import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo-nav-myverse@0.75x.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Virtual Locus</a></p>
          <p><a href="#wgpt3">InfoVerse</a></p>
          <p><a href="#possibility">Future Plans</a></p>
          <p><a href="#features">SkillVerse</a></p>
          <p><a href="#blog">WriterVerse</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <button type="button">
          <a href="https://www.github.com/kaifshaikhhhh" target="blank">
            GitVerse
          </a>
        </button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Virtual Locus</a></p>
            <p><a href="#gpt3">InfoVerse</a></p>
            <p><a href="#possibility">Future Plans</a></p>
            <p><a href="#features">SkillVerse</a></p>
            <p><a href="#blog">WriterVerse</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <button type="button">
              <a href="https://www.github.com/kaifshaikhhhh" target="blank">
                GitVerse
              </a>
            </button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
