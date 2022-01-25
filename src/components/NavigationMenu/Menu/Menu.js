import React, { NavLink as Link } from 'react-router-dom';

export default function Menu() {
  return (
    <nav className="nav-menu">
      <Link end to="/" className={({ isActive }) => "nav-menu__item" + (isActive ? " nav-menu__item-active" : "")} >Главная</Link>
      <Link end to="/drift" className={({ isActive }) => "nav-menu__item" + (isActive ? " nav-menu__item-active" : "")} >Дрифт-такси</Link>
      <Link end to="/timeattack" className={({ isActive }) => "nav-menu__item" + (isActive ? " nav-menu__item-active" : "")} >Time Attack</Link>
      <Link end to="/forza" className={({ isActive }) => "nav-menu__item" + (isActive ? " nav-menu__item-active" : "")} >Forza Karting</Link>
    </nav>
  );
}
