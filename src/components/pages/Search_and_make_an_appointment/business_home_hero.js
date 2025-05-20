import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../assets/css/style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import businessProfileHome from '../../../assets/img/Business_Profile_Home/business-profile-home.jpg';




const BusinessHomeHero = () => {
    return (
        <div className="business-profile-home-first-container d-flex flex-column gap-4">
        <div className="row">
          <div className="col-lg-12">
            <div className="business-profile-search rtl">
              <Link to="/business-profile-home">
                <h5><i className="bi bi-chevron-right"></i> חיפוש</h5>
              </Link>
            </div>
          </div>
        </div>
        <div className="row rtl">
          <div className="col-lg-6">
            <div className="business-profile-home-right">
              <img src={businessProfileHome} alt="business-profile-home" className="image-right" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="business-profile-home-left">
              <div className="row g-2 md-g-2 sm-g-2 lg-g-3">
                {[...Array(4)].map((_, idx) => (
                  <div className="col-6" key={idx}>
                    <div className="image-wrapper">
                      <img
                        src={businessProfileHome}
                        alt="business-profile-home"
                        className={`image-right ${idx === 3 ? 'last-image-right' : ''}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
};


export default BusinessHomeHero;

