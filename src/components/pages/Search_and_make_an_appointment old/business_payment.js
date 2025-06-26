import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../assets/css/style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import logopayment from '../../../assets/logo/logo-footer.png';
import paymentSuccess from '../../../assets/img/Business_Profile_Home/icons/payment-check.svg';
import calendarIcon from '../../../assets/img/Business_Profile_Home/icons/calendar-popup.svg';
import sharewithfriend from '../../../assets/img/Business_Profile_Home/icons/sharewithfriend.svg';
import batches from '../../../assets/img/Business_Profile_Home/icons/batches.svg';

const BusinessPayment = ({ onComplete }) => {
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePopupSubmit = (e) => {
    e.preventDefault();
    const { cardNumber, validity, cvv, date, idNumber } = formData;
    if (cardNumber && validity && cvv && date && idNumber) {
      setShowPopup(false);
      setShowFinalPopup(true);
    }
  }; 

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleSecondButtonClick = () => {
    setShowSecondPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="container-fluid business-payment-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="business-profile-search rtl">
              <Link to="/business-profile-home">
                <h5><i className="bi bi-chevron-right"></i> תשלום</h5>
              </Link>
            </div>
          </div>
          <div className="col-lg-12 mt-3 mt-md-3 mt-lg-5 mt-sm-2">
            <div className="row rtl">
              <div className="col-lg-6 text-center">
                <div className="business-payment-right">
                  <div className="business-payment-content d-flex flex-column justify-content-center align-items-center">
                    <h3 className="business-payment-title">לא קיימים אמצעי תשלום במערכת</h3>
                    <p className="business-payment-text">הצפינו בצורה מאובטחת את אמצעי התשלום שלכם ותתחילו להנות מרכישות בקלות בקביעת תורים הבאה שלכם</p>
                  </div>
                  <div className="business-payment-btns mt-4 gap-3">
                    <button className="business-payment-button" onClick={handleButtonClick}>הצטרפות למערכת</button>
                    <button className="business-payment-button-full w-100" onClick={handleSecondButtonClick}>הצטרפות למערכת</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 business-payment-left-bg">
                <div className="business-payment-left">
                  <h3 className="business-payment-title">סיכום הזמנה</h3>
                  <div className="business-payment-left-logo d-flex align-items-center gap-2">
                    <div className="payment-logo">
                      <img src={logopayment} alt="logopayment" />
                    </div>
                    <div className="package-name-title">
                      <h5>ספא 3030</h5>
                      <p>שאול המלך 5, תל אביב</p>
                    </div>
                  </div>
                  <div className="package-prices mt-3 mt-md-3 mt-lg-5 mt-sm-2">
                    <h5>עיסוי שוודי</h5>
                    <p>400 ש״ח</p>
                  </div>
                  <div className="payment-coupon-from mt-3">
                    <form>
                      <div className="form-group d-flex flex-row gap-3">
                        <div className="coupon-code-input">
                          <label htmlFor="coupon-code">קוד קופון</label>
                          <input type="number" className="form-control" id="coupon-code" />
                        </div>
                        <div className="coupon-code-button-container align-content-end">
                          <button type="submit" className="coupon-code-button">החל קופון</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Popups */}
        {showPopup && (
          <div className="business-summary-modal-overlay">
            <div className="container">
              <div className="row justify-content-center align-items-center min-vh-100">
                <div className="col-lg-6">
                  <div className="business-summary-modal-content">
                    <button onClick={handleClose} className="position-absolute top-0 end-0 m-3 border-0 bg-transparent">
                      <i className="bi bi-x-lg close-from-btn"></i>
                    </button>
                    <h5 className="text-center mt-4 mb-4 business-summary-first-modal-title">הוספת אמצעי תשלום</h5>
                    <form onSubmit={handlePopupSubmit} className="first-modal-form rtl">
                      <div className="row">
                        <div className="col-md-6 mb-2">
                          <label>מספר כרטיס</label>
                          <input type="number" className="form-control" name="cardNumber" value={formData.cardNumber} onChange={handleChange} placeholder="1234 5678 9012 3456" />
                        </div>
                        <div className="col-md-6 mb-2">
                          <label>תוקף</label>
                          <input type="text" className="form-control" name="validity" value={formData.validity} onChange={handleChange} placeholder="MM/YY" />
                        </div>
                        <div className="col-md-6 mb-2">
                          <label>CVV</label>
                          <input type="number" className="form-control" name="cvv" value={formData.cvv} onChange={handleChange} placeholder="123" />
                        </div>
                        <div className="col-md-6 mb-2">
                          <label>תאריך</label>
                          <input type="date" className="form-control" name="date" value={formData.date} onChange={handleChange} />
                        </div>
                        <div className="col-12">
                          <label>מספר ת.ז</label>
                          <input type="number" className="form-control" name="idNumber" value={formData.idNumber} onChange={handleChange} placeholder="123456789" />
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

        {showSecondPopup && (
        <div className="business-summary-modal-overlay">
            <div className="container">
            <div className="row justify-content-center align-items-center min-vh-100">
                <div className="col-lg-6">
                <div className="business-summary-second-modal-content text-center position-relative">

                    {/* Close Button */}
                    <button
                    onClick={() => setShowSecondPopup(false)}
                    className="position-absolute top-0 end-0 m-3 border-0 bg-transparent"
                    >
                    <i className="bi bi-x-lg close-from-btn"></i>
                    </button>

                    <img src={paymentSuccess} alt="payment success" className="mb-4" />
                    <h3 className="mb-4">מעולה! הטיפול תואם בהצלחה</h3>
                    <p className="mb-1">ספא 3030, החרש 4 הוד השרון</p>
                    <h6 className="mb-4">עיסוי שוודי ביום 05/05/2025 בשעה 10:00</h6>
                    <div className="second-modal-content-buttons d-flex gap-3 justify-content-center">
                    <button className="treatment_success_btn">
                        <img src={sharewithfriend} alt="Share with friends Icon" />לשתף עם החברים
                    </button>
                    <button className="treatment_success_btn">
                        <img src={calendarIcon} alt="Calendar Icon" />לסנכרן עם היומן
                    </button>
                    </div>
                    <div className="second-modal-content-stars mt-4">
                    <div className="second-modal-content-stars-item d-flex justify-content-center align-items-center gap-1">
                        <div className="stars-item-left">
                        <p className="stars-item-left-text mb-0">איזה כיף! צברת </p>
                        </div>
                        <div className="stars-item-right d-flex justify-content-center align-items-center gap-1">
                        <img src={batches} alt="Batches Icon" />
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
                    <button onClick={() => setShowFinalPopup(false)} className="position-absolute top-0 end-0 m-3 border-0 bg-transparent">
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
  );
};

export default BusinessPayment;
