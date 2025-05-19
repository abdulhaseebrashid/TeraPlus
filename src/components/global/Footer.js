import React from 'react';
import '../../assets/css/style.css';
import logo2 from '../../assets/logo/logo-footer2.png';
import logo1 from '../../assets/img/footer_images/footer-top.png';
import icn1 from '../../assets/icons/Vector.svg';
import icn2 from '../../assets/icons/Vector1.svg';
import icn3 from '../../assets/icons/Vector2.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            {/* Footer Topbar Section */}
            <div className="footer-topbar">
                <div className="container-fluid">
                    <div className="row align-items-center flex-nowrap container" >
                        <div className="col-12 col-md-auto px-0 d-flex align-items-center gap-2 mb-2 mb-md-0">
                            <img src={logo1} alt="icon" className="footer-topbar-icon bold-icon" />
                            <span className="footer-topbar-bold">לנהל את העסק שלך, במקום אחד.</span>
                        </div>
                        <div className="col-12 col-md-auto d-flex align-items-center gap-4 px-0 top-links">
                            <img src={icn3} alt="icon" className="footer-topbar-icon" />
                            <Link to="/privacy" className="footer-topbar-link">מאובטח ומעודכן</Link>
                            <img src={icn2} alt="icon" className="footer-topbar-icon" />
                            <Link to="/terms" className="footer-topbar-link">תמיכה ושירות לקוחות</Link>
                            <img src={icn1} alt="icon" className="footer-topbar-icon" />
                            <Link to="/accessibility" className="footer-topbar-link">מהירות ושיפור ביצועים על ידי Ai</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Main Footer */}
            <footer className="footer-main" style={{
                background: 'linear-gradient(0deg, #032B48, #032B48), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))'
            }}>
                <div className="container py-5">
                    <div className="row justify-content-between sec-d" dir="rtl">
                        {/* Logo Column */}
                        <div className="col-12 col-lg-3 mb-4 mb-lg-0 text-center">
                            <img src={logo2} alt="TheraPlus" className="mb-3 footer-logo" style={{ width: '180px' }} />
                        </div>

                        {/* Navigation Columns */}
                        <div className="col-12 col-lg-8">
                            <div className="row">
                                {/* אודות Column */}
                                <div className="col-6 col-md-3 mb-4">
                                    <h5 className="footer-heading">אודות</h5>
                                    <ul className="footer-links">
                                        <li><a href="#">עלינו</a></li>
                                        <li><a href="#">יתרונות</a></li>
                                        <li><a href="#">הלקוחות שלנו</a></li>
                                        <li><a href="#">יצירת קשר</a></li>
                                    </ul>
                                </div>
                                {/* לעסקים Column */}
                                <div className="col-6 col-md-3 mb-4">
                                    <h5 className="footer-heading">לעסקים</h5>
                                    <ul className="footer-links">
                                        <li><a href="#">הצטרפות</a></li>
                                        <li><a href="#">תמיכה טכנית</a></li>
                                        <li><a href="#">תנאי שימוש</a></li>
                                    </ul>
                                </div>

                                {/* ללקוחות Column */}
                                <div className="col-6 col-md-3 mb-4">
                                    <h5 className="footer-heading">ללקוחות</h5>
                                    <ul className="footer-links">
                                        <li><a href="#">הזמנת תור</a></li>
                                        <li><a href="#">תמיכה ללקוחות</a></li>
                                    </ul>
                                </div>

                                {/* פרטיות Column */}
                                <div className="col-6 col-md-3 mb-4">
                                    <h5 className="footer-heading">פרטיות</h5>
                                    <ul className="footer-links">
                                        <li><a href="#">מדיניות פרטיות</a></li>
                                        <li><a href="#">תנאי שימוש</a></li>
                                        <li><a href="#">הצהרת נגישות</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
