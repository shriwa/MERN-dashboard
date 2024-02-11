import React, { useState } from "react";
import "./Sidebar.css";
import logo from "../../Assets/4_love_logo.png";

import {
  HomeOutlined,
  DoubleRightOutlined,
  DoubleLeftOutlined,
} from "@ant-design/icons";

import { MdOutlineSportsTennis } from "react-icons/md";
import { FaBoxes } from "react-icons/fa";
import { CiTrophy } from "react-icons/ci";
import { TfiMenuAlt } from "react-icons/tfi";
import { TbSocial } from "react-icons/tb";
import { LiaCertificateSolid } from "react-icons/lia";
import { AiOutlineTeam } from "react-icons/ai";
import { FaNewspaper } from "react-icons/fa";
import { GiAmericanFootballPlayer } from "react-icons/gi";
import { RiGraduationCapLine } from "react-icons/ri";
import { RiTeamLine } from "react-icons/ri";
import { IoIosPerson } from "react-icons/io";
import { LuBookPlus } from "react-icons/lu";
import { LuFolderSearch } from "react-icons/lu";

import { Button, Menu } from "antd";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Home", "1", <HomeOutlined />),
  getItem("Matches", "2", <MdOutlineSportsTennis />),
  getItem("Box Leagues", "3", <FaBoxes />),
  getItem("Ladders", "4", <CiTrophy />),
  getItem("Championship", "5", <TfiMenuAlt />),
  getItem("social", "6", <TbSocial />),
  getItem("Tournaments", "7", <LiaCertificateSolid />),
  getItem("Team Events", "8", <AiOutlineTeam />),
  getItem("Newsfeeds", "9", <FaNewspaper />),
  getItem("Players", "10", <GiAmericanFootballPlayer />),
  getItem("Coaches", "11", <RiGraduationCapLine />),
  getItem("Teams", "12", <RiTeamLine />),
  getItem("Private Classes", "13", <IoIosPerson />),
  getItem("New Registration", "14", <LuBookPlus />),
  getItem("Opponent Search", "15", <LuFolderSearch />),
];

const Sidebar = ({ toggleDashboard }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
    toggleDashboard(!collapsed);
  };

  return (
    <div className={`sidebar-container ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="side-bar-items">
          <div className="menu-container">
            <Button
              type="primary"
              onClick={toggleCollapsed}
              style={{ background: "white", color: "black" }}
            >
              {collapsed ? <DoubleRightOutlined /> : <DoubleLeftOutlined />}
            </Button>

            <Menu
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              inlineCollapsed={collapsed}
              items={items}
              style={{ backgroundColor: "white" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
