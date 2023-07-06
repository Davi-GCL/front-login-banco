import React from "react";
import {useEffect, useState} from "react";
import './App.css';

import { Outlet } from "react-router-dom";
import NavBar from "./comps/NavBar";


function App() {

  return (
    <React.Fragment>
    <NavBar/>
    <div className="container w-100">
      <div className='row mt-5 justify-content-center'>
        <Outlet />
      </div>
    </div>
    </React.Fragment>
  );
}

export default App;
