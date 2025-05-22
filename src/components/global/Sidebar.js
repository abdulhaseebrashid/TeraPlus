import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import logo1 from '../../assets/img/Dashboard/Dashboardicn1.svg';
import logo2 from '../../assets/img/Dashboard/Dashboardicn2.svg';
import logo3 from '../../assets/img/Dashboard/Dashboardicn3.svg';
import logo4 from '../../assets/img/Dashboard/Dashboardicn4.svg';
import logo5 from '../../assets/img/Dashboard/Dashboardicn5.svg';
import logo6 from '../../assets/img/Dashboard/Dashboardicn6.svg';
import logo7 from '../../assets/img/Dashboard/Dashboardicn7.svg';
import logo8 from '../../assets/img/Dashboard/Dashboardicn88.svg';

const menuItems = [
  { icon: logo2, label: 'מנהל משמרות' },
  { icon: logo3, label: ' מאגר מטופלים' },
  { icon: logo4, label: 'מאגר מטופלים' },
  { icon: logo5, label: 'צוות חכם' },
  { icon: logo6, label: 'מחירון דינמי' },
  { icon: logo7, label: 'לוח בקרה', active: true },
];

const Sidebar = () => {
  return (
    <div className="sidebar-global d-flex flex-column align-items-center justify-content-center bg-dark text-white p-3">
      <div className="sidebar-logo mb-5 mt-2 d-flex justify-content-center">
        <Link to="/">
          <img src={logo1} alt="TheraPlus Logo" />
        </Link>
      </div>
      <ul className="sidebar-nav nav flex-column w-100 mb-auto align-items-center">
        {menuItems.map((item, idx) => (
          <li key={item.label} className={`nav-item mb-4 text-center ${item.active ? 'active' : ''}`}> 
            <img src={item.icon} alt={item.label} className="sidebar-menu-icon mb-1" />
            <span className="align-middle">{item.label}</span>
          </li>
        ))}
      </ul>
      <div className="sidebar-user mt-auto d-flex flex-column align-items-center text-center">
        <Link to="/user-details">
          <img src={logo8} alt="User" className="sidebar-user-avatar mb-2" />
          <span>אהרון כהן</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar; 