import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as React from 'react';
import './App.css';

// import MainPage from "./components/body/MainPage";
import ExploreSpace from "./Components/pages/Explorepage/explorespace";
import Dashboard from "./Components/pages/Dashboard/dashboard";
import MyCart from "./Components/pages/MyCart/myCart";
import MyBooking from "./Components/pages/MyBookings/mybookings";
import MyCampaign from "./Components/pages/MyCampaingn/mycampaingn";
import CreateCampaign from "./Components/pages/MyCampaingn/createcampaingn";
import ProductCatelouge from "./Components/pages/Productcatelogue/productcatelogue";
import CreateCatalogue from "./Components/pages/Productcatelogue/createcatelogue";
import StoreDetails from "./Components/pages/Explorepage/storeDtails";

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
          <Route path="/create-catelouge" element={<CreateCatalogue />} />
          <Route path="/store-details" element={<StoreDetails/>} />
        </Routes>
      </Router>
      

    </div>
  );
}

export default App;
