import React from 'react';
import '../styles/contact.css';

const ContactPage = () => {
  
    const handleSubmit = (e) => {
        e.preventDefault();
     
        console.log("Contact form submitted!");
      
        alert('Thank you for contacting us! We will get back to you soon.');
    };

    return (
        <div className="contact-page-wrapper">
            <div className="contact-container">
                <h1 className="contact-heading">Get In Touch with NavGurukul</h1>
                <p className="contact-subtitle">We are here to answer your questions and help you connect with us. Feel free to reach out via the form below or through our direct channels.</p>

                <div className="main-contact-grid">
                    
                
                    <div className="contact-form-card">
                        <h2 className="form-title">Send a Quick Inquiry</h2>
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <input type="text" placeholder="Your Name" required />
                            <input type="email" placeholder="Your Email" required />
                            <input type="tel" placeholder="Your Phone Number (Optional)" />
                            <textarea placeholder="How can we help you?" rows="4" required></textarea>
                            <button type="submit" className="submit-button">Send Message</button>
                        </form>
                    </div>

                    <div className="contact-details-card">
                        <h2 className="details-title">Direct Channels</h2>
                        <div className="contact-detail-box">
                            <p className="detail-label">General Inquiries</p>
                            <a href="mailto:info@navgurukul.org">info@navgurukul.org</a>
                        </div>
                        <div className="contact-detail-box">
                            <p className="detail-label">Partnerships & CSR</p>
                            <a href="mailto:partner@navgurukul.org">partner@navgurukul.org</a>
                        </div>
                        <div className="contact-detail-box phone-box">
                            <p className="detail-label">Admissions Inquiry</p>
                            <p className="phone-number">9212264645 (Call)</p>
                            <p className="whatsapp-info">WhatsApp / Call:</p>
                            <p className="phone-number">7899100518</p>
                            <p className="phone-number">9528194379</p>
                        </div>
                        <div className="contact-detail-box">
                            <p className="detail-label">Alumni & Donor Relations</p>
                            <a href="mailto:alumni@navgurukul.org">alumni@navgurukul.org</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ContactPage;