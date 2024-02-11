import React from "react";
import "./Dashboard.css";
import Form from "../../Components/Form/Form";
import TopBar from "../../Components/TopBar/TopBar";
import Profile from "../../Components/Profile/Profile";

const Dashboard = ({ collapsed }) => {
  return (
    <div className={`dashboard ${collapsed ? "collapsed" : ""}`}>
      <TopBar />
      <div className={`main ${collapsed ? "collapsed" : ""}`}>
        <Form />
        <Profile />
      </div>
    </div>
  );
};

export default Dashboard;
