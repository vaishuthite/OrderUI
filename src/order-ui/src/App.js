import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import CreateOrder from "./components/create-order";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/create-order" element={<CreateOrder />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
