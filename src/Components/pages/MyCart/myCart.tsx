import React, { useState } from "react";
import MainPage1 from "../../body/Mainpage1"
import Footer from "../../common/Footer/footer";
import './myCart.css'
import { withTranslation, WithTranslation } from 'react-i18next';

interface MyCartProps  extends WithTranslation {}
const MyCart:React.FC<MyCartProps> = ({t}) => {
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
                                <div className="row">
                                    <div className="col-md-12 text-start" style={{marginTop:'-20px'}}>
                                        <h3>{t('myCart')}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Container-fluid starts--> */}
                        <div style={{ padding: '10px',  }}>
                    <div className="card" style={{padding:'10px'}} >
                        <div className="card-body p-0">
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px', marginTop: '20px' }}>
                                <div >
                                    <label>Show</label>
                                    <select name="example_length" aria-controls="examples" style={{ margin: '0 10px', padding: "0 10px", height: "2.7142em", borderColor: "#e6edef", }}>
                                        <option value={"10"}>10</option>
                                        <option value={"25"}>25</option>
                                        <option value={"50"}>50</option>
                                        <option value={"100"}>100</option>
                                    </select>
                                    <label >entries</label>

                                </div>
                                <label >
                                    Search:
                                    <input type="search" aria-controls="example" style={{ height: '37px', border: "1px solid #efefef", marginLeft: "10px" }} />
                                </label>
                            </div>

                            <table width="100%" className="table table-bordered display" style={{ fontSize: "12px" }}>
                                <thead style={{ color: 'black', fontSize: '12px', fontWeight: '700' }}>
                                    <tr style={{ backgroundColor: "#e7e5fd ", }}>
                                        <td style={{ width: "110px" }}>S.No</td>
                                        <td style={{ width: "110px" }}>RackId</td>
                                        <td style={{ width: "110px" }}>Shelf Type</td>
                                        <td style={{ width: "110px" }}>Current Category</td>
                                        <td style={{ width: "110px" }}>Cost Per Month</td>
                                        <td style={{ width: "110px" }}>Remove</td>

                                        <td style={{ width: "110px", marginRight: '10px' }}>
                                            <input type="checkbox" />
                                            Select All</td>


                                    </tr>
                                </thead>

                            </table>
                            <tbody>
                                <td className="dataTables_empty" style={{ border: "1px solid #e6edef", width: '10%', height: '50px' }}>No data available in table</td>
                            </tbody>

                        </div>
                        <div style={{ display: 'flex', marginTop: '15px' }}>
                            <label style={{ marginTop: '3px', paddingLeft: "10px" }}>Showing 0 to 0 of 0 entries</label>
                        </div>
                        <div style={{ display: 'flex', marginTop: '15px', flexDirection: 'column', textAlign: 'justify' }}>
                            <div>
                                <h6 style={{ marginTop: '3px', paddingLeft: "10px", color: 'gray' }}>{t('selectCampaign')}<span style={{ color: 'red' }}>*</span></h6>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <select name="example_length" aria-controls="examples" style={{ marginLeft: '10px', height: '30px', width: '30%', borderColor: "#d9c5c5", marginBottom: "20px", color: "#717171" }}>
                                    <option value={"10"} style={{ color: "#717171 !important" }}>Select Campaign</option>

                                </select>
                                <div className="col-md-3" style={{ marginLeft: '20px' }}>
                                    <label></label>
                                    <button className="btn custom_btn " style={{ width: '80%', height: '70px' }}><i className="fa fa-bullhorn"></i> {t('createCampaignButton')} </button>
                                </div>

                            </div>
                            <hr className="mt-3" style={{ margin: '10px' }}></hr>
                            <button type="button" className="btn btn-success ProceedToBooking" style={{ width: '25%', height: '50px', marginLeft: '10px', marginBottom: '10px', marginTop: '20px' }}> {t('proceedToBookingButton')}</button>
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

export default (withTranslation()(MyCart))