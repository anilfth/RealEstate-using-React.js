import React, { useState, useRef } from 'react';
import './Header.css';
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);
  const menuRef = useRef(null);

  const getMenuStyles = (menuOpened) => {
    if (menuRef.current && menuRef.current.clientWidth <= 800) {
      return { right: menuOpened ? '0' : '-100%' };
    }
    return {};
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={100} />
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div ref={menuRef} className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <a href=" "> Residencies</a>
            <a href=" "> Our Value</a>
            <a href=" ">Contact Us</a>
            <a href=" ">Get Started</a>
            <button className="button">
              <a href=" ">Contact</a>
            </button>
          </div>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
}

export default Header;
