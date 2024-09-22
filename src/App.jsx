// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Subcategory from './components/Subcategory';
import Category from './components/Category';
import Home from './components/Home';
import Navbar from './components/Navbar'; // Import the Navbar
import LoginPage from './pages/LoginPage';
import Product from './components/Product';


const App = () => {
  return (
    <Router>
      <div className="flex flex-col">
        <Navbar /> {/* Add Navbar here */}
        <div className="flex flex-1">
          <Sidebar />
          <div className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginPage/>} />
              <Route path="/Navbar" element={<Navbar/>} />
              <Route path="/Category" element={<Category />} />
              <Route path="/Subcategory" element={<Subcategory />} />
              <Route path="/Product" element={<Product />} />
              {/* <Route path="/warehouses" element={<Warehouse />} /> */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
