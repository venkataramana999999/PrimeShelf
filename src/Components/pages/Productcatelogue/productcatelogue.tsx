import React, { useState } from "react";
import MainPage1 from "../../body/Mainpage1";
import Footer from "../../common/Footer/footer";
import { useNavigate, useLocation } from "react-router-dom";

interface Record {
    product: string;
    cat: string;
    // Product: string;
    // Category: string;
}

interface Props {
    data: Record[];
}

function ProductCatelouge() {
    const location = useLocation();
    const [sidebarVisible, setSidebarVisible] = useState<boolean>(true);

    const navigate = useNavigate();
    console.log(location.state)
    let  data:any =localStorage.getItem("record")
    data=JSON.parse(data)

    console.log("product", data);

    const createCatalogue = () => {
        navigate("/create-catelouge");
    };

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
                                <div className="row d-flex justify-content-between text-start p-1">
                                    <div className="col-md-12" style={{ border: '2px dotted gray', backgroundColor: 'white' }}>
                                        <div className="row" style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                                            <div className="col-md-7">
                                                <p>You can add Product or update information about a product such as its price, variants and availability from the products page</p>
                                            </div>
                                            <div className="col-md-5 text-end">
                                                <button type="button" className="btn btn-add-prdt" onClick={createCatalogue}>
                                                    <img src="https://app.primeshelf.co/public/assets/images/add-button.svg" width="22" alt="Add Product" />
                                                    &nbsp;&nbsp;Add Product
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mt-5" style={{ textAlign: 'justify' }}>
                                        <h6 style={{ marginTop: '20px', marginLeft: '-10px' }}>Product Catalogue</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ padding: '0px' }}>
                            <div className="card" style={{ padding: '0px', marginTop: '-30px' }}>
                                <div className="card-body p-2">
                                    <table width="100%" className="table table-bordered display">
                                        <thead style={{ color: 'black', fontSize: '12px', fontWeight: '600', textAlign: 'justify', border: "0px solid rgb(230, 237, 239)" }}>
                                            <tr style={{ backgroundColor: "#e7e5fd" }}>
                                                <td style={{ width: "110px", border: "1px solid rgb(230, 237, 239)" }}>Name</td>
                                                <td style={{ width: "110px", border: "1px solid rgb(230, 237, 239)" }}>Category</td>
                                                <td style={{ width: "110px", border: "1px solid rgb(230, 237, 239)", textAlign: "right" }}>Action</td>
                                            </tr>
                                        </thead>


                                        <tbody>
                                            {data?.map((record: Record, index: number) =>
                                                <tr key={index} >
                                                    <td className="text-start" style={{ width: "110px", border: "1px solid rgb(230, 237, 239)" }}>{record?.cat}</td>
                                                    <td className="text-start" style={{ width: "110px", border: "1px solid rgb(230, 237, 239)" }}>{record?.product}</td>
                                                    <td style={{ width: "110px", textAlign: "right", border: "1px solid rgb(230, 237, 239)" }}><button className="btn" style={{ backgroundColor: "rgb(167, 48, 206)", color: 'rgb(255, 255, 255)' }}>view</button></td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ProductCatelouge;
