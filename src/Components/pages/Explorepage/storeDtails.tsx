import React, { useState } from "react";
import MainPage1 from "../../body/Mainpage1";
import Footer from "../../common/Footer/footer";
import { useNavigate, useLocation } from "react-router-dom";
import './datatable.css';
import DataTable from "react-data-table-component";
import DialogModal from "./dialog";

interface StoreData {
    shelf_id: string;
    type_name: string;
    rackid: string;
    category_name: string;
}

const StoreDetails: React.FC = () => {
    const [sidebarVisible, setSidebarVisible] = useState<boolean>(true);
    const navigate = useNavigate();
    const location = useLocation();
    const [open, setOpen] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isModalOpen2, setIsModalOpen2] = useState<boolean>(false);
    const receivedData: any = location.state;
    console.log(receivedData);
    const data: StoreData[] = [];
    data.push(receivedData);
    console.log(data);

    const backPage = () => {
        navigate("/explore-space", { state: receivedData });
    };

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const openModal1 = () => {
        setIsModalOpen2(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setIsModalOpen2(false);
    };

    const dashboardClass = sidebarVisible ? 'dashboard-expanded' : 'dashboard-collapsed';

    const customStyles = {
        rows: {
            style: {
                // override the row height
                border: '0.1px solid #ddd',
                marginRight: '-500px',
            },
        },
        headCells: {
            style: {
                paddingLeft: '8px', // override the cell padding for head cells
                paddingRight: '8px',
                color: 'black',
                fontSize: '14px',
                backgroundColor: "#e7e5fd",
                fontFamily: 'Poppins',
                fontWeight: '600',

                // fontSize:'10px'
                border: '0.1px solid #ddd',
            },
        },
        cells: {
            style: {
                paddingLeft: '8px', // override the cell padding for data cells
                paddingRight: '8px',
                border: '0.1px solid #ddd',
            },
        },
    };

    const columns:any = [
        {
            name: 'Shelf id',
            selector: 'shelf_id',
            sortable: true,
        },
        {
            name: 'Shelf type',
            selector: 'type_name',
            sortable: true,
        },
        {
            name: 'Rack id',
            selector: 'rackid',
            sortable: true,
        },
        {
            name: 'Defined category',
            selector: 'category_name',
            sortable: true,
        },
        {
            name: 'Details',
            cell: (row: StoreData) => (
                <div>
                    <button
                        className="btn btn-xs my_btn_5 text-white my_btntt"
                        // onClick={() => onShowDetails(row)}
                    >
                        View
                    </button>
                </div>
            ),
        },
    ];

    return (
        <>
            <MainPage1 sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} backgroundColor={""} textClass={""} />
            <div className={`page-wrapper compact-wrapper ${dashboardClass}`} id="pageWrapper">
                <div className="page-body-wrapper sidebar-icon">
                    <div className="page-body">
                        <div className="container-fluid ">
                            <div className="row">
                                <div className="col-md-12 shadow card mb-0 dashed_bor">
                                    <div>
                                        <div className="row align-items-center lit_pk" style={{ display: 'flex', justifyContent: 'space-between', textAlign: 'justify' }}>
                                            <div className="col-md-1">
                                                <img src="assets/images/store-prime.png" width="50" alt="Store Logo" />
                                            </div>
                                            <div className="col-md-8 pl-0 sm_pdr">
                                                <h6 style={{ margin: "0" }}>{receivedData?.store_name}</h6>
                                                <p style={{ margin: "0", fontSize: "13px" }}><i className="fa fa-map-marker" aria-hidden="true"></i> <span>{receivedData?.area_name + "," + receivedData?.city_name}</span></p>
                                            </div>
                                            <div className="col-md-3 text-center txt_srt">
                                                <button className="btn btn-search-result" onClick={backPage}> Back to search results <img src="assets/images/back-arrow.svg" width="20" alt="Back Arrow" />  </button>
                                            </div>
                                        </div>
                                        <div className="row align-items-center justify-content-between p-2">
                                            <div className="col-md-9 pl-0 brf_left mb_st" style={{ textAlign: 'justify' }}>
                                                <p className="mb-0 sm_pdr">Store Address</p>
                                                <span className="lh-base ">{receivedData?.geo_tag}</span>
                                            </div>
                                            <div className="col-md-1 store-add lien_hieg">
                                                <button type="button" style={{ border: 'none', backgroundColor: 'transparent' }} data-toggle="modal" data-target="#exampleModal">
                                                    <img src="assets/images/detail.svg" width="30" alt="Detail Icon" />
                                                    <span onClick={openModal}> Store page  </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12 mt-3 p-0">
                                    <div className="card">
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px', marginTop: '20px' }}>
                                            <div style={{ paddingLeft: '10px' }}>
                                                <label>Show</label>
                                                <select name="example_length" aria-controls="examples" style={{ margin: '0 10px', padding: "0 10px", height: "2.7142em", borderColor: "#e6edef", }}>
                                                    <option value={"10"}>10</option>
                                                    <option value={"25"}>25</option>
                                                    <option value={"50"}>50</option>
                                                    <option value={"100"}>100</option>
                                                </select>
                                                <label >entries</label>
                                            </div>
                                            <label style={{ marginRight: '10px' }}>
                                                Search:
                                                <input type="search" aria-controls="example" style={{ height: '37px', border: "1px solid #efefef", marginLeft: "10px" }} />
                                            </label>
                                        </div>
                                        <div className="card-body dark_tab_blk p-0">
                                            <DataTable
                                                customStyles={customStyles}
                                                columns={columns}
                                                data={data}
                                                pagination
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <DialogModal
                                isOpen={isModalOpen}
                                onClose={closeModal}
                                title="Example Dialog Modal"
                                content="This is the content of the dialog modal."
                            />
                            {/* <RackModal
                                isOpen={isModalOpen2}
                                onClose={closeModal}
                                title="Example Dialog Modal"
                                content="This is the content of the dialog modal."
                            /> */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default StoreDetails;
