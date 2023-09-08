import React from 'react';

// CSS for the modal styles
import './rackmodal.css';

import { useLocation } from 'react-router-dom';
interface RackModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const RackModal: React.FC<RackModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;
  const location=useLocation()

  return (
    <div className="dialog-modal1">
      <div className="dialog-content1">
        <div className="modal-dialog modal-xl">
          <div className="modal-content" style={{ textAlign: 'justify' }}>
            <div className="modal-header justify-content-between">
              <div>
                <h6 className="modal-title">Rack Details </h6>
              </div>
              <div className="">
                <small>Status:</small>
                <button className="btn btn-xs text-black" type="button">
                  Awaiting Retailer Confirmation
                </button>
                <button
                  type="button"
                  className="btn-close"
                  onClick={onClose}
                  data-bs-dismiss="modal"
                  style={{ marginRight: '5px', marginTop: '-25px' }}
                ></button>
              </div>
            </div>
            <div className="modal-body">
              <div className="col-md-12 dashed_bor">
                <div className="">
                  <div className="row align-items-center m-0 lit_pk">
                    <div className="col-md-1">
                      <img src="assets/images/store-prime.png" width="40" alt="Store Logo" />
                    </div>
                    <div className="col-md-7 pl-0">
                      <h6 style={{ margin: '0' }}>Ratnadeep Retail Private Limited</h6>
                      <p style={{ margin: '0' }}>
                        <i className="fa fa-map-marker" aria-hidden="true"></i>{' '}
                        <span>Begumpet, Hyderabad, 500352</span>
                      </p>
                    </div>
                    <div className="col-md-4">
                      <div className="row align-items-center">
                        <div className="col-md-5">
                          <p style={{ margin: '0' }}>
                            <span className="fw-bold"> Gandola </span>
                          </p>
                          <p style={{ margin: '0' }}>Shelf type</p>
                        </div>
                        <div className="col-md-7 text-end">
                          <button
                            className="btn btn-search-result"
                            data-bs-original-title=""
                            title=""
                          >
                            <img src="assets/images/image.svg" width="20" alt="View Photos" />{' '}
                            View Photos
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center p-3">
                    <div className="col-md-3">
                      <div className="row justify-content-start align-items-center">
                        <div className="col-md-2 col-2">
                          <img src="assets/images/rack2.svg" alt="Rack Icon" />
                        </div>
                        <div className="col-md-10 col-10">
                          <p style={{ margin: '0' }}>
                            <b>1</b>
                          </p>
                          <p style={{ margin: '0' }} className="tx_light">
                            Rack Number
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 ">
                      <div className="row justify-content-start align-items-center">
                        <div className="col-md-2 col-2">
                          <img src="assets/images/category.svg" alt="Category Icon" />
                        </div>
                        <div className="col-md-10 col-10">
                          <p style={{ margin: '0' }}>
                            <b>88</b>
                          </p>
                          <p style={{ margin: '0' }} className="tx_light">
                            Product category
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 ">
                      <div className="row justify-content-start align-items-center">
                        <div className="col-md-2 col-2">
                          <img
                            src="assets/images/category2.svg"
                            alt="Minimum Booking Period Icon"
                          />
                        </div>
                        <div className="col-md-10 col-10">
                          <p style={{ margin: '0' }}>
                            <b>55</b>
                          </p>
                          <p style={{ margin: '0' }} className="tx_light">
                            Minimum booking period
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 ">
                      <div className="row justify-content-start align-items-center">
                        <div className="col-md-2 col-2">
                          <img src="assets/images/category2.svg" alt="Prebooking Period Icon" />
                        </div>
                        <div className="col-md-10 col-10">
                          <p style={{ margin: '0' }}>
                            <b>Test 789</b>
                          </p>
                          <p style={{ margin: '0' }} className="tx_light">
                            Prebooking period
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-1">
                    <div className="">
                      <div className="row justify-content-start align-items-center">
                        <div className="col-md-1 ic_m">
                          <img src="assets/images/category.svg" width="23" alt="Category Icon" />
                        </div>
                        <div className="col-md-11 mpos">
                          <p style={{ margin: '0' }}>
                            <b>Pooja items, Skin care, Cigarettes, Toiletries, Sanitary napkins </b>
                          </p>
                          <p className="tx_light" style={{ margin: '0' }}>
                            Prohibited categories
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center p-3">
                    <div className="col-md-3">
                      <div className="row justify-content-start align-items-center">
                        <div className="col-md-2">
                          <img src="assets/images/cost.svg" alt="Cost Icon" />
                        </div>
                        <div className="col-md-10">
                          <p style={{ margin: '0' }}>
                            <b>12,000.00</b>
                          </p>
                          <p style={{ margin: '0' }} className="tx_light">
                            Cost Per Month
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="row justify-content-start align-items-center">
                        <div className="col-md-2">
                          <img src="assets/images/lhd.svg" width="25" alt="Dimensions Icon" />
                        </div>
                        <div className="col-md-10" style={{ left: '-14px' }}>
                          <p style={{ margin: '0' }}>
                            <b>25inch,18inch,19inch</b>
                          </p>
                          <p style={{ margin: '0' }} className="tx_light">
                            Length, Height, Depth{' '}
                          </p>
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
  );
};

export default RackModal;
