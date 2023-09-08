import React, { ChangeEvent, useState } from 'react'
import './../../../CSS/sidebar.css'
import Slider from "@material-ui/core/Slider";

interface Sliderprops{
  // onRangeChange :(range :[number,number])=>void;
  sidebarVisible: any; // Replace with the appropriate type
  backgroundColor: string;
  textClass: string;
  Sliderprops : any;
}

const  Sidebar:React.FC<Sliderprops>=({ sidebarVisible, backgroundColor, textClass,Sliderprops })=> {
  console.log(backgroundColor, 'backgroundColor')
  const [showContent, setShowContent] = useState(false);
  const [selectedRange, setSelectedRange] = useState<[number, number]>([0, 30000]);
  // const handleRangeChange = (_event: any, newValue: [number, number]) => {
  //   setSelectedRange(newValue);
  //    onRangeChange(newValue);
  // };

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
    { value: 10000, label: "10 000" }
  ];




  return (
    <>

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
                                {/* {Object.keys(checkboxes).map((key)=>(
                                  <label key={key} className='d-block' htmlFor={`chk-${key}`} >
                                    <input
                                    className='checkbox_animated'
                                   id={`chk-${key}`}
                                  type='checkbox'
                                  checked={checkboxes[key]}
                                  onChange={handleCheckboxChange}
                                    />
                                    {key}
                                     </label> 
                                )
                                )} */}
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
                                        aria-label="Custom marks"
                                        defaultValue={0}
                                        step={1}
                                        marks={marks}
                                        min={0}
                                        max={30000}
                                        onChange={(_event, newValue) => setSelectedRange(newValue as [number, number])}
                                  value={selectedRange}

                                        valueLabelDisplay="auto" />

                                    </div>


                                  </div>

                                </div>

                              </div>

                            </div>
                          </div>
                        </div>
                        <div className="col-xl-12">
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

                                        aria-label="Custom marks"
                                        defaultValue={0}
                                        step={1}
                                        marks={Footfalls_marks}
                                        min={0}
                                        max={15000}
                                        valueLabelDisplay="auto" />


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
                                      className="btn btn-link ps-0" data-bs-toggle="collapse" data-bs-target="#collapseicon_filer5" aria-expanded="true" aria-controls="collapseicon4"
                                      aria-label="Custom marks"
                                      defaultValue={0}
                                      step={1}
                                      marks={Storesize_marks}
                                      min={0}
                                      max={10000}
                                      valueLabelDisplay="auto" />


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
    </>
  )
}

export default Sidebar