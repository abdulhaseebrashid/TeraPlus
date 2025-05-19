import React from 'react';
import '../../../assets/css/style.css';
import { ReactComponent as ArrowIcon } from '../../../assets/icons/card-vector.svg';



const CardsSection = () => {
    return (
        <div className="cards-section-rtl">
            <div className="cards-section-header">
                <div className="cards-section-subtitle">מחיר קבוע, שליטה מלאה בעסק</div>
                <div className="cards-section-title">בחרו את המסלול שמתאים לקצב הצמיחה שלכם</div>
            </div>
            <div className="cards-section-cards">
                {/* PREMIUM Card */}
                <div className="card card-premium">
                    <div className="card-label">PREMIUM</div>
                    <div className="card-price-row">
                        <span className="card-price">₪1199</span>
                        <span className="card-per-month">לחודש לפני מע"מ</span>
                    </div>
                  
                        <div className="card-price-row-item">מכון/ספא / רשת קליניקות</div>
                    

                    <ul className="card-features">
                        <li>לא הגבלת מסכים</li>
                        <li>ניהול גיוס לקוחות מתקדמת</li>
                        <li>פיצ׳רים מתקדמים</li>
                        <li>התאמות אישיות</li>
                        <li>התחברות למערכות סליקה ודיוור חיצוניות</li>
                        <li>התחברות לאפליקציות צד ג׳</li>
                        <li>הגדרת הרשאות משתמשים</li>
                        <li>הגדרת תתי משתמשים</li>
                        <li>תמיכה טכנית מורחבת</li>
                    </ul>
                    <button className="card-btn">התחל/י 3 חודשים בחינם
                    <ArrowIcon className="card-btn-icon" />
                    </button>
                </div>
                {/* PRO Card (Most Popular) */}
                <div className="card card-pro card-popular">
                    <div className="card-popular-badge">הפופולרית ביותר</div>
                    <div className="card-label">PRO</div>
                    <div className="card-price-row">
                        <span className="card-price">₪899</span>
                        <span className="card-per-month">לחודש לפני מע"מ</span>
                    </div>
                    <div className="card-price-row-item">קליניקה בינונית</div>

                    <ul className="card-features">
                       
                        <li>עד 15 מסכים</li>
                        <li>ניהול גיוס לקוחות מתקדמת</li>
                        <li>פרופילים מותאמים למטפלים</li>
                        <li>פיצ׳רים מתקדמים</li>
                        <li>התחברות למערכות סליקה ודיוור חיצוניות</li>
                        <li>התחברות לאפליקציות צד ג׳</li>
                        <li>הגדרת הרשאות משתמשים</li>
                        <li>הגדרת תתי משתמשים</li>
                        <li>תמיכה טכנית מורחבת</li>
                    </ul>
                    <button className="card-btn">
                        התחל/י 3 חודשים בחינם
                        <ArrowIcon className="card-btn-icon" />
                        </button>
                </div>
                {/* BASIC Card */}
                <div className="card card-basic">
                    <div className="card-label">BASIC</div>
                    <div className="card-price-row">
                        <span className="card-price">₪599</span>
                        <span className="card-per-month">לחודש לפני מע"מ</span>
                    </div>
                    <div className="card-price-row-item">עצמאי או עסק קטן</div> 
                    <ul className="card-features">
                       
                        <li>עד 5 מסכים</li>
                        <li>ניהול גיוס לקוחות בסיסי</li>
                        <li>פיצ׳רים בסיסיים</li>
                        <li>התחברות למערכות סליקה ודיוור חיצוניות</li>
                        <li>התחברות לאפליקציות צד ג׳</li>
                        <li>הגדרת הרשאות משתמשים</li>
                        <li>שליחה אוטומטית של תזכורות ללקוחות</li>
                        <li>הגדרת תתי משתמשים</li>
                        <li>תמיכה טכנית בסיסית</li>
                    </ul>
                    <button className="card-btn"
            >התחל/י 3 חודשים בחינם
           <ArrowIcon className="card-btn-icon" />
            </button>
                </div>
            </div>
        </div>
    );
};

export default CardsSection;
