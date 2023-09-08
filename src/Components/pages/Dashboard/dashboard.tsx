import React, { useState } from "react";
import MainPage1 from '../../body/Mainpage1'
import Footer from "../../common/Footer/footer";
import './dashboard.css';
import { withTranslation, WithTranslation } from 'react-i18next';

interface DashboardProps  extends WithTranslation {}
const Dashboard:React.FC<DashboardProps> = ({t}) => {
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
                                            Dashboard /{" "}
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
                                                            <div className="sml_txt text-start">{t('businessName')}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr className="mt-3" />
                                                <div className="col-md-12">
                                                    <div className="d-flex ">
                                                        <div className="mr-3"><img src="assets/images/ic_2.png" /></div>
                                                        <div className="ml-4" style={{ paddingLeft: '25px' }}>
                                                            <div className="store_txt text-start">N. Mallikarjuna </div>
                                                            <div className="sml_txt text-start">{t('primaryContactName')}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="d-flex mt-4">
                                                            <div className="mr-3"><img src="assets/images/ic_3.png" /></div>
                                                            <div className="ml-4" style={{ paddingLeft: '25px' }}>
                                                                <div className="store_txt text-start">mallikarjunakirana@gmail.com </div>
                                                                <div className="sml_txt text-start">{t('primaryEmailId')}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="d-flex mt-4">
                                                            <div className="mr-3"><img src="assets/images/ic_4.png" /></div>
                                                            <div className="ml-4" style={{ paddingLeft: '25px' }}>
                                                                <div className="store_txt text-start">+91 7354789652 </div>
                                                                <div className="sml_txt text-start">{t('primaryContactNumber')}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr className="mt-3" />
                                                <div className="col-md-12">
                                                    <div className="d-flex ">
                                                        <div className="mr-3"><img src="assets/images/ic_2.png" /></div>
                                                        <div className="ml-4" style={{ paddingLeft: '25px' }}>
                                                            <div className="store_txt text-start">K. Ramana </div>
                                                            <div className="sml_txt text-start">{t('secondaryContactName')}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="d-flex mt-4">
                                                            <div className="mr-3"><img src="assets/images/ic_3.png" /></div>
                                                            <div className="ml-4" style={{ paddingLeft: '25px' }}>
                                                                <div className="store_txt text-start">mallikarjunakirana@gmail.com </div>
                                                                <div className="sml_txt text-start">{t('secondaryEmailId')}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="d-flex mt-4">
                                                            <div className="mr-3"><img src="assets/images/ic_4.png" /></div>
                                                            <div className="ml-4" style={{ paddingLeft: '25px' }}>
                                                                <div className="store_txt text-start">+91 7354789652 </div>
                                                                <div className="sml_txt text-start">{t('secondaryContactNumber')}</div>
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
                                                                <div className="sml_txt text-start">{t('pANCardNumber')}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="d-flex mt-4">
                                                            <div className="mr-3"><img src="assets/images/ic_6.png" /></div>
                                                            <div className="ml-4" style={{ paddingLeft: '25px' }}>
                                                                <div className="store_txt text-start">857859632 </div>
                                                                <div className="sml_txt text-start">{t('GSTNumber')}</div>
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

export default (withTranslation()(Dashboard));
