import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import Details from "./component/Details/Details";
import Header from "./component/Header/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:id" element={<Details />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
