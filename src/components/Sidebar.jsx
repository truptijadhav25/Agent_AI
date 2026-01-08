// src/components/Sidebar.jsx
import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">AI Agent</div>

      <div className="sidebar-menu">
        <div className="menu-item active">Home</div>
        <div className="menu-item">Create User</div>
        <div className="menu-item">Search User</div>
        <div className="menu-item">License</div>
      </div>
    </div>
  );
};

export default Sidebar;
