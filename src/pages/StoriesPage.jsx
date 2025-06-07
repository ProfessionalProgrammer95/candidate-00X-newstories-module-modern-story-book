import { Row } from 'react-bootstrap';
import {storiesData, StoryCard} from './StoryPage';

    // Stories Page Component
    const StoriesPage = () => (
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
          
          <li className="nav-item"><a className="nav-link" href="/community">Community</a></li>
          <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
           <li className="nav-item"><a className="nav-link" href="/ContactForm">Contact-Us</a></li>
          <li className="nav-item"><a className="nav-link btn btn-signin ms-2" href="/signin">Logout</a></li>
        </ul>
      </div>
    </div>
  </nav>
      <section className="container px-5">
        <h1 className='py-4'>Stories</h1>
        <p>Explore a diverse collection of stories, ezch crafted with creativity and passion. Dive into narratives that inspire, challenges, and connect us.</p>
        <div>
        <h2 className="section-title">All Stories</h2>
        <Row>
          {storiesData.map((story) => (
            <StoryCard
              key={story.id}
              id={story.id}
              title={story.title}
              description={story.description}
              image={story.image}
              views={story.views}
              bookmarks={story.bookmarks}
              hearts={story.hearts}
              genre={story.genre}
            />
          ))}
        </Row>
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

   
  
export default StoriesPage;
      