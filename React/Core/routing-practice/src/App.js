import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Paramcomponent from "./components/Paramcomponent";
function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:word" element={<Paramcomponent />} />
        <Route path="/:word/:color" element={<Paramcomponent />} />
        <Route path="/:word/:color/:bgCol" element={<Paramcomponent />} />
      </Routes>
    </div>
  );
}

export default App;
