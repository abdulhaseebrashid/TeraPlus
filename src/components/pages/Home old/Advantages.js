import React from 'react';
import '../../../assets/css/style.css';
import  { ReactComponent as Aicn } from '../../../assets/icons/A1.svg';
import  { ReactComponent as Aicn2 } from '../../../assets/icons/A2.svg';
import Aicn3 from '../../../assets/icons/A4.png';


const Advantages = () => {
  return (
    <div className="advantages-container">
      <div className="cards-section-header">
                <div className="cards-section-subtitle">יותר פשוט, יותר קל </div>
                <div className="cards-section-title">הדרך החכמה להזמין, לנהל ולהצליח בעולם הספא</div>
            </div>
      <div className="advantages-grid">
      <div className="advantage-card">
          <div className="icon-container">
          <img src={Aicn3} alt="icon" className="advantage-icon" />
          </div>
          <h3>חוויה מותאמת אישית</h3>
          <p>
            פרופיל לקוח מלא - כל הנתונים וההיסטוריה של
            הלקוחות מרוכזים במקום אחד
            העדפות מטופלים - שמירה על העדפות אישיות
            של מטופלים, הערות חשובות ומידע נוסף
            העדפות חוזרות אוטומטית - שמירה על העדפות
            חוזרות ומאפשר ללקוח לקבוע
          </p>
        </div>

        <div className="advantage-card">
          <div className="icon-container">
          <Aicn2 className="advantage-icon" />
          </div>
          <h3>תובנות עסקיות למנהלים</h3>
          <p>
            דוחות וסטטיסטיקות בזמן אמת - מעקב אחרי
            הכנסות, שעות, תפוסה, מטפלים בזמן אמת
            מדידת ביצועי צוות - ניהול ביצועים בקלות
            קבלת החלטות מבוססת נתונים
            שיפור תהליכי עבודה - אופטימיזציה של תהליכים
            הפקת לקחים ושיפור התוצאות
          </p>
        </div>

       
        <div className="advantage-card">
          <div className="icon-container">
            <Aicn className="advantage-icon" />
          </div>
          <h3>תיאום תורים חכם ויעיל</h3>
          <p>
            כניסה בקליליות, אתר הזמנות - התשלום מהבית
            הקצאה חכמה של משאבים אנושיים וחומריים
            ניהול זמן חכם ויעיל - סנכרון עם
            Outlook ו-Google Calendar
            תזכורת אוטו׳ 24/7 - התראות לפני תורים
            לזמינות מרבית בזמן אמת לתיאום
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advantages; 