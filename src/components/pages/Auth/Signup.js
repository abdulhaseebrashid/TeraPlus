import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/css/style.css';
import calendarImage from '../../../assets/img/Registration/main.png'; 
import { ReactComponent as EditIcon } from '../../../assets/icons/popsvg.svg';
import { ReactComponent as TrashIcon } from '../../../assets/icons/popdelet.svg';
import googleIcon from '../../../assets/icons/google-icon.svg';
import appleIcon from '../../../assets/icons/apple_icon.svg';
import downIcon from '../../../assets/icons/down_icon.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEye, FaEyeSlash,} from 'react-icons/fa';

// Treatment Popup component
const TreatmentPopup = ({ isOpen, onClose, onSave, editingTreatment = null }) => {
    const [treatmentName, setTreatmentName] = useState(editingTreatment ? editingTreatment.name : '');
    const [treatmentDuration, setTreatmentDuration] = useState(editingTreatment ? editingTreatment.duration : '');
    const [treatmentPrice, setTreatmentPrice] = useState(editingTreatment ? editingTreatment.price : '');

    // Reset form when popup opens/closes or editing treatment changes
    React.useEffect(() => {
        if (editingTreatment) {
            setTreatmentName(editingTreatment.name);
            setTreatmentDuration(editingTreatment.duration);
            setTreatmentPrice(editingTreatment.price);
        } else {
            setTreatmentName('');
            setTreatmentDuration('');
            setTreatmentPrice('');
        }
    }, [editingTreatment, isOpen]);

    const isFormValid = () => {
        return treatmentName.trim() !== '' && 
               treatmentDuration !== '' && 
               treatmentPrice.trim() !== '';
    };

    const handleSave = () => {
        if (!isFormValid()) return;
        
        onSave({
            name: treatmentName,
            duration: treatmentDuration,
            price: treatmentPrice,
        });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-content" style={{ position: 'relative' }}>
                {/* Close Button - Top Right */}
                <button 
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '15px',
                        right: '15px',  
                        background: 'none',  
                        border: 'none',
                        width: '24px',  
                        height: '24px',  
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        padding: 0,
                        fontSize: '1.5rem',
                        lineHeight: 1,
                        color: '#666',
                        zIndex: 1
                    }}
                    aria-label="סגור"
                >
                    ×
                </button>

                
                {/* Centered Title */}
                <div style={{ 
                    textAlign: 'center',
                    marginBottom: '1.5rem',
                    paddingTop: '15px'  
                }}>
                    <h4 style={{ 
                        margin: 0, 
                        fontSize: '1.25rem', 
                        fontWeight: 'bold',
                        textAlign: 'center',
                        width: '100%'
                    }}>
                        {editingTreatment ? 'עריכת טיפול' : 'הוספת טיפול'}
                    </h4>
                </div>

                <label htmlFor="treatmentName" className="form-label">שם הטיפול</label>
                <input
                    type="text"
                    className="form-control mb-3"
                    value={treatmentName}
                    onChange={(e) => setTreatmentName(e.target.value)}
                    placeholder="שעתי"
                    required
                />

                <label htmlFor="treatmentDuration" className="form-label">משך הטיפול</label>
                <input
                    type="text"
                    className="form-control mb-3"
                    value={treatmentDuration}
                    onChange={(e) => setTreatmentDuration(e.target.value)}
                    placeholder="שעה וחצי"
                    required
                />

                <label htmlFor="treatmentPrice" className="form-label">מחיר הטיפול</label>
                <input
                    type="number"
                    className="form-control mb-3"
                    value={treatmentPrice}
                    onChange={(e) => setTreatmentPrice(e.target.value)}
                    placeholder="580"
                    required
                />

                <div className="popup-buttons">
                    <button 
                        className={`btn btn-primary ${!isFormValid() ? 'disabled' : ''}`}
                        onClick={handleSave}
                        disabled={!isFormValid()}
                    >
                        אישור
                    </button>
                </div>
            </div>
        </div>
    );
};

