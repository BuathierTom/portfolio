'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Name = "<Tom BUATHIER />";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className={`header__wrapper${isMenuOpen ? "--active" : ""}`}>
        <h1 className="header__name">
          <Link href="/">{Name}</Link>
        </h1>

        <div className="header__logo">
          <Link href="/">
            <Image
              src="/img/layout/logo.png"
              alt="Tom Buathier"
              width={50}
              height={50}
              className="header__logo-img"
            />
          </Link>
        </div>

        <div className="header__socials">
          <Link href="https://github.com/BuathierTom" target="_blank">
            <GitHubIcon className="header__icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/tom-buathier/" target="_blank">
            <LinkedInIcon className="header__icon" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
