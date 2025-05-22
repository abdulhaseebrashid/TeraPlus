import React from "react";
import { Chart } from "react-google-charts";
import Sidebar from "../../global/Sidebar";
import "./Dashboard.css";
import dashboardcard1 from "../../../assets/img/Dashboard/dashboardcard1.svg";
import dashboardcard2 from "../../../assets/img/Dashboard/dashboardcard2.svg";
import dashboardcard3 from "../../../assets/img/Dashboard/dashboardcard3.svg";
import dashboardcard4 from "../../../assets/img/Dashboard/dashboardcard4.svg";  
import dashboardcardarrow from "../../../assets/img/Dashboard/dashboardarrow.svg";
import { Link } from "react-router-dom";

export default function Dashboard() {
  // Example data for charts
  const businessGrowthData = [
    ["שנה", "מספר תורים", "לקוחות חדשים", "הכנסות"],
    ["2017", 10000, 8000, 6000],
    ["2018", 30000, 20000, 15000],
    ["2019", 60000, 40000, 30000],
    ["2020", 40000, 30000, 20000],
    ["2021", 80000, 60000, 40000],
    ["2022", 120000, 100000, 80000],
  ];

  const businessGrowthOptions = {
    chartArea: { width: '80%', height: '70%' },
    legend: { position: "bottom", textStyle: { fontName: 'inherit', fontSize: 14, alignment: 'center' } },
    hAxis: { textStyle: { fontName: 'inherit', fontSize: 13 } },
    vAxis: { textStyle: { fontName: 'inherit', fontSize: 13 } },
    colors: ["#3B82F6", "#FACC15", "#22C55E"],
    lineWidth: 3,
    pointSize: 5,
    backgroundColor: 'transparent',
  };

  const popularTreatmentsData = [
    ["טיפול", "כמות"],
    ["דיקור סיני 10", 10],
    ["עיסוי שוודי 4", 4],
    ["אחרים", 3],
    ["דיקור סיני 20", 20],
  ];

  const pieOptions = {
    pieHole: 0.6,
    legend: { position: "bottom", textStyle: { fontName: 'inherit', fontSize: 14 } },
    colors: ["#A084E8", "#F875AA", "#F7D060", "#4CAF50"],
    chartArea: { width: '90%', height: '80%' },
    backgroundColor: 'transparent',
  };

  return (
    <div className="dashboard-container d-flex" dir="rtl">
      <Sidebar />
      <div className="main-content flex-grow-1 p-4">
        {/* Header */}
        <div className="dashboard-header mb-4">
          
          <div className="dashboard-header-left d-flex align-items-center">
            
            <div className="search-box">
              <input type="text" className="form-control" />
              <i className="bi bi-search"></i>
            </div>
            <button className="icon-btn me-3"><i className="bi bi-bell"></i></button>
          </div>
        </div>
        {/* Tabs */}
        <div className="dashboard-tabs d-flex justify-content-center mb-4">
        <div className="dashboard-title">לוח בקרה</div>
            <div className="dashboard-tabs-buttons">    
          <button className="btn btn-dark ms-2">מבט כללי</button>
          <button className="btn btn-light">דוחות</button>
            </div>
            
        </div>
        {/* Cards Row */}
        <div className="row mb-4 gx-4 gy-4">
         
          {/* 4 Summary Cards on the right in a 2x2 grid */}
          <div className="col-lg-8">
            <div className="row gx-4 gy-4">
              <div className="col-md-6 dashboard-summary-card">
                <div className="card p-3 summary-card text-end d-flex flex-row align-items-center justify-content-between" dir="rtl">
                  {/* Icon in circle on the right */}
                  <div className="summary-icon-wrapper ms-3">
                    <img src={dashboardcard2} alt="דירוג העסק" className="summary-svg-icon" />
                  </div>
                  {/* Main content */}
                  <div className="flex-grow-1 text-end">
                    <div className="summary-label mb-1">סך הכנסות</div>
                    <div className="d-flex align-items-center justify-content-start mb-1">
                      <span className="summary-value">30,000</span>
                      <span className="badge bg-success ms-2">+1.4%</span>
                    </div>
                    <Link to="#" className="summary-link text-dark small">
                      כל ההכנסות <img src={dashboardcardarrow} alt="arrow" className="summary-link-arrow ms-1" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 dashboard-summary-card">
                <div className="card p-3 summary-card text-end d-flex flex-row align-items-center justify-content-between" dir="rtl">
                  <div className="summary-icon-wrapper ms-3">
                    <img src={dashboardcard1} alt={'סה"כ הכנסות'} className="summary-svg-icon" />
                  </div>
                  <div className="flex-grow-1 text-end">
                    <div className="summary-label mb-1">דירוג העסק</div>
                    <div className="d-flex align-items-center justify-content-start mb-1">
                      <span className="summary-value">4.9%</span>
                      <span className="badge bg-success ms-2">+1.4%</span>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className="col-md-6 dashboard-summary-card">
                <div className="card p-3 summary-card text-end d-flex flex-row align-items-center justify-content-between" dir="rtl">
                  <div className="summary-icon-wrapper ms-3">
                    <img src={dashboardcard3} alt="לקוחות חדשים" className="summary-svg-icon" />
                  </div>
                  <div className="flex-grow-1 text-end">
                    <div className="summary-label mb-1">לקוחות חדשים</div>
                    <div className="d-flex align-items-center justify-content-start mb-1">
                      <span className="summary-value">20</span>
                      <span className="badge bg-danger ms-2">-20%</span>
                    </div>
                    <Link to="#" className="summary-link text-dark small">
                      כל הלקוחות<img src={dashboardcardarrow} alt="arrow" className="summary-link-arrow ms-1" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 dashboard-summary-card">
                <div className="card p-3 summary-card text-end d-flex flex-row align-items-center justify-content-between" dir="rtl">
                  <div className="summary-icon-wrapper ms-3">
                    <img src={dashboardcard4} alt={'סה"כ טיפולים'} className="summary-svg-icon" />
                  </div>
                  <div className="flex-grow-1 text-end">
                    <div className="summary-label mb-1">סך הטיפולים</div>
                    <div className="d-flex align-items-center justify-content-start mb-1">
                      <span className="summary-value">50</span>
                      <span className="badge bg-success ms-2">+50%</span>
                    </div>
                    <Link to="#" className="summary-link text-dark small">
                      כל הטיפולים <img src={dashboardcardarrow} alt="arrow" className="summary-link-arrow ms-1" />
                    </Link>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
           {/* AI Insights Card on the left */}
           <div className="col-lg-3">
            <div className="card ai-insights-card p-3 mb-3" dir="rtl">
              <h6 className="mb-3">תובנות AI</h6>
              <div className="insight bg-insight-green p-2 mb-2 text-end">מקום פנוי לשבוע הבא עלה ב-15% מהחודש שעבר - שווה לשקול קמפיין</div>
              <div className="insight bg-insight-blue p-2 mb-2 text-end">הכנסה ממוצעת ללקוח השתפרה ביחס לחודש קודם</div>
              <div className="insight bg-insight-red p-2 text-end">יש ירידה בתורים ביום חמישי - מומלץ</div>
            </div>
          </div>
        </div>
        {/* Charts Row */}
        <div className="row gx-4 gy-4">
          
          <div className="col-lg-3">
            <div className="card p-3 mb-3">
              <h6 className="mb-3">טיפולים פופולריים</h6>
              <Chart
                chartType="PieChart"
                width="100%"
                height="300px"
                data={popularTreatmentsData}
                options={pieOptions}
              />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card card-chart p-3 mb-3">
              <div className="d-flex flex-column gap-1 align-items-start mb-2">
                <h6 className="mb-0">צמיחת העסק</h6>
                <button className="btn btn-light btn-sm">בין תאריכים</button>
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
    </div>
  );
}
