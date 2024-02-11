import React from "react";
import "./NavBar.css";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-items">
        <div className="sample"></div>

        <div className="navbar-title">
          <p>David Lloyd</p>

          <div className="navbar-title-sub">
            <p>CLUB</p>
          </div>
        </div>

        <div className="navbar-menu">
          <div className="navbar-menu-icons">
            <div className="navbar-message-icon">
              <HiOutlineBellAlert />
            </div>
            <div className="navbar-setting-icon">
              <IoSettingsOutline />
            </div>
            <div className="navbar-logout-icon">
              <BiLogOut />
            </div>
          </div>

          <div className="navbar-menu-username">
            <p>Welcome Admin, David Lloyd</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
