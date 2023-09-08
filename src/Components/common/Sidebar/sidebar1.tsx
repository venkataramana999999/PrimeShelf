import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import './sidebar.css';
import { NavLink } from "react-router-dom";
import { withTranslation, WithTranslation } from 'react-i18next';
interface Sidebar1Props {
  sidebarVisible: boolean;
}

interface Sidebar1Props  extends WithTranslation {}
const Sidebar1: React.FC<Sidebar1Props> = ({ sidebarVisible,t }: any) => {
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

                      <NavLink
                        className="nav-link menu-link"
                        to="/explore-space"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarDashboards"
                      // activeClassName="active"
                      >
                        <i className="fa fa-tachometer-alt"></i>{' '}
                        <span data-key="t-dashboards"> {t('exploreSpace')}</span>
                      </NavLink>
                    </li>

                    <li className="dropdown">

                      <NavLink
                        className="nav-link menu-link"
                        to="/user-details"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarDashboards"
                       
                      >
                        <i className="fa fa-tachometer-alt"></i>{' '}
                        <span data-key="t-dashboards">{t('myProfile')}</span>
                      </NavLink>
                    </li>

                    <li className="dropdown">

                      <NavLink
                        className="nav-link menu-link"
                        to="/cart"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarDashboards"
                        // activeClassName="active"
                      >
                        <i className="fa fa-tachometer-alt"></i>{' '}
                        <span data-key="t-dashboards">  {t('myCart')}</span>
                      </NavLink>
                      {/* <FontAwesomeIcon icon={faCartShopping} /> */}
                    </li>
                    <li className="dropdown">

                      <NavLink
                        className="nav-link menu-link"
                        to="/booking"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarDashboards"
                        
                      >
                        <i className="fa fa-tachometer-alt"></i>{' '}
                        <span data-key="t-dashboards">{t('myBookings')}</span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link menu-link"
                        to="/campaign"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarDashboards"
                       
                      >
                        <i className="fa fa-tachometer-alt"></i>{' '}
                        <span data-key="t-dashboards">{t('myCampaigns')}</span>
                      </NavLink>
                    </li>

                    <li className="dropdown">

                      <NavLink
                        className="nav-link menu-link"
                        to="/product-catelouge"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarDashboards"
                     
                      >
                        <i className="fa fa-tachometer-alt"></i>{' '}
                        <span data-key="t-dashboards"> {t('productCatalogue')}</span>
                      </NavLink>
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

export default (withTranslation()(Sidebar1));
