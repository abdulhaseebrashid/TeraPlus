"use client"
import { Link } from "react-router-dom"
import "./Sidebar.css"

import logo1 from "../../assets/img/Dashboard/Dashboardicn1.svg"
import logo2 from "../../assets/img/Dashboard/Dashboardicn2.svg"
import logo3 from "../../assets/img/Dashboard/Dashboardicn3.svg"
import teamIcon from "../../assets/img/Dashboard/team_icon.svg"
import logo4 from "../../assets/img/Dashboard/Dashboardicn4.svg"
import logo5 from "../../assets/img/Dashboard/Dashboardicn5.svg"
import logo6 from "../../assets/img/Dashboard/Dashboardicn6.svg"
import logo7 from "../../assets/img/Dashboard/Dashboardicn7.svg"
import logoutIcon from "../../assets/img/Dashboard/logout.svg"
import settingIcon from "../../assets/img/Dashboard/setting_icon.svg"

const menuItems = [
  { icon: logo2, label: "יומן פגישות" }, // Calendar
  { icon: teamIcon, label: "מאגר לקוחות" }, // Client DB (now using teamIcon)
  { icon: logo4, label: "תשלום" }, // Payment
  { icon: logo5, label: "ניהול צוות" }, // Team
  { icon: logo6, label: "מחירון" }, // Pricing
  { icon: logo7, label: "לוח בקרה", active: true }, // Dashboard
  { label: "הגדרות משתמש", type: "heading" }, // Section header
  { icon: logo3, label: "אזור אישי" }, // User area
  { icon: settingIcon, label: "הגדרות" }, // Settings
  { icon: logoutIcon, label: "התנתקות" }, // Logout
]

const Sidebar = ({ className, onClose }) => {
  return (
    <div className={`sidebar-global ${className}`}>
      {/* Logo */}
      <div className="sidebar-logo">
        <Link to="/" onClick={onClose}>
          <img src={logo1 || "/placeholder.svg"} alt="TheraPlus Logo" />
        </Link>
      </div>

      {/* Menu Items */}
      <div className="sidebar-content">
        <ul className="sidebar-nav">
          {menuItems.map((item, idx) =>
            item.type === "heading" ? (
              <li key={idx} className="nav-heading">
                <span className="nav-text heading-text">{item.label}</span>
              </li>
            ) : (
              <li key={item.label} className={`nav-item ${item.active ? "active" : ""}`} onClick={onClose}>
                <div className="nav-item-content">
                  <div className="nav-icon-wrapper">
                    <img
                      src={item.icon || "/placeholder.svg"}
                      alt={item.label}
                      className={`sidebar-menu-icon ${item.icon === teamIcon || item.icon === logoutIcon ? "no-filter" : ""}`}
                    />
                  </div>
                  <span className="nav-text">{item.label}</span>
                </div>
              </li>
            ),
          )}
        </ul>
      </div>

      {/* Help Box */}
      <div className="sidebar-help-box">
        <div className="help-icon-wrapper">
          <div className="help-icon">?</div>
        </div>
        <div className="help-content">
          <p className="help-title">צריכים עזרה?</p>
          <p className="help-subtext">לחצו כאן לתמיכה במערכת</p>
          <button className="help-button">לתמיכה במערכת</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
