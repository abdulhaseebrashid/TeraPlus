import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/css/style.css';
import calendarImage from '../../../assets/img/Registration/main.png'; 
import { ReactComponent as EditIcon } from '../../../assets/icons/popsvg.svg';
import { ReactComponent as TrashIcon } from '../../../assets/icons/popdelet.svg';
import googleIcon from '../../../assets/icons/google-icon.svg';
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
            <div className="popup-content">
                <h4>{editingTreatment ? 'עריכת טיפול' : 'הוספת טיפול'}</h4>

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
                <select
                    className="form-select mb-3 custom-select-rtl"
                    value={treatmentDuration}
                    onChange={(e) => setTreatmentDuration(e.target.value)}
                    dir="rtl"
                    required
                >
                    <option value="">בחר משך זמן</option>
                    <option value="30">דקות</option>
                    <option value="45">דקות</option>
                    <option value="60">שעה</option>
                    <option value="90">שעה וחצי</option>
                    <option value="120">שעתיים</option>
                </select>

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

const Signup = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        gender: '',
        birthDate: '',
        businessName: '',
        businessId: '',
        businessAddress: '',
        businessLogo: null,
        businessCover: null,
        businessText: '',
        businessHours: {
            sunday: { isOpen: false, start: '08:00', end: '16:00' },
            monday: { isOpen: false, start: '08:00', end: '16:00' },
            tuesday: { isOpen: false, start: '08:00', end: '16:00' },
            wednesday: { isOpen: false, start: '08:00', end: '16:00' },
            thursday: { isOpen: false, start: '08:00', end: '16:00' },
            friday: { isOpen: false, start: '08:00', end: '16:00' },
            saturday: { isOpen: false, start: '08:00', end: '16:00' }
        }
    });

    const [showPassword, setShowPassword] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 6;
    const [treatments, setTreatments] = useState([]); // Regular treatments
    const [chlorinations, setChlorinations] = useState([]); // Chlorination packages
    const [showTreatmentPopup, setShowTreatmentPopup] = useState(false);
    const [showChlorinationPopup, setShowChlorinationPopup] = useState(false);
    const [editingTreatmentIndex, setEditingTreatmentIndex] = useState(null);
    const [logoPreview, setLogoPreview] = useState(null);
    const [coverPreview, setCoverPreview] = useState(null);

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

    const handleBusinessHoursChange = (day, field, value) => {
        setFormData(prev => ({
            ...prev,
            businessHours: {
                ...prev.businessHours,
                [day]: {
                    ...prev.businessHours[day],
                    [field]: field === 'isOpen' ? value : value
                }
            }
        }));
    };

    const handleFileChange = (e, type) => {
        const file = e.target.files[0];
        if (file) {
            setFormData(prev => ({
                ...prev,
                [type]: file
            }));

            // Create preview URL
            const reader = new FileReader();
            reader.onloadend = () => {
                if (type === 'businessLogo') {
                    setLogoPreview(reader.result);
                } else {
                    setCoverPreview(reader.result);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveFile = (type) => {
        setFormData(prev => ({
            ...prev,
            [type]: null
        }));
        if (type === 'businessLogo') {
            setLogoPreview(null);
        } else {
            setCoverPreview(null);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.email && formData.password && currentStep === 1) {
            setCurrentStep(2);
        } else if (currentStep === 2 && formData.firstName && formData.lastName && formData.gender && formData.birthDate) {
            setCurrentStep(3);
        } else if (currentStep === 3 && formData.businessName && formData.businessId && formData.businessAddress) {
            setCurrentStep(4);
        } else if (currentStep === 4) {
            // Check if both treatments and chlorination packages are added
            if (treatments.length === 0) {
                alert('אנא הוסף לפחות טיפול אחד לפני שתמשיך');
                return;
            }
            if (chlorinations.length === 0) {
                alert('אנא הוסף לפחות חבילת הכלרה אחת לפני שתמשיך');
                return;
            }
            setCurrentStep(5);
        } else if (currentStep === 5) {
            // Check if at least one business day is selected
            const hasSelectedDay = Object.values(formData.businessHours).some(day => day.isOpen);
            if (!hasSelectedDay) {
                alert('אנא בחר לפחות יום עבודה אחד לפני שתמשיך');
                return;
            }
            setCurrentStep(6);
        } else if (currentStep === 6) {
            // Handle final submission
            console.log('Form submitted:', { ...formData, treatments, chlorinations });
        }
    };

    const handleGoogleSignup = () => {
        console.log('Google signup clicked');
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
            if (formData.firstName && formData.lastName && formData.gender && formData.birthDate) {
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

        // Step 5: Business hours
        if (currentStep === 5) {
            // Only count filled business hours
            const hasFilledBusinessHours = Object.values(formData.businessHours).every(hours => hours.isOpen);
            if (hasFilledBusinessHours) {
                progress = 5;
            } else {
                return (4.5 / totalSteps) * 100;
            }
        }

        // Step 6: Business page setup
        if (currentStep === 6) {
            // Only count filled business page setup
            const hasFilledBusinessPageSetup = formData.businessText.trim() !== '' && formData.businessCover !== null;
            if (hasFilledBusinessPageSetup) {
                progress = 6;
            } else {
                return (5.5 / totalSteps) * 100;
            }
        }

        return (progress / totalSteps) * 100;
    };

    const renderProgressSlider = () => (
        <div className="progress-slider-container">
            <div className="progress-slider">
                <div
                    className="progress-slider-fill"
                    style={{ width: `${calculateProgress()}%` }}
                />
            </div>
        </div>
    );

    const renderStepOne = () => (
        <>
            <div className="text-end mb-4">
                <h3 className="hebrew-text">הצטרפו אלינו</h3>
                <h3 className="hebrew-text">והתחילו לנהל את העסק שלכם בקלות</h3>
            </div>
            <div className='google-button mb-4'>
                <button className="google-signup-button" onClick={handleGoogleSignup}>
                Sign up with Google
                    <img src={googleIcon} alt="Google" className="google-icon" />
                  
                </button>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">אימייל</label>
                <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="johndoe@email.com"
                    required
                />
            </div>

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
            </div>
            <button type="submit" className="btn btn-primary continue-button w-100">המשך</button>
        </>
    );

    const renderStepTwo = () => (
        <>
            <div className="text-end mb-4">
                <h3 className="hebrew-text screen1-text">על מנת שנתחיל אנא מלאו את</h3>
                <h3 className="hebrew-text screen1-text">הפרטים הבאים</h3>
            </div>
            {renderProgressSlider()}
            <h3 className="hebrew-text screen1-text">פרטים אישיים </h3>
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
                        required
                    />
                </div>
                <div className='two-opt container-fluid'>
                    <div className='row two-opt-row'>
                        <div className="mb-3 col-6">
                            <label htmlFor="gender" className="form-label">מין</label>
                            <select
                                className="form-control"
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
                        </div>
                        <div className="mb-4 col-6">
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
                    </div>
                </div>
                <button type="submit" className="btn btn-primary continue-button w-100">המשך</button>
            </div>
        </>
    );

    const renderStepThree = () => (
        <>
            <div className="text-end mb-4">
                <h3 className="hebrew-text screen1-text">על מנת שנתחיל אנא מלאו את</h3>
                <h3 className="hebrew-text screen1-text">הפרטים הבאים</h3>
            </div>
            {renderProgressSlider()}
            <h3 className="hebrew-text screen1-text">פרטי העסק</h3>
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
                        <button
                            type="button"
                            className=" btn-primary continue-button col-6 btn11"
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

    const renderStepFour = () => (
        <>
            <div className="text-end mb-4">
                <h3 className="hebrew-text screen1-text">על מנת שנתחיל אנא מלאו את</h3>
                <h3 className="hebrew-text screen1-text">הפרטים הבאים</h3>
            </div>
            {renderProgressSlider()}
            <h3 className="hebrew-text screen1-text">טיפולים והכלרות</h3>

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
                                <span className="treatment-info treatment-infoname">
                                    <span className="treatment-name ">{detail.name}</span>
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
                    <div className="category-header">
                        <h4>הכלרות</h4>
                        <button className="btn btn-link" onClick={() => setShowChlorinationPopup(true)}>
                            הוספה
                        </button>
                    </div>
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

    const renderBusinessHours = () => (
        <>
            <div className="text-end mb-4">
                <h3 className="hebrew-text screen1-text">על מנת שנתחיל אנא מלאו את</h3>
                <h3 className="hebrew-text screen1-text">הפרטים הבאים</h3>
            </div>
            {renderProgressSlider()}
            <h3 className="hebrew-text screen1-text">שעות הפעילות בעסק</h3>
            
            <div className="business-hours-form">
                {Object.entries(formData.businessHours).map(([day, hours]) => (
                    <div key={day} className="hours-row">
                        <div className="day-checkbox">
                            <input
                                type="checkbox"
                                checked={hours.isOpen}
                                onChange={(e) => handleBusinessHoursChange(day, 'isOpen', e.target.checked)}
                                id={`checkbox-${day}`}
                            />
                        </div>
                        <div className="day-label">
                            <label htmlFor={`checkbox-${day}`}>
                                {day === 'sunday' && 'יום ראשון'}
                                {day === 'monday' && 'יום שני'}
                                {day === 'tuesday' && 'יום שלישי'}
                                {day === 'wednesday' && 'יום רביעי'}
                                {day === 'thursday' && 'יום חמישי'}
                                {day === 'friday' && 'יום שישי'}
                                {day === 'saturday' && 'יום שבת'}
                            </label>
                        </div>
                        <div className="time-inputs">
                            <input
                                type="time"
                                className="custom-time-input"
                                value={hours.start}
                                onChange={(e) => handleBusinessHoursChange(day, 'start', e.target.value)}
                                disabled={!hours.isOpen}
                            />
                            <input
                                type="time"
                                className="custom-time-input"
                                value={hours.end}
                                onChange={(e) => handleBusinessHoursChange(day, 'end', e.target.value)}
                                disabled={!hours.isOpen}
                            />
                        </div>
                    </div>
                ))}
                
                <div className='buttons'>
                    <button
                        type="button"
                        className="btn-primary continue-button col-6 btn11"
                        onClick={handlePrevStep}
                    >
                        חזרה
                    </button>
                    <button 
                        type="submit" 
                        className="btn btn-primary continue-button col-6 btn12"
                    >
                        המשך
                    </button>
                </div>
            </div>
        </>
    );

    const renderBusinessPageSetup = () => (
        <>
            <div className="text-end mb-4">
                <h3 className="hebrew-text screen1-text">כמעט סיימנו!</h3>
            </div>
            {renderProgressSlider()}
            <h3 className="hebrew-text screen1-text">עיצוב עמוד העסק שלך</h3>
            
            <div className="business-page-form">
                <div className="mb-4">
                    
                    <div className={`upload-box ${logoPreview ? 'has-preview' : ''}`}>
                        <input
                            type="file"
                            className="file-input"
                            id="businessLogo"
                            accept="image/*"
                            onChange={(e) => handleFileChange(e, 'businessLogo')}
                        />
                        {logoPreview ? (
                            <>
                                <img src={logoPreview} alt="Logo Preview" className="upload-preview" />
                                <button
                                    type="button"
                                    className="upload-remove"
                                    onClick={() => handleRemoveFile('businessLogo')}
                                >
                                    ×
                                </button>
                            </>
                        ) : (
                            <div className="upload-placeholder">
                                
                                <span>לחץ/י להשלמת לוגו העסק</span>
                            </div>
                        )}
                    </div>
                </div>
                
                <div className="mb-4">
                    
                    <div className={`upload-box ${coverPreview ? 'has-preview' : ''}`}>
                        <input
                            type="file"
                            className="file-input"
                            id="businessCover"
                            accept="image/*"
                            onChange={(e) => handleFileChange(e, 'businessCover')}
                        />
                        {coverPreview ? (
                            <>
                                <img src={coverPreview} alt="Cover Preview" className="upload-preview" />
                                <button
                                    type="button"
                                    className="upload-remove"
                                    onClick={() => handleRemoveFile('businessCover')}
                                >
                                    ×
                                </button>
                            </>
                        ) : (
                            <div className="upload-placeholder">
                                
                                <span>לחץ/י להשלמת תמונת ראשית</span>
                            </div>
                        )}
                    </div>
                </div>
                
                <div className="mb-4">
                    
                    <textarea
                        className="form-control text-area-custom"
                        rows="3"
                        placeholder="נתן כיתוב להופיע כאן לדוגמא..."
                        value={formData.businessText}
                        onChange={(e) => setFormData(prev => ({
                            ...prev,
                            businessText: e.target.value
                        }))}
                    ></textarea>
                </div>

                <div className='buttons'>
                    <button
                        type="button"
                        className="btn-primary continue-button col-6 btn11"
                        onClick={handlePrevStep}
                    >
                        חזרה
                    </button>
                    <button 
                        type="submit" 
                        className="btn btn-primary continue-button col-6 btn12"
                    >
                        סיימנו!
                    </button>
                </div>
            </div>
        </>
    );

    return (
        <div className='container-fluid signup-container'>
            <div className='row calendar-sectionrow'>
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
                            {currentStep === 5 && renderBusinessHours()}
                            {currentStep === 6 && renderBusinessPageSetup()}
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