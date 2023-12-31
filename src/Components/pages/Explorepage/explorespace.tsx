import React, { useState, FormEvent, ChangeEvent, useEffect } from "react";
import MainPage1 from "../../body/Mainpage1";
import { useNavigate } from "react-router-dom";

import DataTable from 'react-data-table-component';
import Header from "../../common/Header/header";
import Slider from '@mui/material/Slider';
import { withTranslation, WithTranslation } from 'react-i18next';

interface ExploreSpaceProps extends WithTranslation {}



// Assuming 'showData' is an array of 'Item'

const ExploreSpace: React.FC<ExploreSpaceProps> = ({t}:any) => {

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
    const [value, setValue] = React.useState([0, 15000]);
    const [price, setPrice] = React.useState([0, 30000]);
    const [store, setStore] = React.useState([0, 10000]);

    const searchResults = require('../../JSON/Search.json')
    const dropDown = require('../../JSON/Dropdown.json')

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
    };

    const handlePrice = (event: any, newValue: any) => {
        setPrice(newValue);
    };

    const handleStore = (event: any, newValue: any) => {
        setStore(newValue);
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

    const min = value[0]
    const max = value[1]

    const min1 = price[0]
    const max1 = price[1]

    const minimum = store[0]
    const maximum = store[1]

    let data = showData.filter((i: any) => 
    i.projected_footfall_per_month >= min && i.projected_footfall_per_month <= max  
    && i.costper_month >= min1 && i.costper_month <= max1 
    && i.store_area_size >= minimum && i.store_area_size <= maximum
    
    )
    console.log(data)
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

    const marks = [
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
        { value: 10000, label: "10000" }
    ];

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

                                                                            <label className="d-block" htmlFor="chk-ani11">
                                                                                <input className="checkbox_animated" id="chk-ani11" type="checkbox" />                 Gandola
                                                                            </label>
                                                                            <label className="d-block" htmlFor="chk-ani12">
                                                                                <input className="checkbox_animated" id="chk-ani12" type="checkbox" />                          Side Rack
                                                                            </label>
                                                                            <label className="d-block" htmlFor="chk-ani13">
                                                                                <input className="checkbox_animated" id="chk-ani13" type="checkbox" />                         Payment Counters
                                                                            </label>
                                                                            <label className="d-block" htmlFor="chk-ani14">
                                                                                <input className="checkbox_animated" id="chk-ani14" type="checkbox" />                          Fridge
                                                                            </label>

                                                                            <label className="d-block  " htmlFor="chk-ani15">
                                                                                <input className="checkbox_animated" id="chk-ani15" type="checkbox" />                         Back Rack
                                                                            </label>

                                                                            <label className="d-block  " htmlFor="chk-ani16">
                                                                                <input className="checkbox_animated" id="chk-ani16" type="checkbox" />                         Left Wall Rack
                                                                            </label>
                                                                            <label className="d-block  " htmlFor="chk-ani17">
                                                                                <input className="checkbox_animated" id="chk-ani17" type="checkbox" />                         Right Wall Rack
                                                                            </label>
                                                                            <label className="d-block  " htmlFor="chk-ani18">
                                                                                <input className="checkbox_animated" id="chk-ani18" type="checkbox" />                         Handy Cam
                                                                            </label>
                                                                            <label className="d-block  " htmlFor="chk-ani19">
                                                                                <input className="checkbox_animated" id="chk-ani19" type="checkbox" />                      FCU
                                                                            </label>
                                                                            <label className="d-block  " htmlFor="chk-ani20">
                                                                                <input className="checkbox_animated" id="chk-ani20" type="checkbox" />                        Vegetables
                                                                            </label>
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
                                                                                            marks={marks}
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
                                                                                            onChange={handleChange}
                                                                                            value={value}
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
                                                                                    value={store}
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
                                        <h3 >{t('exploreSpace')}</h3>
                                        <div style={{ display: 'flex' }}>
                                            <a href="user-details">{t('dashboard')}/</a> <p>{t('explorespaces')}</p>
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
                                                            <label className="form-label"> {t('whatIsYourProductCategory')} <span className=" mand_error">*</span></label>
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
                                                            <label className="form-label" >{t('from')} <span className="mand_error">*</span></label>
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
                                                            <label className="form-label" > {t('noOfMonths')} <span className="mand_error">*</span></label>
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
                                                            <label className="from-label"> {t('state')}</label>
                                                            <select className="form-select">
                                                                <option>-Select State-</option>
                                                                <option>Telangana</option>
                                                                <option>Andhra Pradesh</option>
                                                                <option>Arunachal Pradesh</option>
                                                                <option>Assam</option>
                                                                <option>Bihar</option>
                                                                <option>Chattisgarh</option>
                                                                <option>Goa</option>
                                                                <option>Gujarat</option>
                                                                <option>Haryana</option>
                                                                <option>Himachal Pradesh</option>
                                                                <option>Jharkhand</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="mb-3">
                                                            <label className="from-label" > {t('city')} </label>
                                                            <select className="form-select">
                                                                <option>-Select-</option>
                                                                <option>1</option>
                                                                <option>2</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-3">
                                                        <button className="btn custom_btn" type="submit" style={{ marginTop: "28px" }} >{t('searchButton')}</button>
                                                        <button className="btn" type="button" onClick={onReset} style={{ marginTop: "28px", marginLeft: '5px', backgroundColor: 'lightgray' }}>{t('resetButton')}</button>
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

export default (withTranslation()(ExploreSpace));