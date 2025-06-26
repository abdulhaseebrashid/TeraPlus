"use client"

import { useState } from "react"
import { Chart } from "react-google-charts"
import Sidebar from "../../global/Sidebar"
import "./Dashboard.css"
import dashboardcard1 from "../../../assets/img/Dashboard/dashboardcard1.svg"
import dashboardcard2 from "../../../assets/img/Dashboard/dashboardcard2.svg"
import dashboardcard3 from "../../../assets/img/Dashboard/dashboardcard3.svg"
import dashboardcard4 from "../../../assets/img/Dashboard/dashboardcard4.svg"
import dashboardcardarrow from "../../../assets/img/Dashboard/dashboardarrow.svg"
import userreport from "../../../assets/img/Dashboard/Reports/repouser.svg"
import report2 from "../../../assets/img/Dashboard/Reports/repo2.svg"
import report3 from "../../../assets/img/Dashboard/Reports/repo3.svg"
import report4 from "../../../assets/img/Dashboard/Reports/repo4.svg"
import cardvector from "../../../assets/icons/card-vector.svg"
import { BiMenu } from "react-icons/bi"
import { BsCalendar4, BsPerson, BsCart3, BsPeople, BsTag, BsGraphUp } from "react-icons/bs"
import { Link } from "react-router-dom"

