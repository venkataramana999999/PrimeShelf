import React, { useState, FormEvent, ChangeEvent, useEffect } from "react";
import MainPage1 from "../../body/Mainpage1";
import { useNavigate } from "react-router-dom";
//import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import DataTable from 'react-data-table-component';
import Header from "../../common/Header/header";
import Slider from "@mui/material/Slider";

interface ExploreSpaceProps { }

interface Item {
    value: number;

}

// Assuming 'showData' is an array of 'Item'

const ExploreSpace: React.FC<ExploreSpaceProps> = () => {

    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [backgroundColor, setBackgroundColor] = useState("#fff");
    // const [changeProductCategory, setChangeProductCategory] = useState<string>("");
    const [createToDate, setCreateToDate] = useState<string>("");
    const [showData, setShowData] = useState<any[]>([]);
    // const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [mapVisible, setMapVisible] = useState(false);
    const [ShowSidebar, setShowSidebar] = useState(true);
    const [showContent, setShowContent] = useState<any[]>([]);
    const [searchData, setSearchData] = useState('')

    const [changeProductCategory, setChangeProductCategory] = useState<string>("");
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [footfalls_Range, setFootfalls_Range] = React.useState([0, 15000]);
    const [price, setPrice] = React.useState([0, 30000]);
    const [store_size, setStore_size] = React.useState([0, 10000]);
    const [stateid, setStateid] = useState('');
    const [city, setCity] = useState([]);
    const [cityid, setCityid] = useState('');

    const searchResults = require('../../JSON/Search.json')
    const dropDown = require('../../JSON/Dropdown.json')
    const Statesdata = require('./../../../configurations/Statesdata.json')
    const Spaces = require('./../../../configurations/Spaces.json')
    const filterData = []
    console.log(Spaces);

    const handleFootfalls = (event: any, newValue: any) => {
        setFootfalls_Range(newValue);
    };

    const handlePrice = (event: any, newValue: any) => {
        setPrice(newValue);
    };

    const handleStore = (event: any, newValue: any) => {
        setStore_size(newValue);
    };
    const toggleBackgroundColor = () => {
        setBackgroundColor(backgroundColor === "#fff" ? "#343a40" : "#fff");
    };

    const textClass = backgroundColor === "#fff" ? 'original-color' : 'color-changed';

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const dashboardClass = sidebarVisible ? 'dashboard-expanded' : 'dashboard-collapsed';

    const navigate = useNavigate();

    const onShowDetails = (row: any) => {
        navigate("/store-details", { state: row });

    };

    const toggleMapView = () => {
        setMapVisible(prevMapVisible => !prevMapVisible);
    };

    const onCreate = () => {
        const mapItem: any = [];
        searchResults.map((data: any) => {
            if (changeProductCategory == data.current_category) {
                mapItem.push(data)
            }
        })
        setShowData(mapItem)
    }


    const validateForm = () => {
        const validationErrors: { [key: string]: string } = {};

        if (!changeProductCategory) {
            validationErrors.changeProductCategory = "Product category is required.";
        }
        if (!createToDate) {
            validationErrors.createToDate = " From date is required";
        }
        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0;
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            setShowSidebar(false);
            onCreate();
            // Form validation successful, continue with submission
            console.log("Form is valid, submitting...");
            // Add your submission logic here
        } else {
            console.log("Form is not valid, please correct errors.");
        }
    };




    const onChangeProduct = (e: ChangeEvent<HTMLSelectElement>) => {
        setChangeProductCategory(e.target.value);
        setErrors({ ...errors, changeProductCategory: '' });
    };



    const toDate = (e: ChangeEvent<HTMLInputElement>) => {
        setCreateToDate(e.target.value);
    };

    const onReset = () => {
        // changeProductCategory('')
    }

    const min_Footfalls = footfalls_Range[0]
    const max_Footfalls = footfalls_Range[1]

    const min_Price = price[0]
    const max_Price = price[1]

    const min_Storesize = store_size[0]
    const max_Storesize = store_size[1]

    let data = showData.filter((i: any) => i.projected_footfall_per_month >= min_Footfalls && i.projected_footfall_per_month <= max_Footfalls
        && i.costper_month >= min_Price && i.costper_month <= max_Price
        && i.store_area_size >= min_Storesize && i.store_area_size <= max_Storesize)



    const customStyles = {
        rows: {
            style: {
                border: '0.1px solid #ddd',
                marginRight: '-500px',
            },
        },
        headCells: {
            style: {
                paddingLeft: '8px',
                paddingRight: '8px',
                color: 'black',
                fontSize: '14px',
                backgroundColor: "#e7e5fd",
                fontFamily: 'Poppins',
                fontWeight: '600',
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
    }
    const columns: any = [
        {
            name: 'S.No',
            selector: 'sno',
            sortable: true,
            format: (_row: any, rowIndex: number) => rowIndex + 1,
        },
        {
            name: 'Store Name',
            selector: 'store_name',
            sortable: true,
        },
        {
            name: 'Location',
            selector: 'area_name',
            sortable: true,
        },
        {
            name: 'City',
            selector: 'city_name',
            sortable: true,
        },

        {
            name: 'Store Size (Sft)',
            selector: 'store_area_size',
            sortable: true,
        },
        {
            name: 'Available Spaces',
            selector: 'availablespace',
            sortable: true,
        },
        {
            name: 'Footfalls',
            selector: 'projected_footfall_per_month',
            sortable: true,
        },
        {
            name: 'Action',
            cell: (row: any) => (
                <div>
                    <button
                        className="btn btn-xs my_btn_5 text-white my_btntt"
                        onClick={() => onShowDetails(row)}
                    >
                        View
                    </button>
                </div>
            ),
        },
    ];

    const handleSearch = (e: any) => {
        const searchValue = e.target.value
        setSearchData(searchValue)
    }

    const filteredReviews = showData.filter((review) =>
        review.city_name.toLowerCase().includes(searchData.toLowerCase()),
    )

    const Price_marks = [
        { value: 0, label: "0" },
        { value: 7500, label: "7500" },
        { value: 15000, label: "15000" },
        { value: 22500, label: "22500" },
        { value: 30000, label: "30000" }
    ];
    const Footfalls_marks = [
        { value: 0, label: "0" },
        { value: 3750, label: "3750" },
        { value: 7500, label: "7500" },
        { value: 11250, label: "11250" },
        { value: 15000, label: "15000" }
    ];
    const Storesize_marks = [
        { value: 0, label: "0" },
        { value: 2500, label: "2500" },
        { value: 5000, label: "5000" },
        { value: 7500, label: "7500" },
        { value: 10000, label: "10 000" }
    ];

    const handlestate = (e: any) => {
        const getstateid = e.target.value;
        //console.log(getstateid);
        const getcitiesdata = Statesdata.find((state: { state_id: any; }) => state.state_id === getstateid).cities;
        setCity(getcitiesdata);
    }

    // const handleSpace =(e:any)=>{
    //     const getspaces = e.target.value;
    // }

    return (
        <>
            {ShowSidebar ?
                <MainPage1
                    sidebarVisible={sidebarVisible}
                    toggleSidebar={toggleSidebar}
                    backgroundColor={backgroundColor}

                    textClass={textClass}
                />
                :
                <div className="page-wrapper compact-wrapper" id="pageWrapper">
                    <Header toggleSidebar={toggleSidebar} toggleBackgroundColor={function (): void {
                        throw new Error("Function not implemented.");
                    }} backgroundColor={""} textClass={""} />
                    <div className="page-body-wrapper sidebar-icon">
                        <header className={`main-nav ${sidebarVisible ? 'show-sidebar' : 'hide-sidebar'}`}>
                            <nav>
                                <div className="main-navbar">
                                    <div className="left-arrow" id="left-arrow">
                                        <i data-feather="arrow-left"></i>
                                    </div>
                                    <div id="mainnav">
                                        <ul className="nav-menu custom-scrollbar">
                                            <div className="job-sidebar">
                                                <div className="job-left-aside custom-scrollbar">
                                                    <div
                                                        className="default-according style-1 faq-accordion job-accordion"
                                                        id="accordionoc"
                                                    >
                                                        <div className="row">
                                                            <div className="col-xl-12">
                                                                <div className="card mb-2">
                                                                    <div className="card-header cardmn_pad filt_bgcol">
                                                                        <h5 className="mb-0 p-0">
                                                                            <button className="btn btn-link ps-0" data-bs-toggle="collapse" data-bs-target="#collapseicon_filer3" aria-expanded="true" aria-controls="collapseicon2">Type of Space</button>

                                                                        </h5>
                                                                    </div>
                                                                    <div className="collapse show" id="collapseicon_filer3" data-parent="#collapseicon_filer3" aria-labelledby="collapseicon2">
                                                                        <div className="card-body animate-chk">

                                                                            {Spaces.map((space: any, index: any) => {
                                                                                return (
                                                                                    <div style={{ display: "flex" }}>
                                                                                        <label className="d-block" key={space.value}>
                                                                                            <input
                                                                                             className="checkbox_animated" 
                                                                                                type="checkbox"
                                                                                                value={space.value}
                                                                                            />
                                                                                            {space.name}
                                                                                        </label>
                                                                                    </div>
                                                                                )
                                                                            })}

                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* {showContent &&( */}
                                                            <><div className="col-xl-12">
                                                                <div className="card mb-2">
                                                                    <div className="card-header cardmn_pad filt_bgcol">
                                                                        <h5 className="mb-0 p-0">
                                                                            <button className="btn btn-link ps-0" data-bs-toggle="collapse" data-bs-target="#collapseicon_filer5" aria-expanded="true" aria-controls="collapseicon4">Price</button>
                                                                        </h5>
                                                                        <div className="collapse show" id="collapseicon_filer5" data-parent="#collapseicon_filer5" aria-labelledby="collapseicon4">
                                                                            <div className="card-body animate-chk">
                                                                                <div className="form-group row mb-0">
                                                                                    <div className="col-xl-12">
                                                                                        <Slider
                                                                                            aria-label="range-slider"
                                                                                            defaultValue={0}
                                                                                            step={1}
                                                                                            marks={Price_marks}
                                                                                            min={0}
                                                                                            max={30000}
                                                                                            valueLabelDisplay="auto"

                                                                                            onChange={handlePrice}
                                                                                            value={price}
                                                                                        />
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div><div className="col-xl-12">
                                                                    <div className="card mb-2">
                                                                        <div className="card-header cardmn_pad filt_bgcol">
                                                                            <h5 className="mb-0 p-0">

                                                                                <button className="btn btn-link ps-0" data-bs-toggle="collapse" data-bs-target="#collapseicon_filer6" aria-expanded="true" aria-controls="collapseicon4">No of footfalls per month</button>

                                                                            </h5>
                                                                        </div>

                                                                        <div className="collapse show" id="collapseicon_filer6" data-parent="#collapseicon_filer6" aria-labelledby="collapseicon4">
                                                                            <div className="card-body animate-chk">


                                                                                <div className="form-group row mb-0">

                                                                                    <div className="col-xl-12">
                                                                                        <Slider
                                                                                            aria-label="range-slider"
                                                                                            defaultValue={0}
                                                                                            step={1}
                                                                                            marks={Footfalls_marks}
                                                                                            min={0}
                                                                                            max={15000}
                                                                                            valueLabelDisplay="auto"
                                                                                            onChange={handleFootfalls}
                                                                                            value={footfalls_Range}
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </div><div className="col-xl-12">
                                                                    <div className="card mb-2">
                                                                        <div className="card-header cardmn_pad filt_bgcol">
                                                                            <h5 className="mb-0 p-0">

                                                                                <button className="btn btn-link ps-0" data-bs-toggle="collapse" data-bs-target="#collapseicon_filer8" aria-expanded="true" aria-controls="collapseicon4">Store Size (Sq. Ft)</button>

                                                                            </h5>
                                                                        </div>

                                                                        <div className="collapse show" id="collapseicon_filer8" data-parent="#collapseicon_filer8" aria-labelledby="collapseicon4">
                                                                            <div className="card-body animate-chk">
                                                                                <Slider

                                                                                    aria-label="range-slider"
                                                                                    defaultValue={0}
                                                                                    step={1}
                                                                                    marks={Storesize_marks}
                                                                                    min={0}
                                                                                    max={10000}
                                                                                    valueLabelDisplay="auto"
                                                                                    onChange={handleStore}
                                                                                    value={store_size}
                                                                                />
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </div></>
                                                            {/* )} */}
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </ul>
                                    </div>
                                    <div className="right-arrow" id="right-arrow">
                                        <i data-feather="arrow-right"></i>
                                    </div>
                                </div>
                            </nav>
                        </header>
                    </div>
                </div>

            }

            {/* <!-- page-wrapper Start       --> */}
            <div className={`page-wrapper compact-wrapper ${dashboardClass}`} id="pageWrapper">
                <div className="page-body-wrapper sidebar-icon">
                    <div className="page-body">
                        <div className="container-fluid">
                            <div className="page-header">
                                <div style={{
                                    display: 'flex', justifyContent: 'space-between'
                                }}>
                                    <div style={{ textAlign: 'justify' }}>
                                        <h3 >Explore Space</h3>
                                        <div style={{ display: 'flex' }}>
                                            <a href="user-details">Dashboard /</a> <p>ExploreSpaces</p>
                                        </div>
                                    </div>

                                    <div className="d-flex" >
                                        <div className="media">
                                            <label className="col-form-label m-r-10">Show Map View</label>
                                            <div className="media-body text-end switch-sm">
                                                <label className="switch">
                                                    <input type="checkbox" onClick={toggleMapView} /><span className="switch-state"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid ">
                            <div className="row">
                                <div className="col-sm-12">
                                    <form method="" onSubmit={handleSubmit}>
                                        <div className="card" style={{ textAlign: 'justify', height: '300px' }}>

                                            <div className="card-body">

                                                <div className="row" >

                                                    <div className="col-md-4" style={{ marginBottom: '15px' }}>
                                                        <div className="mb-3">
                                                            <label className="form-label"> What is your product category <span className=" mand_error">*</span></label>
                                                            <select
                                                                className="form-select"
                                                                onChange={onChangeProduct}
                                                                value={changeProductCategory}
                                                            >
                                                                <option>-Select Product Category</option>
                                                                {dropDown.map((item: any) => (
                                                                    <option key={item.id} value={item.id}>
                                                                        {item.name}
                                                                    </option>
                                                                ))}

                                                            </select>
                                                            {errors.changeProductCategory && (
                                                                <span style={{ color: 'red' }}>{errors.changeProductCategory}</span>
                                                            )}

                                                        </div>
                                                        {/* <small>(Pre-fills search parameters based on campaign details)</small> */}
                                                    </div>


                                                    <div className="col-md-4">
                                                        <div className="mb-3">
                                                            <label className="form-label" > From <span className="mand_error">*</span></label>
                                                            <input
                                                                className="form-control"
                                                                id=" "
                                                                type="date"
                                                                placeholder=" "
                                                                onChange={toDate}
                                                                value={createToDate}
                                                            />
                                                            {errors.createToDate && (
                                                                <span style={{ color: 'red' }}>
                                                                    {errors.createToDate}
                                                                </span>
                                                            )}
                                                        </div>

                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="mb-3">
                                                            <label className="form-label" > No of Months <span className="mand_error">*</span></label>
                                                            <select className="form-select">
                                                                <option>-Select-</option>
                                                                <option>1</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                                <option>4</option>
                                                                <option>5</option>
                                                                <option>6</option>
                                                                <option>7</option>
                                                                <option>8</option>
                                                                <option>9</option>
                                                                <option>10</option>
                                                                <option>11</option>
                                                                <option>12</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-4">
                                                        <div className="mb-3">
                                                            <label className="from-label"> State</label>
                                                            <select className="form-select" onChange={(e) => handlestate(e)}>
                                                                <option>-Select State-</option>
                                                                {
                                                                    Statesdata.map((getstate: { state_id: string | number | readonly string[] | undefined; state_name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => (
                                                                        <option value={getstate.state_id} key={index}>{getstate.state_name}</option>
                                                                    ))
                                                                }
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="mb-3">
                                                            <label className="from-label" > City </label>
                                                            <select className="form-select">
                                                                <option>-Select-</option>
                                                                {
                                                                    city.map((getcity: { city_id: string | number | readonly string[] | undefined; city_name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => (
                                                                        <option value={getcity.city_id} key={index}>
                                                                            {getcity.city_name}
                                                                        </option>
                                                                    ))}
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-3">
                                                        <button className="btn custom_btn" type="submit" style={{ marginTop: "28px" }} >Search</button>
                                                        <button className="btn" type="button" onClick={onReset} style={{ marginTop: "28px", marginLeft: '5px', backgroundColor: 'lightgray' }}>Reset</button>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    {mapVisible &&
                                        <div className="card">
                                            <div className="card-body p-2">

                                                <div>
                                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30450.5617187963!2d78.45026631865177!3d17.444381226833194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90a3ed28854f%3A0x20084b938c2f1b8c!2sBegumpet%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1650883406947!5m2!1sen!2sin" width="100%" height="400" style={{ border: "0" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                                </div>

                                            </div>

                                        </div>
                                    }

                                    <div className="card">
                                        <div className="card-body p-2"  >
                                            <div className="col-md-12 ">
                                                <div className="card">
                                                    <div className="card-body dark_tab_blk p-0">
                                                        <div className="card-body p-2">
                                                            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '30px', marginTop: '20px' }}>

                                                                <label >
                                                                    Search:
                                                                    <input type="search" aria-controls="example" style={{ height: '37px', border: "1px solid #efefef", marginLeft: "10px" }}
                                                                        value={searchData}
                                                                        onChange={handleSearch}
                                                                    />
                                                                </label>
                                                            </div>
                                                        </div>

                                                        <DataTable
                                                            customStyles={customStyles}
                                                            columns={columns}
                                                            data={data}
                                                            pagination />
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
                {/* <Footer /> */}
            </div>
        </>
    );
};

export default ExploreSpace;