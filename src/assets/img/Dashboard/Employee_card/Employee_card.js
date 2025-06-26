import React from 'react';
import { Link } from 'react-router-dom';
import './Employee_card.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import dateIcon from '../../../../assets/img/Dashboard/team-icons/date-icon.svg';

const EmployeeCard = () => {
  return (
    <section className="employee-card-section"> 
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <button className="employee-keeping-button">שמירה</button>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-12 mb-2 mt-5">
                    <div className="back-to-team-link text-end">
                      <Link to="/team-management" className="back-to-team-link-text">חזרה לצוות <i className="bi bi-chevron-right"></i></Link>
                    </div>
                </div>
                <div className="col-12">
                  <div className="employee-personal-diary rtl d-flex justify-content-between">
                      <div className="employee-personal-diary-title">
                        <h2>יומן אישי</h2>
                      </div>
                      <div className="employee-personal-diary-content">
                        <button className="personal-diary-button d-flex gap-2"><img src={dateIcon} alt="plus" />יומן אישי</button>
                      </div>
                  </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default EmployeeCard;