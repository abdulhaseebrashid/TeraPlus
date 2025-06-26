"use client"

import { useNavigate } from "react-router-dom"
import Hero from "../Hero"
import "./All_Services.css"
import cardImage from "../../../../assets/img/spa_image.svg"
import locationIcon from "../../../../assets/icons/location.png"
import starIcon from "../../../../assets/icons/Frame.svg"

const Card = ({ image, title, rating, address, onBookNow }) => (
  <div className="service-card">
    <img src={image || "/placeholder.svg"} className="service-card-image" alt="Spa" />
    <div className="service-card-content">
      <div className="service-rating">
        <img src={starIcon || "/placeholder.svg"} className="star-icon" alt="Star Rating" />
        <span className="rating-text">{rating}</span>
      </div>
      <h5 className="service-title">{title}</h5>
      <p className="service-address">
        <img src={locationIcon || "/placeholder.svg"} alt="Location" className="location-icon" />
        {address}
      </p>
      <button className="service-button" onClick={onBookNow}>הזמן עכשיו</button>
    </div>
  </div>
)

const AllServices = () => {
  const navigate = useNavigate()

  const handleBookNow = () => {
    navigate("/business-profile")
  }

  const generateCards = (count = 12) => {
    const cards = []
    for (let i = 0; i < count; i++) {
      cards.push(
        <Card 
          key={i} 
          image={cardImage} 
          title="ספא 3030" 
          rating="4.5" 
          address="המלך שלמה 5, תל אביב" 
          onBookNow={handleBookNow}
        />
      )
    }
    return cards
  }

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* All Services Content */}
      <div className="all-services-container">
        <div className="container-fluid">
          {/* Main Section */}
          <div className="services-section">
            <div className="all-services-title">
              <h2>חדשים אצלנו</h2>
            </div>
            <div className="services-grid">{generateCards(8)}</div>
          </div>

          {/* Additional Sections */}
          <div className="services-section">
            <div className="section-title">
              <h3>בעלי דירוג גבוה</h3>
              <p>עשרות מכונים פופלארים אצלנו באתר, נשאר רק להזמין</p>
            </div>
            <div className="services-grid">{generateCards(8)}</div>
          </div>

          <div className="services-section">
            <div className="section-title">
              <h3>ספא לקבוצות</h3>
              <p>ערב צוות? יום גיבוש? בטרהפלוס אפשר להזמין לקבוצות רבות</p>
            </div>
            <div className="services-grid">{generateCards(8)}</div>
          </div>

          <div className="services-section">
            <div className="section-title">
              <h3>ספא יוקרה</h3>
              <p>חווית ספא מפנקת ברמה הגבוהה ביותר</p>
            </div>
            <div className="services-grid">{generateCards(8)}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllServices
