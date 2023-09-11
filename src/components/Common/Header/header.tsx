import React, { useState } from "react";
import './../../../CSS/header.css'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
    toggleSidebar: () => void;
    toggleBackgroundColor: () => void;
    backgroundColor: string;
    textClass: string;
}

const Header: React.FC<HeaderProps> = ({
    toggleSidebar,
    toggleBackgroundColor,
    backgroundColor,
    textClass
}) => {

    // Day/Night Icon change
    const [mode, setMode] = useState("day");
    const toggleMode = () => {
        setMode(mode === "day" ? "night" : "day");
    };
    const modeIcon = mode === "day" ? '' : '';

    const iconstyle: React.CSSProperties = {
        color: mode === "day" ? "#000" : "#fff"
    }

    return (
        <>
            <div className="page-wrapper compact-wrapper" id="pageWrapper" >
                <div className="page-main-header">
                    <div className="main-header-right row m-0" style={{ height: "74px", }}>
                        <div className="main-header-left" style={{ height: "inherit" }}>
                            <div className="logo-wrapper">
                                <a href="#">
                                    <img
                                        className="img-fluid"
                                        src="/assets/images/logo/logo.png"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div className="dark-logo-wrapper">
                                <a href="#">
                                    <img
                                        className="img-fluid"
                                        src="/assets/images/logo/dark-logo.png"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div className="toggle-sidebar" onClick={toggleSidebar}>
                                <svg
                                    width="25"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-align-center status_toggle middle"
                                    id="sidebar-toggle"
                                    // checked={true}
                                >
                                    <line x1="18" y1="10" x2="6" y2="10"></line>
                                    <line x1="21" y1="6" x2="3" y2="6"></line>
                                    <line x1="21" y1="14" x2="3" y2="14"></line>
                                    <line x1="18" y1="18" x2="6" y2="18"></line>
                                </svg>
                            </div>
                        </div>
                        <div className="nav-right col pull-right right-menu p-0" style={{ backgroundColor: backgroundColor }}>
                            <ul className="nav-menus">
                                <li>
                                    {" "}
                                    <div className="mode" onClick={() => {
                                        toggleMode();
                                        toggleBackgroundColor();
                                    }}>
                                        {/* <FontAwesomeIcon icon={modeIcon} style={iconstyle} /> */}
                                    </div>
                                </li>
                                <li className="onhover-dropdown p-0">
                                    <button className="btn btn-primary-light" type="button">
                                        <a href="login_two.html">
                                            <i data-feather="log-out"></i>Log out
                                        </a>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="d-lg-none mobile-toggle pull-right w-auto">
                            <i data-feather="more-horizontal"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
