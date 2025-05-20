import React, { useState } from 'react';
import BusinessHomeHero from './business_home_hero';
import BusinessContactAndReview from './business_contact_and_review';
import BusinessLogo from './business_logo';
import BusinessTabSection from './business_tabs_section';
import BusinessSelectDate from './business_select_date';

const BusinessProfileTabs = () => {
  const [activeSection, setActiveSection] = useState('tab'); // 'tab' or 'date'

  const handlePriceClick = () => {
    setActiveSection('date');
  };

  return (
    <div className="container-fluid business-profile-home-container">
      <BusinessHomeHero />

      {/* Second Section */}
      <div className="business-profile-home-second-container pt-3">
        <div className="row rtl">
          <div className="col-lg-8">
            <BusinessLogo />

            {/* Show only one section based on activeSection */}
            {activeSection === 'tab' && (
              <BusinessTabSection onPriceClick={handlePriceClick} />
            )}

            {activeSection === 'date' && <BusinessSelectDate />}
          </div>

          <BusinessContactAndReview />
        </div>
      </div>
    </div>
  );
};

export default BusinessProfileTabs;
