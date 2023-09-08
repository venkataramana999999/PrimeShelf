import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import MainPage1 from "../../body/Mainpage1";

import './../../../CSS/sidebar.css'

interface Sidebar1Props {
  sidebarVisible: boolean;
}

const Sidebar: React.FC<Sidebar1Props> = ({ sidebarVisible,backgroundColor }:any) => {
  return (
    <>
      {/* <MainPage1/> */}
      <div className={`page-wrapper compact-wrapper ${sidebarVisible ? 'show-sidebar' : 'hide-sidebar'}`} id="pageWrapper">
        {/* <div class="page-wrapper compact-wrapper" id="pageWrapper"> */}
        <div className="page-body-wrapper sidebar-icon">
          <header className="main-nav" style={{ marginTop: "-15px" }}>
            <nav>
              <div className="main-navbar">
                <div className="left-arrow" id="left-arrow">
                  <i data-feather="arrow-left"></i>
                </div>
                <div id="mainnav">
                  <ul className="nav-menu custom-scrollbar">
                    <li className="back-btn">
                      <div className="mobile-back text-end">
                        <span>Back</span>
                        <i
                          className="fa fa-angle-right ps-2"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </li>

                    <li className="dropdown">
                      <a className="nav-link menu-title link-nav" href="explore">
                        <i data-feather="layout"></i>
                        <span style={{ fontWeight: "700", fontSize: "15px" }}>
                          Explore Spaces
                        </span>
                      </a>
                    </li>

                    <li className="dropdown">
                      <a className="nav-link menu-title" href="user-details">
                        <i data-feather="users"></i>
                        <span style={{ fontWeight: "700", fontSize: "15px" }}>
                          My Profile
                        </span>
                      </a>
                    </li>

                    <li className="dropdown">
                      <a className="nav-link menu-title" href="cart">
                        <i data-feather="users"></i>
                        <span style={{ fontWeight: "700", fontSize: "15px" }}>
                          My Cart
                        </span>
                      </a>
                      {/* <FontAwesomeIcon icon={faCartShopping} /> */}
                    </li>
                    <li className="dropdown">
                      <a className="nav-link menu-title" href="booking">
                        <i data-feather="users"></i>
                        <span style={{ fontWeight: "700", fontSize: "15px" }}>
                          My Bookings
                        </span>
                      </a>
                    </li>
                    <li className="dropdown">
                      <a className="nav-link menu-title" href="campaign">
                        <i data-feather="users"></i>
                        <span style={{ fontWeight: "700", fontSize: "15px" }}>
                          My Campaigns
                        </span>
                      </a>
                    </li>
                    <li className="dropdown">
                      <a className="nav-link menu-title" href="product-catelouge">
                        <i data-feather="users"></i>
                        <span style={{ fontWeight: "700", fontSize: "15px" }}>
                          Product Catalogue
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="right-arrow" id="right-arrow">
                  <i data-feather="arrow-right"></i>
                </div>
              </div>
            </nav>
          </header>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
