import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

function Home() {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <Navbar></Navbar>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default Home;
