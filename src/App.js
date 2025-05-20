import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/global/Header';
import Footer from './components/global/Footer';
import Feedback from './components/pages/Home/Feedback';
import FreeSubscriptionStart from './components/pages/Home/FreeSubscriptionStart';
import FAQSection from './components/pages/Home/FAQSection';
import CardsSection from './components/pages/Home/CardsSection';
import FAQClient from './components/pages/Home/FAQClient';
import FAQClient2 from './components/pages/Home/FAQClient2';
import Features from './components/pages/Home/SystemFeatures';
import Advantages from './components/pages/Home/Advantages';
import Hero from './components/pages/Home/Hero';

import Login from './components/pages/Auth/Login/login';
import ForgotPassword from './components/pages/Auth/Login/forgot_password';
import CodeVerification from './components/pages/Auth/Login/code_verification';
import NewPassword from './components/pages/Auth/Login/new_password';
import Signup from './components/pages/Auth/Signup';
import Appointment from './components/pages/Appointment/Appoint';

import './App.css';

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Advantages />
      <Features />
      <FAQClient />
      <FAQClient2 />
      <CardsSection />
      <FAQSection />
      <FreeSubscriptionStart />
      <Feedback />
      <Footer />
    </>
  );
}

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/code-verification" element={<CodeVerification />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
   
  );
}

export default App;
