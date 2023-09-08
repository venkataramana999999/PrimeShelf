import React from 'react';

import './../../../CSS/DialogModal.css'

import { useLocation } from 'react-router-dom';
interface DialogModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    content: string;
}

const DialogModal: React.FC<DialogModalProps> = ({ isOpen, onClose, title, content }) => {
    const location = useLocation()
    if (!isOpen) return null;

    const receivedData = location.state
    console.log(receivedData)

    return (
        <div className="dialog-modal">
            <div className="dialog-content">
                <div className="modal-header">
                    <h6 className="modal-title">{receivedData?.store_name} <span className="sto_btn">Store ID: {receivedData.store_id}</span> </h6>
                    <button type="button" className="btn-close" onClick={onClose} data-bs-dismiss="modal" style={{ marginRight: '25px', marginTop: '20px' }}></button>
                </div>

                <div className="modal-body" style={{ textAlign: 'justify' }}>

                    <table  cellSpacing="0" cellPadding="0" className="table table-borderd table-striped" id="example">
                        <tbody>
                            <tr>
                                <td width="50%">Store Name: <strong>{receivedData?.store_name}</strong></td>
                                <td width="50%">Manager Contact Name: -</td>
                            </tr>
                            <tr>
                                <td>Store Location: <strong>{receivedData.area_name}</strong></td>
                                <td>Manager Contact Number: <strong>-</strong></td>
                            </tr>
                            <tr>
                                <td>City: <strong>{receivedData.city_name}</strong></td>
                                <td>Manager Email Address: -</td>
                            </tr>
                            <tr>
                                <td>State: <strong>Telangana</strong></td>
                                <td>Store Contact Number: <strong>4012348965</strong></td>
                            </tr>
                            <tr>
                                <td>Country: <strong>India</strong></td>
                                <td>Store Contact Number: <strong>7000</strong></td>
                            </tr>
                            <tr>
                                <td>PIN Code: <strong>500049</strong></td>
                                <td>Store GSTIN: <strong>ABC123876THD18</strong></td>
                            </tr>
                            <tr>
                                <td>Store Address:<br />
                                    <strong>{receivedData.geo_tag}</strong></td>
                                <td valign="top">Projected Footfall per Month: <strong>{receivedData.projected_footfall_per_month}</strong></td>
                            </tr>
                            <tr style={{ background: "#e2e5fc" }}>
                                <td colSpan={2} align="center">Estimated Sales per Month: <strong> 1500000</strong></td>
                            </tr>

                            <tr>
                                <td colSpan={2} style={{ background: "#FFF" }}>

                                    <strong> Store Photos </strong>

                                    <div className="row">

                                        <div className="col-md-2 img11">
                                            <a data-fancybox="gallery" href="https://lh3.googleusercontent.com/rkw_tO-WBA-ImK7Y600acuB5IMTSPkJDOfhUW4cKZzPFP6mcGTEsZAkb3BdwHMQF5K63DuTlfkDJ32FEZhcw2urLFg=w256">
                                                <img src="https://lh3.googleusercontent.com/rkw_tO-WBA-ImK7Y600acuB5IMTSPkJDOfhUW4cKZzPFP6mcGTEsZAkb3BdwHMQF5K63DuTlfkDJ32FEZhcw2urLFg=w256" className="img-fluid rounded border" />
                                            </a>

                                        </div>

                                        <div className="col-md-2 img11">
                                            <a data-fancybox="gallery" href="https://imgmedia.lbb.in/media/2019/08/5d5be72da2c996581f710a04_1566304045800.jpg">
                                                <img src="https://imgmedia.lbb.in/media/2019/08/5d5be72da2c996581f710a04_1566304045800.jpg" className="img-fluid rounded border" />
                                            </a>
                                        </div>

                                        <div className="col-md-2 img11">
                                            <a data-fancybox="gallery" href="https://imgmedia.lbb.in/media/2019/08/5d5be72da2c996581f710a06_1566304045801.jpg">
                                                <img src="https://imgmedia.lbb.in/media/2019/08/5d5be72da2c996581f710a06_1566304045801.jpg" className="img-fluid rounded border" />
                                            </a>
                                        </div>

                                        <div className="col-md-2 img11">
                                            <a data-fancybox="gallery" href="https://content3.jdmagicbox.com/comp/hyderabad/q9/040pxx40.xx40.131211134849.w6q9/catalogue/ratnadeep-super-market-begumpet-hyderabad-supermarkets-34nt0rf.png">
                                                <img src="https://content3.jdmagicbox.com/comp/hyderabad/q9/040pxx40.xx40.131211134849.w6q9/catalogue/ratnadeep-super-market-begumpet-hyderabad-supermarkets-34nt0rf.png" className="img-fluid rounded border" />
                                            </a>
                                        </div>

                                        <div className="col-md-2 img11">
                                            <a data-fancybox="gallery" href="https://i0.wp.com/www.indiaretailing.com/wp-content/uploads/2020/12/Ratnadeep-FINAL.jpg">
                                                <img src="https://i0.wp.com/www.indiaretailing.com/wp-content/uploads/2020/12/Ratnadeep-FINAL.jpg" className="img-fluid rounded border" />
                                            </a>
                                        </div>


                                    </div>


                                </td>

                            </tr>
                        </tbody>
                    </table>


                </div>
                {/* <button onClick={onClose}>Close</button> */}
            </div>
        </div>
    );
};

export default DialogModal;
