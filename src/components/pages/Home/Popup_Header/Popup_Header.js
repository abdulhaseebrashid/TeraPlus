"use client"
import "./Popup_Header.css"
import clockIcon from "../../../../assets/icons/1.svg"
import calendarIcon from "../../../../assets/icons/2.svg"
import userIcon from "../../../../assets/icons/3.svg"
import chatIcon from "../../../../assets/icons/4.svg"
import documentIcon from "../../../../assets/icons/5.svg"
import loginIcon from "../../../../assets/icons/6.svg"

const PopupHeader = ({ onClose }) => {
  const menuItems = [
    {
      id: 1,
      text: "המכונים שביקרתי",
      icon: clockIcon,
      className: "menu-item",
    },
    {
      id: 2,
      text: "היסטוריית אירועים",
      icon: calendarIcon,
      className: "menu-item",
    },
    {
      id: 3,
      text: "אזור אישי",
      icon: userIcon,
      className: "menu-item",
    },
    {
      id: 4,
      text: "תמיכה",
      icon: chatIcon,
      className: "menu-item",
    },
    {
      id: 5,
      text: "מדיניות שירותים",
      icon: documentIcon,
      className: "menu-item",
    },
    {
      id: 6,
      text: "התחברות",
      icon: loginIcon,
      className: "menu-item login-item",
    },
  ]

  const handleItemClick = (item) => {
    console.log("Clicked:", item.text)
    // Add your navigation logic here
  }

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()} style={{ background: 'white', padding: '25px', borderRadius: '30px', width: '90%', maxWidth: '400px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', position: 'relative', top: '-205px', right: '580px' }}>
        {menuItems.map((item, index) => (
          <div key={item.id}>
            <div className={item.className} onClick={() => handleItemClick(item)}>
              <span className="menu-text">{item.text}</span>
              <img src={item.icon || "/placeholder.svg"} alt="" className="menu-icon" />
            </div>
            {(index === 2 || index === 4) && <div className="menu-divider"></div>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default PopupHeader
