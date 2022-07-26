import React from "react";
import './App.css';
import Home from './Home'
import Header from "./Header";
import Checkout from "./Checkout"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 
// eslint-disable-next-line
{/* Header */}
// eslint-disable-next-line
{/* Home */}

function App() {
  return (
    <Router>
    <div className="App">
    <Header/>
    <Routes>
      <Route path="/checkout" element={<Checkout/>} />
      <Route path="/" element={<Home/>} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;
