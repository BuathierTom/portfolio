import React from "react";
import { Clock } from "@/components";

function Header() {
    return (
        <header>
            <div className="header__space">
                <h1> {"<Tom BUATHIER />"} </h1>
                <Clock />
            </div>
        

        </header>
    )
}

export default Header