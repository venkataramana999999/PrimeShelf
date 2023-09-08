import React, { useState } from "react";
import MainPage1 from "../../body/Mainpage";
import Footer from "../../Common/Footer/footer";

const MyBooking = () => {
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
                    <div className="page-body" >
                        <div className="container-fluid">
                            <div className="page-header">
                                <div className="row">
                                    <div className="col-md-12 text-start" style={{marginTop:'-20px'}}>
                                        <h3 >My Bookings </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Container-fluid starts--> */}
                        <div style={{ padding: '10px',marginTop:"-10px" }}>
                            <div className="card"  style={{padding:'10px'}}>
                                <div className="card-body p-2">
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

                                    <table width="100%" className="table table-bordered display" >
                                        <thead style={{ color: 'black', fontSize: '12px', fontWeight: '600' }}>
                                            <tr style={{ backgroundColor: "#e7e5fd ", }}>
                                                <td style={{ width: "110px" }}>S.No</td>
                                                <td style={{ width: "110px" }}>Booking Id</td>
                                                <td style={{ width: "110px" }}>RackId</td>
                                                <td style={{ width: "110px" }}>From-To</td>

                                                <td style={{ width: "110px" }}>Cost Per Month</td>
                                                <td style={{ width: "110px" }}>Total Booking Cost</td>
                                                <td style={{ width: "110px" }}>Status</td>

                                                <td style={{ width: "110px", marginRight: '10px' }}>
                                                    Details</td>


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
                               

                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default MyBooking