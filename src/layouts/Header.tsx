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
            <div className={`header__space${isMenuOpen ? "--active" : ""}`}>
                <h1 className="container__name"> 
                    <Link href="/">
                        { Name }
                    </Link> 
                </h1>

                <div className="container__img">
                    <a href="/">
                        <Image src='/img/layout/t_logo.png' alt="Tom Buathier" width={50} height={50} className="container__img-img"/>
                    </a>
                </div>
                <div className="container__socials">
                    <Link href={'https://github.com/BuathierTom'} target="_blank">
                        <GitHubIcon className="container__socials-icons"/>
                    </Link>
                    
                    <Link href={'https://www.linkedin.com/in/tom-buathier/'} target="_blank">
                        <LinkedInIcon className="container__socials-icons"/>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;