const sidebarItems = [
  { icon: <BsCalendar4 />, label: "מנהל משמרות", path: "/shifts" },
  { icon: <BsPerson />, label: "מאגר מטופלים", path: "/patients" },
  { icon: <BsCart3 />, label: "ניהול מוצרים", path: "/products" },
  { icon: <BsPeople />, label: "צוות חכם", path: "/team" },
  { icon: <BsTag />, label: "מחירון דינמי", path: "/pricing" },
  { icon: <BsGraphUp />, label: "לוח בקרה", path: "/dashboard" },
]

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [selectedTab, setSelectedTab] = useState("overview") // 'overview' or 'reports'

  const toggleSidebar = () => {
    console.log("Toggling sidebar:", !isSidebarOpen) // Debug log
    setIsSidebarOpen(!isSidebarOpen)
  }

  // Example data for charts
  const popularTreatmentsData = [
    ["טיפול", "מספר תורים"],
    ["עיסוי שוודי", 35],
    ["עיסוי רקמות עמוק", 25],
    ["רפלקסולוגיה", 20],
    ["שיאצו", 15],
    ["אחר", 5],
  ]

  const pieOptions = {
    title: "",
    pieHole: 0.7,
    is3D: false,
    colors: ["#4CAF50", "#2196F3", "#FFC107", "#9C27B0", "#E57373"],
    legend: {
      position: "right",
      alignment: "center",
      textStyle: {
        fontSize: 12,
        color: "#5f6368",
        fontName: "Arial, sans-serif",
      },
      maxLines: 5,
      itemMarginBottom: 12,
    },
    chartArea: {
      width: "65%",
      height: "80%",
      left: 20,
      top: 20,
      right: 20,
      bottom: 20,
    },
    pieSliceText: "none",
    backgroundColor: "transparent",
    tooltip: {
      text: "percentage",
      showColorCode: true,
    },
    fontSize: 12,
    fontName: "Arial, sans-serif",
  }

  const businessGrowthData = [
    ["חודש", "הכנסות", "לקוחות חדשים"],
    ["ינו", 12000, 15],
    ["פבר", 15000, 18],
    ["מרץ", 18000, 22],
    ["אפר", 16000, 19],
    ["מאי", 21000, 24],
    ["יוני", 25000, 28],
  ]

  const businessGrowthOptions = {
    title: "",
    curveType: "function",
    legend: {
      position: "bottom",
      textStyle: {
        fontSize: 12,
        color: "#5f6368",
        fontName: "Arial, sans-serif",
      },
    },
    hAxis: {
      title: "חודש",
      titleTextStyle: {
        color: "#5f6368",
        fontSize: 12,
        fontName: "Arial, sans-serif",
        italic: false,
      },
      textStyle: {
        color: "#5f6368",
        fontSize: 11,
        fontName: "Arial, sans-serif",
      },
      gridlines: {
        color: "#f5f5f5",
        count: -1,
      },
      minorGridlines: {
        color: "transparent",
      },
      baselineColor: "#e0e0e0",
    },
    vAxis: {
      title: "כמות",
      titleTextStyle: {
        color: "#5f6368",
        fontSize: 12,
        fontName: "Arial, sans-serif",
        italic: false,
      },
      textStyle: {
        color: "#5f6368",
        fontSize: 11,
        fontName: "Arial, sans-serif",
      },
      gridlines: {
        color: "#f5f5f5",
        count: 5,
      },
      minorGridlines: {
        color: "transparent",
      },
      baselineColor: "#e0e0e0",
      minValue: 0,
    },
    colors: ["#4CAF50", "#2196F3"],
    chartArea: {
      width: "90%",
      height: "70%",
      left: 60,
      top: 40,
      right: 20,
      bottom: 60,
    },
    backgroundColor: "transparent",
    tooltip: {
      isHtml: true,
      textStyle: {
        fontSize: 12,
        fontName: "Arial, sans-serif",
      },
    },
    focusTarget: "category",
    crosshair: {
      trigger: "both",
      color: "#5f6368",
      opacity: 0.2,
    },
    pointSize: 5,
    lineWidth: 2,
    animation: {
      startup: true,
      duration: 1000,
      easing: "out",
    },
  }

  return (
    <div className="dashboard-container">
      {/* Menu Toggle Button */}
      <button className={`menu-toggle ${isSidebarOpen ? "active" : ""}`} onClick={toggleSidebar}>
        <BiMenu size={24} />
      </button>

      {/* Global Sidebar */}
      <div className={`sidebar-global ${isSidebarOpen ? "active" : ""}`}>
        <Sidebar menuItems={sidebarItems} />
      </div>

      <div className="main-content">
        <div className="dashboard-header">
          <div className="dashboard-header-left">
            <button className="icon-btn notification-btn">
              <i className="bi bi-bell" style={{ color: "gray" }}></i>
            </button>
            <div className="search-box">
              <i className="bi bi-search"></i>
              <input type="text" className="form-control" placeholder="Search..." />
            </div>
          </div>
          <div className="dashboard-title" style={{ minWidth: 120, marginLeft: 500, fontSize: 20 }}>
            לוח בקרה
          </div>
          <div style={{ minWidth: 120 }}></div> {/* Empty div for flex spacing */}
        </div>

        {/* Tabs */}
        <div className="dashboard-tabs d-flex align-items-center justify-content-between mb-4">
          <div className="flex-grow-1 d-flex justify-content-center">
            <div className="dashboard-tabs-buttons">
              <button
                className={`btn ms-2 ${selectedTab === "overview" ? "btn-dark" : "btn-light"}`}
                onClick={() => setSelectedTab("overview")}
                style={{ transition: "background 0.3s, color 0.3s" }}
              >
                דו"חות
              </button>
              <button
                className={`btn ${selectedTab === "reports" ? "btn-dark" : "btn-light"}`}
                onClick={() => setSelectedTab("reports")}
                style={{ transition: "background 0.3s, color 0.3s" }}
              >
                מבט כלל
              </button>
            </div>
          </div>
          <div style={{ minWidth: 120 }}></div> {/* Placeholder for symmetry */}
        </div>

        {/* Tab Content */}
        <div style={{ transition: "opacity 0.3s", minHeight: 300 }}>
          {selectedTab === "overview" && (
            <div className="tab-content-overview fade-in">
              {/* Cards Row */}
              <div className="row mb-4 gx-4 gy-4">
                {/* AI Insights Card on the left */}
                <div className="col-lg-3">
                  <div
                    className="card ai-insights-card p-3 mb-3"
                    dir="rtl"
                    style={{
                      position: "relative",
                      right: "-365px",
                      top: "95px",
                      height: "0px",
                    }}
                  >
                    <h6 className="mb-3">תובנות AI</h6>
                    <div className="insight bg-insight-green p-2 mb-2 text-end">
                      מקום פנוי לשבוע הבא עלה ב-15% מהחודש שעבר - שווה לשקול קמפיין
                    </div>
                    <div className="insight bg-insight-blue p-2 mb-2 text-end">
                      הכנסה ממוצעת ללקוח השתפרה ביחס לחודש קודם
                    </div>
                    <div className="insight bg-insight-red p-2 text-end">יש ירידה בתורים ביום חמישי - מומלץ</div>
                  </div>
                </div>
                {/* 4 Summary Cards on the right in a 2x2 grid */}
                <div className="col-lg-9">
                  <div
                    className="row gx-4 gy-4"
                    style={{
                      maxWidth: "780px",
                      position: "relative",
                      right: "-260px",
                      top: "100px",
                    }}
                  >
                    <div className="col-md-6 dashboard-summary-card">
                      <div
                        className="card p-3 summary-card text-end d-flex flex-row align-items-center justify-content-between"
                        dir="rtl"
                      >
                        <div className="summary-icon-wrapper ms-3">
                          <img
                            src={dashboardcard1 || "/placeholder.svg"}
                            alt={'סה"כ הכנסות'}
                            className="summary-svg-icon"
                          />
                        </div>
                        <div className="flex-grow-1 text-end">
                          <div className="summary-label mb-1">דירוג העסק</div>
                          <div className="d-flex align-items-center justify-content-between mb-1">
                            <span className="summary-value">4.9%</span>
                            <span className="badge bg-success ms-2">+1.4%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 dashboard-summary-card">
                      <div
                        className="card p-3 summary-card text-end d-flex flex-row align-items-center justify-content-between"
                        dir="rtl"
                      >
                        {/* Icon in circle on the right */}
                        <div className="summary-icon-wrapper ms-3">
                          <img
                            src={dashboardcard2 || "/placeholder.svg"}
                            alt="דירוג העסק"
                            className="summary-svg-icon"
                          />
                        </div>
                        <div className="flex-grow-1 text-end">
                          <div className="summary-label mb-1">סך הכנסות</div>
                          <div className="d-flex align-items-center justify-content-between mb-1">
                            <span className="summary-value">30,000</span>
                            <span className="badge bg-success ms-2">+1.4%</span>
                          </div>
                          <Link to="#" className="summary-link text-dark small">
                            כל ההכנסות{" "}
                            <img
                              src={dashboardcardarrow || "/placeholder.svg"}
                              alt="arrow"
                              className="summary-link-arrow ms-1"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 dashboard-summary-card">
                      <div
                        className="card p-3 summary-card text-end d-flex flex-row align-items-center justify-content-between"
                        dir="rtl"
                      >
                        <div className="summary-icon-wrapper ms-3">
                          <img
                            src={dashboardcard4 || "/placeholder.svg"}
                            alt={'סה"כ טיפולים'}
                            className="summary-svg-icon"
                          />
                        </div>
                        <div className="flex-grow-1 text-end">
                          <div className="summary-label mb-1">סך הטיפולים</div>
                          <div className="d-flex align-items-center justify-content-between mb-1">
                            <span className="summary-value">50</span>
                            <span className="badge bg-success ms-2">+50%</span>
                          </div>
                          <Link to="#" className="summary-link text-dark small">
                            כל הטיפולים{" "}
                            <img
                              src={dashboardcardarrow || "/placeholder.svg"}
                              alt="arrow"
                              className="summary-link-arrow ms-1"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 dashboard-summary-card">
                      <div
                        className="card p-3 summary-card text-end d-flex flex-row align-items-center justify-content-between"
                        dir="rtl"
                      >
                        <div className="summary-icon-wrapper ms-3">
                          <img
                            src={dashboardcard3 || "/placeholder.svg"}
                            alt="לקוחות חדשים"
                            className="summary-svg-icon"
                          />
                        </div>
                        <div className="flex-grow-1 text-end">
                          <div className="summary-label mb-1">לקוחות חדשים</div>
                          <div className="d-flex align-items-center justify-content-between mb-1">
                            <span className="summary-value">20</span>
                            <span className="badge bg-danger ms-2">-20%</span>
                          </div>
                          <Link to="#" className="summary-link text-dark small">
                            כל הלקוחות
                            <img
                              src={dashboardcardarrow || "/placeholder.svg"}
                              alt="arrow"
                              className="summary-link-arrow ms-1"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Charts Row */}
              <div className="row gx-4 gy-4 mt-3">
                {/* Popular Treatments Pie Chart */}
                <div className="col-lg-4">
                  <div
                    className="card p-3 h-100"
                    style={{
                      position: "relative",
                      right: "-1215px",
                      top: "40px",
                      maxWidth: "0px",
                      maxHeight: "345px",
                    }}
                  >
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h6 className="mb-0">טיפולים פופולריים</h6>
                      <div className="dropdown">
                        <button
                          className="btn btn-sm btn-outline-secondary dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          החודש
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                          <li>
                            <a className="dropdown-item" href="#">
                              היום
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item active" href="#">
                              החודש
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              השנה
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <Chart
                      chartType="PieChart"
                      width="100%"
                      height="300px"
                      data={popularTreatmentsData}
                      options={pieOptions}
                    />
                  </div>
                </div>
                {/* Business Growth Line Chart */}
                <div className="col-lg-8">
                  <div
                    className="card p-3 h-100"
                    style={{
                      maxHeight: "350px",
                      position: "relative",
                      top: "40px",
                      right: "220px",
                    }}
                  >
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h6 className="mb-0">צמיחת העסק</h6>
                      <div className="btn-group" role="group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">
                          יום
                        </button>
                        <button type="button" className="btn btn-sm btn-outline-secondary active">
                          שבוע
                        </button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">
                          חודש
                        </button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">
                          שנה
                        </button>
                      </div>
                    </div>
                    <Chart
                      chartType="LineChart"
                      width="100%"
                      height="300px"
                      data={businessGrowthData}
                      options={businessGrowthOptions}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          {selectedTab === "reports" && (
            <div className="tab-content-reports fade-in">
              {/* Replace this with your actual reports content */}
              <div className="container" dir="rtl">
                <div className="row g-4" style={{ position: "relative", top: "85px" }}>
                  <div className="col-12 col-md-6">
                    <div className="cardrep report-card">
                      <div className="report-card-header">
                        <img src={userreport || "/placeholder.svg"} alt="לקוחות" className="report-card-icon" />
                        <span className="report-card-title">לקוחות</span>
                      </div>
                      <div className="report-card-body Motorcycles">
                        <div className="report-card-desc">
                          צפו ונהלו את כל השירותים ללקוחות בעסק. הדוחות מציגים את סך סוגי הלקוחות ונותנים לכם תובנות לכל
                          סוג לקוח וסטטיסטיקה.
                        </div>
                        <ul className="report-card-list">
                          <li>
                            <Link to="/joined-customer-report">
                              לקוחות שצורפו{" "}
                              <img src={cardvector || "/placeholder.svg"} alt="arrow" className="card-arrow-icon" />
                            </Link>
                          </li>
                          <li>
                            <Link to="/customer-churn-report">
                              לקוחות שעזבו{" "}
                              <img src={cardvector || "/placeholder.svg"} alt="arrow" className="card-arrow-icon" />
                            </Link>
                          </li>
                          <li>
                            <Link to="/realization-of-royalities">
                              לקוחות VIP{" "}
                              <img src={cardvector || "/placeholder.svg"} alt="arrow" className="card-arrow-icon" />
                            </Link>
                          </li>
                          <li>
                            <Link to="/realization-of-royalities">
                              מימוש מדדים{" "}
                              <img src={cardvector || "/placeholder.svg"} alt="arrow" className="card-arrow-icon" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="cardrep report-card">
                      <div className="report-card-header">
                        <img src={report2 || "/placeholder.svg"} alt="תורים" className="report-card-icon" />
                        <span className="report-card-title">תורים</span>
                      </div>
                      <div className="report-card-body">
                        <div className="report-card-desc">
                          תצוגה וניתוח מידע לגבי תורים שנקבעו והמומשו על ידי הלקוחות שלכם לפי סניף, סניפים, ולצפות
                          בפרטים שונים על תורים שהוקלטו במערכת.
                        </div>
                        <ul className="report-card-list">
                          <li>
                            <Link to="/qeueu-report">
                              דו"ח תורים{" "}
                              <img src={cardvector || "/placeholder.svg"} alt="arrow" className="card-arrow-icon" />
                            </Link>
                          </li>
                          <li>
                            <Link to="/qeueu-report">
                              דו"ח תורים שבועי{" "}
                              <img src={cardvector || "/placeholder.svg"} alt="arrow" className="card-arrow-icon" />
                            </Link>
                          </li>
                          <li>
                            <Link to="/team-presence">
                              נוכחות צוות{" "}
                              <img src={cardvector || "/placeholder.svg"} alt="arrow" className="card-arrow-icon" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="cardrep report-card">
                      <div className="report-card-header">
                        <img src={report3 || "/placeholder.svg"} alt="מערכת" className="report-card-icon" />
                        <span className="report-card-title">כספים</span>
                      </div>
                      <div className="report-card-body">
                        <div className="report-card-desc">
                          סקירה על התשלומים וההכנסות בעסק עם דוחות על תשלומים לפי לקוח, תקבלו את כל המידע הרלוונטי
                          בחלוקה לדו״חות
                        </div>
                        <ul className="report-card-list">
                          <li>
                            <Link to="/report-recipt">
                              דו״ח תקבולים{" "}
                              <img src={cardvector || "/placeholder.svg"} alt="arrow" className="card-arrow-icon" />
                            </Link>
                          </li>
                          <li>
                            <Link to="/refund-report">
                              דו״ח זיכויים{" "}
                              <img src={cardvector || "/placeholder.svg"} alt="arrow" className="card-arrow-icon" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="cardrep report-card">
                      <div className="report-card-header">
                        <img src={report4 || "/placeholder.svg"} alt="כספים" className="report-card-icon" />
                        <span className="report-card-title">מערכת</span>
                      </div>
                      <div className="report-card-body">
                        <div className="report-card-desc">
                          לצפות בצורה קלה ונוחה אחר פעילות המערכת כגון הודעות שנשלחו ללקוחות, תקבלו מידע מפורט על כל
                          פעילות של הצוות במערכת.
                        </div>
                        <ul className="report-card-list">
                          <li>
                            <Link to="/sent-message-report">
                              הודעות שנשלחו{" "}
                              <img src={cardvector || "/placeholder.svg"} alt="arrow" className="card-arrow-icon" />
                            </Link>
                          </li>
                          <li>
                            <Link to="/system-log">
                              לוג מערכת{" "}
                              <img src={cardvector || "/placeholder.svg"} alt="arrow" className="card-arrow-icon" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
