import React from 'react';
import './Dashboard.css';
import reportarrow from "../../../assets/img/Dashboard/Reports/reportarrow.svg";
import reportdownload from "../../../assets/img/Dashboard/Reports/reportdownload.svg";
import reportcalender from "../../../assets/img/Dashboard/Reports/reportcalender.svg";



const customers = [
  {
    name: 'מתן דניאלי',
    id: '1',
    phone: '0546679785',
    email: 'aheron806@gmail.com',
    joinDate: '01/01/2025',
    status: 'פעיל',
    credits: 250,
    lastVisit: '',
  },
  {
    name: 'מתן דניאלי',
    id: '2',
    phone: '0546679785',
    email: 'aheron806@gmail.com',
    joinDate: '01/01/2025',
    status: 'פעיל',
    credits: 250,
    lastVisit: '',
  },
  {
    name: 'מתן דניאלי',
    id: '3',
    phone: '0546679785',
    email: 'aheron806@gmail.com',
    joinDate: '01/01/2025',
    status: 'פעיל',
    credits: 250,
    lastVisit: '',
  },
  {
    name: 'מתן דניאלי',
    id: '4',
    phone: '0546679785',
    email: 'aheron806@gmail.com',
    joinDate: '01/01/2025',
    status: 'פעיל',
    credits: 250,
    lastVisit: '',
  },
  {
    name: 'מתן דניאלי',
    id: '5',
    phone: '0546679785',
    email: 'aheron806@gmail.com',
    joinDate: '01/01/2025',
    status: 'פעיל',
    credits: 250,
    lastVisit: '',
  },
];

function JoinedCustomerReport() {
  return (
    <div className="joined-customer-report-container" dir="rtl">
      <div className="header-row">
        <span className="breadcrumb">
        <span className="breadcrumb-arrow">
            <img src={reportarrow} alt="arrow" />
          </span>
          חזרה לדו״חות
          
        </span>
      </div>
      {/* Title and buttons in one row for alignment */}
      <div className="title-actions-row">
        <h2 className="main-title">דו״ח לקוחות שהצטרפו</h2>
        <div className="action-row">
          
          <button className="btn refresh-btn">
            <span className="icon">
              <img src={reportcalender} alt="calendar" />
            </span>
            חדש
          </button>
          <button className="btn export-btn">
            <span className="icon">
              <img src={reportdownload} alt="download" />
            </span>
            יצוא
          </button>
        </div>
      </div>
      <div className="total-customers-count"> <span>סה״כ 5</span></div>
      <div className="table-responsive joined-customer-table-wrapper">
        <table className="table joined-customer-table">
          <thead>
            <tr>
              <th scope="col"><input type="checkbox" /></th>
              <th scope="col">שם לקוח</th>
              <th scope="col">מספר לקוח</th>
              <th scope="col">מספר סלולר</th>
              <th scope="col">אימייל</th>
              <th scope="col">תאריך הצטרפות</th>
              <th scope="col">סטטוס לקוח</th>
              <th scope="col">מספר נקובים</th>
              <th scope="col">ביקור אחרון</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, idx) => (
              <tr key={customer.id}>
                <td data-label="" ><input type="checkbox" /></td>
                <td className="customer-name-link data-label" data-label="שם לקוח">{customer.name}</td>
                <td className="data-label" data-label="מספר לקוח">{customer.id}</td>
                <td className="data-label" data-label="מספר סלולר">{customer.phone}</td>
                <td className="data-label" data-label="אימייל">{customer.email}</td>
                <td className="data-label" data-label="תאריך הצטרפות">{customer.joinDate}</td>
                <td className="data-label" data-label="סטטוס לקוח">{customer.status}</td>
                <td className="data-label" data-label="מספר נקובים">{customer.credits}</td>
                <td className="last-visit-cell data-label" data-label="ביקור אחרון">{customer.lastVisit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default JoinedCustomerReport;
