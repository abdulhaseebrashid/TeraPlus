import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../assets/css/style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import businessProfileHome from '../../../assets/img/Business_Profile_Home/business-profile-home.jpg';
import businessProfileHomeLogo from '../../../assets/logo/logo1.png';
import clock from '../../../assets/img/Business_Profile_Home/icons/clock.svg';
import user from '../../../assets/img/Business_Profile_Home/icons/user.svg';
import whatsapp from '../../../assets/img/Business_Profile_Home/icons/whatsapp.svg';
import phone from '../../../assets/img/Business_Profile_Home/icons/phone.svg';
import heart from '../../../assets/img/Business_Profile_Home/icons/whishlist.svg';
import star from '../../../assets/img/Business_Profile_Home/icons/star.svg';
import clockcontcat from '../../../assets/img/Business_Profile_Home/icons/Clockcontact.svg';

const Appointment = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const tabContents = {
    tab1: [
      {
        title: "עיסוי תאילנדי",
        description:
          "העיסוי השוודי מסייע לשחרור מתחים פיזיים ונפשיים, משפר את זרימת הדם ומאזן את הגוף והנפש.",
        type: "יחיד",
        duration: "60 דקות",
        price: "400 ש\"ח",
      },
      {
        title: "עיסוי רקמות עמוק",
        description:
          "ממוקד בשכבות השריר העמוקות, מתאים במיוחד לספורטאים או למי שסובל ממתח שרירים כרוני.",
        type: "יחיד",
        duration: "45 דקות",
        price: "350 ש\"ח",
      },
    ],
    tab2: [
      {
        title: "טיפול פנים קלאסי",
        description:
          "ניקוי יסודי של עור הפנים, כולל פילינג, מסיכה והזנה לעור זוהר ורענן.",
        type: "יחיד",
        duration: "50 דקות",
        price: "300 ש\"ח",
      },
    ],
    tab3: [
        {
            title: "טיפול פנים קלאסי",
            description:
              "ניקוי יסודי של עור הפנים, כולל פילינג, מסיכה והזנה לעור זוהר ורענן.",
            type: "יחיד",
            duration: "50 דקות",
            price: "300 ש\"ח",
          },
    ],
    tab4: [
        {
            title: "טיפול פנים קלאסי",
            description:
              "ניקוי יסודי של עור הפנים, כולל פילינג, מסיכה והזנה לעור זוהר ורענן.",
            type: "יחיד",
            duration: "50 דקות",
            price: "300 ש\"ח",
          },
          {
            title: "טיפול פנים קלאסי",
            description:
              "ניקוי יסודי של עור הפנים, כולל פילינג, מסיכה והזנה לעור זוהר ורענן.",
            type: "יחיד",
            duration: "50 דקות",
            price: "300 ש\"ח",
          },
          {
            title: "טיפול פנים קלאסי",
            description:
              "ניקוי יסודי של עור הפנים, כולל פילינג, מסיכה והזנה לעור זוהר ורענן.",
            type: "יחיד",
            duration: "50 דקות",
            price: "300 ש\"ח",
          },
          {
            title: "טיפול פנים קלאסי",
            description:
              "ניקוי יסודי של עור הפנים, כולל פילינג, מסיכה והזנה לעור זוהר ורענן.",
            type: "יחיד",
            duration: "50 דקות",
            price: "300 ש\"ח",
          },

          {
            title: "טיפול פנים קלאסי",
            description:
              "ניקוי יסודי של עור הפנים, כולל פילינג, מסיכה והזנה לעור זוהר ורענן.",
            type: "יחיד",
            duration: "50 דקות",
            price: "300 ש\"ח",
          },
    ],
  };

  const tabNames = {
    tab1: "עיסויים",
    tab2: "טיפול פנים",
    tab3: "משלימים",
    tab4: "חבילות",
  };

  const tabs = Object.entries(tabNames).map(([key, label]) => ({ key, label }));

  return (
    <div className="container-fluid business-profile-home-container">
      <div className="business-profile-home-first-container d-flex flex-column gap-4">
        <div className="row">
          <div className="col-lg-12">
            <div className="business-profile-search rtl">
              <Link to="/business-profile-home">
                <h5><i className="bi bi-chevron-right"></i> חיפוש</h5>
              </Link>
            </div>
          </div>
        </div>
        <div className="row rtl">
          <div className="col-lg-6">
            <div className="business-profile-home-right">
              <img src={businessProfileHome} alt="business-profile-home" className="image-right" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="business-profile-home-left">
              <div className="row g-2 md-g-2 sm-g-2 lg-g-3">
                {[...Array(4)].map((_, idx) => (
                  <div className="col-6" key={idx}>
                    <div className="image-wrapper">
                      <img
                        src={businessProfileHome}
                        alt="business-profile-home"
                        className={`image-right ${idx === 3 ? 'last-image-right' : ''}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="business-profile-home-second-container pt-3">
        <div className="row rtl">
          <div className="col-lg-8">
            <div className="business-profile-home-second-left">
              <div className="row g-3">
                <div className="col-lg-2 d-flex align-items-center justify-content-center business-profile-home-header-logo-mob">
                  <div className="business-profile-home-header-logo">
                    <img src={businessProfileHomeLogo} alt="business-profile-home-logo" />
                  </div>
                </div>
                <div className="col-lg-10">
                  <div className="business-profile-home-second-header-title">
                    <h3>ספא 3030 תל אביב</h3>
                    <p>תל אביב</p>
                    <Link to="/business-profile-home" className="navigate-to-place-btn">נווט למקום</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="business-profile-home-second-left-description pt-3 md-pt-3 lg-pt-5 sm-pt-3">
              <h5>על המקום</h5>
              <p className="business-profile-home-second-left-text">ספא וחמאם טורקי בתל אביב — בחרו היום מבין מגוון טיפולים מפנקים: עיסויים זוגיים, עיסויים ליחיד, חמאם טורקי, דיקור ועוד. ספא מומלץ במרכז תל אביב.</p>
            </div>

            <div className="business-profile-home-second-container-bottom pt-3 md-pt-3 lg-pt-5 sm-pt-3">
              <div className="d-flex flex-column justify-content-start align-items-start mb-3">
                <div className="package-title">
                  <h5 className="fw-bold">טיפולים וחבילות</h5>
                </div>
                <div className="back-url">
                  <Link to="/business-profile-home" className="back-url-link"><i className="bi bi-chevron-right"></i>
                  חזרה
                  </Link>
                </div>
              </div>           
            </div>
            <div className="Choosing-therapist">
              <div className="row">
                <div className="col-lg-12 pb-4">
                      <h5 className="Choosing-therapist-title">על המקום</h5>
                </div>
                <div className="col-lg-12">
                  <div className='Choosing-therapist-content-wrapper d-flex flex-row gap-2 align-items-center justify-content-end left-to-right'>
                  <div className='Choosing-therapist-content '>
                    <div className='Choosing-therapist-content-text d-flex flex-row gap-1 align-items-center justify-content-end left-to-right'>
                      <h6>אהרון</h6>
                      <img src={user} alt="business-profile-home"  width="20" height="20"/>
                    </div>
                  </div>
                  <div className='Choosing-therapist-content'>
                    <div className='Choosing-therapist-content-text d-flex flex-row gap-1 align-items-center justify-content-end left-to-right'>
                      <h6>אהרון</h6>
                      <img src={user} alt="business-profile-home"  width="20" height="20"/>
                    </div>
                  </div>
                  <div className='Choosing-therapist-content'>
                    <div className='Choosing-therapist-content-text d-flex flex-row gap-1 align-items-center justify-content-end left-to-right'>
                      <h6>אהרון</h6>
                      <img src={user} alt="business-profile-home"  width="20" height="20"/>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="business-profile-home-left-container">
              <div className="row g-3">
                <div className="col-12">
                  <div className="business-profile-home-first-contact">
                  <ul class="list-unstyled d-flex flex-column gap-2 text-start" dir="rtl">
                    <li class="mb-2 d-flex justify-content-end align-items-center gap-2 left-to-right">
                      <span className="rtl contact-text"><span className="star-text">4.5</span>  (350 ביקורות)</span>
                      <img src={star} alt="Star" width="24" height="24"/>
                    </li>
                    <li class="mb-2 d-flex justify-content-end align-items-center gap-2 left-to-right">
                      <span class="rtl contact-text"><span className="time-text">פתוח</span> (08:00-19:00) </span>
                      <img src={clockcontcat} alt="Clock" width="24" height="24"/>
                    </li>
                    <li class="mb-2 d-flex justify-content-end align-items-center gap-2 left-to-right">
                      <span className="rtl contact-text"><span className="phone-text">054-2445957</span></span>
                        <img src={whatsapp} alt="WhatsApp" width="24" height="24"/>
                    </li>
                    <li class="mb-2 d-flex justify-content-end align-items-center gap-2 left-to-right">
                      <span className="rtl contact-text"><span className="phone-text">054-2445957</span></span>
                      <img src={phone} alt="Phone" width="24" height="24"/>
                    </li>
                    <li class="mb-2 d-flex justify-content-end align-items-center gap-2 left-to-right">
                      <span className="rtl contact-text"><span className="heart-text">הוספה למועדפים</span></span>
                      <img src={heart} alt="Heart" width="24" height="24"/>
                    </li>
                  </ul>


                  </div>
                </div>
                <div className="col-12">
                  <div className="link-section rtl">
                    <h3>מאפייני המקום</h3>
                    <ul className="list-unstyled place-link-list">
                    <li>
                        <Link to="/services" className="place-link-list-link">
                        ניקוי   
                        </Link>
                      </li>
                      <li>
                        <Link to="/services" className="place-link-list-link">
                         בריכה
                        </Link>
                      </li>
                      <li>
                        <Link to="/services" className="place-link-list-link">
                        ארוחת בוקר
                        </Link>
                      </li>
                      <li>
                        <Link to="/services" className="place-link-list-link">
                        סאונה 
                        </Link>
                      </li>
                      <li>
                        <Link to="/services" className="place-link-list-link">
                          לכל השירותים
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12">
                  <div className="review-section rtl">
                    <h3 className="pb-4">ביקורות</h3>
                    <div className="review-section-content d-flex flex-column gap-2 mb-4">
                      <div className="review-section-header d-flex justify-content-between flex-row gap-5">
                        <div className="review-name">
                          <h4>אהרון כהן</h4>
                        </div>
                        <div className="reviews d-flex flex-row gap-2 align-items-center left-to-right">
                          <h4>5</h4>
                          <img src={star} alt="Star" width="20" height="20"/>
                        </div>
                      </div>
                      <div className="review-text">
                        <p className="review-paragraph">ספא ברמה גבוהה , נקיון מופתי , שירותי ביותר , מריח נפלא , הכל נהדר מקום שחוזרת אליו כבר פעם 5 !!!!</p>
                      </div>
                      <div className="review-date">
                        <h5>01/01/2025</h5>
                      </div>
                    </div>

                    <div className="review-section-content d-flex flex-column gap-2 mb-4">
                      <div className="review-section-header d-flex justify-content-between flex-row gap-5">
                        <div className="review-name">
                          <h4>אהרון כהן</h4>
                        </div>
                        <div className="reviews d-flex flex-row gap-2 align-items-center left-to-right">
                          <h4>5</h4>
                          <img src={star} alt="Star" width="20" height="20"/>
                        </div>
                      </div>
                      <div className="review-text">
                        <p className="review-paragraph">ספא ברמה גבוהה , נקיון מופתי , שירותי ביותר , מריח נפלא , הכל נהדר מקום שחוזרת אליו כבר פעם 5 !!!!</p>
                      </div>
                      <div className="review-date">
                        <h5>01/01/2025</h5>
                      </div>
                    </div>

                    <div className="review-section-content d-flex flex-column gap-2">
                      <div className="review-section-header d-flex justify-content-between flex-row gap-5">
                        <div className="review-name">
                          <h4>אהרון כהן</h4>
                        </div>
                        <div className="reviews d-flex flex-row gap-2 align-items-center left-to-right">
                          <h4>5</h4>
                          <img src={star} alt="Star" width="20" height="20"/>
                        </div>
                      </div>
                      <div className="review-text">
                        <p className="review-paragraph">ספא ברמה גבוהה , נקיון מופתי , שירותי ביותר , מריח נפלא , הכל נהדר מקום שחוזרת אליו כבר פעם 5 !!!!</p>
                      </div>
                      <div className="review-date">
                        <h5>01/01/2025</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
