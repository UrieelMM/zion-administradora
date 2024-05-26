import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "public/images/logo.png";

const HeaderTwo = ({ handleSearch }: any) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const handleSubmenu = (submenu: string) => {
    if (submenu === openSubMenu) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(submenu);
    }
  };

  const isSubMenuOpen = (submenu: string) => {
    return submenu === openSubMenu ? "sub-menu-open" : "";
  };

  return (
    <nav className="navbar navbar-area navbar-expand-lg">
      <div className="container nav-container navbar-bg">
        <div className="responsive-mobile-menu">
          <button
            className={
              (toggleMenu ? " open" : " ") +
              " menu toggle-btn d-block d-lg-none"
            }
            data-target="#itech_main_menu"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleToggleMenu}
          >
            <span className="icon-left"></span>
            <span className="icon-right"></span>
          </button>
        </div>
        <div className="logo">
          <Link href="/">
            <Image src={Logo} alt="Image" priority />
          </Link>
        </div>
        <div className="nav-right-part nav-right-part-mobile">
          <Link href="/" className="search-bar-btn pointer" onClick={handleSearch}>
            <i className="fa fa-search"></i>
          </Link>
        </div>
        <div
          className={
            (toggleMenu ? " sopen" : " ") + " collapse navbar-collapse"
          }
          id="itech_main_menu"
        >
          <ul className="navbar-nav menu-open text-lg-end">
            <li className="menu-item-has-children">
              <Link href="/" onClick={() => handleSubmenu("home")}>Inicio</Link>
            </li>
            <li className="menu-item-has-children">
              <Link href="/" onClick={() => handleSubmenu("service")}>Servicios</Link>
              {/* <ul className={`sub-menu ${isSubMenuOpen("service")}`}>
                <li>
                  <Link href="/service">Service</Link>
                </li>
                <li>
                  <Link href="/service-details">Service Single</Link>
                </li>
              </ul> */}
            </li>
            <li className="menu-item-has-children">
              <Link href="/" onClick={() => handleSubmenu("pages")}>Sobre nosotros</Link>
              {/* <ul className={`sub-menu ${isSubMenuOpen("pages")}`}>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/team">Team</Link>
                </li>
              </ul> */}
            </li>
            {/* <li className="menu-item-has-children">
              <a onClick={() => handleSubmenu("blog")}>Blog</a>
              <ul className={`sub-menu ${isSubMenuOpen("blog")}`}>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/blog-details">Blog Details</Link>
                </li>
              </ul>
            </li> */}
            <li>
              <Link href="/contact" passHref>
                Contáctanos
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-right-part nav-right-part-desktop align-self-center">
          <Link className="btn btn-base" href="/">
            Conversemos
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default HeaderTwo;
