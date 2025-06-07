import { useState, useEffect } from 'react';

const NewStory = () => {
  const [title, setTitle] = useState('');
      const [content, setContent] = useState('');
      const [image, setImage] = useState(null);
      const [preview, setPreview] = useState(null);
      const [isVisible, setIsVisible] = useState(false);

      useEffect(() => {
        console.log('Component mounted');
        setTimeout(() => {
          setIsVisible(true);
          console.log('Visibility set to true');
        }, 100);
      }, []);

      const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setPreview(reader.result);
            console.log('Image preview loaded');
          };
          reader.readAsDataURL(file);
        } else {
          setPreview(null);
          console.log('Image preview cleared');
        }
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', { title, content, image });
        alert('Story submitted successfully!');
        setTitle('');
        setContent('');
        setImage(null);
        setPreview(null);
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
                 <li className="nav-item"><a className="nav-link text-[#8E24AA] hover:text-[#FFB300]" href="/ContactForm">Contact-Us</a></li>
                <li className="nav-item"><a className="nav-link btn btn-signin ms-2" href="/signin">Logout</a></li>
              </ul>
            </div>
          </div>
        </nav>
    
    <section className='newStoryForm-container'>
        
     <div className={`nst-story-form-container ${isVisible ? 'visible' : ''}`}>
          <h1 className="nst-story-heading">
            <span className="nst-story-dropcap">S</span>hare Your Story
            <span className="nst-story-ribbon">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.5 2.5l-10 10-2.5-2.5L2 13l5 5 12.5-12.5z" />
              </svg>
            </span>
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="nst-story-form-section">
              <label htmlFor="nst-story-title" className="nst-story-label">Story Title</label>
              <input
                type="text"
                id="nst-story-title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter your story title"
                className="nst-story-input"
                required
              />
            </div>
            <div className="nst-story-form-section">
              <label htmlFor="nst-story-content" className="nst-story-label">Your Story</label>
              <textarea
                id="nst-story-content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your story here..."
                className="nst-story-textarea"
                required
              />
            </div>
            <div className="nst-story-form-section">
              <label htmlFor="nst-story-image" className="nst-story-label">Upload Image</label>
              <input
                type="file"
                id="nst-story-image"
                accept="image/*"
                onChange={handleImageChange}
                className="nst-story-file-input"
              />
              {preview && (
                <div className="nst-story-image-preview">
                  <img src={preview} alt="Story preview" />
                </div>
              )}
            </div>
            <button type="submit" className="nst-story-submit">
              <span className="nst-story-submit-text">Submit Story</span>
              <span className="nst-story-submit-bg"></span>
              <span className="nst-story-bookmark"></span>
            </button>
          </form>
        </div>
    </section>



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
export default NewStory;