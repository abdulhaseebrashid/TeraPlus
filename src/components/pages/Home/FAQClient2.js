import React, { useState } from 'react';
import '../../../assets/css/style.css';
import clientImg from '../../../assets/img/FAQClient/client2.png';
import icn1 from '../../../assets/icons/c5.svg'
import icn2 from '../../../assets/icons/c6.svg'
import icn3 from '../../../assets/icons/c7.svg'
import icn4 from '../../../assets/icons/c8.svg'


const accordionData = [
    {
        title: ' מצא בקלות מטפל מתאים לפי אזור ותחום ',
        icon: icn1,
    },
    {
        title: 'קבל המלצות מותאמות אישית לטיפולים',
        icon: icn2,
    },
    {
        title: 'דירוגים אמיתיים ושקיפות מלאה ',
        content: 'גלו מה אחרים חוו, קראו ביקורות כנות ואובייקטיביות, ובחרו את המטפל שמתאים בדיוק לכם – עם שקיפות וביטחון מלא.',
        icon: icn3,
    },
    {
        title: 'הזמנה בלחיצת כפתור – ללא שיחות טלפון',
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
            <div className="faq-client-container faq-client-container1 ">
            <div className="faq-client-right">
                    <div className="faq-client-header">מטופלים</div>
                    <div className="faq-client-subtitle">הזמנה נוחה, חוויית טיפול מותאמת אישית ושקיפות מלאה.</div>
                    <div className="accordion3-rtl-wrapper">
                        <div className="accordion3-list">
                            {accordionData.map((item, idx) => (
                                <div
                                    className={`accordion2-item${openIndex === idx ? ' open' : ''}`}
                                    key={idx}
                                >
                                    <button
                                        className="accordion3-question"
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

                  
                </div>
                <div className="faq-client-left">
                    <img src={clientImg} alt="לקוח מרוצה" className="faq-client-img" />

                </div>
                
            </div>
        </div>
    );
} 