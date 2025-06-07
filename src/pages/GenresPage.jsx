import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';

const GenresPage = () => {
 
  const selectedIds = [
    'echoes-of-the-past',
    'the-Weaver’s-tale',
    'the-secret-garden-of-dreams',
    'the-last-lightkeeper'
  ];

  const categories = [
    { name: 'Fiction', image: 'https://prod-website-cdn.studysmarter.de/sites/2/uk/Literary-Fiction-Books-dark-min.png' },
    { name: 'Romance', image: 'https://img.freepik.com/photos-gratuite/gens-romantiques-sont-amoureux_23-2151103251.jpg?semt=ais_hybrid&w=740' },
    { name: 'Thriller', image: 'https://t3.ftcdn.net/jpg/05/61/36/92/360_F_561369262_CM3C5dHPBUB8df5TLUvuwwKQ0VFYdIwM.jpg' },
    { name: 'Fantasy', image: 'https://png.pngtree.com/png-vector/20250408/ourmid/pngtree-enchanted-story-for-world-book-day-png-image_15944095.png' },
    { name: 'Adventure', image: 'https://img.clickviewapp.com/v2/thumbnails/5bvp70?size=medium' }
  ];

  const stories = {
    Fiction: [
      {
        id: 'echoes-of-the-past',
        title: 'Echoes of the Past',
        description: 'A historical fiction piece exploring forgotten memories.',
        image: 'https://images-cdn.fantasyflightgames.com/filer_public/91/77/9177c4a5-6402-467b-abe7-a03f6fcd3828/ahc12_preview1.png',
        link: '/stories/echoes-of-the-past',
        type: 'Non-Fiction',
        views: 123,
        bookmarks: 45,
        hearts: 67
      },
      {
        id: 'the-Weaver’s-tale',
        title: 'The Weaver’s Tale',
        description: 'A tale of creativity and history in Eldoria.',
        image: 'https://www.ohmytales.com/static/images/histoires/47/the-weavers-wishes-tales-from-japan-641.jpg',
        link: '/story/the-weavers-tale',
        type: 'Fiction',
        views: 234,
        bookmarks: 56,
        hearts: 89
      },
      {
        id: 'the-secret-garden-of-dreams',
        title: 'The Secret Garden of Dreams',
        description: 'A magical realism story.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl598HFlvK9eztUWxhdVHUvmrw7ojutz6StBnLNOKtjZel4lGiGrTm9vhOZxRVUlcqsNA&usqp=CAU',
        link: '/story/secret-garden-of-dreams',
        type: 'Poetry',
        views: 345,
        bookmarks: 78,
        hearts: 101
      },
      {
        id: 'the-last-lightkeeper',
        title: 'The Last Lightkeeper',
        description: 'A poignant story about solitude and resilience.',
        image: 'https://images.hive.blog/0x0/https://files.peakd.com/file/peakd-hive/digitaladdiction/23tRzfVEmeFhdg7k2LP8eE9zkxhNdnHTZ1ziJH42eDR1RxepsBxNHjtiy1dHKeZLqhXV1.png',
        link: '/story/the-last-lightkeeper',
        type: 'Fiction',
        views: 456,
        bookmarks: 90,
        hearts: 123
      }
    ]
  };

  const [selectedCategory, setSelectedCategory] = useState('Fiction');
  const [selectedTab, setSelectedTab] = useState('All');

  const filteredStories =
    selectedTab === 'All'
      ? stories[selectedCategory]
      : stories[selectedCategory]?.filter((story) => story.type === selectedTab) || [];

const Navbar = () => (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="logo navbar-brand text-[#8E24AA] fs-3" href="#">ModernStory <span className="gold">&</span> Tales</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link" href="/home">Home</a></li>
            
            <li className="nav-item"><a className="nav-link" href="/stories">Stories</a></li>
            <li className="nav-item"><a className="nav-link" href="/community">Community</a></li>
            <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
             <li className="nav-item"><a className="nav-link text-[#8E24AA] hover:text-[#FFB300]" href="/ContactForm">Contact-Us</a></li>
            <li className="nav-item"><a className="nav-link btn btn-signin ms-2" href="/">Logout</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );

  const HeroCarousel = () => (
     <div id="heroCarousel" className="carousel slide pt-2 rounded" data-bs-ride="carousel" data-bs-interval="3000">
      <div className="carousel-inner">
        {categories.map((category, index) => (
          <div
            key={category.name}
            className={`carousel-item img-fluid w-100 h-100  ${index === 0 ? 'active' : ''}`}
          >
            <img
              src={category.image}
              className=" img-fluid w-100 h-100 "
              alt={category.name}
              style={{ height: '300px', objectFit: 'cover' }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h3>{category.name}</h3>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );



    const ExploreStories = () => (
    <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="explore-stories">Explore Stories</h1>
        <ul className="nav nav-tabs">
          {['All', 'Fiction', 'Non-Fiction', 'Poetry'].map((tab) => (
            <li className="nav-item" key={tab}>
              <a
                className={`nav-link ${selectedTab === tab ? 'active' : ''}`}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedTab(tab);
                }}
              >
                {tab}
              </a>
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  );

  const StoryCard = ({ story, index , id}) => (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4 mx-auto" >
      
        <div className="col" key={id}>
       <a href="#" style={{ textDecoration: 'none' }}>
      <div className="story-card fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
        <img src={story.image} alt={story.title} />
        <div className="stats">
          <span><i className="bi bi-eye"></i> {story.views}</span>
          <span><i className="bi bi-bookmark"></i> {story.bookmarks}</span>
          <span><i className="bi bi-heart"></i> {story.hearts}</span>
        </div>
        <div className="p-3">
          <h5>{story.title}</h5>
          <p>{story.description}</p>
        </div>
        <div className="icons">
          <i className="bi bi-bookmark" title="Bookmark"></i>
          <i className="bi bi-share" title="Share"></i>
        </div>
      </div>
      </a>
      </div>
    </div>
  );

  return (
    <>
      <title>Genres | Modern Story Tales</title>
      <meta name="description" content="Explore genres and discover inspiring stories at NewStoriesAndTales.com" />
      <Navbar />
      
      <div className="container">
        <HeroCarousel />
      </div>
      <ExploreStories />
      
      <div className="container my-5">
        <h2 key={selectedTab} className="category-title">{selectedTab} Stories</h2>
        {filteredStories?.length > 0 ? (
          <div className="row">
            {filteredStories.map((story, index) => (
              <StoryCard key={story.id} story={story} index={index} />
            ))}
          </div>
        ) : (
          <p>No stories available for this category and tab combination.</p>
        )}
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

export default GenresPage;
