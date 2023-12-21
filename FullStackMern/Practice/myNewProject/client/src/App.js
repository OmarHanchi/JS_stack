import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {Routes,Route,Link} from "react-router-dom";
import PersonForm from './components/PersonForm';


function App() {
  return (
    < div className="App">
      
      <Routes>
        <Route path="/addperson" element={< PersonForm/>} />
      </Routes>
    </div>
  );
}

export default App;
