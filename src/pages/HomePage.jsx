import { useEffect } from 'react';
import '../App.css'
import {storiesData} from './StoryPage';

  const HomePage = () => {
    const selectedIds = ["modern-english-literature","the-whispering-woods","starlit-dreams" ];

  const selectedStories = Array.isArray(storiesData)
    ? storiesData?.filter((story) => selectedIds.includes(story.id))
    : [];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  }, []);

    return (
      <div>
        {/* Navigation */}
          <nav className="navbar navbar-expand-lg bg-white shadow-sm">
            <div className="container">
              <a className="logo navbar-brand home-title fs-3" href="/">ModernStory  <span className="gold"> & </span>  Tales</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item"><a className="nav-link text-[#8E24AA] hover:text-[#FFB300]" href="/genres">Genres</a></li>
                  <li className="nav-item"><a className="nav-link text-[#8E24AA] hover:text-[#FFB300]" href="/stories">Stories</a></li>
                  <li className="nav-item"><a className="nav-link text-[#8E24AA] hover:text-[#FFB300]" href="/community">Community</a></li>
                  <li className="nav-item"><a className="nav-link text-[#8E24AA] hover:text-[#FFB300]" href="/about">About</a></li>
                  <li className="nav-item">
                    <button className="btn btn-custom ms-2">Write a Story</button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          {/* Hero Section */}
    <section className="gradient-bg text-white text-center quill-flourish">
            <div className="container">
              <h1 className="display-3 mb-4 hero-text">Unleash Your Imagination</h1>
              <p className="lead mb-5 hero-text">Craft & share your unique stories with a vibrant community of storytellers.</p>
              <button className="btn btn-custom px-5 py-3 rounded-pill"  onClick={() => alert("Let your story begin! Redirecting to the writing page...")}>Start Writing</button>
            </div>
          </section>

          {/* Featured Stories */}
      <section className="py-5 py-md-12 px-4 paper-texture">
            <div className="container">
              <h2 className="text-center text-[#8E24AA] display-5 mb-5 mb-md-8 quill-flourish "><span className="heading-with-gradient-underline">Featured Stories</span></h2>


      <div className="row row-cols-1 row-cols-md-3 g-4">
      {selectedStories?.map(({ id, title, description, image }) => (
        <div className="col" key={id}>
          <a href={`/stories/${id}`} style={{ textDecoration: 'none' }}>
            <div className="card border-0 shadow fade-in card-hover">
              <img
                src={image}
                className="card-img-top d-block mx-auto"
                alt={title}
                style={{ height: '400px', objectFit: 'cover', width: '300px' }}
              />
              <div className="card-body">
                <h3 className="card-title text-[#8E24AA] fs-5 ribbon-icon">
                  {title}
                </h3>
                <p className="card-text drop-cap">{description}</p>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  
    </div>
    </section>

  {/* Explore Genres */}
  <section className="py-5 py-md-12 px-4 section-bg">
    <div className="container text-center">
     <h2 className="text-[#8E24AA] display-5 mb-5 mb-md-8 quill-flourish"><span className="heading-with-gradient-underline">Explore Genres</span></h2>
      <div className="d-flex flex-wrap justify-content-center gap-3">
      {['Fantasy', 'Sci-Fi', 'Mystery', 'Romance', 'Adventure', 'Historical']?.map(genre => (
      <button key={genre} className="btn btn-custom px-4 py-2 genre-btn">{genre}</button>
      ))}
      </div>
      </div>
      </section>

  {/* Community Highlights */}
          <section className="py-5 py-md-12 px-4 paper-texture">
            <div className="container">
              <h2 className="text-center text-[#8E24AA] display-5 mb-5 mb-md-8 quill-flourish"><span className="heading-with-gradient-underline">Community Highlights</span></h2>
              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <a href="/stories/story-of-the-month" style={{ textDecoration: 'none' }}>
                    <div className="card border-0 shadow fade-in card-hover">
                      <img src="https://m.media-amazon.com/images/I/91Ln4H-QKkL._UF1000,1000_QL80_.jpg" className="card-img-top d-block mx-auto" alt="Story of the Month" style={{ height: '300px', objectFit: 'cover', width:'auto'}} />
                      <div className="card-body">
                        <h3 className="card-title text-[#8E24AA] fs-5 ribbon-icon">Story of the Month</h3>
                        <p className="card-text drop-cap">Discover the most captivating story this month.</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <a href="/stories/author-spotlight" style={{ textDecoration: 'none' }}>
                    <div className="card border-0 shadow fade-in card-hover">
                      <img src="https://img.buzzfeed.com/buzzfeed-static/static/2022-03/1/20/asset/fca0bf5b0223/sub-buzz-729-1646164940-29.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto" className="card-img-top d-block mx-auto" alt="Author Spotlight" style={{ height: '300px', objectFit: 'cover', width:'auto' }} />
                      <div className="card-body">
                        <h3 className="card-title text-[#8E24AA] fs-5 ribbon-icon">Author Spotlight</h3>
                        <p className="card-text drop-cap">Meet the talented author behind our featured story.</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <a href="/stories/readers-choice" style={{ textDecoration: 'none' }}>
                    <div className="card border-0 shadow fade-in card-hover">
                      <img src="https://m.media-amazon.com/images/I/81q0zoh+ybL._UF1000,1000_QL80_.jpg" className="card-img-top d-block mx-auto" alt="Reader's Choice" style={{ height: '300px', objectFit: 'cover',width:'auto' }} />
                      <div className="card-body">
                        <h3 className="card-title text-[#8E24AA] fs-5 ribbon-icon">Reader's Choice</h3>
                        <p className="card-text drop-cap">See stories our readers are loving the most.</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>


          {/* Upcoming Events */}
          <section className="py-5 py-md-12 px-4">
            <div className="container">
              <h2 className="text-center text-[#8E24AA] display-5 mb-5 mb-md-8 quill-flourish"> <span className="heading-with-gradient-underline">Upcoming Events</span></h2>
              <div className="events-bg text-white py-5 px-4">
                <div className="text-start" style={{ maxWidth: '600px', margin: '0 auto' }}>
                  <div className="d-flex align-items-center mb-3 fade-in event-item">
                    <span className="event-icon">📅</span>
                    <p className="mb-0">Virtual Writing Workshop - July 15th, 2025</p>
                  </div>
                  <div className="d-flex align-items-center mb-3 fade-in event-item">
                    <span className="event-icon">📅</span>
                    <p className="mb-0">Online Storytelling Contest - August 5th, 2025</p>
                  </div>
                  <div className="d-flex align-items-center fade-in event-item">
                    <span className="event-icon">📅</span>
                    <p className="mb-0">Author Q&A Session - September 20th, 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          
          <section className="row">
         {/* Subscription Form */}
          <section className=" col-md-6 py-5 py-md-12 px-4 section-bg">
            <div className="container text-center">
              <h2 className="text-[#8E24AA] display-5 mb-5 mb-md-8 quill-flourish"><span className="heading-with-gradient-underline">Interactive Poll</span></h2>
              <div className="card mx-auto border-0 shadow" style={{ maxWidth: '500px' }}>
                <div className="card-body">
                  <p className="lead mb-4">Should stories have more magical elements?</p>
                  <div className="d-flex justify-content-center gap-3 mb-4">
                    <button className="btn btn-custom px-4 py-2">Yes</button>
                    <button className="btn btn-custom px-4 py-2">No</button>
                    <button className="btn btn-custom px-4 py-2">Maybe</button>
                  </div>
                  <button className="btn btn-custom px-4 py-2">Submit Vote</button>
                </div>
              </div>
            </div>
          </section>
               {/* Interactive Poll */}
          <section className=" col-md-6 py-5 py-md-12 px-4 section-bg">
            <div className="container text-center">
              <h2 className="text-[#8E24AA] display-5 mb-5 mb-md-8 quill-flourish"> <span className="heading-with-gradient-underline">Stay Updated</span></h2>
              <div style={{ maxWidth: '500px', margin: '0 auto' ,paddingTop:'2rem' }}>
                <input type="email" placeholder="Your Email" className="form-control mb-4 p-3 bg-[#FFB300] border-1 shadow-sm" />
                <button className="btn btn-custom w-100 py-2">Subscribe</button>
              </div>
            </div>
          </section>
          </section>
         

          {/* Contact Form */}
          <section className="py-5 py-md-12 px-4 paper-texture">
            <div className="container text-center p-5" style={{ maxWidth: '700px', margin: '0 auto', border:'3px solid #8E24AA', borderRadius:'40px' }}>
              <h2 className="text-[#8E24AA] display-5 mb-5 mb-md-8 quill-flourish"><span className="heading-with-gradient-underline">Contact Us</span></h2>
              <div style={{ maxWidth: '400px', margin: '0 auto' }}>
                <input type="text" placeholder="Your Name" className="form-control mb-4 p-3 bg-[#FAFAFA] shadow-sm" style={{ border:'3px solid #f3d591'}}/>
                <input type="email" placeholder="Your Email" className="form-control mb-4 p-3 bg-[#FAFAFA] shadow-sm" style={{ border:'3px solid #f3d591'}} />
                <textarea placeholder="Your Message" className="form-control mb-4 p-3 bg-[#FAFAFA]  shadow-sm" style={{ border:'3px solid #f3d591'}} rows="4"></textarea>
                <button className="btn btn-custom w-100 py-2">Send</button>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-5 px-4 text-center text-sm footer-bg text-[#8E24AA]">
            <div className="d-flex justify-content-center gap-4 mb-4">
              <a href="#" className="text-[#8E24AA] hover:text-[#FFB300]">Terms of Service</a>
              <a href="#" className="text-[#8E24AA] hover:text-[#FFB300]">Privacy Policy</a>
              <a href="#" className="text-[#8E24AA] hover:text-[#FFB300]">Contact Us</a>
            </div>
            <p>© 2025 ModernStories<span className="gold">&</span>Tales. All rights reserved.</p>
          </footer>
        </div>
      );
    };
export default HomePage;
