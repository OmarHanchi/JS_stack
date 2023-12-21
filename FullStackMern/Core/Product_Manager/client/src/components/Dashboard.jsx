import React from "react";
import {useState } from 'react';
import CreateProduct from "./CreateProduct";
import ProductsList from "./ProductsList";

function Dashboard(props) {
    const [product, setProduct] = useState([]);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to the dashboard!</p>
      <fieldset>
      <legend>Product Manager </legend>

      <CreateProduct product={product} setProduct={setProduct} />

      </fieldset>
      <fieldset>
      <legend>Product List</legend>
      <ProductsList product={product} setProduct={setProduct}/>
      </fieldset>

    </div>
  );
}

export default Dashboard;