import "./App.css";
import React from "react";
import CreateProduct from "./components/CreateProduct";
import Dashboard from "./components/Dashboard";
import ProductPage from "./components/ProductPage";
import {Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
      
      

        <div className="App">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/api/product" element={<CreateProduct/>} />
            <Route path="/api/product/:productId" element={<ProductPage/>} />
          </Routes>            

        </div>
    );
}

export default App;