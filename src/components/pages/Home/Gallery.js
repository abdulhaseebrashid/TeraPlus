import React from 'react';
import '../../global/header1.css';
import largeImage from '../../../assets/img/gallery_image.png';
import img1 from '../../../assets/img/gallery_image1.png';
import img2 from '../../../assets/img/gallery_image2.png';
import img3 from '../../../assets/img/gallery_image3.png';
import img4 from '../../../assets/img/gallery_image4.png';

const Gallery = () => {
  return (
    <section className="gallery-section py-5" style={{ backgroundColor: '#eff7fa' }}>
      <div className="container">
        
        {/* Heading */}
        <div className="text-center mb-4">
          <h2
            className="fw-bold"
            style={{
              color: '#1c415b',
              fontSize: '24px',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.5
            }}
          >
            מגיע לכם להתפנק ולפנק את מי <br />
            שאתם אוהבים בחבילות ספא שוות<br />
          </h2>
          <p style={{ color: '#1c415b', fontSize: '12px' }}>
            אנחנו מביאים לכם חווית הזמנה מותאמת אישית עם בתי הספא המובילים
          </p>
        </div>

        {/* Image Grid */}
        <div className="row g-3">
          
          {/* Large Left Image */}
          <div className="col-md-6">
            <div
              className="w-100 h-190 rounded overflow-hidden"
              style={{ height: '540px' }}
            >
              <img
                src={largeImage}
                alt="Large Spa"
                className="img-fluid w-100 h-100 object-fit-cover"
              />
            </div>
          </div>

          {/* Four Small Right Images */}
          <div className="col-md-6">
            <div className="row g-3">
              {[img1, img2, img3, img4].map((img, index) => (
                <div className="col-6" key={index}>
                  <div
                    className="w-100 rounded overflow-hidden"
                    style={{ height: '260px' }}
                  >
                    <img
                      src={img}
                      alt={`Gallery ${index + 1}`}
                      className="img-fluid w-100 h-100 object-fit-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Gallery;
