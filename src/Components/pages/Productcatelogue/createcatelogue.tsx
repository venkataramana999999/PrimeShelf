import React, { useState } from "react";
import MainPage1 from "../../body/Mainpage1";
import Footer from "../../common/Footer/footer";
import { useNavigate } from "react-router-dom";
interface Item {
    attribute: string;
    value: string;
}

interface Data {
    cat: string;
    product: string;
    disc: string;
}

function CreateCatalogue() {
    const [sidebarVisible, setSidebarVisible] = useState<boolean>(true);
    const [items, setItems] = useState<Item[]>([]);
    const [cat, updateCat] = useState<string>("");
    const [product, updateProduct] = useState<string>("");
    const [disc, updateDisc] = useState<string>("");
    const [record, updateRecord] = useState<any[]>([]);
    const [attribute, setAttribute] = useState('');
    const [stateValue, setStateValue] = useState('');
    const [stateData, setStateData] = useState('');
    const navigate = useNavigate();

    const dropDown = require('../../JSON/Dropdown.json')

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const handleAddItem = () => {
        const newItem: Item = { attribute: "", value: "" };
        setItems([...items, newItem]);
    };

    const handleRemoveItem = () => {
        const updatedItems = [...items];
        updatedItems.pop();
        setItems(updatedItems);
    };

    const captureCat = (e: React.ChangeEvent<HTMLSelectElement>) => {
        updateCat(e.target.value);
    };

    const captureProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateProduct(e.target.value);
    };

    const captureDisc = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        updateDisc(e.target.value);
    };
    const changeAttribute = (e: any) => {
        setAttribute(e.target.value)
    }

    const onChangeValue = (e: any) => {
        setStateValue(e.target.value)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const newDataEntry: Data = {
            cat, product, disc, 
        };
        updateRecord([...record, newDataEntry]);
        updateCat(""); 
        updateProduct("");
        updateDisc("");       
        let data: any = localStorage.getItem("record")
        data = JSON.parse(data)
        localStorage.setItem("record", JSON.stringify([...data, newDataEntry]))
        navigate("/product-catelouge");
    };

  

    console.log(record)



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
                            <div className="row" style={{ width: '100%' }}>
                                <div className="col-sm-12" >
                                    <div className="card" style={{ border: '1.3px dotted gray' }}>
                                        <form onSubmit={handleSubmit}>
                                            <div className="card-body"  >
                                                <div className="row">
                                                    <div className="col-md-4" style={{ marginBottom: '15px' }}>
                                                        <div className="mb-3">
                                                            <label className="form-label"> Select Category</label>

                                                            <select className="form-select"
                                                                value={cat} onChange={captureCat}
                                                            >
                                                                
                                                                <option>-Select Product Category</option>
                                                              
                                                                {dropDown.map((item:any) => (
                                                                    <option key={item.id} value={item.name}>
                                                                        {item.name}
                                                                    </option>
                                                                ))}

                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="mb-3">
                                                            <label className="form-label" htmlFor="product-name">Product Name </label>
                                                            <input className="form-control" id="product-name" type="text" placeholder=" " value={product} onChange={captureProduct} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="mb-3">
                                                            <label className="form-label" htmlFor="product-description">Product Description<span className="mand_error">*</span>  </label>
                                                            <textarea className="form-control" id="product-description" placeholder=" " rows={5} value={disc} onChange={captureDisc} ></textarea>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-12" style={{ backgroundColor: '#fce2ff', display: 'flex', height: '100px', alignItems: 'center', marginBottom: "20px" }}>
                                                    <div className="col-md-1" style={{ marginLeft: '10px' }}>
                                                        <button type="button" className="btn btn-group-benef mt5 p-0" onClick={handleAddItem} >
                                                            <img src="https://app.primeshelf.co/public/assets/images/add-button2.svg" width="40" /> <br />
                                                            <small style={{ fontSize: "10px" }}>Add More</small>
                                                        </button>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="mb-3 ml-4">
                                                            <label className="form-label">Attribute</label>
                                                            <select className="form-select">
                                                                <option value="">-Select-</option>
                                                                <option value="size">Size</option>
                                                                <option value="color">Color</option>
                                                                <option value="fragrance">Fragrance</option>
                                                                <option value="flavour">Flavour</option>
                                                                <option value="type">Type</option>
                                                                <option value="price">Price</option>
                                                                <option value="quantity">Quantity</option>
                                                                <option value="packSize">Pack Size(Nos)</option>2
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="mb-3" style={{ marginLeft: '20px' }}>
                                                            <label className="form-label" htmlFor="attribute-value">Value </label>
                                                            <input className="form-control" id="attribute-value" type="text" placeholder=" " value={stateValue} onChange={onChangeValue} />
                                                        </div>
                                                    </div>
                                                </div>
                                                {items.map((item, index) => (
                                                    <div key={index} className='col-md-12' style={{ backgroundColor: "#fce2ff", display: "flex", height: "100px", alignItems: "center", marginBottom: "20px" }}>
                                                        <div className="col-md-1" style={{ marginLeft: '10px' }}>
                                                            <button type="button" className="btn btn-group-benef mt5 p-0" onClick={handleRemoveItem}>
                                                                <img src="https://app.primeshelf.co/public/assets/images/remove.svg" width="40" /><br />
                                                                <small style={{ fontSize: "10px", display: "flex" }}>Remove</small></button>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="mb-3 ml-4" >
                                                                <label className="form-label">Attribute</label>
                                                                <select className="form-select"
                                                                    onChange={changeAttribute}
                                                                    value={attribute}
                                                                >
                                                                       
                                                                    <option value="">-Select-</option>
                                                                  
                                                                    <option value="size">Size</option>
                                                                    <option value="color">Color</option>
                                                                    <option value="fragrance">Fragrance</option>
                                                                    <option value="flavour">Flavour</option>
                                                                    <option value="type">Type</option>
                                                                    <option value="price">Price</option>
                                                                    <option value="quantity">Quantity</option>
                                                                    <option value="packSize">Pack Size(Nos)</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="mb-3" style={{ marginLeft: '20px' }}>
                                                                <label className="form-label" htmlFor="attribute-value">Values </label>
                                                                <input className="form-control" id="attribute-value" type="text" placeholder=" " value={stateValue} onChange={onChangeValue} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                                <div className="row justify-content-end">
                                                    <div className="col-md-3 text-end mt-4">
                                                        <button className="btn" style={{ backgroundColor: "#a730ce", color: '#fff' }} data-bs-original-title="" title=""><i className="fa fa-save"></i> Save </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
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

export default CreateCatalogue;



