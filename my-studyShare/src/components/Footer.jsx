import React, { useState } from "react";
import '../styles/footer.css';

// Placeholder Icons for Social Media (Replace with actual SVG/Image imports if available)
const IconFacebook = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const IconTwitter = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1a10.66 10.66 0 0 1-7.17-3.67c-.28.51-.4 1.1-.4 1.7A4.48 4.48 0 0 0 4 15a10.64 10.64 0 0 1-7-2c1.2.9 2.7 1.44 4.25 1.44a4.49 4.49 0 0 0 4.5-4.49c0-.4-.04-.8-.13-1.18a10.29 10.29 0 0 1-7.4 3.7c.9 0 1.7-.2 2.46-.6A4.48 4.48 0 0 0 2 13.5v-.5A10.88 10.88 0 0 1 23 3z"/></svg>;
const IconGithub = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.11.817-.26.817-.57v-2.146c-3.336.726-4.035-1.61-4.035-1.61-.54-1.365-1.32-1.724-1.32-1.724-1.085-.745.084-.73.084-.73 1.205.084 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.495.998.108-.77.42-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.125-.303-.535-1.52.117-3.175 0 0 1.008-.322 3.3.123 1.9-.53 3.88-.53 5.78 0 2.29-.445 3.3-1.238 3.3-1.238.654 1.655.244 2.872.12 3.175.77.84 1.232 1.91 1.232 3.22 0 4.61-2.805 5.625-5.47 5.923.43.37.82 1.1.82 2.222v3.293c0 .31.218.685.823.57C20.56 21.8 24 17.302 24 12c0-6.627-5.374-12-12-12z"/></svg>;
const IconLinkedIn = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M22 6v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2zM7 11v6h-3v-6h3zm-1.5-1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM18 17v-4c0-1.7-.5-3.1-2.5-3.1-1 0-2 .6-2.5 1.5V11h-3v6h3v-3.7c0-.9.2-1.8 1.7-1.8 1.5 0 1.8 1.3 1.8 2.2V17h3v-4z"/></svg>;
// ----------------------------------------------------------------------


const Footer = ({ onNavigate }) => {
    // state यह नियंत्रित करता है कि कौन सा ड्रॉपडाउन खुला है ('about', 'contact', या null)
    const [openSection, setOpenSection] = useState(null); 

    const handleToggle = (section) => {
        setOpenSection(openSection === section ? null : section);
    };
    
    // नेविगेशन हैंडलर जो App.jsx के state को अपडेट करता है
    const handleNavigate = (pageKey) => {
        if (onNavigate) {
            onNavigate(pageKey);
        }
        setOpenSection(null); // मेनू बंद करें
    }

    return (
        <footer className="footer-container">
            <div className="footer-content-wrapper">
                
                {/* --- 1. About Section --- */}
                <div className="footer-column">
                    <button 
                        className="footer-toggle-btn"
                        onClick={() => handleToggle('about')}
                    >
                        About
                    </button>
                    
                    {openSection === 'about' && (
                        <div className="footer-dropdown">
                            {/* App.jsx में aboutUs state key को ट्रिगर करता है */}
                            <a onClick={() => handleNavigate('aboutUs')} className="dropdown-link">Our Mission & Scale</a>
                            <a onClick={() => handleNavigate('home')} className="dropdown-link">Our Alumni</a> 
                            <a onClick={() => handleNavigate('home')} className="dropdown-link">Careers</a>
                        </div>
                    )}
                </div>

                {/* --- 2. Contact Section --- */}
                <div className="footer-column">
                    <button 
                        className="footer-toggle-btn"
                        onClick={() => handleToggle('contact')}
                    >
                        Contact
                    </button>
                    
                    {openSection === 'contact' && (
                        <div className="footer-dropdown">
                            {/* App.jsx में contactUs state key को ट्रिगर करता है */}
                            <a onClick={() => handleNavigate('contactUs')} className="dropdown-link">Support & Inquiry</a>
                            <a onClick={() => handleNavigate('home')} className="dropdown-link">Partnership Desk</a>
                            <a href="mailto:info@navgurukul.org" className="dropdown-link" target="_blank" rel="noopener noreferrer">Email Us</a>
                        </div>
                    )}
                </div>
                
                {/* --- 3. Social Media Icons --- */}
                <div className="footer-column footer-social-icons">
                    <p className="social-heading">Social Media</p>
                    <div className="social-links">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><IconFacebook className="icon-social" /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><IconTwitter className="icon-social" /></a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><IconGithub className="icon-social" /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><IconLinkedIn className="icon-social" /></a>
                    </div>
                </div>
                
            </div>
            <p className="footer-copyright">&copy; 2025 NavGurukul. All rights reserved.</p>
        </footer>
    );
};

export default Footer;