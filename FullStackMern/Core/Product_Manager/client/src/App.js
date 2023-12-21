import "./App.css";
import React from "react";
import CreateProduct from "./components/CreateProduct";
import Dashboard from "./components/Dashboard";
import {Routes,Route} from "react-router-dom";

function App() {
    return (
      
      

        <div className="App">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/api/product" element={<CreateProduct/>} />
          </Routes>            

        </div>
    );
}

export default App;