import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <React.Fragment>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </React.Fragment>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
