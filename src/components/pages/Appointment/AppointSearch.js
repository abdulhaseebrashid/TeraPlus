import React, { useRef, useState } from 'react';
import { Container, Button, Navbar, Nav } from 'react-bootstrap';
import './Appoint.css';
import '../../../assets/css/style.css';
import leftImage from '../../../assets/img/Appointment/Appoint-Feed.png';
import AppointmentLogo from '../../../assets/icons/Appointmentlogo.svg';
import Appointmentuser from '../../../assets/icons/Appointmentuser.svg';
import Crad1 from '../../../assets/img/Appointment/Appoint.png';
import Crad2 from '../../../assets/img/Appointment/Card2.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';

const StarSVG = () => (
  <svg width="16" height="16" fill="#FFD600" viewBox="0 0 24 24">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
  </svg>
);

const HeartSVG = ({ isFavorite }) => (
  <svg 
    width="22" 
    height="22" 
    fill={isFavorite ? "#ff3b30" : "none"} 
    stroke={isFavorite ? "#ff3b30" : "#222"} 
    strokeWidth="2" 
    viewBox="0 0 24 24"
  >
    <path d="M12 21C12 21 4 13.36 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.36 16 21 16 21H12Z"/>
  </svg>
);

const AppointSearch = () => {
  const carouselRef = useRef();
  const [showAllArr, setShowAllArr] = useState([false, false]);
  const [expandedSections, setExpandedSections] = useState([false, false, false, false, false, false]);
  const [favoriteCards, setFavoriteCards] = useState({});

  const toggleFavorite = (cardId) => {
    setFavoriteCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const cards = [
    {
      img: Crad1,
      title: "המומלצים שלנו",
      bar: "מכוני הספא המועדפים והאהובים בארץ",
    },
    {
      img: Crad2,
      title: "?רוצים להפתיע את הבת זוג",
      bar: "אנו יכולים לעשות את זה בקלות ובמהירות",
    },
    {
      img: Crad2,
      title: "?רוצים להפתיע את הבת זוג",
      bar: "אנו יכולים לעשות את זה בקלות ובמהירות",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 2,
      slidesToSlide: 1,
      partialVisibilityGutter: 0
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 0
    }
  };

  // Multiple sections for grid rows
  const sections = [
    {
     
      cards: [
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },

      ]
    }, 
  ];

  return (
    <div className="appoint-page-wrapper">
      {/* Navbar */}
      <Navbar className="appoint-navbar" bg="white" expand="lg" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.03)', borderBottom: '1px solid #eee' }}>
        <Container>
          <Nav className="align-items-center navbar-user-wrapper">
            <div className="navbar-user-icon-wrapper">
              <img
                src={Appointmentuser}
                alt="user icon"
                className="navbar-user-icon"
              />
            </div>
            <div className="navbar-user-text-wrapper">
              <span className="navbar-user-text">מטפלים / בעלי מכון</span>
            </div>
          </Nav>
          <Navbar.Brand className="ms-auto d-flex align-items-center">
            <Link to="/">
              <img
                src={AppointmentLogo}
                alt="TheraPlus Logo"
                className="navbar-logo"
              />
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Container className="appointment-container" dir="rtl">
       

        {/* Search Section */}
        <div className="search-section">
          <div className="search-bar-row">
            <Button className="search-btn"><i className="bi bi-search"></i>Search </Button>
            <div className="search-input when simple-input-icon-wrapper">
              <input type="text" placeholder="מתי?" className="simple-input" />
              <i className="bi bi-calendar simple-input-icon"></i>
            </div>
            <div className="search-input age simple-input-icon-wrapper">
              <input type="number" placeholder="בן כמה תהיו?" className="simple-input" />
              <i className="bi bi-person simple-input-icon"></i>
            </div>
            <div className="search-input location simple-input-icon-wrapper">
              <input type="text" placeholder="תל אביב" className="simple-input" />
              <i className="bi bi-geo-alt simple-input-icon"></i>
            </div>
          </div>
        </div>

        

        {/* Multiple grid rows with show all */}
        {sections.map((section, idx) => {
          const visibleCards = section.cards;
          return (
            <div className="around-you-section" key={idx}>
              
              <div className={`around-you-grid ${section.type === "category" ? "category-grid" : ""}`}>
                {visibleCards.map((card, cidx) => (
                  section.type === "category" ? (
                    <div className="category-card" key={cidx}>
                      <div className="category-card-img-wrapper">
                        <img src={card.img} alt={card.title} className="category-card-img" />
                      </div>
                      <div className="category-card-title">{card.title}</div>
                      <div className="category-card-subtitle">{card.subtitle}</div>
                    </div>
                  ) : (
                    <div className="around-card" key={cidx}>
                      <div className="around-card-img-wrapper">
                        <img src={card.img} alt={card.title} className="around-card-img" />
                        <span 
                          className="around-card-heart" 
                          onClick={() => toggleFavorite(`${section.title}-${cidx}`)}
                          style={{ cursor: 'pointer' }}
                        >
                          <HeartSVG isFavorite={favoriteCards[`${section.title}-${cidx}`]} />
                        </span>
                        <span className="around-card-rating">
                        <StarSVG /> {card.rating} 
                        </span>
                      </div>
                      <div className="around-card-title">{card.title}</div>
                      <div className="around-card-address">{card.address}</div>
                    </div>
                  )
                ))}
              </div>
            </div>
          );
        })}
      </Container>
    </div>
  );
};

export default AppointSearch;
