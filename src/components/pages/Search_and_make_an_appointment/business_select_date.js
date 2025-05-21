import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../assets/css/style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';  
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const BusinessSelectDate = ({ onComplete }) => {
  const [selectedTherapist, setSelectedTherapist] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [date, setDate] = useState(new Date());

  const therapists = ["אהרון", "אהרון", "אהרון"];
  const times = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00'];

  // Check if all selections are made
  React.useEffect(() => {
    if (selectedTherapist !== null && selectedTime && date) {
      onComplete(); // Call parent function to move to next section
    }
  }, [selectedTherapist, selectedTime, date]);


    return (
      <section className="Choosing-therapist-section d-flex flex-column gap-4">
        <div className="Choosing-therapist">
          <div className="row">
            <div className="col-lg-12 pb-4">
                  <h5 className="Choosing-therapist-title">על המקום</h5>
            </div>
            <div className="col-lg-12">
              <ul className="Choosing-therapist-list d-flex flex-row gap-2 align-items-center justify-content-end left-to-right list-unstyled m-0 p-0">
                {therapists.map((name, index) => (
                  <li
                    key={index}
                    className={`Choosing-therapist-item ${selectedTherapist === index ? 'selected-therapist' : ''}`}
                    onClick={() => setSelectedTherapist(index)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="Choosing-therapist-content-text d-flex flex-row gap-1 align-items-center justify-content-end left-to-right">
                      <h6 className="mb-0">{name}</h6>
                      {/* Inline SVG */}
                      <svg className="user-icon" width="20" height="20" viewBox="0 0 18 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.08697 11.2933C8.96728 11.2733 8.82764 11.2733 8.70795 11.2933C5.95512 11.1935 3.76074 8.93941 3.76074 6.14667C3.76074 3.29409 6.05485 1 8.90743 1C11.76 1 14.054 3.31404 14.054 6.14667C14.0341 8.93941 11.8398 11.2135 9.08697 11.2933Z"
                          className="user-icon-path" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3.28041 17.5771C0.467728 19.4522 0.467728 22.5242 3.28041 24.3993C6.47217 26.5338 11.6986 26.5338 14.8903 24.3993C17.703 22.5242 17.703 19.4522 14.8903 17.5771C11.7185 15.4626 6.47217 15.4626 3.28041 17.5771Z"
                          className="user-icon-path" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>

                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="calendar-container">
          <div className="row">
            <div className="col-lg-12">
                <Calendar
                  onChange={setDate}
                  value={date}
                  locale="he-IL"
                  formatShortWeekday={(locale, date) =>
                    date.toLocaleDateString('he-IL', { weekday: 'short' })
                  }
                  formatMonthYear={(locale, date) =>
                    date.toLocaleDateString('he-IL', { month: 'long', year: 'numeric' })
                  }
                  nextLabel=">"
                  prevLabel="<"
                />
            </div>
          </div>
        </div>
        <div className="therapist-time-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="d-flex justify-content-start align-items-start flex-column gap-2">
                <h5 className="therapist-time-title">בחירת שעת הטיפול</h5>
                <div className="d-flex justify-content-start align-items-center flex-wrap gap-4 right-to-left">
                {times.map((time) => (
                  <button
                    key={time}
                    className={`btn time-button ${selectedTime === time ? 'active' : ''}`}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </button>
                ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
};


export default BusinessSelectDate;

