import React from 'react';
import '../../global/header1.css';
import searchIcon from '../../../assets/img/search.svg';
import locationIcon from '../../../assets/img/location_icon.svg'; // use your new icon here

const Hero = () => {
  return (
    <section className="hero d-flex align-items-center">
      <div className="hero-overlay w-100">
        <div className="container text-white">
          <div className="row justify-content-end">
            <div className="col-lg-6 text-end">
              <h1 className="fw-bold display-5 mb-2">
                <span className="text-dark">תמצאו את הספא</span><br />
                <span className="text-dark">המתאים עבורכם</span>
              </h1>
              <p className="fs-5 text-dark mb-4">
                חבילות ספא וחווית הזמנה מותאמת אישית
              </p>

              {/* Search Bar Below Text and Right Side */}
              <div
                className="search-container d-flex align-items-center p-3 bg-white rounded-4"
                style={{
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  maxWidth: '800px',
                  marginRight: 'auto',
                  flexWrap: 'wrap',
                  gap: '10px'
                }}
              >
                {/* Search Button */}
                <button
                  className="search-btn btn d-flex align-items-center px-3 py-2"
                  style={{
                    backgroundColor: '#2A8DFF',
                    borderRadius: '8px',
                    whiteSpace: 'nowrap',
                    color: 'white',
                    fontSize: '0.9rem',
                    height: '40px',
                    flexShrink: 0
                  }}
                >
                  <i className="bi bi-search me-2"></i> חיפוש
                </button>

                {/* Search Fields */}
                <div className="d-flex flex-wrap gap-3" style={{ flex: 1, minWidth: '300px' }}>
                  {/* Location */}
                  <div className="search-field" style={{ minWidth: '150px', flex: 1 }}>
                    <label className="text-primary fw-semibold small d-block text-end">מיקום</label>
                    <div className="input-group border-bottom">
                      <img src={searchIcon} alt="Pin Icon" width="14" height="14" className="me-2" />
                      <input
                        type="text"
                        className="form-control border-0 p-0 text-end small"
                        placeholder="לאן?"
                        dir="rtl"
                        style={{ fontSize: '0.85rem' }}
                      />
                    </div>
                  </div>

                  {/* Date */}
                  <div className="search-field" style={{ minWidth: '120px', flex: 1 }}>
                    <label className="text-primary fw-semibold small d-block text-end">תאריך</label>
                    <div className="input-group border-bottom">
                      <img src={searchIcon} alt="Calendar Icon" width="14" height="14" className="me-2" />
                      <input
                        type="text"
                        className="form-control border-0 p-0 text-end small"
                        placeholder="מתי?"
                        dir="rtl"
                        style={{ fontSize: '0.85rem' }}
                      />
                    </div>
                  </div>

                  {/* People */}
                  <div className="search-field" style={{ minWidth: '120px', flex: 1 }}>
                    <label className="text-primary fw-semibold small d-block text-end">אנשים</label>
                    <div className="input-group border-bottom">
                      <img src={locationIcon} alt="User Icon" width="14" height="14" className="me-2" />
                      <input
                        type="text"
                        className="form-control border-0 p-0 text-end small"
                        placeholder="כמה?"
                        dir="rtl"
                        style={{ fontSize: '0.85rem' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
