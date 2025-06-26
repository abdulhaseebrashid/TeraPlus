import { Link } from 'react-router-dom';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../assets/css/style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import phone from '../../../assets/img/Business_Profile_Home/icons/phone.svg';
import heart from '../../../assets/img/Business_Profile_Home/icons/whishlist.svg';
import star from '../../../assets/img/Business_Profile_Home/icons/star.svg';
import clockcontcat from '../../../assets/img/Business_Profile_Home/icons/Clockcontact.svg';
import whatsapp from '../../../assets/img/Business_Profile_Home/icons/whatsapp.svg';
import upload from '../../../assets/img/Business_Profile_Home/icons/uploadfile.svg';
import activeStar from '../../../assets/img/Business_Profile_Home/icons/activestar.svg';
import inactiveStar from '../../../assets/img/Business_Profile_Home/icons/inactivestar.svg';

const ActiveStar = () => (
  
  <img src={activeStar} alt="Star" className="active-starstyle"/>
);

const InactiveStar = () => (
  
  <img src={inactiveStar} alt="Star" className="active-starstyle"/>
);


const BusinessContactAndReview  = ({ onComplete }) => {           
  const [showPopup, setshowPopup] = useState(false);

  const handleSecondButtonClick = () => {
    setshowPopup(true);
  };

  const handleClose = () => {
    setshowPopup(false);
  };


  const [rating, setRating] = useState(1);



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
                    <div className="review-section-header d-flex justify-content-between flex-row gap-5">
                      <h3 className="pb-4">ביקורות</h3>
                      <button className="review-section-button mb-4" onClick={handleSecondButtonClick}>צפייה בכל</button>
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

              {showPopup && (
                <div className="review-business-summary-modal-overlay">
                <div className="container">
                  <div className="row justify-content-center align-items-center min-vh-100">
                    <div className="col-lg-6">
                      <div className="review-business-summary-modal-content">
                      <button onClick={handleClose} className="position-absolute top-0 end-0 m-3 border-0 bg-transparent">
                        <i className="bi bi-x-lg close-from-btn"></i>
                      </button>
                        <h5 className="text-center mt-4 mb-4 business-summary-first-modal-title">הוספת ביקורת</h5>
                        <form className="first-modal-form rtl">
                          <div className="row">
                            <div className="col-md-12 mb-4 text-center">
                            <div className="rating-container">
                              {[1, 2, 3, 4, 5].map((i) => (
                                <span key={i} onClick={() => setRating(i)}>
                                  {i <= rating ? <ActiveStar className="active-starstyle"/> : <InactiveStar className="active-starstyle"/>}
                                </span>
                              ))}
                            </div>
                            <input type="hidden" name="rating" value={rating} />
                            </div>
                            <div className="col-md-6 mb-2">
                              <label>תאריך הטיפול</label>
                              <div className="position-relative custom-date-wrapper">
                                <input
                                  type="date"
                                  className="form-control rtl-date-input"
                                  name="treatmentDate"
                                  placeholder="01/01/2025"
                                />
                              </div>
                            </div>
                            <div className="col-md-6 mb-2">
                              <label>שם הלקוח</label>
                              <input type="text" className="form-control" name="customername" placeholder="מתן דניאלי" />
                            </div>
                            <div className="col-md-12 mb-2">
                              <label>כתובת מייל</label>
                              <input type="email" className="form-control" name="email" placeholder="aheron806@gmail.com" />
                            </div>
                            <div className="col-md-12 mb-2">
                              <label>נושא</label>
                              <input type="text" className="form-control" name="carriertype" placeholder="חוות דעת על ספא 3030" />
                            </div>
                            <div className="col-12">
                              <label>הודעה (לא חובה)</label>
                              <textarea className="form-control" name="message" placeholder="מקום טוב ונעים" />
                            </div>
                            <div className="col-12 custom-upload text-center">
                              <label className="instruction-label">
                                על מנת שנעלה את חוות הדעת שלך יש לצרף חשבונית/ קבלה
                              </label>

                              <input type="file" id="fileUpload" className="file-input" name="image" />
                              <label htmlFor="fileUpload" className="upload-label">
                               <img src={upload} alt="upload" width="24" height="24" style={{marginInlineEnd: '6px'}}/>
                                העלה קובץ
                              </label>
                            </div>

                          </div>
                          <div className="text-center mt-4">
                            <button type="submit" className="first-modal-form-button w-100 border-0">שלח ביקורת</button>
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



    )
   }

export default BusinessContactAndReview;
