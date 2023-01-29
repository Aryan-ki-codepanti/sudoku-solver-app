import React from "react";
import "./header.css";
const Header = () => {
    return (
        <div className="Header">
            <div className="header-left">
                <div className="box opacity-30"></div>
                <div className="box opacity-30"></div>
                <div className="box opacity-30"></div>
                <div className="box opacity-10"></div>
                <div className="box opacity-10"></div>
                <div className="box opacity-5 last"></div>
            </div>

            <div className="container">
                <h1>Sudoku</h1>
            </div>
            <div className="header-right">
                <div className="box opacity-30"></div>
                <div className="box opacity-30"></div>
                <div className="box opacity-30"></div>
                <div className="box opacity-30"></div>
                <div className="box opacity-10"></div>
                <div className="box opacity-10"></div>
                <div className="box opacity-10"></div>
                <div className="box opacity-5 last-a"></div>
                <div className="box opacity-5 last-b"></div>
            </div>
        </div>
    );
};

export default Header;
