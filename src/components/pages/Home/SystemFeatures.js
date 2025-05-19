import React from 'react';
import '../../../assets/css/style.css';
import theraplusLogo from '../../../assets/img/System/Sys.png';
import { ReactComponent as Sicn } from '../../../assets/icons/systemicn.svg';
import background from '../../../assets/img/System/background.png';


const SystemFeatures = () => {
  return (
    <div className="system-features-container">
      <div className="features-content-container">
      <div className="features-content">
       
        {/* Text Content - Now Second */}
        <div className="features-text">
          <h1 className="features-title">מערכת חכמה לניהול חוויית הספא שלך.</h1>
          
          <div className="features-list">
            <div className="feature-item">
            <span className="checkmark">
               <Sicn />
             </span>
              <p>חוויה לקוח מותאמת - ניהול אתר ושירות עבור לקוח.</p>
              
            </div>
            
            <div className="feature-item">
            <span className="checkmark">
               <Sicn />
              </span>
              <p>שליטה מלאה - כל המידע העסקי שלך במקום אחד.</p>
              
            </div>
            
            <div className="feature-item">  
            <span className="checkmark">
                <Sicn />
                </span>
              <p>הגדרת הפרטיות - ניהול הספא ושמירה וגם הטיפולים שלך.</p>
              
            </div>
            
            <div className="feature-item">
            <span className="checkmark">
               <Sicn />
              </span>
              <p>קל למשתמש - מערכת אינטואיטיבית שתוכל ליישם בקלות בלי צורך בהשקעה שלך.</p>
             
            </div>
          </div>

          <button className="start-button">התחלה ב-3 חודשים בחינם</button>
        </div>
         {/* Interface Preview - Now First */}
         <div className="features-image">
      
           
            <div className="logo-container">
              <img src={theraplusLogo} alt="TheraPlus Logo" className="thera-logo" />
            </div>
            
            
        
        </div>

      </div>
      </div>
    </div>
  );
};

export default SystemFeatures; 