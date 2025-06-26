"use client"

import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import "../../global/header1.css"
import cardImage from "../../../assets/img/spa_image.svg"
import leftArrow from "../../../assets/img/arrow_icon1.svg" // points left (←)
import rightArrow from "../../../assets/img/arrow_icon.svg" // points right (→)

const Card = ({ image, title, rating, address, animation }) => (
  <div className="col-md-3">
    <div className={`card border-0 shadow-sm rounded-4 overflow-hidden ${animation}`}>
      <img src={image || "/placeholder.svg"} className="card-img-top" alt="Spa" />
      <div className="card-body text-end">
        <div className="text-primary fw-semibold small mb-1">
          <i className="bi bi-star"></i> {rating}
        </div>
        <h5 className="card-title fw-bold mb-0">{title}</h5>
        <p className="card-text text-secondary small mb-3">
          {address} <i className="bi bi-geo-alt"></i>
        </p>
        <a href="#" className="btn btn-primary w-100 rounded-3">
          הזמן עכשיו
        </a>
      </div>
    </div>
  </div>
)

const Section = ({ title, description }) => {
  const navigate = useNavigate()

  const handleViewAll = () => {
    navigate("/all-services")
  }

  return (
    <div className="text-center mb-4">
      <h3 className="fw-bold text-dark">{title}</h3>
      <p>{description}</p>
      <button
        onClick={handleViewAll}
        className="text-primary fw-semibold bg-transparent border-0 text-decoration-underline"
        style={{ cursor: "pointer" }}
      >
        צפה בכולם
      </button>
    </div>
  )
}

const generateCards = () => {
  const cards = []
  for (let i = 0; i < 4; i++) {
    cards.push(
      <Card
        key={i}
        image={cardImage}
        title="ספא 3030"
        rating="4.5"
        address="המלך שלמה 5, תל אביב"
        animation={i % 2 === 0 ? "slide-in-right" : "slide-in-left"}
      />,
    )
  }
  return cards
}

const CardSection = () => {
  const scrollRefs = useRef([])

  const scroll = (direction, index) => {
    const container = scrollRefs.current[index]
    const scrollAmount = 300
    if (container) {
      container.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const CardRow = ({ cards, rowIndex }) => (
    <div className="position-relative mb-5 px-5" style={{ overflow: "visible" }}>
      {/* Card Row */}
      <div
        className="row g-4 flex-nowrap overflow-hidden"
        style={{
          scrollBehavior: "smooth",
          overflowX: "auto",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          padding: "10px 0",
          margin: "0 -10px",
        }}
        ref={(el) => (scrollRefs.current[rowIndex] = el)}
      >
        {cards}
      </div>

      {/* Left Arrow (←) facing outside */}
      <button
        onClick={() => scroll("left", rowIndex)}
        className="position-absolute"
        style={{
          left: "-35px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "transparent",
          border: "none",
          padding: 0,
          zIndex: 5,
        }}
      >
        <img src={leftArrow || "/placeholder.svg"} alt="Scroll Left" width="16" />
      </button>

      {/* Right Arrow (→) facing outside */}
      <button
        onClick={() => scroll("right", rowIndex)}
        className="position-absolute"
        style={{
          right: "-35px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "transparent",
          border: "none",
          padding: 0,
          zIndex: 5,
        }}
      >
        <img src={rightArrow || "/placeholder.svg"} alt="Scroll Right" width="16" />
      </button>
    </div>
  )

  return (
    <section className="py-5">
      <div className="container position-relative">
        <Section title="חדשים אצלנו" description="עשרות מכונים חדשים אצלנו באתר, נשאר רק להזמין" />
        <CardRow cards={generateCards()} rowIndex={0} />

        <Section title="בעלי דירוג גבוה" description="עשרות מכונים פופלארים אצלנו באתר, נשאר רק להזמין" />
        <CardRow cards={generateCards()} rowIndex={1} />

        <Section title="ספא לקבוצות" description="ערב צוות? יום גיבוש? בטרהפלוס אפשר להזמין לקבוצות רבות" />
        <CardRow cards={generateCards()} rowIndex={2} />
      </div>
    </section>
  )
}

export default CardSection
