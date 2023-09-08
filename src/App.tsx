import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as React from 'react';
import './App.css';


// import MainPage from "./components/body/MainPage";
import ExploreSpace from "./components/Pages/Explorepage/explorespace";
import Dashboard from "./components/Pages/Dashboard/dashboard";
import MyCart from "./components/Pages/MyCart/myCart";
import MyBooking from "./components/Pages/MyBookings/mybookngs";
import MyCampaign from "./components/Pages/MyCampaingn/mycampaingn";
import CreateCampaign from "./components/Pages/MyCampaingn/createcampaingn";
import ProductCatelouge from "./components/Pages/Productcatelogue/productcatelogue";
import StoreDetails from "./components/Pages/Explorepage/storedetails";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/explore-space"  element={<ExploreSpace/>}/>
          {/* <Route path="/" element={<Login />} /> */}
          {/* <Route path="/explore" element={<ExploreSpace/>}/> */}
          <Route path="/booking" element={<MyBooking />} />
          <Route path="/explore" element={<ExploreSpace />} />
          <Route path="/user-details" element={<Dashboard />} />
          <Route path="/cart" element={<MyCart />} />
          <Route path="/booking" element={<MyBooking />} />
          <Route path="/campaign" element={<MyCampaign />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/product-catelouge" element={<ProductCatelouge />} />
          <Route path="/store-details" element={<StoreDetails/>} />
        </Routes>
      </Router>
      

    </div>
  );
}

export default App;
