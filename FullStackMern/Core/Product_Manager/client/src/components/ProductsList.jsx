import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Table, Button } from 'react-bootstrap';

const ProductsList = (props) => {
  const { product, setProduct } = props;

  useEffect(() => {
    axios.get('http://localhost:8000/api/product')
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container className="mt-5">
      <Table striped bordered responsive>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Created At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {product.map((productItem) => (
            <tr key={productItem._id}>
              <td>{productItem.title}</td>
              <td>${productItem.price}</td>
              <td>{productItem.description}</td>
              <td>{new Date(productItem.createdAt).toLocaleString()}</td>
              <td>
                <Link to={`/api/product/${productItem._id}`}>
                  <Button variant="primary" size="sm">
                    View Details
                  </Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ProductsList;