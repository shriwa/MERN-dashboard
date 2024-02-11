import React from "react";
import "./TopBar.css";
import { IoChevronBack } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import { MdMoreHoriz } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { MdSportsHandball } from "react-icons/md";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar-top">
        <div className="left">
          <button className="btn">
            <IoChevronBack />
            <p>Player List</p>
          </button>
        </div>

        <div className="heading">
          <h1>Exclude From Mailshot</h1>
          <button>
            <IoIosCloseCircle color="#8b5aa4" size={20} />
          </button>
        </div>

        <div className="right">
          <button className="btn">
            <p>Other Info</p>
            <IoChevronForward />
          </button>
          <div className="right-more">
            <button>
              <MdMoreHoriz />
            </button>
          </div>
        </div>
      </div>

      <div className="topbar-bottom">
        <div className="left">
          <FaSearch size={25} />
          <h1>Opponent Search</h1>
        </div>

        <div className="right">
          <MdSportsHandball size={50} color="green" /> <h1>Head 2 Head</h1>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
