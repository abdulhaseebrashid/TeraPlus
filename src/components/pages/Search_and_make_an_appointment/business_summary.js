import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // for navigation
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../assets/css/style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const BusinessSummary = () => {
  const navigate = useNavigate();
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (notes.trim()) {
      navigate('/business-payment');
    }
  };

  return (
    <div className="business-summary-container mb-3 mb-md-2">
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
                  required
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
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
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
