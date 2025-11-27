import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AddIdea from "./pages/AddIdea";
import AboutUs from "./pages/AboutUs"; 
import ContactPage from "./pages/ContactPage"; 
import Footer from "./components/Footer"; 
import "./styles/global.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home onNavigate={setCurrentPage} />;
      case "dashboard":
        return <Dashboard onNavigate={setCurrentPage} />;
      case "login":
        return <Login onNavigate={setCurrentPage} />;
      case "signup":
        return <Signup onNavigate={setCurrentPage} />;
      case "addIdea":
        return <AddIdea onNavigate={setCurrentPage} />;
      case "aboutUs": 
        return <AboutUs onNavigate={setCurrentPage} />;
      case "contactUs": 
        return <ContactPage onNavigate={setCurrentPage} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <>
      <Navbar onNavigate={setCurrentPage} />
      {renderPage()}
      <Footer onNavigate={setCurrentPage} /> 
    </>
  );
};

export default App;