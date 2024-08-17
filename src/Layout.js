import React from 'react';
import { Routes } from "react-router-dom";
import Header from './header/Header';
import IpcOpc from './ipcandopcbutton/IpcOpc';
import Mainscreen from './mainpages/Mainpage';
import Opd from './opdsection/Opd';
import Parent from './parentfolder/Parent';
import Bed from './bedinfo/Bed';
import Patient from './patient/Patient';
import './index.css';
const Layout = () => {
  return (
    <div className="">
    <Header/>
    <Patient/>
    
{/* <Bed/> */}
     {/* <Parent/> */}
    <IpcOpc/>
    {/* <Opd/>
    <Mainscreen/> */}
      <div className="all-side-bar">
        <div className="side-bar-left">
          <div className="left" style={{ width: "" }}>
          </div>
          <div className="main">
            <Routes>
              {/* Add your <Route> components here */}
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
