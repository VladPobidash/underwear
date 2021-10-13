import React from "react";
import Logo from "../../assets/img/puma-logo.png";
import "../NavBar/navBarDraft.scss";

const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar">
        <div className="navbar__logo">
          <img className="navbar__logo-img" src={Logo} />
        </div>
        <div className="navbar__search">
          <input className="navbar__search-input" type="text" placeholder="search" />
        </div>
        <div className="navbar__text">
          <ul className="navbar__text-list">
          <li><a href="#">комплекты</a></li> 
          <li><a href="#">бюзгальтери</a></li> 
          <li><a href="#">трусики</a></li>
          <li><a href="#">купальники</a></li>
          <li><a href="#">SALE</a></li>
          </ul>
        </div>
        <div className="navbar__basket">
           <a href="#">Войти</a>
          <a href="#">Корзина</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
