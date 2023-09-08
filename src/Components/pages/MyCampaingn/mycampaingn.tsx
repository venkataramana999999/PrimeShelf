import React, { useState } from "react";
import MainPage1 from "../../body/Mainpage1";
import Footer from "../../common/Footer/footer";
import { useNavigate } from "react-router-dom";
import { withTranslation, WithTranslation } from 'react-i18next';

interface MyCampaignProps  extends WithTranslation {}
const MyCampaign:React.FC<MyCampaignProps> = ({t}:any)=>{
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const dashboardClass = sidebarVisible ? 'dashboard-expanded' : 'dashboard-collapsed';

    const navigate = useNavigate()
    const onCreate = () => {
        navigate("/create-campaign")
    }
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
                                        <h3>{t('myCampaigns')}</h3>
                                    </div>
                                    <div className="col-md-6 text-end">
                                        <label></label>
                                        <button className="btn custom_btn" onClick={onCreate}><i className="fa fa-bullhorn"></i> {t('createCampaign')} </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Container-fluid starts--> */}
                        <div className="container-fluid ">
                            <div className="row">
                                <div className="col-xl-12 col-md-12">
                                  
                                        
                                            <ul className="nav nav-tabs" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <a
                                                        className="nav-link active"
                                                        data-bs-toggle="tab"
                                                        href="#one"
                                                        aria-selected="true"
                                                        role="tab"
                                                    >
                                                        Draft
                                                    </a>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <a
                                                        className="nav-link"
                                                        data-bs-toggle="tab"
                                                        href="#two"
                                                        aria-selected="false"
                                                        tabIndex={-1}
                                                        role="tab"
                                                    >
                                                        Active
                                                    </a>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <a
                                                        className="nav-link"
                                                        data-bs-toggle="tab"
                                                        href="#three"
                                                        aria-selected="false"
                                                        tabIndex={-1}
                                                        role="tab"
                                                    >
                                                        Completed
                                                    </a>
                                                </li>
                                            </ul>
                                        
                                  
                                    {/* <!-- Tab panes --> */}
                                    <div className="tab-content">
                                        <div className="tab-pane active" id="one" role="tabpanel">
                                            <div className="card card-body">
                                                <div className="row text-start">
                                                    <div className="col-md-9">
                                                        <label>Show</label>
                                                        <select name="example_length" aria-controls="examples" style={{ margin: '0 10px', padding: "0 10px", height: "2.7142em", borderColor: "#e6edef", }}>
                                                            <option value={"10"}>10</option>
                                                            <option value={"25"}>25</option>
                                                            <option value={"50"}>50</option>
                                                            <option value={"100"}>100</option>
                                                        </select>
                                                        <label >entries</label>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <label>
                                                            Search:
                                                            <input type="search" aria-controls="example" style={{ height: '37px', border: "1px solid #efefef", marginLeft: "10px" }} />
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="row text-start">
                                                    <div className="col-md-12">
                                                        <table width="100%" className="table table-bordered display">
                                                            <thead >
                                                                <tr style={{ backgroundColor: "#e7e5fd ", }}>
                                                                    <td>S.No</td>
                                                                    <td>Campaign Name</td>
                                                                    <td>Product Category</td>
                                                                    <td>From</td>
                                                                    <td>To</td>
                                                                    <td>Status</td>
                                                                    <td>Details</td>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <td className="dataTables_empty text-center">No data available in table</td>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="two" role="tabpanel">
                                            <div className="card card-body">
                                                <div className="row text-start">
                                                    <div className="col-md-9">
                                                        <label>Show</label>
                                                        <select name="example_length" aria-controls="examples" style={{ margin: '0 10px', padding: "0 10px", height: "2.7142em", borderColor: "#e6edef", }}>
                                                            <option value={"10"}>10</option>
                                                            <option value={"25"}>25</option>
                                                            <option value={"50"}>50</option>
                                                            <option value={"100"}>100</option>
                                                        </select>
                                                        <label >entries</label>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <label>
                                                            Search:
                                                            <input type="search" aria-controls="example" style={{ height: '37px', border: "1px solid #efefef", marginLeft: "10px" }} />
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="row text-start">
                                                    <div className="col-md-12">
                                                        <table width="100%" className="table table-bordered display">
                                                            <thead >
                                                                <tr style={{ backgroundColor: "#e7e5fd ", }}>
                                                                    <td>S.No</td>
                                                                    <td>Campaign Name</td>
                                                                    <td>Product Category</td>
                                                                    <td>From</td>
                                                                    <td>To</td>
                                                                    <td>Status</td>
                                                                    <td>Details</td>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <td className="dataTables_empty text-center">No data available in table</td>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="three" role="tabpanel">
                                            <div className="card card-body">
                                                <div className="row text-start">
                                                    <div className="col-md-12">
                                                        <table width="100%" className="table table-bordered display">
                                                            <thead >
                                                                <tr style={{ backgroundColor: "#e7e5fd ", }}>
                                                                    <td>S.No</td>
                                                                    <td>Campaign Name</td>
                                                                    <td>Product Category</td>
                                                                    <td>From</td>
                                                                    <td>To</td>
                                                                    <td>Status</td>
                                                                    <td>Details</td>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <td className="dataTables_empty text-center">No data available in table</td>
                                                            </tbody>
                                                        </table>
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
    )
}

export default  (withTranslation()(MyCampaign))
