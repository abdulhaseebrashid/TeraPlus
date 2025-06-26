"use client"
import "./Dashboard.css"
import reportdownload from "../../../assets/img/Dashboard/Reports/reportdownload.svg"
import reportcalender from "../../../assets/img/Dashboard/Reports/reportcalender.svg"
import frameAddIcon from "../../../assets/icons/FrameAddImg.svg"

const customers = [
  {
    name: "דניאל דניאלי",
    id: "1",
    phone: "0566746738",
    email: "eshera@swimtriple.com",
    joinDate: "01/01/2025",
    status: "פעיל",
    credits: 250,
    lastVisit: "01/01/2023",
    profileImage: frameAddIcon,
  },
  {
    name: "דניאל דניאלי",
    id: "2",
    phone: "0566746738",
    email: "eshera@swimtriple.com",
    joinDate: "01/01/2025",
    status: "פעיל",
    credits: 250,
    lastVisit: "01/01/2023",
    profileImage: frameAddIcon,
  },
  {
    name: "דניאל דניאלי",
    id: "3",
    phone: "0566746738",
    email: "eshera@swimtriple.com",
    joinDate: "01/01/2025",
    status: "פעיל",
    credits: 250,
    lastVisit: "01/01/2023",
    profileImage: frameAddIcon,
  },
  {
    name: "דניאל דניאלי",
    id: "4",
    phone: "0566746738",
    email: "eshera@swimtriple.com",
    joinDate: "01/01/2025",
    status: "פעיל",
    credits: 250,
    lastVisit: "01/01/2023",
    profileImage: frameAddIcon,
  },
  {
    name: "דניאל דניאלי",
    id: "5",
    phone: "0566746738",
    email: "eshera@swimtriple.com",
    joinDate: "01/01/2025",
    status: "פעיל",
    credits: 250,
    lastVisit: "01/01/2023",
    profileImage: frameAddIcon,
  },
  {
    name: "דניאל דניאלי",
    id: "6",
    phone: "0566746738",
    email: "eshera@swimtriple.com",
    joinDate: "01/01/2025",
    status: "פעיל",
    credits: 250,
    lastVisit: "01/01/2023",
    profileImage: frameAddIcon,
  },
]

function JoinedCustomerReport() {
  return (
    <div className="dashboard-container" dir="rtl">
      {/* Header Section */}
      <div className="dashboard-header">
        <div className="header-left">
          <span className="breadcrumb">כל הדוחות</span>
          <svg
            className="breadcrumb-arrow"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="15,18 9,12 15,6" />
          </svg>
        </div>

        <div className="header-center">
          <h1 className="page-title">דו״ח לקוחות שצטרפו</h1>
        </div>

        <div className="header-right">
          <div className="search-container">
            <svg
              className="search-icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <input type="text" placeholder="Type here" className="search-input" />
          </div>
          <button className="notification-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button className="export-btn">
          <img src={reportdownload || "/placeholder.svg"} alt="export" className="btn-icon" />
          יצוא
        </button>
        <button className="refresh-btn">
          <img src={reportcalender || "/placeholder.svg"} alt="refresh" className="btn-icon" />
          חדש
        </button>
      </div>

      {/* Total Count */}
      <div className="total-count">
        <span>סה״כ 6</span>
      </div>

      {/* Table - Starting from YOUR right hand side */}
      <div className="table-container">
        <table className="customers-table">
          <thead>
            <tr>
              {/* Column 1 - YOUR RIGHT SIDE: Customer Name with Image */}
              <th>שם לקוח</th>
              {/* Column 2: Phone Number */}
              <th>מספר טלפון</th>
              {/* Column 3: Join Date */}
              <th>תאריך הצטרפות</th>
              {/* Column 4: Customer Status */}
              <th>סטטוס לקוח</th>
              {/* Column 5 - YOUR LEFT SIDE: Last Visit */}
              <th>ביקור אחרון</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, idx) => (
              <tr key={customer.id}>
                {/* Column 1 - YOUR RIGHT SIDE: Customer Info with Image */}
                <td className="customer-info-cell">
                  <div className="customer-info">
                    <div className="customer-details">
                      <div className="customer-name">{customer.name}</div>
                      <div className="customer-email">{customer.email}</div>
                    </div>
                    <img
                      src={frameAddIcon || "/placeholder.svg"}
                      alt="Profile"
                      className="profile-image"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg?height=40&width=40"
                      }}
                    />
                  </div>
                </td>
                {/* Column 2: Phone Number */}
                <td>{customer.phone}</td>
                {/* Column 3: Join Date */}
                <td>{customer.joinDate}</td>
                {/* Column 4: Customer Status */}
                <td className="status-cell">{customer.status}</td>
                {/* Column 5 - YOUR LEFT SIDE: Last Visit */}
                <td className="last-visit-cell">{customer.lastVisit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default JoinedCustomerReport
