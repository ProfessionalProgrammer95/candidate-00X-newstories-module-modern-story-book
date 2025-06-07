import {useState, useEffect} from 'react';

const ContactForm = () =>{
      const [formData, setFormData] = useState({ name: '', email: '', message: '' });
      const [isVisible, setIsVisible] = useState(false);

      useEffect(() => {
        console.log('Contact component mounted');
        setTimeout(() => {
          setIsVisible(true);
          console.log('Container set to visible');
        }, 100);
      }, []);

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Contact form submitted:', formData);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      };

    return (
        <>
           <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="logo navbar-brand text-[#8E24AA] fs-3" href="#">
             ModernStory <span className="gold">&</span> Tales
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link" href="/home">Home</a></li>
                <li className="nav-item"><a className="nav-link active" href="/genres">Genres</a></li>
                <li className="nav-item"><a className="nav-link" href="/stories">Stories</a></li>
                <li className="nav-item"><a className="nav-link" href="/community">Community</a></li>
                <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
                <li className="nav-item"><a className="nav-link btn btn-signin ms-2" href="/">Logout</a></li>
              </ul>
            </div>
          </div>
        </nav>
        
        <div className='contact-form-container'>
            
         <div className={`nst-contact-container ${isVisible ? 'visible' : ''}`}>
          <span className="nst-contact-star top-left">✦</span>
          <span className="nst-contact-star bottom-right">✦</span>
          <h1 className="nst-contact-heading">
            <span className="nst-contact-dropcap">C</span>ontact Us
            <span className="nst-contact-quill">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.5 2.5l-10 10-2.5-2.5L2 13l5 5 12.5-12.5z" />
              </svg>
            </span>
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="nst-contact-form-section">
              <label htmlFor="contact-name" className="nst-contact-label">Name</label>
              <input
                type="text"
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="nst-contact-input"
                required
              />
            </div>
            <div className="nst-contact-form-section">
              <label htmlFor="contact-email" className="nst-contact-label">Email</label>
              <input
                type="email"
                id="contact-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="nst-contact-input"
                required
              />
            </div>
            <div className="nst-contact-form-section">
              <label htmlFor="contact-message" className="nst-contact-label">Message</label>
              <textarea
 Obituaries
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="nst-contact-textarea"
                required
              />
            </div>
            <button type="submit" className="nst-contact-submit">
              <span className="nst-contact-submit-text">Send Message</span>
              <span className="nst-contact-submit-bg"></span>
              <span className="nst-contact-bookmark"></span>
            </button>
          </form>
        </div>
        </div>
         <footer className="footer">
        <div className="container">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <p className="mt-3">©2025 ModernStories&Tales. All rights reserved.</p>
        </div>
      </footer>
        </>
    );
};
export default ContactForm;