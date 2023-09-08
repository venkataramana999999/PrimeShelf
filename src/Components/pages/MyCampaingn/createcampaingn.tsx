import React, { useState } from "react";
import MainPage1 from '../../body/Mainpage1'
import Footer from "../../common/Footer/footer";
import { withTranslation, WithTranslation } from 'react-i18next';

interface CampaignProps  extends WithTranslation {}
const CreateCampaign:React.FC<CampaignProps> =({t}) =>{
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
                                <div className="row d-flex justify-content-between text-start">
                                    <div className="col-md-6">
                                        <h3>{t('createCampaign')}</h3>
                                        <a>{t('dashboard')} / <span>{t('createCampaign')}</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container-fluid" style={{display:'flex',textAlign:'justify'}}>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="card">

                                        <div className="card-body">


                                            <div className="row">

                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor=" ">{t('campaignName')} <span className="mand_error">*</span></label>
                                                        <input className="form-control" id=" " type="text" placeholder=" " />
                                                    </div>
                                                </div>


                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor=" ">{t('productCategory')}<span className="mand_error">*</span></label>
                                                        <select className="form-select">
                                                            <option>-select-</option>
                                                            <option>item</option>
                                                            <option>item</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor=" ">{t('products')} <span className="mand_error">*</span></label>
                                                        <input className="form-control" id=" " type="text" placeholder=" " />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor=" ">{t('startDate')}<span className="mand_error">*</span></label>
                                                        <div className="input-group">
                                                            <input className="datepicker-here form-control digits" type="text" data-language="en" />
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor=" ">{t('noOfMonths')} <span className="mand_error">*</span></label>
                                                        <input className="form-control" id=" " type="text" placeholder=" " />
                                                    </div>
                                                </div>


                                                <div className="col-md-12">
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor=" ">{t('description')}<span className="mand_error">*</span>  </label>

                                                        <textarea className="form-control" id=" " placeholder=" "></textarea>
                                                    </div>
                                                </div>

                                                <div className="col-md-12">
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor=" ">{t('objective')} <span className="mand_error">*</span> </label>
                                                        <textarea className="form-control" id=" " placeholder=" "></textarea>
                                                    </div>
                                                </div>



                                            </div>


                                            <div className="row justify-content-end">
                                                <div className="col-md-3 text-end">
                                                    <button className="btn   custom_btn" data-bs-original-title="" title=""><i className="fa fa-bullhorn"></i> {t('saveCampaignButton')}</button>
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
    )
}

export default  (withTranslation()(CreateCampaign))
