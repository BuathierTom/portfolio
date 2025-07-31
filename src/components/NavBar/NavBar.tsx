"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const getIconClass = (href: string) =>
    pathname === href ? "nav__icon nav__icon--active" : "nav__icon";

  const getResponsiveLinkClass = (href: string) =>
    pathname === href ? "nav__menu-link nav__menu-link--active" : "nav__menu-link";

  const renderNavItems = () => (
    <>
      {[
        { href: "/", label: "Home", icon: <HomeIcon className={getIconClass("/")} /> },
        { href: "/about", label: "About", icon: <PersonIcon className={getIconClass("/about")} /> },
        { href: "/projects", label: "Projects", icon: <BusinessCenterIcon className={getIconClass("/projects")} /> },
        { href: "/contact", label: "Contact", icon: <MailIcon className={getIconClass("/contact")} /> },
      ].map(({ href, label, icon }) => (
        <div className="nav__button" key={href}>
          <Link href={href}>{icon}</Link>
          <div className="nav__tooltip"><p>{label}</p></div>
        </div>
      ))}
    </>
  );

  return (
    <>
      <div className="nav__burger" onClick={toggleMenu}>
        <div className={`nav__menu${isMenuOpen ? "--active" : ""}`}>
          <span className="nav__menu-close"></span>
          <ul className="nav__list">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/projects", label: "Projects" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <li className="nav__list-item" key={href}>
                <Link href={href} className={getResponsiveLinkClass(href)}>
                  {label}
                </Link>
              </li>
            ))}

            <div className="nav__socials">
              <Link href="https://github.com/BuathierTom" target="_blank">
                <GitHubIcon className="nav__social-icon" />
              </Link>
              <Link href="https://www.linkedin.com/in/tom-buathier/" target="_blank">
                <LinkedInIcon className="nav__social-icon" />
              </Link>
            </div>
          </ul>
        </div>
      </div>

      <div className="nav__vertical">
        {renderNavItems()}
      </div>
    </>
  );
};

export default NavBar;
