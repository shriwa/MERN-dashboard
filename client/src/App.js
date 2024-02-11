import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Dashboard from "./pages/Dashboard/Dashboard";
import SideBar from "./Components/Sidebar/Sidebar";
import React, { useState } from "react";

function App() {
  const [dashboardCollapsed, setDashboardCollapsed] = useState(false);

  const toggleDashboard = (collapsed) => {
    setDashboardCollapsed(!collapsed);
  };

  return (
    <div>
      <Router>
        <NavBar />
        <SideBar toggleDashboard={toggleDashboard} />
        <Routes>
          <Route
            path="/"
            element={<Dashboard collapsed={dashboardCollapsed} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
