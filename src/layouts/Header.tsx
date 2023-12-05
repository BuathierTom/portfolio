'use client';

import React, { useState } from "react";
import { Clock } from "@/components";
import Link from "next/link";

const Name = "<Tom BUATHIER />";

function Header() {

    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <div className={`header__space${isMenuOpen ? "--active" : ""}`}>
                <h1 className="container__name"> <Link href="/">{Name}</Link> </h1>
                <Clock />
                <div className="container__burger" onClick={toggleMenu}>
                    <div className={`menu${isMenuOpen ? "--active" : ""}`}>
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/projects">Project</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;