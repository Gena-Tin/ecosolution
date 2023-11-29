import React, { useState } from "react";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import logoImage from "./images/logo.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <div className="container">
        <img src={logoImage} alt="logo" />
        <BurgerMenu isOpen={isMenuOpen} onClose={closeMenu} />
        <button onClick={openMenu}>Open Menu</button>
      </div>
    </header>
  );
}

export default Header;
