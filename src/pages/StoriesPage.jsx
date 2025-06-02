 import{ useState } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';
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
          <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
          <li className="nav-item"><a className="nav-link active" href="/genres">Genres</a></li>
          <li className="nav-item"><a className="nav-link" href="/stories">Stories</a></li>
          <li className="nav-item"><a className="nav-link" href="/community">Community</a></li>
          <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
          <li className="nav-item"><a className="nav-link btn btn-signin ms-2" href="/signin">Sign In</a></li>
        </ul>
      </div>
    </div>
  </nav>
      <section className="container">
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
      </section>
       <footer className="footer">
        <div className="container">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <p className="mt-3">©2025 StoryWeave. All rights reserved.</p>
        </div>
      </footer>
      </>
    );

    // Story Content Page Component
    const StoryContentPage = () => {
      const { id } = useParams();
      const story = storiesData.find((s) => s.id === parseInt(id));

      if (!story) {
        return <Container><h2 className="section-title">Story Not Found</h2></Container>;
      }

      return (
        <Container className="story-content">
               <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand" to="/">NewStoriesAndTales</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/genres">Genres</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/stories">Stories</Link></li>
              </ul>
            </div>
          </div>
        </nav>
            <div>
          <h1>{story.title}</h1>
          <div className="story-meta">
            <span>By {story.author}</span>
            <span>{story.date}</span>
          </div>
          <p>{story.content}</p>
          </div>
        </Container>
      );
    };

  
export default StoriesPage;
      