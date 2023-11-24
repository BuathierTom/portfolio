import React from "react";
import { Clock } from "@/components";
import Link from "next/link";

const Name = "<Tom BUATHIER />";

function Header() {
    return (
        <header>
            <div className="header__space">
                <h1 className="container__name"> <Link href="/">{Name}</Link> </h1>
                <Clock />
            </div>
        </header>
    );
};

export default Header;