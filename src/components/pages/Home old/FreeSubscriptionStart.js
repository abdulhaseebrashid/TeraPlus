import React from 'react';
import leftImage from '../../../assets/img/FreeSub_images/free.png';
import logo from '../../../assets/img/FreeSub_images/icon.svg';
import '../../../assets/css/style.css';

const FreeSubscriptionStart = () => (
    <section className="free-subscription-section py-0 px-0 my-4">
        <div className="container p-0">
            <div className="row justify-content-center g-0 subscription-container">
                {/* Left Side Image */}
                <div className="col-12 col-md-5 d-flex justify-content-center align-items-center left-img">
                    <img
                        src={leftImage}
                        alt="TheraPlus App Preview"
                        className="img-fluid rounded-4 bg-white subscription-image"
                    />
                    <div className="image-gradient-bottom"></div>
                </div>
                {/* Right Side Content */}
                <div className="col-12 col-md-7 d-flex flex-column align-items-end align-items-md-center text-white right-side">
                    <img src={logo} alt="TheraPlus" className="subscription-logo" />
                    <h1 className="subscription-heading">
                        הדרך החכמה להזמין, לנהל<br />ולהצליח בעולם הטיפולים.
                    </h1>
                    <p className="subscription-description">
                        בעזרת המערכת שלנו תוכל לנהל את חווית הספא שלך בצורה מושלמת וקלה. חווית תיאום התור מעולם לא הייתה קלה יותר.
                    </p>
                    <div className="d-flex flex-wrap gap-2">
                        <button className="btn btn-outline-light fw-bold subscription-start-btn2" type="button">
                            דברו איתנו
                        </button>
                        <button className="btn btn-light fw-bold  subscription-start-btn" type="button">
                            התחילו 3 חודשים בחינם
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default FreeSubscriptionStart;
