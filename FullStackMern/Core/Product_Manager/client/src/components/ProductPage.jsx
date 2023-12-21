import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams,Link } from 'react-router-dom';

const ProductPage = (props) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/product/${productId}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productId]);

  return (
    <div>
      <h2>Product Details</h2>
      {product ? (
        <div>
          <p>Title: {product.title}</p>
          <p>Price: {product.price}</p>
          <p>Description: {product.description}</p>
          <p>Created At: {product.createdAt}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    {/* Update button */}
    <Link to={`/api/product/update/${product.id}`}>
        <button> Update Product </button>
      </Link>

    {/* Go to Dashboard button */}
      <Link to="/">
        <button>Go to Dashboard</button>
      </Link>
    </div>
  );
};

export default ProductPage;