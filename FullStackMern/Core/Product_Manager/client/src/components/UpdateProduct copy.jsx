import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProduct = (props) => {
  const { productId } = useParams();
  const [title, setTitle] = useState(null); // Initialize as null
  const [price, setPrice] = useState(null); // Initialize as null
  const [description, setDescription] = useState(null); // Initialize as null
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/product/${productId}`)
      .then((res) => {
        setTitle(res.data.title);
        setPrice(res.data.price);
        setDescription(res.data.description);
      })
      .catch((err) => console.log(err));
  }, [productId]);

  const updateProduct = (e) => {
    e.preventDefault();
    console.log(productId);
    axios.patch(`http://localhost:8000/api/product/update/${productId}`, {
      title,
      price,
      description,
    })
      .then((res) => {
        console.log(res);
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  // Check if data has been fetched before rendering the form
  if (title === null || price === null || description === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Update {title}</h1>
      <form onSubmit={updateProduct}>
        <p>
          <label>Title</label><br />
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => { setTitle(e.target.value); }}
          />
        </p>
        <p>
          <label>Price</label><br />
          {price !== null && (
            <input
              type="number"
              name="price"
              value={price}
              onChange={(e) => { setPrice(parseFloat(e.target.value)); }}
            />
          )}
        </p>
        <p>
          <label>Description</label><br />
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => { setDescription(e.target.value); }}
          />
        </p>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default UpdateProduct;