// Chlorination Popup component
const ChlorinationPopup = ({ isOpen, onClose, onSave }) => {
    const [packageName, setPackageName] = useState('');
    const [numberOfTreatments, setNumberOfTreatments] = useState('');
    const [treatmentDuration, setTreatmentDuration] = useState('');
    const [treatmentPrice, setTreatmentPrice] = useState('');

    const isFormValid = () => {
        return packageName.trim() !== '' && 
               numberOfTreatments.trim() !== '' && 
               treatmentDuration !== '' && 
               treatmentPrice.trim() !== '';
    };

    const handleSave = () => {
        if (!isFormValid()) return;

        onSave({
            packageName,
            numberOfTreatments,
            treatmentDuration,
            treatmentPrice,
        });

        // Clear all fields after saving
        setPackageName('');
        setNumberOfTreatments('');
        setTreatmentDuration('');
        setTreatmentPrice('');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-content" dir="rtl">
                <h4>הוספת חבילת הכלרה</h4>

                <label className="form-label">שם החבילה</label>
                <input
                    type="text"
                    className="form-control mb-3"
                    value={packageName}
                    onChange={(e) => setPackageName(e.target.value)}
                    placeholder="לדוגמה: חבילת כסף"
                    required
                />

                <label className="form-label">מספר טיפולים</label>
                <input
                    type="number"
                    className="form-control mb-3"
                    value={numberOfTreatments}
                    onChange={(e) => setNumberOfTreatments(e.target.value)}
                    placeholder="לדוגמה: 3"
                    required
                />

                <label className="form-label">משך כל טיפול</label>
                <select
                    className="form-select mb-3"
                    value={treatmentDuration}
                    onChange={(e) => setTreatmentDuration(e.target.value)}
                    required
                >
                    <option value="">בחר משך טיפול</option>
                    <option value="30">חצי שעה</option>
                    <option value="45">45 דקות</option>
                    <option value="60">שעה</option>
                    <option value="90">שעה וחצי</option>
                    <option value="120">שעתיים</option>
                </select>

                <label className="form-label">מחיר הטיפול</label>
                <input
                    type="number"
                    className="form-control mb-3"
                    value={treatmentPrice}
                    onChange={(e) => setTreatmentPrice(e.target.value)}
                    placeholder="לדוגמה: 350"
                    required
                />

                <div className="popup-buttons mt-3">
                    <button 
                        className={`btn btn-primary ${!isFormValid() ? 'disabled' : ''}`}
                        onClick={handleSave}
                        disabled={!isFormValid()}
                    >
                        אישור
                    </button>
                </div>
            </div>
        </div>
    );
};

