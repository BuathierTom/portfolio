import React from "react";
import { Clock } from "@/components";

const Name = "<Tom BUATHIER />";

function Header() {
    return (
        <header>
            <div className="header__space">
                <h1> {Name} </h1>
                <Clock />
            </div>
        </header>
    );
};

export default Header;