"use client";

import React from "react";
import { useState } from "react";
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

    const getIconClass = (href: string) => {
        if (pathname === href) {
          return "button__nav-icon button__nav-icon--current";
        }
        return "button__nav-icon";
    };

    const getIconClassResponsive = (href: string) => {
        if (pathname === href) {
          return "menu__link menu__link--current";
        }
        return "menu__link";
    };


    const renderChilds = () => {

        return (
            <span>
                <div className='button_control'>                    
                    <Link href='/'>
                        <HomeIcon className={getIconClass("/")}/>
                    </Link>
                    <div className="button_control-hoverit">
                        <p>Home</p>
                    </div>
                </div>
                <div className='button_control'>
                    <Link href='/about'>
                        <PersonIcon className={getIconClass("/about")}/>
                    </Link>
                    <div className="button_control-hoverit">
                        <p>About</p>
                    </div>
                </div>
                <div className='button_control'>
                    <Link href='/projects'>
                        <BusinessCenterIcon className={getIconClass("/projects")}/>
                    </Link>
                    <div className="button_control-hoverit">
                        <p>Projects</p>
                    </div>
                </div>
                <div className='button_control'>
                    <Link href='/contact'>
                        <MailIcon className={getIconClass("/contact")}/>
                    </Link>
                    <div className="button_control-hoverit">
                        <p>Contact</p>
                    </div>
                </div>
            </span>
        );

    };

  return (
    <span>
        <div className="container__burger" onClick={toggleMenu}>
            <div className={`menu${isMenuOpen ? "--active" : ""}`}>
                <span className="menu__close"></span>
                <ul className="nav-bar__ul">
                    <li className="nav-bar__li">
                        <Link href="/" className={getIconClassResponsive("/")}>Home</Link>
                    </li>
                    <li className="nav-bar__li">
                        <Link href="/about" className={getIconClassResponsive("/about")}>About</Link>
                    </li>
                    <li className="nav-bar__li">
                        <Link href="/projects" className={getIconClassResponsive("/projects")}>Projects</Link>
                    </li>
                    <li className="nav-bar__li">
                        <Link href="/contact" className={getIconClassResponsive("/contact")}>Contact</Link>
                    </li>

                    <div className="container__socials">
                        <Link href={'https://github.com/BuathierTom'} target="_blank">
                            <GitHubIcon className="container__socials-icons"/>
                        </Link>
                        
                        <Link href={'https://www.linkedin.com/in/tom-buathier/'} target="_blank">
                            <LinkedInIcon className="container__socials-icons"/>
                        </Link>
                    </div>
                </ul>


            </div>
        </div>
        <div className="button__nav">
            { renderChilds() }
        </div>
    </span>
  );
};

export default NavBar;