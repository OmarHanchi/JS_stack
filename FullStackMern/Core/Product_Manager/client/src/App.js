import "./App.css";
import React, { useEffect } from "react";
import CreateProduct from "./components/CreateProduct";
import Dashboard from "./components/Dashboard";
import ProductPage from "./components/ProductPage";
import UpdateProduct from "./components/UpdateProduct";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

function App() {
  // Assuming you want to fetch products and set them in the component state
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    // Fetch products when the component mounts
    axios.get('http://localhost:8000/api/product')
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/api/product" element={<CreateProduct />} />
        <Route
          path="/api/product/:productId"
          element={<ProductPage products={products} />}
        />
        <Route path="/api/product/update/:productId" element={<UpdateProduct />} />
      </Routes>
    </div>
  );
}

export default App;
