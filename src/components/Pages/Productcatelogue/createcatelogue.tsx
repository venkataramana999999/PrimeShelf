import React, { useState } from "react";
import MainPage1 from "../../body/Mainpage1";
import Footer from "../../Common/Footer/footer";

function CreateCatalogue() {
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
                                        <h5>Add Product</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container-fluid" style={{ display: 'flex', textAlign: 'justify', marginTop: '-20px' }}>
                            <div className="row" style={{width:'100%' }}>
                                <div className="col-sm-12"  >
                                    <div className="card" style={{ border: '1.3px dotted gray'}}>

                                        <div className="card-body"  >


                                            <div className="row">

                                                <div className="col-md-4" style={{ marginBottom: '15px' }}>
                                                    <div className="mb-3">
                                                        <label className="form-label"> Select Category</label>
                                                        <select className="form-select">
                                                            <option>-Select Category</option>
                                                            <option>Any</option>
                                                            <option>Skin Care</option>
                                                            <option>Chocaltes</option>
                                                            <option>Perfumes</option>
                                                            <option>Pooja Items </option>
                                                            <option>Confectionary</option>
                                                            <option>Toiletries</option>
                                                            <option>Untensils</option>
                                                            <option>Food Grains</option>
                                                            <option>Home Decor items</option>
                                                            <option>Fast Food Items</option>
                                                        </select>
                                                    </div>
                                                    {/* <small>(Pre-fills search parameters based on campaign details)</small> */}
                                                </div>
                                               
                                                <div className="col-md-4">
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor=" ">Product Name </label>
                                                        <input className="form-control" id=" " type="text" placeholder=" " />
                                                    </div>
                                                </div>
                                             

                                                <div className="col-md-12">
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor=" ">Product Description<span className="mand_error">*</span>  </label>

                                                        <textarea className="form-control" id=" " placeholder=" " rows={5}></textarea>
                                                    </div>
                                                </div>

                                               


                                            </div>


                                            <div className="row justify-content-end">
                                                <div className="col-md-3 text-end">
                                                    <button className="btn   custom_btn" data-bs-original-title="" title=""><i className="fa fa-bullhorn"></i> Save Campaign </button>
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

export default CreateCatalogue;