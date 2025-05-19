// FAQSection.js
import React, { useState } from 'react';
import '../../../assets/css/style.css';
import email from '../../../assets/icons/email.svg';

const accordionData = [
    {
        question: 'למי המערכת שלכם מתאימה?',
        answer: '',
    },
    {
        question: 'למי המערכת שלכם מתאימה?',
        answer: '',
    },
    {
        question: 'למי המערכת שלכם מתאימה?',
        answer: '',
    },
    {
        question: 'למי המערכת שלכם מתאימה?',
        answer: '',
    },
    {
        question: 'למי המערכת שלכם מתאימה?',
        answer: '',
    },
    {
        question: 'כיצד מתבצע התשלום עבור השירות',
        answer: 'במערכת תיאום תורים ניתן לבצע תשלום עבור כל טיפול במעמד התיאום באמצעות כרטיס אשראי......',
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <div className="container">
            <div className="row d-felx rtl">
                <div className="col-lg-6 col-md-12 order-1">
                    
                <div className="faq-section-left">
                    <div className="accordion3-rtl-wrapper">
                        <div className="accordion3-list">
                            {accordionData.map((item, idx) => (
                                <div
                                    className={`accordion3-item${openIndex === idx ? ' open' : ''}`}
                                    key={idx}
                                >
                                    <button
                                        className="accordion3-question"
                                        onClick={() => handleToggle(idx)}
                                        aria-expanded={openIndex === idx}
                                        dir="rtl"
                                    >
                                        <span className="accordion3-question-text">{item.question}</span>
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
                                    {item.answer && openIndex === idx && (
                                        <div className="accordion3-answer" dir="rtl">
                                            <div className="accordion3-answer-desc">
                                                במערכת תיאום תורים ניתן לבצע תשלום עבור כל טיפול במעמד התיאום באמצעות כרטיס אשראי......
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-6 col-md-12 order-sm-2">
                <div className="faq-section-right">
                    <h2 className="faq-title" >?יש לכם שאלות</h2>
                    <h3 className="faq-subtitle" >.לנו יש את התשובות</h3>
                    <div className="faq-desc">
                        אם יש לכם שאלות נוספות לשאול, אתם מוזמנים את הפרטים<br />
                        בטופס ואנחנו נחזור אליכם קשר בהקדם האפשרי.
                    </div>
                    <form className="faq-form">
                        <div className="faq-input-wrapper">
                            <input
                                type="email"
                                className="faq-input"
                                placeholder="רשמו את המייל שלך"
                            />
                            <img src={email} alt="icon" className="faq-input-icon" />
                        </div>
                        <button type="submit" className="faq-btn">שלחו</button>
                    </form>
                </div>
                </div>
        </div>
        </div>
    );
}