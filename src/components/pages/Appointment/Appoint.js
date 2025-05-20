import React, { useRef, useState } from 'react';
import { Container, Form, InputGroup, Button, Navbar, Nav } from 'react-bootstrap';
import './Appoint.css';
import '../../../assets/css/style.css';
import leftImage from '../../../assets/img/Appointment/Appoint-Feed.png';
import AppointmentLogo from '../../../assets/icons/Appointmentlogo.svg';
import Appointmentuser from '../../../assets/icons/Appointmentuser.svg';
import Crad1 from '../../../assets/img/Appointment/Appoint.png';
import Crad2 from '../../../assets/img/Appointment/Card2.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const StarSVG = () => (
  <svg width="16" height="16" fill="#FFD600" viewBox="0 0 24 24">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
  </svg>
);

const HeartSVG = () => (
  <svg width="22" height="22" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M12 21C12 21 4 13.36 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.36 16 21 16 21H12Z"/>
  </svg>
);

const Appoint = () => {
  const carouselRef = useRef();
  const [showAllArr, setShowAllArr] = useState([false, false]);

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
      slidesToSlide: 1
    }
  };

  // Multiple sections for grid rows
  const sections = [
    {
      title: "בסביבה שלך",
      cards: [
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
      ]
    },
    {
      title: "חדשים אצלנו",
      cards: [
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
      ]
    },
    {
      type: "category",
      title: "בא לי...",
      cards: [
        { img: Crad1, title: "דיקור סיני", subtitle: "30 דקות" },
        { img: Crad1, title: "דיקור סיני", subtitle: "30 דקות" },
        { img: Crad1, title: "דיקור סיני", subtitle: "30 דקות" },
        { img: Crad1, title: "דיקור סיני", subtitle: "30 דקות" },
        { img: Crad1, title: "רפלקסולוגיה", subtitle: "30 דקות" },
        { img: Crad1, title: "עיסוי שוודי", subtitle: "250 דקות" },
        { img: Crad1, title: "רפלקסולוגיה", subtitle: "30 דקות" },
        { img: Crad1, title: "עיסוי שוודי", subtitle: "250 דקות" },
      ]
    },
    {
      title: "בסביבה שלך",
      cards: [
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
      ]
    },
    {
      title: "ספא לקבוצות",
      cards: [
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
      ]
    },
    {
      title: "ספא ליחיד",
      cards: [
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
        { img: Crad1, title: "ספא 3030", address: "רחוב רוטשילד 6, תל אביב-יפו", rating: "4.5" },
      ]
    }
   
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
            <img
              src={AppointmentLogo}
              alt="TheraPlus Logo"
              className="navbar-logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Container className="appointment-container" dir="rtl">
        <div className="text-center mb-4">
          <h2 className="main-title">מצאו  את הספא המתאים ביותר עבורכם</h2>
        </div>

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

        {/* Carousel + Arrows */}
        <div className="carousel-wrapper">
          <Carousel
            responsive={responsive}
            arrows={false}
            showDots={false}
            infinite={cards.length > 2}
            containerClass="recommendations-carousel"
            itemClass="carousel-card-wrapper"
            ref={carouselRef}
            autoPlay={true}
            autoPlaySpeed={3000}
            pauseOnHover={true}
          >
            {cards.map((card, idx) => (
              <div className="carousel-card" key={idx}>
                <img src={card.img} alt={card.title} className="card-image" />
                <div className="card-content card-content-overlay">
                  <h3>{card.title}</h3>
                </div>
                <div className="card-bottom-bar blue">{card.bar}</div>
              </div>
            ))}
          </Carousel>

          {/* External Arrows */}
          <div className="carousel-arrows-wrapper d-flex justify-content-between mt-3">
            <button
              onClick={() => carouselRef.current.previous()}
              className="custom-carousel-arrow left"
              aria-label="Previous"
            >
              <i className="bi bi-arrow-left"></i>
            </button>
            <button
              onClick={() => carouselRef.current.next()}
              className="custom-carousel-arrow right"
              aria-label="Next"
            >
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>

        {/* Multiple grid rows with show all */}
        {sections.map((section, idx) => {
          const visibleCards = showAllArr[idx] ? section.cards : section.cards.slice(0, 4);
          return (
            <div className="around-you-section" key={idx}>
              <div className="around-you-header">
                <button className="show-all-btn" onClick={() => {
                  setShowAllArr(arr => arr.map((val, i) => i === idx ? !val : val));
                }}>
                  עוד
                </button>
                <h2 className="around-you-title">{section.title}</h2>
              </div>
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
                        <span className="around-card-heart"><HeartSVG /></span>
                        <span className="around-card-rating">
                          {card.rating} <StarSVG />
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
        <section className="free-subscription-section py-0 px-0 my-4">
        <div className="container p-0">
            <div className="row justify-content-center g-0 subscription-container">
                
                {/* Right Side Content */}
                <div className="col-12 col-md-7 d-flex flex-column align-items-end align-items-md-center text-white right-side right-side1">
                    
                    <h2 className="subscription-heading">
                    בעלי עסקים? הדרך החכמה<br />להזמין, לנהל ולהצליח בעולם הטיפולים.
                    </h2>
                    <p className="subscription-description">
                    בעזרת הערכת שלנו תוכל לנהל את חוויית הספא שלך בצורה מושלמת וקלה, חווית תיאום התור מעולם לא הייתה קלה יותר.
                    </p>
                    <div className="d-flex flex-wrap gap-2">
                    <button className="btn btn-light fw-bold  subscription-start-btn" type="button">
                            התחילו 3 חודשים בחינם
                        </button>
                        
                        <button className="btn btn-outline-light fw-bold subscription-start-btn2" type="button">
                            דברו איתנו
                        </button>
                        
                    </div>
                </div>
                {/* Left Side Image */}
                <div className="col-12 col-md-5 d-flex justify-content-center align-items-center left-img">
                    <img
                        src={leftImage}
                        alt="TheraPlus App Preview"
                        className="img-fluid rounded-4 bg-white subscription-image"
                    />
                    <div className="image-gradient-bottom"></div>
                </div>
            </div>
        </div>
    </section>
      </Container>
    </div>
  );
};

export default Appoint;
