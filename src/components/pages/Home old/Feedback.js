import React from 'react';
import '../../../assets/css/style.css'; // Or your CSS path

const Feedback = () => {
    return (
        <div className="feedback-wrapper">
            <div className="feedback-container row ">
                {/* Left Side - Form */}
                <div className="col-12 col-md-5">
                    <form className="feedback-form">
                        <h3 className="form-title">יצירת קשר</h3>
                        <div className="form-desc">
                            אנא מלא/י את הטופס הבא ונציג יצור עימך קשר בהקדם.
                        </div>
                        <div className="row">
                            <div className="col-6 mb-2">
                                <input type="text" className="form-control" placeholder="שם פרטי" />
                            </div>
                            <div className="col-6 mb-2">
                                <input type="text" className="form-control" placeholder="שם משפחה" />
                            </div>
                        </div>
                        <div className="mb-2">
                            <input type="email" className="form-control" placeholder="האימייל שלך" />
                        </div>
                        <div className="mb-2">
                            <input type="text" className="form-control" placeholder="המספר שלך" />
                        </div>
                        <div className="mb-2">
                            <textarea className="form-control" rows="3" placeholder="אין לנו סיבות לכתוב?"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">שלחו</button>
                        <div className="form-note mt-2">
                            יצירת קשר ושימוש בפרטים שמסרת מהווה הסכמה ל
                            <a href="/terms" target="_blank" rel="noopener noreferrer">תנאי השירות</a>
                            והסכמה ל
                            <a href="/privacy" target="_blank" rel="noopener noreferrer">מדיניות הפרטיות שלנו</a>
                        </div>
                    </form>
                </div>
                {/* Right Side */}
                <div className="col-12 col-md-6 feedback-info" dir="rtl">
                    <h2 className="feedback-title">תדברו איתנו</h2>
                    <p className="feedback-desc">
                        שלחו מייל או מלאו את הטופס בעמוד כדי שנוכל<br />
                        לכם את המידע והתשובה בהקדם האפשרי.
                    </p>
                    <div className="feedback-email">info@support@gmail.com</div>
                   <div className='feed-bck'>
                        <div className="feedback-service col-6 col-md-6">
                            <div className="feedback-service-title">שירות ללקוחות</div>
                            <div className="feedback-service-desc">
                                צוות התמיכה שלנו מסייע למשתמשים שלנו<br />
                                ושואף להעניק לכם את השירות וההכוונה הטובים ביותר.
                            </div>
                        </div>
                        <div className="feedback-service col-6 col-md-6">
                            <div className="feedback-service-title">שירות ללקוחות</div>
                            <div className="feedback-service-desc">
                                צוות התמיכה שלנו מסייע למשתמשים שלנו<br />
                                ושואף להעניק לכם את השירות וההכוונה הטובים ביותר.
                            </div>
                        </div>
                   </div>
                </div>
               
            </div>
        </div>
    );
};

export default Feedback;