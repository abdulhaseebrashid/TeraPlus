import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../assets/css/style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import phone from '../../../assets/img/Business_Profile_Home/icons/phone.svg';
import heart from '../../../assets/img/Business_Profile_Home/icons/whishlist.svg';
import star from '../../../assets/img/Business_Profile_Home/icons/star.svg';
import clockcontcat from '../../../assets/img/Business_Profile_Home/icons/Clockcontact.svg';
import whatsapp from '../../../assets/img/Business_Profile_Home/icons/whatsapp.svg';


const BusinessContactAndReview = () => {
    return (
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
    )
   }

export default BusinessContactAndReview;
