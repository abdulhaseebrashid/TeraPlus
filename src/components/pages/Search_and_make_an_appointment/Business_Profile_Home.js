import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import BusinessHomeHero from './business_home_hero';
import BusinessContactAndReview from './business_contact_and_review';
import BusinessLogo from './business_logo';
import BusinessTabSection from './business_tabs_section';
import BusinessSelectDate from './business_select_date';
import BusinessSummary from './business_summary';

const BusinessProfileTabs = () => {
  const [activeSection, setActiveSection] = useState('tab');

  const handlePriceClick = () => setActiveSection('date');
  const handleDateSelectionComplete = () => setActiveSection('confirmation');

  const handleBack = () => {
    if (activeSection === 'confirmation') {
      setActiveSection('date');
    } else if (activeSection === 'date') {
      setActiveSection('tab');
    }
  };

  return (
    <div className="container-fluid business-profile-home-container">
      <BusinessHomeHero />

      <div className="business-profile-home-second-container pt-3">
        <div className="row rtl">
          <div className="col-lg-8">
            <BusinessLogo />

            <div className="packages-heading d-flex flex-column justify-content-start align-items-start mt-5 mb-4">
              <h5 className="packages-heading-title">טיפולים וחבילות</h5>

              {/* Show back button only when not on the first section */}
              {activeSection !== 'tab' && (
                <button className="packages-link-back" onClick={handleBack}>
                  <h5 className="packages-heading-back">
                    <i className="bi bi-chevron-right"></i> חזרה
                  </h5>
                </button>
              )}
            </div>

            {activeSection === 'tab' && (
              <BusinessTabSection onPriceClick={handlePriceClick} />
            )}

            {activeSection === 'date' && (
              <BusinessSelectDate onComplete={handleDateSelectionComplete} />
            )}

            {activeSection === 'confirmation' && <BusinessSummary />}
          </div>

          <BusinessContactAndReview />
        </div>
      </div>
    </div>
  );
};

export default BusinessProfileTabs;
