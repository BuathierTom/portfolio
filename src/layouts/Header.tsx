'use client';

import React, { useState } from "react";
import { Clock } from "@/components";
import Link from "next/link";
import Image from "next/image";

const Name = "<Tom BUATHIER />";

function Header() {

    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <div className={`header__space${isMenuOpen ? "--active" : ""}`}>
                <h1 className="container__name"> <Link href="/">{ Name }</Link> </h1>
                <div className="container_img">
                <a href="/">
                    <Image src='/t_logo.png' alt="Tom Buathier" width={50} height={50} className="container__img-img"/>
                </a>
                </div>
                <Clock />
            </div>
        </header>
    );
};

export default Header;