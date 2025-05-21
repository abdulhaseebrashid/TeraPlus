import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../assets/css/style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import paymentSuccess from '../../../assets/img/Business_Profile_Home/icons/payment-check.svg';
import calendarIcon from '../../../assets/img/Business_Profile_Home/icons/calendar-popup.svg';
import sharewithfriend from '../../../assets/img/Business_Profile_Home/icons/sharewithfriend.svg';
import batches from '../../../assets/img/Business_Profile_Home/icons/batches.svg';



const BusinessSummary = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showSecondPopup, setShowSecondPopup] = useState(false);
  const [showFinalPopup, setShowFinalPopup] = useState(false);

  const [formData, setFormData] = useState({
    cardNumber: '',
    validity: '',
    cvv: '',
    date: '',
    idNumber: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handlePopupSubmit = (e) => {
    e.preventDefault();
    const { cardNumber, validity, cvv, date, idNumber } = formData;

    if (cardNumber && validity && cvv && date && idNumber) {
        setShowSecondPopup(true);
        setShowPopup(false);
      
        setTimeout(() => {
          setShowFinalPopup(true);
          setShowSecondPopup(false);
        }, 5000); // 5 seconds
      }
      
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="business-summary-container">
      <div className="row">
        <div className="col-lg-12">
          <div className="business-summary-header align-items-center text-center">
            <h5 className="business-summary-header-title">סיכום</h5>
            <p className="business-summary-header-description">עיסוי שוודי ביום 05/05/2025 בשעה 10:00</p>
            <p className="business-summary-price">500 ש״ח</p>
          </div>
          <div className="business-summary-form mt-4">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">הערות לקראת הטיפול</label>
                <textarea
                  className="form-control business-summary-form-textarea"
                  id="exampleFormControlTextarea1"
                  rows="8"
                ></textarea>
              </div>
              <div className="form-group mt-3 business-summary-form-description d-flex flex-column justify-content-center align-items-center gap-2 text-center">
                <p className="business-summary-form-description-text mb-0">תנאי ביטול</p>
                <p className="business-summary-form-description-text mb-0">
                  ביטול התור עד 3 שעות לפני תחילתו, לא יגרור אף חיוב, לאחר מכן כל ביטול או אי הגעה יגרור חיוב מלא מסך העסקה
                </p>
              </div>
              <div className="form-group text-center mt-4">
                <button type="submit" className="business-summary-form-button-button">אישור</button>
              </div>
            </form>
          </div>

          {/* First Popup Modal */}
          {showPopup && (
            <div className="business-summary-modal-overlay">
              <div className="container">
                <div className="row justify-content-center align-items-center min-vh-100">
                  <div className="col-lg-6">
                    <div className=" business-summary-modal-content">
                    <button onClick={handleClose} className="position-absolute top-0 end-0 m-3 border-0 bg-transparent">
                        <i className="bi bi-x-lg close-from-btn"></i>
                    </button>
                      <h5 className="text-center mt-4 mb-4 business-summary-first-modal-title">הוספת אמצעי תשלום</h5>
                      <form onSubmit={handlePopupSubmit} className="first-modal-form">
                        <div className="row">
                          <div className="col-md-6 mb-2">
                            <label>מספר כרטיס</label>
                            <input
                              type="number"
                              className="form-control"
                              name="cardNumber"
                              placeholder="1234 5678 9012 3456"
                              value={formData.cardNumber}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="col-md-6 mb-2">
                            <label>תוקף</label>
                            <input
                              type="text"
                              className="form-control"
                              name="validity"
                              placeholder="MM/YY"
                              value={formData.validity}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="col-md-6 mb-2">
                            <label>CVV</label>
                            <input
                              type="number"
                              className="form-control"
                              name="cvv"
                              placeholder="123"
                              value={formData.cvv}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="col-md-6 mb-2">
                            <label>תאריך</label>
                            <input
                              type="date"
                              className="form-control no-calendar"
                              name="date"
                              value={formData.date}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="col-12">
                            <label>מספר ת.ז</label>
                            <input
                              type="number"
                              className="form-control"
                              name="idNumber"
                              placeholder="123456789"
                              value={formData.idNumber}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="text-center mt-4">
                          <button type="submit" className="first-modal-form-button w-100 border-0">המשך</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Second Popup (Optional Confirmation or Success Message) */}
          {showSecondPopup && (
            <div className="business-summary-modal-overlay">
              <div className="container">
                <div className="row justify-content-center align-items-center min-vh-100">
                  <div className="col-lg-6">
                    <div className="business-summary-second-modal-content text-center">
                        <img src={paymentSuccess} alt="payment success"  className="mb-4"/>
                      <h3 className="mb-4">מעולה! הטיפול תואם בהצלחה</h3>
                      <p className="mb-1">ספא 3030, החרש 4 הוד השרון</p>
                      <h6 className="mb-4">עיסוי שוודי ביום 05/05/2025 בשעה 10:00</h6>
                      <div className="second-modal-content-buttons d-flex gap-3 justify-content-center">
                        <button className="treatment_success_btn"><img 
                        src={sharewithfriend} 
                        alt="Share with friends Icon" 
                        />לשתף עם החברים</button>
                         <button className="treatment_success_btn"><img 
                        src={calendarIcon} 
                        alt="Calendar Icon" 
                        />לסנכרן עם היומן</button>
                        </div>
                        <div className="second-modal-content-stars mt-4">
                            <div className="second-modal-content-stars-item d-flex justify-content-center align-items-center gap-1">
                               <div className="stars-item-left">
                                <p className="stars-item-left-text mb-0">איזה כיף! צברת </p>
                               </div>
                               <div className="stars-item-right d-flex justify-content-center align-items-center gap-1">
                               <img 
                                src={batches} 
                                alt="Batches Icon" 
                                />
                                <span className="stars-item-right-text mb-0">50 כוכבים</span>
                               </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}




        {showFinalPopup && (
        <div className="business-summary-modal-overlay">
            <div className="container">
            <div className="row justify-content-center align-items-center min-vh-100">
                <div className="col-lg-5">
                <div className="business-summary-final-modal-content text-center position-relative">
                    
                    {/* Close Button */}
                    <button
                    onClick={() => setShowFinalPopup(false)}
                    className="position-absolute top-0 end-0 m-3 border-0 bg-transparent"
                    >
                    <i className="bi bi-x-lg close-from-btn"></i>
                    </button>
                    
                    <img src={paymentSuccess} alt="payment success" className="mb-4" />
                    <h3 className="mb-3 business-summary-final-modal-content-title">בוצע בהצלחה</h3>
                </div>
                </div>
            </div>
            </div>
        </div>
        )}


        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
