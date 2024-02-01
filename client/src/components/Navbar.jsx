import React, { useState, useEffect } from "react";
import gallery from "../assets/gallery.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full  z-999 flex items-center justify-between px-10 py-3 bg-primaryDark fixed top-0">
      <div className="w-14 h-14 cursor-pointer">
          <Link to="/">
            <img src={gallery} alt="gallerylogo" />
          </Link>
        </div>

  
       
          <Link to="/uploadfile" className="text-xl text-white font-medium">
            Upload
          </Link>
       
    </div>
  );
};

export default Navbar;
