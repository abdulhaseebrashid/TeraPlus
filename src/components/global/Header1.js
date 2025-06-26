"use client"

import { useState } from "react"
import "./header1.css"
import userIcon from "../../assets/img/user_icon.svg"
import logo from "../../assets/img/logo.svg"
import PopupHeader from "../pages/Home/Popup_Header/Popup_Header"

const Header1 = () => {
  const [showPopup, setShowPopup] = useState(false)

  const handleUserIconClick = () => {
    setShowPopup(!showPopup)
  }

  const handleClosePopup = () => {
    setShowPopup(false)
  }

  return (
    <>
      <nav className="navbar navbar-light bg-white border-bottom border-primary px-3 py-2">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Left Side Buttons */}
          <div className="d-flex align-items-center gap-2">
            <button
              className="btn border-0 p-0 d-flex justify-content-center align-items-center"
              style={{ backgroundColor: "white", width: "60px", height: "35px" }}
              onClick={handleUserIconClick}
            >
              <img src={userIcon || "/placeholder.svg"} alt="User Icon" width="100" height="35" />
            </button>

            <button className="btn" style={{ backgroundColor: "#2A8DFF", borderRadius: "4px", color: "white" }}>
              Managers/Therapists
            </button>
          </div>

          {/* Right Side Logo + Text */}
          <div className="d-flex flex-column align-items-center">
            <img src={logo || "/placeholder.svg"} alt="Logo" style={{ height: "55px" }} />
          </div>
        </div>
      </nav>

      {/* Popup Component */}
      {showPopup && <PopupHeader onClose={handleClosePopup} />}
    </>
  )
}

export default Header1
