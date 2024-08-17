import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import {  ToastContainer } from "react-toastify";

import Layout from './Layout';
import './App.css';
import './index.css';
function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Router> {/* Wrap your app in the Router component */}
        <Layout />
      </Router>
    </div>
  );
}

export default App;
