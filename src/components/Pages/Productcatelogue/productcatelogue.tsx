import React, { useState } from "react";
import MainPage1 from "../../body/Mainpage1";
import Footer from "../../Common/Footer/footer";
import { useNavigate } from "react-router-dom";

function ProductCatelouge() {
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const navigate = useNavigate()

    const createCatalogue = () =>{
        navigate("/create-catelouge")
    }

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const dashboardClass = sidebarVisible ? 'dashboard-expanded' : 'dashboard-collapsed';
    return (
        <>
            <MainPage1 sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} backgroundColor={""} textClass={""} />
            <div className={`page-wrapper compact-wrapper ${dashboardClass}`} id="pageWrapper">
                <div className="page-body-wrapper sidebar-icon">
                    <div className="page-body" >
                        <div className="container-fluid">
                            <div className="page-header">
                                <div className="row d-flex justify-content-between text-start p-1">
                                    <div className="col-md-12" style={{ border: '2px dotted gray',backgroundColor:'white' }}>
                                        <div className="row " style={{display:'flex',justifyContent:'center',marginTop:'10px'}}>
                                            <div className="col-md-7">
                                                <p>You can add Product or update information about a product such as its price, variants and availability from the products page</p>
                                            </div>
                                            <div className="col-md-5 text-end">
                                                <button type="button" className="btn custom_btn" onClick={createCatalogue}><i className="fa fa-plus-square"></i>&nbsp;&nbsp;Add Product</button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div class="col-md-6 mt-5" style={{textAlign:'justify'}}> */}
                                        <h6 style={{marginTop:'20px',marginLeft:'-10px'}}>Product Catalogue</h6>
                                    {/* </div> */}
                                </div>
                                
                            </div>
                        </div>

                        <div style={{ padding: '0px', }}>
                            <div className="card" style={{ padding: '0px',marginTop:'-30px' }}>
                                <div className="card-body p-2">
                                  

                                    <table width="100%" className="table table-bordered display"  >
                                        <thead style={{ color: 'black', fontSize: '12px', fontWeight: '600',textAlign:'justify' }}>
                                            <tr style={{ backgroundColor: "#e7e5fd ", }}>
                                                <td style={{ width: "110px" }}>Name</td>
                                                <td style={{ width: "110px" }}>Category</td>
                                                <td style={{ width: "110px" }}>Action</td>
                                                
                                            </tr>
                                        </thead>

                                    </table>
                                    <tbody>
                                        <td className="dataTables_empty" style={{ border: "1px solid #e6edef", width: '10%', height: '50px' }}>No Records Found</td>
                                    </tbody>

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

export default ProductCatelouge
