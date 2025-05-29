import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import StoryCard from "../components/StoryCard";
import HighlightCard from "../components/HighlightCard";
import Poll from "../components/Poll";
import Newsletter from "../components/Newsletter";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { Helmet } from "react-helmet";

import { useEffect } from 'react';
import '../App.css'

    const HomePage = () => {
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
              <a className="logo navbar-brand text-[#8E24AA] fs-3" href="#">NewStories <span className="gold">&</span> Tales</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item"><a className="nav-link text-[#8E24AA] hover:text-[#FFB300]" href="#">Stories</a></li>
                  <li className="nav-item"><a className="nav-link text-[#8E24AA] hover:text-[#FFB300]" href="#">Genres</a></li>
                  <li className="nav-item"><a className="nav-link text-[#8E24AA] hover:text-[#FFB300]" href="#">Community</a></li>
                  <li className="nav-item"><a className="nav-link text-[#8E24AA] hover:text-[#FFB300]" href="#">About</a></li>
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
              <button className="btn btn-custom px-5 py-3 rounded-pill">Start Writing</button>
            </div>
          </section>

          {/* Featured Stories */}
          <section className="py-5 py-md-12 px-4 paper-texture">
            <div className="container">
              <h2 className="text-center text-[#8E24AA] display-5 mb-5 mb-md-8 quill-flourish">Featured Stories</h2>
              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <a href="/stories/the-warriors-path" style={{ textDecoration: 'none' }}>
                    <div className="card border-0 shadow fade-in card-hover">
                      <img src="https://via.placeholder.com/300x200?text=Warrior" className="card-img-top" alt="The Warrior's Path" style={{ height: '200px', objectFit: 'cover' }} />
                      <div className="card-body">
                        <h3 className="card-title text-[#8E24AA] fs-5 ribbon-icon">The Warrior's Path</h3>
                        <p className="card-text drop-cap">A young warrior embarks on a perilous journey...</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <a href="/stories/the-wizards-spell" style={{ textDecoration: 'none' }}>
                    <div className="card border-0 shadow fade-in card-hover">
                      <img src="https://via.placeholder.com/300x200?text=Wizard" className="card-img-top" alt="The Wizard's Spell" style={{ height: '200px', objectFit: 'cover' }} />
                      <div className="card-body">
                        <h3 className="card-title text-[#8E24AA] fs-5 ribbon-icon">The Wizard's Spell</h3>
                        <p className="card-text drop-cap">An old wizard discovers a powerful spell...</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <a href="/stories/the-elfs-journey" style={{ textDecoration: 'none' }}>
                    <div className="card border-0 shadow fade-in card-hover">
                      <img src="https://via.placeholder.com/300x200?text=Elf" className="card-img-top" alt="The Elf's Journey" style={{ height: '200px', objectFit: 'cover' }} />
                      <div className="card-body">
                        <h3 className="card-title text-[#8E24AA] fs-5 ribbon-icon">The Elf's Journey</h3>
                        <p className="card-text drop-cap">An elf seeks to restore balance to the forest...</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Explore Genres */}
          <section className="py-5 py-md-12 px-4 section-bg">
            <div className="container text-center">
              <h2 className="text-[#8E24AA] display-5 mb-5 mb-md-8 quill-flourish">Explore Genres</h2>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                {['Fantasy', 'Sci-Fi', 'Mystery', 'Romance', 'Adventure', 'Historical'].map(genre => (
                  <button key={genre} className="btn btn-custom px-4 py-2 genre-btn">{genre}</button>
                ))}
              </div>
            </div>
          </section>

          {/* Community Highlights */}
          <section className="py-5 py-md-12 px-4 paper-texture">
            <div className="container">
              <h2 className="text-center text-[#8E24AA] display-5 mb-5 mb-md-8 quill-flourish">Community Highlights</h2>
              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <a href="/stories/story-of-the-month" style={{ textDecoration: 'none' }}>
                    <div className="card border-0 shadow fade-in card-hover">
                      <img src="https://via.placeholder.com/300x200?text=Story" className="card-img-top" alt="Story of the Month" style={{ height: '200px', objectFit: 'cover' }} />
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
                      <img src="https://via.placeholder.com/300x200?text=Author" className="card-img-top" alt="Author Spotlight" style={{ height: '200px', objectFit: 'cover' }} />
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
                      <img src="https://via.placeholder.com/300x200?text=Reader" className="card-img-top" alt="Reader's Choice" style={{ height: '200px', objectFit: 'cover' }} />
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

          {/* Interactive Poll */}
          <section className="py-5 py-md-12 px-4 section-bg">
            <div className="container text-center">
              <h2 className="text-[#8E24AA] display-5 mb-5 mb-md-8 quill-flourish">Interactive Poll</h2>
              <div className="card mx-auto border-0 shadow" style={{ maxWidth: '400px' }}>
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

          {/* Upcoming Events */}
          <section className="py-5 py-md-12 px-4">
            <div className="container">
              <h2 className="text-center text-[#8E24AA] display-5 mb-5 mb-md-8 quill-flourish">Upcoming Events</h2>
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

          {/* Subscription Form */}
          <section className="py-5 py-md-12 px-4 section-bg">
            <div className="container text-center">
              <h2 className="text-[#8E24AA] display-5 mb-5 mb-md-8 quill-flourish">Stay Updated</h2>
              <div style={{ maxWidth: '400px', margin: '0 auto' }}>
                <input type="email" placeholder="Your Email" className="form-control mb-4 p-3 bg-[#FAFAFA] border-0 shadow-sm" />
                <button className="btn btn-custom w-100 py-2">Subscribe</button>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section className="py-5 py-md-12 px-4 paper-texture">
            <div className="container text-center">
              <h2 className="text-[#8E24AA] display-5 mb-5 mb-md-8 quill-flourish">Contact Us</h2>
              <div style={{ maxWidth: '400px', margin: '0 auto' }}>
                <input type="text" placeholder="Your Name" className="form-control mb-4 p-3 bg-[#FAFAFA] border-0 shadow-sm" />
                <input type="email" placeholder="Your Email" className="form-control mb-4 p-3 bg-[#FAFAFA] border-0 shadow-sm" />
                <textarea placeholder="Your Message" className="form-control mb-4 p-3 bg-[#FAFAFA] border-0 shadow-sm" rows="4"></textarea>
                <button className="btn btn-custom w-100 py-2">Send</button>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-5 px-4 text-center text-sm footer-bg">
            <div className="d-flex justify-content-center gap-4 mb-4">
              <a href="#" className="text-[#8E24AA] hover:text-[#FFB300]">Terms of Service</a>
              <a href="#" className="text-[#8E24AA] hover:text-[#FFB300]">Privacy Policy</a>
              <a href="#" className="text-[#8E24AA] hover:text-[#FFB300]">Contact Us</a>
            </div>
            <p>© 2025 NewStoriesAndTales. All rights reserved.</p>
          </footer>
        </div>
      );
    };
export default HomePage;
