"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./User_Login.css"
import googleIcon from "../../../../../assets/icons/google-icon.svg"
import appleIcon from "../../../../../assets/icons/apple-icon.svg"

const UserLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState("")
  const navigate = useNavigate()

  const handleGoogleLogin = () => {
    console.log("Google login clicked")
    // Add Google login logic here
  }

  const handleAppleLogin = () => {
    console.log("Apple login clicked")
    // Add Apple login logic here
  }

  const handleContinue = () => {
    if (phoneNumber.trim()) {
      console.log("Continue with phone:", phoneNumber)
      // Add phone verification logic here
      // navigate to next step
    }
  }

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value)
  }

  return (
    <div className="user-login-container">
      <div className="user-login-content">
        {/* Top Navigation Buttons */}
        <div className="login-nav-buttons">
          <button className="nav-btn login-btn active">
            <span>👤</span>
          </button>
          <button className="nav-btn business-btn">מנהלים/בעלים</button>
        </div>

        {/* Main Login Form */}
        <div className="login-form-container">
          {/* Title */}
          <div className="login-title">
            <h1>התחברות/ הרשמה</h1>
            <p>יש לבחור התחברות/ הרשמה לקבלת זכויות הקיא נפרטים</p>
          </div>

          {/* Social Login Buttons */}
          <div className="social-login-section">
            <button className="social-btn google-btn" onClick={handleGoogleLogin}>
              <img src={googleIcon || "/placeholder.svg"} alt="Google" className="social-icon" />
              Sign in with Google
            </button>

            <button className="social-btn apple-btn" onClick={handleAppleLogin}>
              <img src={appleIcon || "/placeholder.svg"} alt="Apple" className="social-icon apple-icon" />
              Sign in with Apple
            </button>
          </div>

          {/* Divider */}
          <div className="login-divider">
            <span>או</span>
          </div>

          {/* Phone Input Section */}
          <div className="phone-input-section">
            <label className="phone-label">מספר פלאפון</label>
            <input
              type="tel"
              className="phone-input"
              value={phoneNumber}
              onChange={handlePhoneChange}
              placeholder="0546679785"
              dir="rtl"
            />
          </div>

          {/* Continue Button */}
          <button className="continue-btn" onClick={handleContinue} disabled={!phoneNumber.trim()}>
            המשך
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserLogin
