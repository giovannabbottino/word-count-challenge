import React from "react";
import "./style.scss";
import Headroom from "react-headroom";

function Header() {
    return (
        <Headroom>
                <header className="header">
                    <a href="" className="logo">
                        <span className="logo-name">Word Count</span>
                    </a>
                </header>
        </Headroom>
    );
}

export default Header;