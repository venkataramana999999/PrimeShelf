import React, { useState } from "react";
import MainPage1 from "../../body/Mainpage1";
import Footer from "../../Common/Footer/footer";

 

import '../../../CSS/dashboard.css'; // Correct import path for dashboard.css



const Dashboard = () => {
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const dashboardClass = sidebarVisible ? 'dashboard-expanded' : 'dashboard-collapsed';

    return (
        <>
            <MainPage1 sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} backgroundColor={""} textClass={""} />
            <div className={`page-wrapper compact-wrapper ${dashboardClass}`} id="pageWrapper">
                <div className="page-body-wrapper sidebar-icon">
                    <div className="page-body">
                        <div className="container-fluid">
                            <div className="page-header">
                                <div className="row text-start" style={{marginTop:'-20px'}}>
                                    <div className="col-md-12">
                                        <h5>Your Details</h5>
                                        <h6>
                                            Dashboard /{" "}Name
                                            <span>
                                                Your Details
                                            </span>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid ">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="d-flex ">
                                                        <div className="mr-3"><img src="assets/images/ic_1.png" /></div>
                                                        <div className="ml-4" style={{ paddingLeft: '25px' }}>
                                                            <div className="store_txt text-start">Sri Mallikarjuna Kirana & General Store </div>
                                                            <div className="sml_txt text-start">Bussiness Name</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr className="mt-3" />
                                                <div className="col-md-12">
                                                    <div className="d-flex ">
                                                        <div className="mr-3"><img src="assets/images/ic_2.png" /></div>
                                                        <div className="ml-4" style={{ paddingLeft: '25px' }}>
                                                            <div className="store_txt text-start">N. Mallikarjuna </div>
                                                            <div className="sml_txt text-start">Primary Contact Name</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="d-flex mt-4">
                                                            <div className="mr-3"><img src="assets/images/ic_3.png" /></div>
                                                            <div className="ml-4" style={{ paddingLeft: '25px' }}>
                                                                <div className="store_txt text-start">mallikarjunakirana@gmail.com </div>
                                                                <div className="sml_txt text-start">Primary email id</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="d-flex mt-4">
                                                            <div className="mr-3"><img src="assets/images/ic_4.png" /></div>
                                                            <div className="ml-4" style={{ paddingLeft: '25px' }}>
                                                                <div className="store_txt text-start">+91 7354789652 </div>
                                                                <div className="sml_txt text-start">Primary Contact Number</div>
                                                            </div>
                                                        </div>
                                                    </div>Name
                                                </div>
                                                <hr className="mt-3" />
                                                <div className="col-md-12">
                                                    <div className="d-flex ">
                                                        <div className="mr-3"><img src="assets/images/ic_2.png" /></div>
                                                        <div className="ml-4" style={{ paddingLeft: '25px' }}>
                                                            <div className="store_txt text-start">K. Ramana </div>
                                                            <div className="sml_txt text-start">Secondary Contact Name</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">Name
                                                    <div className="col-md-6">
                                                        <div className="d-flex mt-4">
                                                            <div className="mr-3"><img src="assets/images/ic_3.png" /></div>
                                                            <div className="ml-4" style={{ paddingLeft: '25px' }}>
                                                                <div className="store_txt text-start">mallikarjunakirana@gmail.com </div>
                                                                <div className="sml_txt text-start">Secondary email id</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="d-flex mt-4">
                                                            <div className="mr-3"><img src="assets/images/ic_4.png" /></div>
                                                            <div className="ml-4" style={{ paddingLeft: '25px' }}>
                                                                <div className="store_txt text-start">+91 7354789652 </div>
                                                                <div className="sml_txt text-start">Secondary Contact Number</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr className="mt-3" />
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="d-flex mt-4">
                                                            <div className="mr-3"><img src="assets/images/ic_5.png" /></div>
                                                            <div className="ml-4" style={{ paddingLeft: '25px' }}>
                                                                <div className="store_txt text-start">CSEPP7721T </div>
                                                                <div className="sml_txt text-start">PAN Card Number</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="d-flex mt-4">
                                                            <div className="mr-3"><img src="assets/images/ic_6.png" /></div>
                                                            <div className="ml-4" style={{ paddingLeft: '25px' }}>
                                                                <div className="store_txt text-start">857859632 </div>
                                                                <div className="sml_txt text-start">GST NUmber</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Dashboard;
