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
      className: "menu-item visited-institutes-item",
      textClass: "visited-institutes-text",
      iconClass: "visited-institutes-icon",
    },
    {
      id: 2,
      text: "היסטוריית אירועים",
      icon: calendarIcon,
      className: "menu-item events-history-item",
      textClass: "events-history-text",
      iconClass: "events-history-icon",
    },
    {
      id: 3,
      text: "אזור אישי",
      icon: userIcon,
      className: "menu-item personal-area-item",
      textClass: "personal-area-text",
      iconClass: "personal-area-icon",
    },
    {
      id: 4,
      text: "תמיכה",
      icon: chatIcon,
      className: "menu-item support-item",
      textClass: "support-text",
      iconClass: "support-icon",
    },
    {
      id: 5,
      text: "מדיניות שירותים",
      icon: documentIcon,
      className: "menu-item services-policy-item",
      textClass: "services-policy-text",
      iconClass: "services-policy-icon",
    },
    {
      id: 6,
      text: "התחברות",
      icon: loginIcon,
      className: "menu-item login-item",
      textClass: "login-text",
      iconClass: "login-icon",
    },
  ]

  const handleItemClick = (item) => {
    console.log("Clicked:", item.text)
    // Add your navigation logic here
  }

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        {menuItems.map((item, index) => (
          <div key={item.id}>
            <div className={item.className} onClick={() => handleItemClick(item)}>
              <span className={`menu-text ${item.textClass}`}>{item.text}</span>
              <img src={item.icon || "/placeholder.svg"} alt="" className={`menu-icon ${item.iconClass}`} />
            </div>
            {(index === 2 || index === 4) && <div className="menu-divider"></div>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default PopupHeader
