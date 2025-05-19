import React from 'react';
import { useEffect, useState } from 'react';
import '../../../assets/css/style.css';
import MainImage from '../../../assets/img/Hero_images/heroimg.png';
import MobileImage from '../../../assets/img/Hero_images/minheroimg1.png';


function HeroImage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="Image1-section">
        <img
      src={isMobile ? MobileImage : MainImage}
      alt="Responsive Hero"
    />
        </div>
        <div className="text-content">
          <h1 className="hero-title">
            הפתרון הדיגיטלי שמתחבר
            
            בין לקוחות למרכזי ספא

            ומאפשר יעילות  
          
          <span className='hero-title-span'>וניהול חכם.</span>
          </h1>
          
          <p className="hero-description">
            פתרון ניהול מתקדם לכל הרמה העסק. חסוך זמן, שפר את השירות והגדל
            את הרווחים עם מערכת מתקדמת אישית ומרכזי ספא ומכוני טיפול.
          </p>
          <div className='cta-btn'>
          <button className="cta-button">התחלה ב-3 חודשים בחינם</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage; 