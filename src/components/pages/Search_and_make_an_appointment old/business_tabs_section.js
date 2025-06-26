// // src/components/BusinessTabSection.js
// import React, { useState } from 'react';
// import user from '../../../assets/img/Business_Profile_Home/icons/user.svg';
// import clock from '../../../assets/img/Business_Profile_Home/icons/clock.svg';

// const BusinessTabSection = ({ onPriceClick }) => {
//   const [activeTab, setActiveTab] = useState("tab4");

//   const handleTabClick = (tabId) => {
//     setActiveTab(tabId);
//   };

//   const tabContents = {
//     tab1: [
//       {
//         title: "עיסוי תאילנדי",
//         description:
//           "העיסוי השוודי מסייע לשחרור מתחים פיזיים ונפשיים, משפר את זרימת הדם ומאזן את הגוף והנפש.",
//         type: "יחיד",
//         duration: "60 דקות",
//         price: "400 ש\"ח",
//       },
//       {
//         title: "עיסוי רקמות עמוק",
//         description:
//           "ממוקד בשכבות השריר העמוקות, מתאים במיוחד לספורטאים או למי שסובל ממתח שרירים כרוני.",
//         type: "יחיד",
//         duration: "45 דקות",
//         price: "350 ש\"ח",
//       },
//     ],
//     tab2: [
//       {
//         title: "טיפול פנים קלאסי",
//         description:
//           "ניקוי יסודי של עור הפנים, כולל פילינג, מסיכה והזנה לעור זוהר ורענן.",
//         type: "יחיד",
//         duration: "50 דקות",
//         price: "300 ש\"ח",
//       },
//     ],
//     tab3: [
//       {
//         title: "טיפול פנים קלאסי",
//         description:
//           "ניקוי יסודי של עור הפנים, כולל פילינג, מסיכה והזנה לעור זוהר ורענן.",
//         type: "יחיד",
//         duration: "50 דקות",
//         price: "300 ש\"ח",
//       },
//     ],
//     tab4: new Array(5).fill({
//       title: "טיפול פנים קלאסי",
//       description:
//         "ניקוי יסודי של עור הפנים, כולל פילינג, מסיכה והזנה לעור זוהר ורענן.",
//       type: "יחיד",
//       duration: "50 דקות",
//       price: "300 ש\"ח",
//     }),
//   };

//   const tabNames = {
//     tab1: "עיסויים",
//     tab2: "טיפול פנים",
//     tab3: "משלימים",
//     tab4: "חבילות",
//   };

//   const tabs = Object.entries(tabNames).map(([key, label]) => ({ key, label }));

//   return (
//     <div className="business-profile-home-second-container-bottom">

//       {/* Tabs Navigation */}
//       <div className="nav nav-pills justify-content-end flex-row-reverse gap-2 mb-3 rtl" role="tablist">
//         {tabs.map((tab) => (
//           <button
//             key={tab.key}
//             className={`tabs-btn ${activeTab === tab.key ? 'active' : ''}`}
//             onClick={() => handleTabClick(tab.key)}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>

//       {/* Tab Content */}
//       <div className="tab-content text-end mt-3">
//         {tabContents[activeTab] && tabContents[activeTab].length > 0 ? (
//           tabContents[activeTab].map((item, index) => (
//             <div key={index} className="treatment-card-wrapper mb-4">
//               <h5 className="fw-bold">{item.title}</h5>
//               <p className="text-muted w-75">{item.description}</p>
//               <div className="d-flex flex-column align-items-start mt-4">
//                 <div className="text-muted d-flex align-items-center gap-4">
//                   <span><img src={user} alt="user" /> {item.type}</span>
//                   <span><img src={clock} alt="clock" className="w-25" /> {item.duration}</span>
//                 </div>
//                 <button
//                   className="business-profile-tabs-btn mt-4"
//                   onClick={onPriceClick}
//                 >
//                   {item.price}
//                 </button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-muted">אין טיפולים זמינים בכרטיסייה זו.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BusinessTabSection;

"use client";

// src/components/BusinessTabSection.js
import { useState } from "react";
import user from "../../../assets/img/Business_Profile_Home/icons/user.svg";
import clock from "../../../assets/img/Business_Profile_Home/icons/clock.svg";
import BookingPopup from "../../pages/Home/Search_and_make_an_appointment old_popups/Search_and_make_an_appointment old_popups"
import BookingPopup1 from "../../pages/Home/Search_and_make_an_appointment old_popups/Search_and_make_an_appointment old_popups1";

