import React from 'react';
import promoImage from '../../../assets/img/mobile_view.svg';
import '../../global/header1.css';
import bgImage from '../../../assets/img/Rectangle.png';

const PromoSection = () => {
  return (
    <section className="promo-section text-white position-relative" style={{
      background: `url(${bgImage}) no-repeat center center`,
      backgroundSize: 'cover',
      padding: '40px 20px',
      borderRadius: '20px',
      margin: '0 auto',
      width: '87%',
      overflow: 'hidden',
      minHeight: '300px',
      marginBottom: '100px'
    }}>
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-md-6 position-relative" style={{ zIndex: 2 }}>
            <img
              src={promoImage}
              alt="Promo Visual"
              className="position-absolute"
              style={{
                height: '110%',
                maxWidth: '100%',
                objectFit: 'contain',
                objectPosition: 'left bottom',
                bottom: -40,
           
              }}
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
  <div className="text-end" dir="rtl"> {/* Change to text-end */}
    <h3 className="fw-bold mb-3" style={{ fontSize: '40px', lineHeight: '1.4' }}>
      בעלי עסקים? הדרך החכמה<br />
      להזמין, לנהל ולהצליח <br />
      בעולם הטיפולים.
    </h3>

    <p className="mb-3" style={{ fontSize: '12px', color: '#f0f0f0', maxWidth: '500px' }}>
      בעזרת הערכת שלנו תוכל לנהל את חוויית הספא שלך בצורה מושלמת וקלה,<br />
      חווית תיאום התור מעולם לא הייתה קלה יותר.
    </p>

    <div className="d-flex gap-3 justify-content-start">
      <a href="#" className="btn btn-light text-primary px-4">
        בואו נתחיל
      </a>
      <a href="#" className="btn btn-outline-light px-4">
        דברו איתנו
      </a>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default PromoSection;
