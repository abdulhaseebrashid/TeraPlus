"use client"

import { useNavigate, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
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
      <button className="service-button" onClick={onBookNow}>
        הזמן עכשיו
      </button>
    </div>
  </div>
)

const AllServices = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [selectedCategory, setSelectedCategory] = useState("")
  const [categoryTitle, setCategoryTitle] = useState("")

  // Category mapping
  const categoryMap = {
    new: "חדשים אצלנו",
    "high-rated": "בעלי דירוג גבוה",
    "group-spa": "ספא לקבוצות",
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const category = urlParams.get("category")

    if (category && categoryMap[category]) {
      setSelectedCategory(category)
      setCategoryTitle(categoryMap[category])
    } else {
      // Default to first category if no valid category is provided
      setSelectedCategory("new")
      setCategoryTitle("חדשים אצלנו")
    }
  }, [location.search])

  const handleBookNow = () => {
    navigate("/business-profile")
  }

  const generateCards = (count = 16) => {
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
        />,
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
          {/* Main Section - Show only selected category */}
          <div className="services-section">
            <div className="all-services-title">
              <h2>{categoryTitle}</h2>
            </div>
            <div className="services-grid">{generateCards(16)}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllServices
