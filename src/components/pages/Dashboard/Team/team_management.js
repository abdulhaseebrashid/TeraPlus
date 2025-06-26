import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './team-management.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Sidebar from '../../../../components/global/Sidebar';
import notificationBox from '../../../../assets/img/Dashboard/team-icons/notification-icon.svg';
import searchIcon from '../../../../assets/img/Dashboard/team-icons/search_notification.svg';
import plusIcon from '../../../../assets/img/Dashboard/team-icons/plus.svg';
import DataTable from 'react-data-table-component';
import WhatsappIcon from '../../../../assets/img/Dashboard/team-icons/whatsapp-icon.svg';
import PhoneIcon from '../../../../assets/img/Dashboard/team-icons/phone-icon.svg';
import selectIcon from '../../../../assets/img/Dashboard/team-icons/select-open.svg';



const customStyles = {
    rows: {
      style: {
        backgroundColor: 'white',
        borderRadius: '12px',
        marginTop: '10px',
        marginBottom: '10px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        padding: '12px',
      },
    },
    headRow: {
      style: {
        backgroundColor: 'transparent',
        fontWeight: 'bold',
        borderBottom: 'none',
      },
    },
    table: {
      style: {
        borderCollapse: 'separate',
        borderSpacing: '0 10px', // vertical spacing between rows
        backgroundColor: 'transparent',
      },
    },
    headCells: {
        style: {
          color: '#91929E', // e.g., Tailwind blue-700
          fontWeight: '400',
          fontSize: '16px',
        },
      },
      subHeader: {
        style: {
          backgroundColor: 'transparent',
          padding: '0',
          marginBottom: '0',
          textAlign: 'center',
          justifyContent: 'start',
        },
      },
  };
  

const data = [
    {
      id: 1,
      name: 'אהרון כהן',
      profile: 'https://i.pravatar.cc/40?img=1',
      permissions: ['מנהל'], 
      email: ['info@support@gmail.com'],
      phone: '+1234567890',
      whatsapp: '+1234567890',
    },
    {
      id: 2,
      name: 'אהרון כהן',
      profile: 'https://i.pravatar.cc/40?img=2',
      permissions: ['עובד'],
      email: ['info@support@gmail.com'],
      phone: '+9876543210',
      whatsapp: '+9876543210',
    },
  ];
  
  const columns = [
    {
      name: 'שם העובד',
      selector: row => row.name,
      cell: row => (
        <div className="d-flex items-center align-items-center gap-3 team-management-team-name">
          <img src={row.profile} alt={row.name} className="w-8 h-8 rounded-full team-management-profile-image" />
          <span>{row.name}</span>
        </div>
      ),
    },
    {
      name: 'הרשאות',
      cell: row => (
        <div className="flex flex-wrap permissions-container-team-management">
        {row.permissions.map((perm, idx) => (
            <span key={idx} >
            {perm}
            </span>
        ))}
        </div>
      ),
    },
    {
        name: 'אימייל',
        cell: row => (
          <div className="flex flex-wrap gap-1 team-management-team-email">
            <span>{row.email}</span>
          </div>
        ),
      },
    {
      cell: row => (
        <div className="d-flex gap-4">
          <a href={`tel:${row.phone}`}>
            <img src={PhoneIcon} alt="Phone" className="text-blue-500 text-lg" />
          </a>
          <a href={`https://wa.me/${row.whatsapp}`} target="_blank" rel="noopener noreferrer">
            <img src={WhatsappIcon} alt="Whatsapp" className="text-green-500 text-lg" />
          </a>
        </div>
      ),
    },
  ];

const TeamManagement = ( ) => {

        const [showPopup, setShowPopup] = useState(false);

        const handleButtonClick = () => {
            setShowPopup(true);
        };

        const handleClose = () => {
            setShowPopup(false);
        };

    return (
        <section className="team-management-section">
            <div className="container-fluid">
                <div className="row rtl">
                    <div className="col-2 team-management-left-side-sidebar">
                    <Sidebar />
                    </div>
                    <div className="col-10 team-management-left-side">
                       <div className="row">
                        <div className="col-12">
                            <div className="notification-box d-flex justify-content-end align-items-start gap-2">
                                <div className="search-container rtl">
                                    <img src={searchIcon} alt="Search Icon" />
                                    <input type="text" className="form-control search-input" />
                                </div>
                                <div className="notification-icon">
                                    <img src={notificationBox} alt="notification-box" />
                                </div>
                            </div>
                        </div>
                       </div>
                       <div className="row">
                        <div className="col-12 left-side-header-container d-flex justify-content-between align-items-center">
                            <div className="team-management-left-side-title">
                                <h3>צוות</h3>
                            </div>
                            <div className="team-management-left-header-button d-flex gap-2">
                                <button className="team-management-left-header-button-add-user">ניהול צוות</button>
                                <button className="team-management-left-header-button-add-user">ניהול משמרות</button>
                            </div>
                            <div className="left-side-button-add-user">
                                <button className="button-add-user d-flex gap-2" onClick={handleButtonClick}><img src={plusIcon} alt="plus" />הוספת עובד </button>
                            </div>
                        </div>
                       </div>
                       <div className="row">
                        <div className="col-11 mx-auto">
                        <DataTable
                            columns={columns}
                            data={data}
                            responsive
                            customStyles={customStyles}
                            subHeader
                            subHeaderComponent={
                            <div className="total-records-container rtl">
                            סה״כ <span className="total-records-number">{data.length}</span>
                            </div>
                            }
                            />
                        </div>
                       </div>
                    </div>

                    {showPopup && ( 
                    <div className="business-summary-modal-overlay">
                        <div className="container">
                        <div className="row justify-content-center align-items-center min-vh-100">
                            <div className="col-lg-6">
                            <div className="business-summary-modal-content">
                                <button onClick={handleClose} className="position-absolute top-0 end-0 m-3 border-0 bg-transparent">
                                <i className="bi bi-x-lg close-from-btn"></i>
                                </button>
                                <h5 className="text-center mt-4 mb-4 business-summary-first-modal-title">הוספת עובד חדש</h5>
                                <form className="first-modal-form rtl">
                                <div className="row">
                                    <div className="col-md-12 mb-2">
                                    <label>שם העובד</label>
                                    <input type="text" className="form-control" name="employeeName" placeholder="אהרון כהן" />
                                    </div>
                                    <div className="col-md-12 mb-2">
                                    <label>מספר טלפון</label>
                                    <input type="number" className="form-control" name="phone" placeholder="0546679786" />
                                    </div>
                                    <div className="col-md-6 mb-2">
                                    <label>תאריך הצטרפות</label>
                                    <input type="date" className="form-control" name="date" placeholder="19/09/2025" />
                                    </div>
                                    <div className="col-6">
                                    <label>הרשאות</label>
                                    <div className="position-relative">
                                      <select className="form-control ps-5"> {/* Increased left padding */}
                                        <option value="">בחר הרשאה</option>
                                        <option value="management">ניהול</option>
                                        <option value="work">עבודה</option>
                                      </select>
                                      <img src={selectIcon} alt="select-icon" className="position-absolute start-0 top-50 translate-middle-y ms-2" />
                                    </div>
                                  </div>
                                </div>
                                <div className="text-center mt-4">
                                    <button type="submit" className="first-modal-form-button w-100 border-0">שמור </button>
                                </div>
                                </form>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </section>
    )
};

export default TeamManagement;
