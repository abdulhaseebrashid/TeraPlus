"use client"
import { useState } from "react"
import "./Search_and_make_an_appointment old_popups1.css"
import crossIcon from "../../../../assets/icons/crossIcon.svg"
import spaImg from "../../../../assets/icons/spaImg.svg"
import googleIcon from "../../../../assets/icons/google-icon.svg"
import successIcon from "../../../../assets/icons/successIcon.svg"
import successVector1 from "../../../../assets/icons/successvector1.svg"
import SuccessVector from "../../../../assets/icons/SuccessVector.svg"

const BookingPopup1 = ({ isOpen, onClose, treatmentData }) => {
  const [isTermsAccepted, setIsTermsAccepted] = useState(false)
  const [showSecondPopup, setShowSecondPopup] = useState(false)
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)

  if (!isOpen) return null

  const handleTermsChange = (e) => {
    setIsTermsAccepted(e.target.checked)
  }

  const handleSubmitClick = () => {
    if (isTermsAccepted) {
      setShowSecondPopup(true)
    }
  }

  const handleSecondPopupClose = () => {
    setShowSecondPopup(false)
  }

  const handleSaveClick = () => {
    setShowSecondPopup(false)
    setShowSuccessPopup(true)
  }

  const handleSuccessClose = () => {
    setShowSuccessPopup(false)
    onClose()
  }

  // Success Popup Component - Matching exact design with icons in buttons
  const SuccessPopup = () => (
    <div className="booking-popup1-overlay">
      <div className="booking-popup1-success-container">
        {/* Close Button */}
        <button className="booking-popup1-close" onClick={handleSuccessClose}>
          <img src={crossIcon || "/placeholder.svg"} alt="close" />
        </button>

        {/* Success Icon */}
        <div className="booking-popup1-success-icon">
          <img src={successIcon || "/placeholder.svg"} alt="success" />
        </div>

        {/* Success Title */}
        <h2 className="booking-popup1-success-title">מעולה! הטיפול תואם בהצלחה</h2>

        {/* Address */}
        <p className="booking-popup1-success-address">נפא 3030, חרש 4 הוד השרון</p>

        {/* Date and Time */}
        <p className="booking-popup1-success-datetime">עיסוי שוודי ביום 05/05/2025 בשעה 10:00</p>

        {/* Celebration Icon */}
        <div className="booking-popup1-success-celebration">
          <span style={{ fontSize: "24px" }}>🎉</span>
        </div>

        {/* Credit Message */}
        <p className="booking-popup1-success-credit">בטיפול הא תקבל X קרדיט למימוש</p>

        {/* Action Buttons with Icons Inside */}
        <div className="booking-popup1-success-buttons">
          <button className="booking-popup1-success-button" onClick={handleSuccessClose}>
            <img src={SuccessVector || "/placeholder.svg"} alt="calendar" />
            לסנכרן עם היומן
          </button>
          <button className="booking-popup1-success-button">
            <img src={successVector1 || "/placeholder.svg"} alt="share" />
            לשתף עם החברים
          </button>
        </div>
      </div>
    </div>
  )

  // Second Popup Component - Now using success container style
  const SecondPopup = () => (
    <div className="booking-popup1-overlay">
      <div className="booking-popup1-success-container">
        {/* Close Button */}
        <button className="booking-popup1-close" onClick={handleSecondPopupClose}>
          <img src={crossIcon || "/placeholder.svg"} alt="close" />
        </button>

        {/* Title */}
             <h2
                className="booking-popup1-success-title"
                style={{ position: 'relative', top: '-33px', right: '-151px' }}
                >
            תשלום
            </h2>


        {/* Form Section */}
        <div className="booking-popup1-form-section" style={{ textAlign: "right", direction: "rtl" }}>
          {/* Row 1: Card Number and Expiry */}
          <div className="booking-popup1-row-fields">
            <div className="booking-popup1-input-group booking-popup1-half-width">
              <label className="booking-popup1-input-label">מספר כרטיס</label>
              <input type="text" className="booking-popup1-text-input" placeholder="1234 5678 9012 3456" />
            </div>
            <div className="booking-popup1-input-group booking-popup1-half-width">
              <label className="booking-popup1-input-label">תוקף</label>
              <input type="text" className="booking-popup1-text-input" placeholder="09/26" />
            </div>
          </div>

          {/* Row 2: CVV and Date */}
          <div className="booking-popup1-row-fields">
            <div className="booking-popup1-input-group booking-popup1-half-width">
              <label className="booking-popup1-input-label">cvv</label>
              <input type="text" className="booking-popup1-text-input" placeholder="667" />
            </div>
            <div className="booking-popup1-input-group booking-popup1-half-width">
              <label className="booking-popup1-input-label">תאריך</label>
              <input type="text" className="booking-popup1-text-input" placeholder="19/09/2025" />
            </div>
          </div>

          {/* Row 3: ID Number (single field) */}
          <div className="booking-popup1-input-group">
            <label className="booking-popup1-input-label">מספר ת.ז</label>
            <input type="text" className="booking-popup1-text-input" placeholder="23324808403" />
          </div>

          {/* Row 4: Two Buttons */}
          <div className="booking-popup1-button-row">
            <button className="booking-popup1-secondary-button" onClick={handleSaveClick}>
              שמור
            </button>
            <button className="booking-popup1-submit-button enabled" onClick={handleSecondPopupClose}>
              ביטול
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Show Success Popup */}
      {showSuccessPopup && <SuccessPopup />}

      {/* Show Second Popup */}
      {showSecondPopup && !showSuccessPopup && <SecondPopup />}

      {/* Show First Popup */}
      {!showSecondPopup && !showSuccessPopup && (
        <div className="booking-popup1-overlay">
          <div className="booking-popup1-container">
            {/* Header with Close Button */}
            <div className="booking-popup1-header">
              <button className="booking-popup1-close" onClick={onClose}>
                <img src={crossIcon || "/placeholder.svg"} alt="close" />
              </button>
            </div>

            {/* Main Blue Bordered Container */}
            <div className="booking-popup1-main-container">
              {/* Title */}
              <h2 className="booking-popup1-title">סיכום ואישור הזמנה</h2>

              {/* Treatment Section with Image on Left, Content on Right */}
              <div className="booking-popup1-treatment-section">
                <div className="booking-popup1-spa-image">
                  <img src={spaImg || "/placeholder.svg"} alt="spa treatment" />
                </div>
                <div className="booking-popup1-treatment-content">
                  <div className="booking-popup1-profile-avatar"></div>
                  <div className="booking-popup1-treatment-text">
                    <p style={{ color: "lightgray" }}>מלון בראון תל אביב</p>
                    <p>תבנית ספא ליחיד המכילת עיסוי למשך 45 דקות</p>
                    <p>ושימוש במתקני הספא</p>
                    <p>וכוללת שתיה וחמימים בקבלת הפנים.</p>
                  </div>
                </div>
              </div>

              {/* Divider Line */}
              <div className="booking-popup1-section-divider"></div>

              {/* Connect Section */}
              <div className="booking-popup1-connect-section">
                <h3 className="booking-popup1-section-title">התחבר</h3>

                <button className="booking-popup1-google-button">
                  <img src={googleIcon || "/placeholder.svg"} alt="Google" className="booking-popup1-google-logo" />
                  <span>Sign up with Google</span>
                </button>

                <div className="booking-popup1-or-divider">
                  <span>או</span>
                </div>
              </div>

              {/* Form Section */}
              <div className="booking-popup1-form-section">
                <h3 className="booking-popup1-section-title">מלא את הפרטים</h3>

                <div className="booking-popup1-input-group">
                  <label className="booking-popup1-input-label">שם מלא</label>
                  <input type="text" className="booking-popup1-text-input" placeholder="אחרון כאן" />
                </div>

                <div className="booking-popup1-input-group">
                  <label className="booking-popup1-input-label">מספר טלפון</label>
                  <input type="tel" className="booking-popup1-text-input" defaultValue="05466709796" />
                </div>

                <div className="booking-popup1-input-group">
                  <label className="booking-popup1-input-label">אימייל</label>
                  <input type="email" className="booking-popup1-text-input" defaultValue="aheron86#gmail.com" />
                </div>

                {/* Order Summary Section */}
                <div className="booking-popup1-order-summary">
                  <h3 className="booking-popup1-summary-title">סיכום הזמנה</h3>

                  <div className="booking-popup1-summary-header">
                    <div className="booking-popup1-summary-datetime">
                      <div>תאריך 01/01/2025</div>
                      <div>13:00</div>
                    </div>
                    <div className="booking-popup1-summary-price">450 ₪</div>
                  </div>

                  <div className="booking-popup1-summary-items">
                    <div className="booking-popup1-summary-item">
                      <div className="booking-popup1-item-details">
                        <div className="booking-popup1-item-title">אורח 1 (גברים)</div>
                        <div className="booking-popup1-item-description">
                          תבנית עיסוי יחיד 60ד זמן מלא נכנסת למתקנים
                        </div>
                      </div>
                      <div className="booking-popup1-item-price">450 ₪</div>
                    </div>

                    <div className="booking-popup1-summary-item">
                      <div className="booking-popup1-item-details">
                        <div className="booking-popup1-item-title">אורח 2 (אישה)</div>
                        <div className="booking-popup1-item-description">
                          תבנית עיסוי יחיד 60ד זמן מלא נכנסת למתקנים
                        </div>
                      </div>
                      <div className="booking-popup1-item-price">450 ₪</div>
                    </div>
                  </div>
                </div>

                {/* Comments Section */}
                <div className="booking-popup1-comments-section">
                  <label className="booking-popup1-comments-label">הערות לקראת הטיפול</label>
                  <textarea className="booking-popup1-comments-input" placeholder="" rows="4"></textarea>
                </div>

                {/* Coupon Code Section */}
                <div className="booking-popup1-coupon-section">
                  <label className="booking-popup1-coupon-label">קוד קופון</label>
                  <div className="booking-popup1-coupon-input-container">
                    <input type="text" className="booking-popup1-coupon-input" placeholder="קוד קופון" />
                    <button className="booking-popup1-coupon-button">החל קופון</button>
                  </div>
                </div>

                {/* Important Information Section */}
                <div className="booking-popup1-important-section">
                  <h3 className="booking-popup1-important-title">חשוב שתדעו</h3>
                  <div className="booking-popup1-important-content">
                    <p>חבילת ספא ליחיד הכוללת עיסוי למשך 45 דקות ושימוש במתקני</p>
                    <p>הספאחבילת ספא ליחיד הכוללת עיסוי למשך 45 דקות ושימוש במתקני </p>
                    <p>ספאחבילת ספא ליחיד הכוללת עיסוי למשך 45 דקות ושימוש במתקני </p>
                    <p>הספאחבילת ספא ליחיד הכוללת עיסוי למשך 45 דקות ושימוש במתקני </p>
                    <p>הספאחבילת ספא ליחיד הכוללת עיסוי למשך 45 דקות ושימוש במתקני </p>
                    <p>הספאחבילת ספא ליחיד הכוללת עיסוי למשך 45 דקות ושימוש במתקני </p>
                    <p>הספא</p>
                  </div>
                </div>

                {/* Terms Agreement Section */}
                <div className="booking-popup1-terms-section">
                  <label className="booking-popup1-terms-label">
                    <input
                      type="checkbox"
                      className="booking-popup1-terms-checkbox"
                      checked={isTermsAccepted}
                      onChange={handleTermsChange}
                    />
                    <span className="booking-popup1-terms-checkmark"></span>
                    <span className="booking-popup1-terms-text">הנני מאשר את תקנון ומדיניות בעל העסק</span>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="booking-popup1-submit-section">
                  <button
                    className={`booking-popup1-submit-button ${isTermsAccepted ? "enabled" : "disabled"}`}
                    disabled={!isTermsAccepted}
                    onClick={handleSubmitClick}
                  >
                    אנא מלאו את כל הפרטים
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default BookingPopup1
