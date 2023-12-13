"use client";

import React, { FunctionComponent } from "react";
import { useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MailIcon from '@mui/icons-material/Mail';
import Link from "next/link";


const navElements = new Map<string, FunctionComponent>(
    [
        [``, HomeIcon],
        [`about`, PersonIcon],
        [`projects`, BusinessCenterIcon],
        [`contact`, MailIcon]
    ]
)

const NavBar = () => {

    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const renderChilds = () => {
        return Array.from(navElements).map(([key, Icon],index : number) => {
            return (
                <div className={`button_control`} key={index}>                    

                    <Link href={`/${key}`}>
                        <Icon key={index} className="button__nav-icon"/>
                    </Link>
                </div>
            );
        });
    }

  return (
    <span>
        <div className="container__burger" onClick={toggleMenu}>
            <div className={`menu${isMenuOpen ? "--active" : ""}`}>
                <span className="menu__close"></span>
                <ul className="nav-bar__ul">
                    <li className="nav-bar__li">
                        <Link href="/" className="menu__link">Home</Link>
                    </li>
                    <li className="nav-bar__li">
                        <Link href="/about" className="menu__link">About</Link>
                    </li>
                    <li className="nav-bar__li">
                        <Link href="/projects" className="menu__link">Project</Link>
                    </li>
                    <li className="nav-bar__li">
                        <Link href="/contact" className="menu__link">Contact</Link>
                    </li>
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