import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Container } from 'react-bootstrap';

function App() {
  const [currentColor, setCurrentColor] = useState('red');
  const [otherColor, setOtherColor] = useState('blue');

  const switchColor = () => {
    // Swap the colors when the button is clicked
    setCurrentColor(otherColor);
    setOtherColor(currentColor);
  };

  useEffect(() => {
    console.log('currentColor:', currentColor);
    console.log('otherColor:', otherColor);
  }, [currentColor, otherColor]);

  return (
    <div className="App">
      <Container className="mt-5">
        <Button
          className={`btn btn-lg ${currentColor === 'blue' ? 'btn-primary' : 'btn-danger'}`}
          onClick={switchColor}
        >
          {currentColor}
        </Button>
        <div style={{ backgroundColor: currentColor, height: 200, width: 200 }} />
      </Container>
    </div>
  );
}

export default App;