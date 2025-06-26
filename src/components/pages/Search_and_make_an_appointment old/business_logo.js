import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../assets/css/style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import businessProfileHome from '../../../assets/logo/logo1.png';

const BusinessLogo = () => {
  return (
    <div className="business-profile-home-second-left">
      <div className="row g-3">
        <div className="col-lg-2 d-flex align-items-center justify-content-center business-profile-home-header-logo-mob">
          <div className="business-profile-home-header-logo">
            <img src={businessProfileHome} alt="business-profile-home-logo" />
          </div>
        </div>
        <div className="col-lg-10">
          <div className="business-profile-home-second-header-title">
            <h3>ספא 3030 תל אביב</h3>
            <p>תל אביב</p>
            <Link to="/business-profile-home" className="navigate-to-place-btn">נווט למקום</Link>
          </div>
        </div>
      </div>

      <div className="business-profile-home-second-left-description pt-3 md-pt-3 lg-pt-5 sm-pt-3">
        <h5>על המקום</h5>
        <p className="business-profile-home-second-left-text">
          ספא וחמאם טורקי בתל אביב — בחרו היום מבין מגוון טיפולים מפנקים: עיסויים זוגיים, עיסויים ליחיד, חמאם טורקי, דיקור ועוד. ספא מומלץ במרכז תל אביב.
        </p>
      </div>
    </div>
  );
};

export default BusinessLogo;
