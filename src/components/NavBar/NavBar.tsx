"use client";

import React, { FunctionComponent } from "react";

import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MailIcon from '@mui/icons-material/Mail';


const navElements = new Map<string, FunctionComponent>(
    [
        ['home', HomeIcon],
        ['about', PersonIcon],
        ['projects', BusinessCenterIcon],
        ['contact', MailIcon]
    ]
)

const NavBar = () => {

    const renderChilds = () => {
        return Array.from(navElements).map(([key, Icon],index : number) => {
            return (
                <div className={`button_control-${key}`}>
                    <Icon key={index} className="button__nav-icon"/>
                </div>
            );
        });
    }

  return (
    <div className="button__nav">
        { renderChilds() }
    </div>
  );
};

export default NavBar;