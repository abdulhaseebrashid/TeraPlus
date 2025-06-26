import { Routes, Route } from "react-router-dom"

// Global layout
// import Header from './components/global/Header';
import Header1 from "./components/global/Header1"
import Footer1 from "./components/global/Footer1"
// import Footer from './components/global/Footer';
import "./assets/styles/main.css" // path based on location
// Auth routes
import Login from "./components/pages/Auth/Login/login"
import ForgotPassword from "./components/pages/Auth/Login/forgot_password"
import CodeVerification from "./components/pages/Auth/Login/code_verification"
import NewPassword from "./components/pages/Auth/Login/new_password"
import LoginChooseBranch from "./components/pages/Auth/Login/login_choose_branch"
import Login_1 from "./components/pages/Auth/Login/login_1"
import Signup from "./components/pages/Auth/Signup"
// Dashboard & Business routes
import BusinessProfileHome from "./components/pages/Search_and_make_an_appointment old/Business_Profile_Home"
import BusinessPayment from "./components/pages/Search_and_make_an_appointment old/business_payment"
import TeamManagement from "./components/pages/Dashboard/Team/team_management"
import EmployeeCard from "./components/pages/Dashboard/Employee_card/Employee_card"

//Dashboard
import Dashboard from "./components/pages/Dashboard/Dashboard"
import JoinedCustomerReport from "./components/pages/Dashboard/JoinedCustomerReport"
import CustomerChurnReport from "./components/pages/Dashboard/CustomerChurnReport"
import RealizationOfRoyalities from "./components/pages/Dashboard/RealizationOfRoyalities"
import ReportRecipt from "./components/pages/Dashboard/ReportRecipt"
import QeueuReport from "./components/pages/Dashboard/QeueuReport"
import SentMessageReport from "./components/pages/Dashboard/SentMessageReport"
import SystemLog from "./components/pages/Dashboard/SystemLog"
import RefundReport from "./components/pages/Dashboard/RefundReport"

// Home Page
import Home from "./components/pages/Home/home"
import Gallery from "./components/pages/Home/Gallery"
import Hero from "./components/pages/Home/Hero"
import CardSection from "./components/pages/Home/CardSection"
import PromoSection from "./components/pages/Home/PromoSection"
import AllServices from "./components/pages/Home/All_Services/All_Services"

import "./App.css"

function App() {
  return (
    <div className="app">
      <Routes>
        {/* Auth Routes */}
        <Route path="/Signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login_1" element={<Login_1 />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/code-verification" element={<CodeVerification />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/login-choose-branch" element={<LoginChooseBranch />} />

        {/* Dashboard Route without header/footer */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/joined-customer-report" element={<JoinedCustomerReport />} />

        {/* All other routes with header and footer */}
        <Route
          path="/*"
          element={
            <>
              <Header1 />
              <main>
                <Routes>
                  {/* Main Home Page */}
                  <Route path="/" element={<Home />}>
                    <Route index element={<Hero />} />
                    <Route path="gallery" element={<Gallery />} />
                    <Route path="card-section" element={<CardSection />} />
                    <Route path="promo" element={<PromoSection />} />
                  </Route>

                  {/* AllServices Route */}
                  <Route path="/all-services" element={<AllServices />} />

                  {/* Other Business Routes */}
                  <Route path="/customer-churn-report" element={<CustomerChurnReport />} />
                  <Route path="/realization-of-royalities" element={<RealizationOfRoyalities />} />
                  <Route path="/report-recipt" element={<ReportRecipt />} />
                  <Route path="/qeueu-report" element={<QeueuReport />} />
                  <Route path="/sent-message-report" element={<SentMessageReport />} />
                  <Route path="/system-log" element={<SystemLog />} />
                  <Route path="/refund-report" element={<RefundReport />} />
                  <Route path="/business-profile" element={<BusinessProfileHome />} />
                  <Route path="/business-payment" element={<BusinessPayment />} />
                  <Route path="/team-management" element={<TeamManagement />} />
                  <Route path="/employee-card" element={<EmployeeCard />} />
                </Routes>
              </main>
              <Footer1 />
            </>
          }
        />
      </Routes>
    </div>
  )
}

export default App





