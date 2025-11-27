import React from "react";
import "../styles/sidebar.css";

const Sidebar = ({ onNavigate }) => {
  return (
    <div className="sidebar">
      <ul>
        <li><button onClick={() => onNavigate("dashboard")}>All Ideas</button></li>
        <li><button onClick={() => onNavigate("myIdeas")}>My Ideas</button></li>
        <li><button onClick={() => onNavigate("addIdea")}>Add New</button></li>
        <li><button onClick={() => onNavigate("profile")}>Profile</button></li>
        <li><button onClick={() => onNavigate("login")}>Logout</button></li>
      </ul>
    </div>
  );
};

export default Sidebar;