// Reusable ProgressBar Component
const ProgressBar = ({ currentStep }) => {
    return (
        <div style={{ 
            width: '57%',
            maxWidth: '300px',
            margin: '0 0 1.5rem 0'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '4px',
                width: '100%'
            }}>
                {[1, 2, 3, 4, 5, 6].map((step) => (
                    <div
                        key={step}
                        style={{
                            flex: 1,
                            height: '4px',
                            backgroundColor: step <= currentStep ? '#4A90E2' : '#E0E0E0',
                            borderRadius: '2px',
                            transition: 'background-color 0.3s ease'
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

const Signup = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        birthDate: '',
        businessName: '',
        businessId: '',
        businessAddress: ''
    });

    const [showPassword, setShowPassword] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 6;
    const [treatments, setTreatments] = useState([]); // Regular treatments
    const [chlorinations, setChlorinations] = useState([]); // Chlorination packages
    const [showTreatmentPopup, setShowTreatmentPopup] = useState(false);
    const [showChlorinationPopup, setShowChlorinationPopup] = useState(false);
    const [editingTreatmentIndex, setEditingTreatmentIndex] = useState(null);

    // Regular treatment handlers
    const handleAddTreatment = (detail) => {
        if (editingTreatmentIndex !== null) {
            const updatedTreatments = [...treatments];
            updatedTreatments[editingTreatmentIndex] = detail;
            setTreatments(updatedTreatments);
            setEditingTreatmentIndex(null);
        } else {
            setTreatments([...treatments, detail]);
        }
        // Force progress update after adding treatment
        setCurrentStep(currentStep);
    };

    const handleDeleteTreatment = (index) => {
        setTreatments(treatments.filter((_, i) => i !== index));
        // Force progress update after deleting treatment
        setCurrentStep(currentStep);
    };

    const handleEditTreatment = (index) => {
        setEditingTreatmentIndex(index);
        setShowTreatmentPopup(true);
    };

    // Chlorination package handlers
    const handleAddChlorination = (detail) => {
        setChlorinations([...chlorinations, detail]);
        // Force progress update after adding chlorination
        setCurrentStep(currentStep);
    };

    const handleDeleteChlorination = (index) => {
        setChlorinations(chlorinations.filter((_, i) => i !== index));
        // Force progress update after deleting chlorination
        setCurrentStep(currentStep);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.phone && currentStep === 1) {
            setCurrentStep(2);
        } else if (currentStep === 2 && formData.firstName && formData.lastName && formData.email && formData.gender && formData.birthDate) {
            setCurrentStep(3);
        } else if (currentStep === 3 && formData.businessName && formData.businessId && formData.businessAddress) {
            setCurrentStep(4);
        } else if (currentStep === 4) {
            console.log('Form submitted:', { ...formData, treatments, chlorinations });
        }
    };
    

    const handleGoogleSignup = () => {
        console.log('Google signup clicked');
    };
    const handleAppleSignup = () => {
        console.log('Apple signup clicked');
    };

    const handlePrevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const calculateProgress = () => {
        let progress = 0;
        const totalSteps = 6;

        // Step 1: Email and password
        if (currentStep >= 1) {
            if (formData.email && formData.password) {
                progress = 1;
            } else {
                return (0.5 / totalSteps) * 100;
            }
        }

        // Step 2: Personal details
        if (currentStep >= 2) {
            if (formData.firstName && formData.lastName && formData.email && formData.gender && formData.birthDate) {
                progress = 2;
            } else {
                return (1.5 / totalSteps) * 100;
            }
        }

        // Step 3: Business details
        if (currentStep >= 3) {
            if (formData.businessName && formData.businessId && formData.businessAddress) {
                progress = 3;
            } else {
                return (2.5 / totalSteps) * 100;
            }
        }

        // Step 4: Treatments and Chlorinations
        if (currentStep === 4) {
            // Only count saved items, not open popups
            const hasSavedItems = treatments.length > 0 || chlorinations.length > 0;
            if (hasSavedItems) {
                progress = 4;
            } else {
                return (3.5 / totalSteps) * 100;
            }
        }

        // Step 5: Additional details
        if (currentStep >= 5) {
            progress = 5;
        }

        // Step 6: Final step
        if (currentStep === 6) {
            progress = 6;
        }

        return (progress / totalSteps) * 100;
    };

    const renderStepOne = () => (
        <>
            <div className="text-end mb-4">
                <h3 className="hebrew-text" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                    הצטרפו אלינו
                </h3>
                <p className="hebrew-text" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                    והתחילו לנהל את העסק שלכם בקלות
                </p>
            </div>
            <div className='google-button mb-3'>
              <button className="google-signup-button d-flex align-items-center justify-content-center w-70" onClick={handleGoogleSignup}>
                <span>Sign up with Google</span>
                <img src={googleIcon} alt="Google" className="ms-2" style={{ width: '20px', height: '20px' }} />
              </button>
            </div>
            <div className='apple-button mb-4'>
              <button 
                className="apple-signup-button d-flex align-items-center justify-content-center w-70" 
                onClick={handleAppleSignup}
                style={{ backgroundColor: '#000000', color: 'white' }}>
                    <span>Sign up with Apple</span>
                <img src={appleIcon} alt="Apple" className="me-2" style={{ width: '20px', height: '20px' }} />
                
              </button>
            </div>

            <p style={{ color: '#B3B3B3', textAlign: 'center' }}>או על ידי</p>

            <div className="mb-3">
                <label htmlFor="phone" className="form-label">מספר פלאפון</label>
                <input
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="0546679785"
                    required
                />
                    </div>
{/* 
            <div className="mb-4" style={{ position: "relative" }}>
                <label htmlFor="exampleInputPassword1" className="form-label">סיסמה</label>
                <span
                    onClick={() => setShowPassword(prev => !prev)}
                    style={{
                        position: "absolute",
                        top: "38px",
                        left: "20px",
                        cursor: "pointer",
                        color: "#BCBCBC"
                    }}
                >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
                <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    id="exampleInputPassword1"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="**************"
                    required
                />
            </div> */}
            <button type="submit" className="btn btn-primary continue-button w-100">הרשמה</button>
        </>
    );

    const renderStepTwo = () => (
        <>
             <div className="text-end mb-4">
                <h3 className="hebrew-text" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                על מנת שנתחיל אנא מלאו את
                </h3>
                <p className="hebrew-text" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                הפרטים הבאים
                </p>
                <ProgressBar currentStep={1} />
            </div>
            <h3 className="hebrew-text screen1-text" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>פרטים אישיים</h3>
            
            <div className="personal-details-form">
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">שם פרטי</label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="אהרון"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">שם משפחה</label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="כהן"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">דוא״ל</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="aheron806@gmail.com"
                        required
                    />
                </div>
                <div className='two-opt container-fluid'>
    <div className='row two-opt-row gx-3'>  
        <div className="col-md-6 mb-4"> 
            <label htmlFor="birthDate" className="form-label">תאריך לידה</label>
            <input
                type="date"
                className="form-control"
                id="birthDate"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleInputChange}
                required
            />
        </div>
        <div className="col-md-6 mb-4 position-relative custom-select-wrapper"> 
            <label htmlFor="gender" className="form-label">מין</label>
            <select
                className="form-control custom-select-with-icon"
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                required
            >
                <option value="">בחר מין</option>
                <option value="male">זכר</option>
                <option value="female">נקבה</option>
                <option value="other">אחר</option>
            </select>
            <img src={downIcon} alt="dropdown icon" className="custom-select-icon" />
        </div>
    </div>
</div>
                        <div className="d-flex justify-content-between gap-3 mt-4">
                        <button type="submit" className="btn btn-primary w-50">המשך</button>
                        <button 
    type="button" 
    className="btn btn-custom-back w-50"
    onClick={handlePrevStep}
>
    חזרה
</button>
                        </div>
            </div>
        </>
    );

    const renderStepThree = () => (
        <>
            <div className="text-end mb-4">
                <h3 className="hebrew-text" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                על מנת שנתחיל אנא מלאו את
                </h3>
                <p className="hebrew-text" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                הפרטים הבאים
                </p>
                <ProgressBar currentStep={2} />
            </div>
            <h3 className="hebrew-text screen1-text" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>פרטים אישיים</h3>
            <div className="business-details-form">
                <div className="mb-3">
                    <label htmlFor="businessName" className="form-label">שם העסק</label>
                    <input
                        type="text"
                        className="form-control"
                        id="businessName"
                        name="businessName"
                        placeholder='אהרון דיזיין '
                        value={formData.businessName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="businessType" className="form-label">מספר ח.פ</label>
                    <input
                        type="number"
                        className="form-control"
                        id="businessId"
                        name="businessId"
                        placeholder="1234567890"
                        value={formData.businessId}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="businessAddress" className="form-label">כתובת העסק</label>
                    <input
                        type="text"
                        className="form-control"
                        id="businessAddress"
                        name="businessAddress"
                        placeholder='רחוב מספר 123, ירושלים'
                        value={formData.businessAddress}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="button-group container-fluid">
                    <div className='buttons'>
                    <button type="submit" className="btn btn-primary continue-button col-6 btn12">
                            המשך
                        </button>
                        <button
                            type="button"
                            className=" btn-primary continue-button col-6 btn11"
                            onClick={handlePrevStep}
                        >
                            חזור
                        </button>
                        
                    </div>
                </div>
            </div>
        </>
    );

    const renderStepFour = () => (
        <>
           <div className="text-end mb-4">
                <h3 className="hebrew-text" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                על מנת שנתחיל אנא מלאו את
                </h3>
                <p className="hebrew-text" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                הפרטים הבאים
                </p>
                <ProgressBar currentStep={2} />
            </div>
<h3 className="hebrew-text screen1-text" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>פרטים אישיים</h3>

            <div className="details-section mb-4">
                <div className="detail-category">
                    <div className="category-header">
                        <h4>טיפולים</h4>
                        <button className="btn btn-link" onClick={() => setShowTreatmentPopup(true)}>
                            הוספה
                        </button>
                    </div>
                    <div className="details-list">
                        {treatments.map((detail, index) => (
                            <div key={index} className="detail-item">
                                <span className="treatment-info">
                                    <span className="treatment-name">{detail.name}</span>
                                    <span className="treatment-duration">
                                        {detail.duration === "60" ? "שעה" : 
                                         detail.duration === "30" ? "דקות" : 
                                         detail.duration === "45" ? "דקות" : 
                                         detail.duration === "90" ? "שעה וחצי" : 
                                         "שעתיים"}
                                    </span>
                                    <span className="treatment-price">{detail.price}</span>
                                </span>
                                <div className="detail-actions">
                                    <EditIcon 
                                        className="edit-icon" 
                                        onClick={() => handleEditTreatment(index)}
                                    />
                                    <TrashIcon 
                                        className="delete-icon" 
                                        onClick={() => handleDeleteTreatment(index)}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="detail-category">
                    {/* <div className="category-header">
                        <h4>הכלרות</h4>
                        <button className="btn btn-link" onClick={() => setShowChlorinationPopup(true)}>
                            הוספה
                        </button>
                    </div> */}
                    <div className="details-list">
                        {chlorinations.map((detail, index) => (
                            <div key={index} className="detail-item">
                                <span className="chlorination-info">
                                    <span className="treatment-name">{detail.packageName}</span>
                                    <span className="treatment-count">{detail.numberOfTreatments} טיפולים</span>
                                    <span className="treatment-duration">
                                        {detail.treatmentDuration === "30" ? "חצי שעה" :
                                         detail.treatmentDuration === "45" ? "45 דקות" :
                                         detail.treatmentDuration === "60" ? "שעה" :
                                         detail.treatmentDuration === "90" ? "שעה וחצי" :
                                         detail.treatmentDuration === "120" ? "שעתיים" :
                                         detail.treatmentDuration}
                                    </span>
                                    <span className="treatment-price">{detail.treatmentPrice} ₪</span>
                                </span>
                                <div className="detail-actions">
                                    <EditIcon 
                                        className="edit-icon" 
                                        onClick={() => handleEditTreatment(index)}
                                    />
                                    <TrashIcon 
                                        className="delete-icon" 
                                        onClick={() => handleDeleteChlorination(index)}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="button-group container-fluid">
                <div className='buttons'>

                <button type="submit" className="btn btn-primary continue-button col-6 btn12">
                        המשך
                    </button>
                    <button
                        type="button"
                        className="btn-primary continue-button col-6 btn11"
                        onClick={handlePrevStep}
                    >
                        חזור
                    </button>
                    
                </div>
            </div>

            <TreatmentPopup
                isOpen={showTreatmentPopup}
                onClose={() => {
                    setShowTreatmentPopup(false);
                    setEditingTreatmentIndex(null);
                }}
                onSave={handleAddTreatment}
                editingTreatment={editingTreatmentIndex !== null ? treatments[editingTreatmentIndex] : null}
            />

            <ChlorinationPopup
                isOpen={showChlorinationPopup}
                onClose={() => setShowChlorinationPopup(false)}
                onSave={handleAddChlorination}
            />
        </>
    );

    const renderStepFive = () => (
        <>
            <div className="text-end mb-4">
                <h3 className="hebrew-text screen1-text">על מנת שנתחיל אנא מלאו את</h3>
                <h3 className="hebrew-text screen1-text">הפרטים הבאים</h3>
                <ProgressBar currentStep={4} />
            </div>
            <h3 className="hebrew-text screen1-text">פרטים נוספים</h3>
            <div className="additional-details-form">
                <div className="mb-3">
                    <label htmlFor="additionalInfo" className="form-label">מידע נוסף</label>
                    <textarea
                        type="text"
                        className="form-control"
                        id="additionalInfo"
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleInputChange}
                        placeholder="אנא הכנסו מידע נוסף"
                        required
                    />
                </div>
                <div className="button-group container-fluid">
                    <div className='buttons'>
                        <button
                            type="button"
                            className="btn-primary continue-button col-6 btn11"
                            onClick={handlePrevStep}
                        >
                            חזור
                        </button>
                        <button type="submit" className="btn btn-primary continue-button col-6 btn12">
                            המשך
                        </button>
                    </div>
                </div>
            </div>
        </>
    );

    const renderStepSix = () => (
        <>
            <div className="text-end mb-4">
                <h3 className="hebrew-text screen1-text">על מנת שנתחיל אנא מלאו את</h3>
                <h3 className="hebrew-text screen1-text">הפרטים הבאים</h3>
                <ProgressBar currentStep={5} />
            </div>
            <h3 className="hebrew-text screen1-text">סיום</h3>
            <div className="final-step-form">
                <div className="mb-3">
                    <label htmlFor="finalInfo" className="form-label">מידע סופי</label>
                    <textarea
                        type="text"
                        className="form-control"
                        id="finalInfo"
                        name="finalInfo"
                        value={formData.finalInfo}
                        onChange={handleInputChange}
                        placeholder="אנא הכנסו מידע סופי"
                        required
                    />
                </div>
                <div className="button-group container-fluid">
                    <div className='buttons'>
                        <button
                            type="button"
                            className="btn-primary continue-button col-6 btn11"
                            onClick={handlePrevStep}
                        >
                            חזור
                        </button>
                        <button type="submit" className="btn btn-primary continue-button col-6 btn12">
                            הגש
                        </button>
                    </div>
                </div>
            </div>
        </>
    );

    return (
        <div className='container-fluid signup-container'>
            <div className='row'>
                <div className='col-6 md-6 calendar-section'>
                    <div className="calendar-image-container">
                        <img
                            src={calendarImage}
                            alt="Calendar Interface"
                            className="calendar-image"
                        />
                    </div>
                </div>

                <div className='col-6 md-6 form-section'>
                    <div className="form-container">
                        <form className='Signup-form' onSubmit={handleSubmit}>
                            {currentStep === 1 && renderStepOne()}
                            {currentStep === 2 && renderStepTwo()}
                            {currentStep === 3 && renderStepThree()}
                            {currentStep === 4 && renderStepFour()}
                            {currentStep === 5 && renderStepFive()}
                            {currentStep === 6 && renderStepSix()}
                        </form>

                        {currentStep === 1 && (
                            <>
                                <div className="terms-section text-center mt-3">
                                    <p>
                                        על ידי הרשמה, אתם מאשרים את <Link to="/privacy">Privacy Policy</Link> ול-<Link to="/terms">Terms of Service</Link> שלנו.
                                    </p>
                                </div>

                                <div className="text-center mt-3">
                                    <h3>יש לכם כבר חשבון? <Link to="/login">התחברו כאן</Link></h3>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;