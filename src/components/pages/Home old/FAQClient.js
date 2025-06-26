import React, { useState } from 'react';
import '../../../assets/css/style.css';
import clientImg from '../../../assets/img/FAQClient/client1.png';
import icn1 from '../../../assets/icons/c1.svg'
import icn2 from '../../../assets/icons/c2.svg'
import icn3 from '../../../assets/icons/c3.svg'
import icn4 from '../../../assets/icons/c4.svg'


const accordionData = [
    {
        title: ' הגדלת תפוסה עם התאמות בזמן אמת ',
        content: 'המערכת תסייע לך להגדיל את ההכנסות על ידי ניהול יעיל של תהליכים, הגדלת פניות ומקסום רווחים.',
        icon: icn1,
    },
    {
        title: 'מערכת ניהול חכמה לתיאום וניהול תורים',
        content: 'ניהול מלאי מסודר, דוחות ודיווחים - המערכת תאפשר לך לעקוב אחרי לקוחות, תשלומים וביצועי העסק שלך.',
        icon: icn2,
    },
    {
        title: 'תובנות מבוססות דאטה לשיפור השירות',
        content: 'המערכת תספק לך תובנות מבוססות דאטה לשיפור השירות וקבלת החלטות מושכלות.',
        icon: icn3,
    },
    {
        title: 'ניהול מלאי ושימור לקוחות',
        content: 'שמור על מלאי מסודר, עדכני ומדויק – המערכת מאפשרת לך לעקוב אחרי המלאי בקלות ובזמן אמת. בנוסף, היא עוזרת לך לשמר את הלקוחות באמצעות ניתוח נתונים ותכנון מותאם אישית, כך שתוכל להציע להם את מה שהם צריכים, כשהם צריכים את זה.',
        icon: icn4,
    }
];

export default function FAQClient() {
    const [openIndex, setOpenIndex] = useState(1);
    const handleToggle = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (

        <div>
            <div className="cards-section-header">
                <div className="cards-section-subtitle">יומנים מלאים, סדר בעסק שלך</div>
                <div className="cards-section-title"> מהיום גם אתה וגם הלקוחות שלך תהיו מרוצים </div>
            </div>
            <div className="faq-client-container">
                <div className="faq-client-left">
                    <img src={clientImg} alt="לקוח מרוצה" className="faq-client-img" />

                </div>
                <div className="faq-client-right">
                    <div className="faq-client-header">מטפלים ומנהלים</div>
                    <div className="faq-client-subtitle">מהיום ניהול העסק שלכם יהיה ניהול על ידי יעיל של תורים, הגדלת תפוסה ומקסום הרווחים.</div>
                    <div className="accordion3-rtl-wrapper">
                        <div className="accordion3-list">
                            {accordionData.map((item, idx) => (
                                <div
                                    className={`accordion2-item${openIndex === idx ? ' open' : ''}`}
                                    key={idx}
                                >
                                    <button
                                        className="accordion2-question"
                                        onClick={() => handleToggle(idx)}
                                        aria-expanded={openIndex === idx}
                                        dir="rtl"
                                    >
                                        <img src={item.icon} alt="" className="accordion3-icon" />
                                        <span className="accordion3-question-text">{item.title}</span>
                                        <span className="accordion3-arrow">
                                            <svg
                                                className={`arrow-icon ${openIndex === idx ? 'open' : ''}`}
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <defs>
                                                    <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                        <stop offset="45.76%" stopColor="#82DD7A" />
                                                        <stop offset="77.36%" stopColor="#05B6F8" />
                                                    </linearGradient>
                                                </defs>
                                                <path
                                                    d="M6 9L12 15L18 9"
                                                    className="arrow-path"
                                                    strokeWidth="2"
                                                    fill="none"
                                                />
                                            </svg>
                                        </span>

                                    </button>
                                    {item.content && openIndex === idx && (
                                        <div className="accordion3-answer" dir="rtl">
                                          
                                            <div className="accordion3-answer-desc">
                                                {item.content}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='faq-client-bt'><button className="faq-client-btn">מתחילים 3 חודשים בחינם</button></div>
                </div>
            </div>
        </div>
    );
} 