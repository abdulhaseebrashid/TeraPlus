import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/style.css';
import logo1 from '../../assets/logo/logo1.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header-wrapper" dir="rtl">
            <nav className="navbar py-3">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center w-100">
                        {/* Right Side - Menu Button & Navigation */}
                        <button className="login-btn d-none d-lg-block">דברו איתנו</button>
                        <div className="d-flex align-items-center">
                            {/* Mobile Menu Button */}
                            <button
                                className="menu-toggle d-lg-none"
                                onClick={toggleMenu}
                                aria-label="Toggle navigation menu"
                            >
                                <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </button>
                            {/* Center - Login Button */}

                            {/* Desktop Navigation Links */}
                            <div className="nav-links d-none d-lg-flex">
                                <Link to="/about" className="nav-link">מי אנחנו</Link>
                                <Link to="/services" className="nav-link">השירות שלנו</Link>
                                <Link to="/help" className="nav-link">שאלות תשובות</Link>
                                <Link to="/contact" className="nav-link">צור קשר</Link>
                            </div>
                        </div>




                        {/* Left Side - Logo */}
                        <Link to="/" className="navbar-brand">
                            <img src={logo1} alt="TheraPlus" className="logo-img" />
                        </Link>
                    </div>

                    {/* Mobile Menu */}
                    <div className={`mobile-menu ${isMenuOpen ? 'show' : ''}`}>
                        <div className="mobile-nav-links">
                            <Link to="/about" className="mobile-nav-link">מי אנחנו</Link>
                            <Link to="/services" className="mobile-nav-link">השירות שלנו</Link>
                            <Link to="/contact" className="mobile-nav-link">צור קשר</Link>
                            <button className=" mobile-login-btn">דברו איתנו</button>
                        </div>

                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