const BusinessTabSection = ({ onPriceClick }) => {
  const [activeTab, setActiveTab] = useState("tab4");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopup1Open, setIsPopup1Open] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState(null);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleBookClick = (treatment) => {
    setSelectedTreatment(treatment);
    setIsPopupOpen(true);
  };

  const handleBook2Click = (treatment) => {
    setSelectedTreatment(treatment);
    setIsPopup1Open(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedTreatment(null);
  };

  const handleClosePopup1 = () => {
    setIsPopup1Open(false);
    setSelectedTreatment(null);
  };

  const tabContents = {
    tab1: [
      {
        title: "עיסוי תאילנדי",
        description:
          "העיסוי השוודי מסייע לשחרור מתחים פיזיים ונפשיים, משפר את זרימת הדם ומאזן את הגוף והנפש.",
        type: "יחיד",
        duration: "60 דקות",
        price: '400 ש"ח',
      },
      {
        title: "עיסוי רקמות עמוק",
        description:
          "ממוקד בשכבות השריר העמוקות, מתאים במיוחד לספורטאים או למי שסובל ממתח שרירים כרוני.",
        type: "יחיד",
        duration: "45 דקות",
        price: '350 ש"ח',
      },
    ],
    tab2: [
      {
        title: "טיפול פנים קלאסי",
        description:
          "ניקוי יסודי של עור הפנים, כולל פילינג, מסיכה והזנה לעור זוהר ורענן.",
        type: "יחיד",
        duration: "50 דקות",
        price: '300 ש"ח',
      },
    ],
    tab3: [
      {
        title: "טיפול פנים קלאסי",
        description:
          "ניקוי יסודי של עור הפנים, כולל פילינג, מסיכה והזנה לעור זוהר ורענן.",
        type: "יחיד",
        duration: "50 דקות",
        price: '300 ש"ח',
      },
    ],
    tab4: new Array(5).fill({
      title: "טיפול פנים קלאסי",
      description:
        "ניקוי יסודי של עור הפנים, כולל פילינג, מסיכה והזנה לעור זוהר ורענן.",
      type: "יחיד",
      duration: "50 דקות",
      price: '300 ש"ח',
    }),
  };

  const tabNames = {
    tab1: "עיסויים",
    tab2: "טיפול פנים",
    tab3: "משלימים",
    tab4: "חבילות",
  };

  const tabs = Object.entries(tabNames).map(([key, label]) => ({ key, label }));

  return (
    <>
      <div className="business-profile-home-second-container-bottom">
        {/* Tabs Navigation */}
        <div
          className="nav nav-pills justify-content-end flex-row-reverse gap-2 mb-3 rtl"
          role="tablist"
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`tabs-btn ${activeTab === tab.key ? "active" : ""}`}
              onClick={() => handleTabClick(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="tab-content text-end mt-3">
          {tabContents[activeTab] && tabContents[activeTab].length > 0 ? (
            tabContents[activeTab].map((item, index) => (
              <div key={index} className="treatment-card-wrapper mb-4">
                <h5 className="fw-bold">{item.title}</h5>
                <p className="text-muted w-75">{item.description}</p>
                <div className="d-flex flex-column align-items-start mt-4">
                  <div className="text-muted d-flex align-items-center gap-4">
                    <span>
                      <img src={user || "/placeholder.svg"} alt="user" />{" "}
                      {item.type}
                    </span>
                    <span>
                      <img
                        src={clock || "/placeholder.svg"}
                        alt="clock"
                        className="w-25"
                      />{" "}
                      {item.duration}
                    </span>
                  </div>
                  <div className="d-flex gap-2 mt-4">
                    <button
                      className="business-profile-tabs-btn"
                      onClick={onPriceClick}
                    >
                      {item.price}
                    </button>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => handleBookClick(item)}
                      style={{ fontSize: "12px", padding: "4px 8px" }}
                    >
                      Book1
                    </button>
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() => handleBook2Click(item)}
                      style={{ fontSize: "12px", padding: "4px 8px" }}
                    >
                      Book2
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-muted">אין טיפולים זמינים בכרטיסייה זו.</p>
          )}
        </div>
      </div>

      {/* Booking Popup */}
      <BookingPopup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        treatmentData={selectedTreatment}
      />

      {/* Book2 Popup */}
      <BookingPopup1
        isOpen={isPopup1Open}
        onClose={handleClosePopup1}
        treatmentData={selectedTreatment}
      />
    </>
  );
};

export default BusinessTabSection;
