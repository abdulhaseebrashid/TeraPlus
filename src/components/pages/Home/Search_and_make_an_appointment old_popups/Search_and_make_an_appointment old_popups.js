"use client"

import { useState, useEffect } from "react"
import "./Search_and_make_an_appointment old_popups.css"
import teamIcon from "../../../../assets/icons/team.svg"
import plusIcon from "../../../../assets/icons/plusIcon.svg"
import crossIcon from "../../../../assets/icons/crossIcon.svg"
import arrowdownIcon from "../../../../assets/icons/FrameImg.svg"
import frameAddIcon from "../../../../assets/icons/FrameAddImg.svg"

const BookingPopup = ({ isOpen, onClose, treatmentData }) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [guests, setGuests] = useState(1)
  const [men, setMen] = useState(1)
  const [women, setWomen] = useState(1)
  const [menGuests, setMenGuests] = useState([{ id: 1, gender: "גבר" }])
  const [womenGuests, setWomenGuests] = useState([{ id: 1, gender: "אישה" }])
  const [additionalStaff, setAdditionalStaff] = useState(0)

  // NEW: Calendar state
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(2) // Default selected date

  // Hebrew month names
  const hebrewMonths = [
    "ינואר",
    "פברואר",
    "מרץ",
    "אפריל",
    "מאי",
    "יוני",
    "יולי",
    "אוגוסט",
    "ספטמבר",
    "אוקטובר",
    "נובמבר",
    "דצמבר",
  ]

  // FIXED: Update guests count whenever men or women count changes
  useEffect(() => {
    setGuests(men + women)
  }, [men, women])

  // Reset to step 1 when popup opens/closes
  useEffect(() => {
    if (isOpen) {
      setCurrentStep(1)
      setMenGuests([{ id: 1, gender: "גבר" }])
      setWomenGuests([{ id: 1, gender: "אישה" }])
      setMen(1)
      setWomen(1)
      setGuests(1)
      setAdditionalStaff(0)
      setCurrentDate(new Date()) // Reset to current date
      setSelectedDate(2) // Reset selected date
    }
  }, [isOpen])

  const handleClose = () => {
    setCurrentStep(1) // Reset to first step
    onClose()
  }

  if (!isOpen) return null

  // NEW: Calendar navigation functions
  const handlePreviousMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate)
      newDate.setMonth(newDate.getMonth() - 1)
      return newDate
    })
  }

  const handleNextMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate)
      newDate.setMonth(newDate.getMonth() + 1)
      return newDate
    })
  }

  // NEW: Generate calendar days
  const generateCalendarDays = () => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()

    // First day of the month
    const firstDay = new Date(year, month, 1)
    // Last day of the month
    const lastDay = new Date(year, month + 1, 0)
    // First day of the week (0 = Sunday, 1 = Monday, etc.)
    const firstDayOfWeek = firstDay.getDay()
    // Number of days in the month
    const daysInMonth = lastDay.getDate()

    // Previous month's last few days
    const prevMonth = new Date(year, month - 1, 0)
    const daysInPrevMonth = prevMonth.getDate()

    const calendarDays = []

    // Add previous month's days
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      calendarDays.push({
        day: daysInPrevMonth - i,
        isCurrentMonth: false,
        isPrevMonth: true,
        isNextMonth: false,
      })
    }

    // Add current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      calendarDays.push({
        day: day,
        isCurrentMonth: true,
        isPrevMonth: false,
        isNextMonth: false,
      })
    }

    // Add next month's days to fill the grid (42 days total - 6 weeks)
    const remainingDays = 42 - calendarDays.length
    for (let day = 1; day <= remainingDays; day++) {
      calendarDays.push({
        day: day,
        isCurrentMonth: false,
        isPrevMonth: false,
        isNextMonth: true,
      })
    }

    return calendarDays
  }

  const handleIncrement = (type) => {
    if (type === "men") {
      const newMenCount = men + 1
      setMen(newMenCount)
      setMenGuests([...menGuests, { id: menGuests.length + 1, gender: "גבר" }])
    }
    if (type === "women") {
      const newWomenCount = women + 1
      setWomen(newWomenCount)
      setWomenGuests([...womenGuests, { id: womenGuests.length + 1, gender: "אישה" }])
    }
  }

  const handleDecrement = (type) => {
    if (type === "men" && men > 0) {
      const newMenCount = men - 1
      setMen(newMenCount)
      setMenGuests(menGuests.slice(0, -1))
    }
    if (type === "women" && women > 0) {
      const newWomenCount = women - 1
      setWomen(newWomenCount)
      setWomenGuests(womenGuests.slice(0, -1))
    }
  }

  const handleContinueToStep2 = () => {
    setCurrentStep(2)
  }

  const handleContinueToStep3 = () => {
    setCurrentStep(3)
  }

  const handleAddStaffMember = () => {
    setAdditionalStaff(additionalStaff + 1)
  }

  // NEW: Handle removing staff member
  const handleRemoveStaffMember = (staffId) => {
    if (staffId <= guests) {
      // Can't remove base staff (one per guest)
      return
    }
    // Remove from additional staff
    setAdditionalStaff(additionalStaff - 1)
  }

  // NEW: Handle date selection
  const handleDateClick = (day, isCurrentMonth) => {
    if (isCurrentMonth) {
      setSelectedDate(day)
    }
  }

  // Generate staff members based on guest count + additional staff
  const generateStaffMembers = () => {
    const totalStaff = guests + additionalStaff
    const staffArray = []

    for (let i = 1; i <= totalStaff; i++) {
      staffArray.push({
        id: i,
        name: "חיים שלום",
        type: "staff",
        isRemovable: i > guests, // Only additional staff can be removed
      })
    }

    return staffArray
  }

  const renderStep1 = () => (
    <>
      {/* Header */}
      <div className="popup-header">
        <p className="popup-location">ספא במלון בראון תל אביב</p>
      </div>

      {/* Title */}
      <div className="popup-title">
        <h2>חבילת ספא ליחיד הכוללת עיסוי למשך</h2>
        <h2>45 דקות ושימוש במתקני הספא</h2>
      </div>

      {/* Description */}
      <div className="popup-description">
        <p>חבילת ספא ליחיד הכוללת עיסוי למשך 45 דקות ושימוש במתקני הספא</p>
        <p>וכוללת שתיה ומתקנים בגרדת המכון。</p>
      </div>

      {/* Selection Box */}
      <div className="selection-box">
        {/* Guests */}
        <div className="selection-row">
        <div className="selection-label">
            <span className="selection-text" style={{ fontSize: '30px' }}>אורחים</span>
            <div className="guests-info">
            <img src={teamIcon || "/placeholder.svg"} alt="team" className="team-icon" />
            <span>
                ({guests} <span style={{ fontSize: '20px' }}>אורחים</span>)
            </span>
            </div>
        </div>
        </div>


        {/* Men */}
        <div className="selection-row">
          <div className="selection-label">
            <span className="selection-text">גבר</span>
          </div>
          <div className="counter-controls">
            <button className="counter-btn minus-btn" onClick={() => handleDecrement("men")}>
              -
            </button>
            <span className="counter-number">{men}</span>
            <button className="counter-btn plus-btn" onClick={() => handleIncrement("men")}>
              <img src={plusIcon || "/placeholder.svg"} alt="plus" className="plus-icon" />
            </button>
          </div>
        </div>

        {/* Women */}
        <div className="selection-row">
          <div className="selection-label">
            <span className="selection-text">אישה</span>
          </div>
          <div className="counter-controls">
            <button className="counter-btn minus-btn" onClick={() => handleDecrement("women")}>
              -
            </button>
            <span className="counter-number">{women}</span>
            <button className="counter-btn plus-btn" onClick={() => handleIncrement("women")}>
              <img src={plusIcon || "/placeholder.svg"} alt="plus" className="plus-icon" />
            </button>
          </div>
        </div>
      </div>

      {/* Important Info Section */}
      <div className="important-info">
        <h3>חשוב שתדעו</h3>
        <div className="info-text">
          <p>חבילת ספא ליחיד הכוללת עיסוי למשך 45 דקות ושימוש במתקני</p>
          <p>הספאחבילת ספא ליחיד הכוללת עיסוי למשך 45 דקות ושימוש במתקני</p>
          <p>הספאחבילת ספא ליחיד הכוללת עיסוי למשך 45 דקות ושימוש במתקני</p>
          <p>הספאחבילת ספא ליחיד הכוללת עיסוי למשך 45 דקות ושימוש במתקני</p>
          <p>הספאחבילת ספא ליחיד הכוללת עיסוי למשך 45 דקות ושימוש במתקני</p>
          <p>הספאחבילת ספא ליחיד הכוללת עיסוי למשך 45 דקות ושימוש במתקני</p>
          <p>הספא</p>
        </div>
      </div>

      {/* Bottom Button */}
      <div className="popup-bottom">
        <button className="bottom-btn continue-btn" onClick={handleContinueToStep2}>
          נא לבחור את כמות האורחים
        </button>
      </div>
    </>
  )

  const renderStep2 = () => (
    <>
      {/* Header */}
      <div className="popup-header">
        <p className="popup-location">ספא במלון בראון תל אביב</p>
      </div>

      {/* Title */}
      <div className="popup-title">
        <h2>חבילת ספא ליחיד הכוללת עיסוי למשך</h2>
        <h2>45 דקות ושימוש במתקני הספא</h2>
      </div>

      {/* Description */}
      <div className="popup-description">
        <p>חבילת ספא ליחיד הכוללת עיסוי למשך 45 דקות ושימוש במתקני הספא</p>
        <p>וכוללת שתיה ומתקנים בגרדת המכון。</p>
      </div>

      {/* Selection Box - Summary */}
      <div className="selection-box">
      <div className="selection-row">
        <div className="selection-label">
            <span className="selection-text" style={{ fontSize: '30px' }}>אורחים</span>
            <div className="guests-info">
            <img src={teamIcon || "/placeholder.svg"} alt="team" className="team-icon" />
            <span>
                ({guests} <span style={{ fontSize: '20px' }}>אורחים</span>)
            </span>
            </div>
        </div>
        </div>

        <div className="selection-row">
          <div className="selection-label">
            <span className="selection-text">גבר</span>
          </div>
          <div className="counter-controls">
            <button className="counter-btn minus-btn" onClick={() => handleDecrement("men")}>
              -
            </button>
            <span className="counter-number">{men}</span>
            <button className="counter-btn plus-btn" onClick={() => handleIncrement("men")}>
              <img src={plusIcon || "/placeholder.svg"} alt="plus" className="plus-icon" />
            </button>
          </div>
        </div>
        <div className="selection-row">
          <div className="selection-label">
            <span className="selection-text">אישה</span>
          </div>
          <div className="counter-controls">
            <button className="counter-btn minus-btn" onClick={() => handleDecrement("women")}>
              -
            </button>
            <span className="counter-number">{women}</span>
            <button className="counter-btn plus-btn" onClick={() => handleIncrement("women")}>
              <img src={plusIcon || "/placeholder.svg"} alt="plus" className="plus-icon" />
            </button>
          </div>
        </div>
      </div>

      {/* Guest Details - New Clean Layout */}
      <div className="clean-guest-details">
        {/* Render Male Guests */}
        {menGuests.map((guest) => (
          <div key={`men-${guest.id}`} className="clean-guest-section">
            <div className="clean-guest-header">
              <h3>אורח {guest.id} (גבר)</h3>
              <span className="clean-guest-price">450 ₪</span>
            </div>

            <div className="clean-fields-container">
              <div className="clean-field-item">
                <span className="clean-field-label">מין המטפל</span>
                <select className="clean-dropdown">
                  <option>רגילה</option>
                </select>
              </div>

              <div className="clean-field-item">
                <span className="clean-field-label">טמפרטורת החדר</span>
                <select className="clean-dropdown">
                  <option>רגילה</option>
                </select>
              </div>

              <div className="clean-field-item">
                <span className="clean-field-label">מוזיקה ברקע</span>
                <select className="clean-dropdown">
                  <option>מוזיקה רגועה</option>
                </select>
              </div>
            </div>
          </div>
        ))}

        {/* Render Female Guests */}
        {womenGuests.map((guest) => (
          <div key={`women-${guest.id}`} className="clean-guest-section">
            <div className="clean-guest-header">
              <h3>אורח {guest.id + menGuests.length} (אישה)</h3>
              <span className="clean-guest-price">450 ₪</span>
            </div>

            <div className="clean-fields-container">
              <div className="clean-field-item">
                <span className="clean-field-label">מין המטפל</span>
                <select className="clean-dropdown">
                  <option>לא חשוב לי</option>
                </select>
              </div>

              <div className="clean-field-item">
                <span className="clean-field-label">טמפרטורת החדר</span>
                <select className="clean-dropdown">
                  <option>רגילה</option>
                </select>
              </div>

              <div className="clean-field-item">
                <span className="clean-field-label">מוזיקה ברקע</span>
                <select className="clean-dropdown">
                  <option>מוזיקה רגועה</option>
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Button */}
      <div className="popup-bottom">
        <button className="bottom-btn continue-btn" onClick={handleContinueToStep3}>
          נא לבחור שעה ותאריך
        </button>
      </div>
    </>
  )

  const renderStep3 = () => {
    const staffMembers = generateStaffMembers()
    const calendarDays = generateCalendarDays()

    return (
      <>
        {/* Header */}
        <div className="popup-header">
          <p className="popup-location">ספא במלון בראון תל אביב</p>
        </div>

        {/* Title */}
        <div className="popup-title">
          <h2>חבילת ספא ליחיד הכוללת עיסוי למשך</h2>
          <h2>45 דקות ושימוש במתקני הספא</h2>
        </div>

        {/* Description */}
        <div className="popup-description">
          <p>חבילת ספא ליחיד הכוללת עיסוי למשך 45 דקות ושימוש במתקני הספא</p>
          <p>וכוללת שתיה ומתקנים בגרדת המכון。</p>
        </div>

        {/* Selection Box - Summary from Step 1 & 2 */}
        <div className="selection-box">
        <div className="selection-row">
        <div className="selection-label">
            <span className="selection-text" style={{ fontSize: '30px' }}>אורחים</span>
            <div className="guests-info">
            <img src={teamIcon || "/placeholder.svg"} alt="team" className="team-icon" />
            <span>
                ({guests} <span style={{ fontSize: '20px' }}>אורחים</span>)
            </span>
            </div>
        </div>
        </div>

          <div className="selection-row">
            <div className="selection-label">
              <span className="selection-text">גבר</span>
            </div>
            <div className="counter-controls">
              <button className="counter-btn minus-btn" onClick={() => handleDecrement("men")}>
                -
              </button>
              <span className="counter-number">{men}</span>
              <button className="counter-btn plus-btn" onClick={() => handleIncrement("men")}>
                <img src={plusIcon || "/placeholder.svg"} alt="plus" className="plus-icon" />
              </button>
            </div>
          </div>
          <div className="selection-row">
            <div className="selection-label">
              <span className="selection-text">אישה</span>
            </div>
            <div className="counter-controls">
              <button className="counter-btn minus-btn" onClick={() => handleDecrement("women")}>
                -
              </button>
              <span className="counter-number">{women}</span>
              <button className="counter-btn plus-btn" onClick={() => handleIncrement("women")}>
                <img src={plusIcon || "/placeholder.svg"} alt="plus" className="plus-icon" />
              </button>
            </div>
          </div>
        </div>

        {/* Guest Details from Step 2 */}
        <div className="clean-guest-details">
          {/* Render Male Guests */}
          {menGuests.map((guest) => (
            <div key={`men-${guest.id}`} className="clean-guest-section">
              <div className="clean-guest-header">
                <h3>אורח {guest.id} (גבר)</h3>
                <span className="clean-guest-price">450 ₪</span>
              </div>

              <div className="clean-fields-container">
                <div className="clean-field-item">
                  <span className="clean-field-label">מין המטפל</span>
                  <select className="clean-dropdown">
                    <option>רגילה</option>
                  </select>
                </div>

                <div className="clean-field-item">
                  <span className="clean-field-label">טמפרטורת החדר</span>
                  <select className="clean-dropdown">
                    <option>רגילה</option>
                  </select>
                </div>

                <div className="clean-field-item">
                  <span className="clean-field-label">מוזיקה ברקע</span>
                  <select className="clean-dropdown">
                    <option>מוזיקה רגועה</option>
                  </select>
                </div>
              </div>
            </div>
          ))}

          {/* Render Female Guests */}
          {womenGuests.map((guest) => (
            <div key={`women-${guest.id}`} className="clean-guest-section">
              <div className="clean-guest-header">
                <h3>אורח {guest.id + menGuests.length} (אישה)</h3>
                <span className="clean-guest-price">450 ₪</span>
              </div>

              <div className="clean-fields-container">
                <div className="clean-field-item">
                  <span className="clean-field-label">מין המטפל</span>
                  <select className="clean-dropdown">
                    <option>לא חשוב לי</option>
                  </select>
                </div>

                <div className="clean-field-item">
                  <span className="clean-field-label">טמפרטורת החדר</span>
                  <select className="clean-dropdown">
                    <option>רגילה</option>
                  </select>
                </div>

                <div className="clean-field-item">
                  <span className="clean-field-label">מוזיקה ברקע</span>
                  <select className="clean-dropdown">
                    <option>מוזיקה רגועה</option>
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* UPDATED: Staff Selection - Horizontal Layout with Add Button Next to Images */}
        <div className="exact-booking-section">
          {/* Staff Selection with Horizontal Layout */}
          <div className="staff-selection-section">
            <h3 className="staff-title">בחירת איש צוות</h3>
            <div className="horizontal-staff-container">
              {/* All Staff Members + Add Button in ONE ROW */}
              <div className="horizontal-staff-row">
                {/* Render all staff members */}
                {staffMembers.map((staff) => (
                  <div key={staff.id} className="staff-avatar-item">
                    <div className="staff-image-container">
                      <img
                        src={arrowdownIcon || "/placeholder.svg"}
                        alt="staff"
                        className="staff-frame-img"
                        onError={(e) => {
                          console.log("FrameImg.svg failed to load:", e)
                          e.target.style.display = "none"
                          e.target.nextSibling.style.display = "block"
                        }}
                      />
                      <span className="staff-text-fallback" style={{ display: "none" }}>
                        staff
                      </span>
                      {/* Cross icon on hover - only for removable staff */}
                      {staff.isRemovable && (
                        <div
                          className="staff-remove-cross"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleRemoveStaffMember(staff.id)
                          }}
                        >
                          <img src={crossIcon || "/placeholder.svg"} alt="remove" className="cross-icon-small" />
                        </div>
                      )}
                    </div>
                    <span className="staff-name">{staff.name}</span>
                  </div>
                ))}

                {/* Add Staff Button - NEXT TO the staff images */}
                <div className="staff-avatar-item">
                  <img
                    src={frameAddIcon || "/placeholder.svg"}
                    alt="add staff"
                    className="staff-frame-img add-staff-img"
                    onClick={handleAddStaffMember}
                    onError={(e) => {
                      console.log("FrameAddImg.svg failed to load:", e)
                      e.target.style.display = "none"
                      e.target.nextSibling.style.display = "block"
                    }}
                  />
                  <div
                    className="staff-avatar add-staff-btn"
                    onClick={handleAddStaffMember}
                    style={{ display: "none" }}
                  >
                    <div className="plus-icon-container">
                      <span className="plus-symbol">+</span>
                    </div>
                  </div>
                  <span className="staff-name">הוסף איש צוות</span>
                </div>
              </div>
            </div>
          </div>

          {/* UPDATED: Calendar Section WITH FUNCTIONAL navigation arrows */}
          <div className="exact-calendar-section">
            <div className="calendar-header-with-nav">
              <button className="calendar-nav-arrow" onClick={handlePreviousMonth}>
                &#8249;
              </button>
              <h3 className="calendar-month-title-nav">
                {hebrewMonths[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h3>
              <button className="calendar-nav-arrow" onClick={handleNextMonth}>
                &#8250;
              </button>
            </div>

            <div className="exact-calendar-grid">
              {/* Hebrew Day Headers */}
              <div className="exact-calendar-header">
                <div className="day-header">א</div>
                <div className="day-header">ב</div>
                <div className="day-header">ג</div>
                <div className="day-header">ד</div>
                <div className="day-header">ה</div>
                <div className="day-header">ו</div>
                <div className="day-header">ש</div>
              </div>

              {/* UPDATED: Dynamic Calendar Days */}
              <div className="exact-calendar-body">
                {calendarDays.map((dayObj, index) => (
                  <div
                    key={index}
                    className={`calendar-day ${
                      dayObj.isPrevMonth || dayObj.isNextMonth ? (dayObj.isPrevMonth ? "prev-month" : "next-month") : ""
                    } ${dayObj.isCurrentMonth && dayObj.day === selectedDate ? "selected-date" : ""}`}
                    onClick={() => handleDateClick(dayObj.day, dayObj.isCurrentMonth)}
                  >
                    {dayObj.day.toString().padStart(2, "0")}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Time Selection - Horizontal Layout */}
          <div className="exact-time-section">
            <h3 className="time-title">בחירת שעה</h3>
            <div className="horizontal-time-slots">
              <button className="time-slot-btn">13:00</button>
              <button className="time-slot-btn">12:00</button>
              <button className="time-slot-btn">11:00</button>
              <button className="time-slot-btn">10:00</button>
              <button className="time-slot-btn">09:00</button>
            </div>
          </div>
        </div>

        {/* Bottom Button */}
        <div className="popup-bottom">
          <button className="bottom-btn continue-btn exact-confirm-btn">נא לבחור שעה ותאריך</button>
        </div>
      </>
    )
  }

  return (
    <div className="popup-overlay">
      <div className="popup-container extended">
        {/* Close Button */}
        <button className="popup-close-btn" onClick={handleClose}>
          <img src={crossIcon || "/placeholder.svg"} alt="close" className="cross-icon" />
        </button>

        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}
        {currentStep === 3 && renderStep3()}
      </div>
    </div>
  )
}

export default BookingPopup
