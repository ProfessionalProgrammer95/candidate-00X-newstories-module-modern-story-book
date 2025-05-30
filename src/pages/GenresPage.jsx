import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
     

    const categories = [
      { name: 'Fiction', image: 'https://png.pngtree.com/png-clipart/20230914/original/pngtree-fiction-book-clipart-illustration-of-open-book-with-cartoon-illustration-vector-png-image_12147797.png' },
      { name: 'Romance', image: 'https://e7.pngegg.com/pngimages/297/636/png-clipart-love-story-love-illustration.png' },
      { name: 'Thriller', image: 'https://t3.ftcdn.net/jpg/05/61/36/92/360_F_561369262_CM3C5dHPBUB8df5TLUvuwwKQ0VFYdIwM.jpg' },
      { name: 'Fantasy', image: 'https://i0.wp.com/joncronshaw.com/wp-content/uploads/2024/01/DALL%C2%B7E-2024-01-13-14.29.47-An-imaginative-and-evocative-scene-representing-the-influence-of-ancient-literature-on-modern-fantasy.-The-image-shows-an-open-ancient-book-in-the-for.png?fit=1200%2C686&ssl=1' },
      { name: 'Adventure', image: 'https://img.clickviewapp.com/v2/thumbnails/5bvp70?size=medium' },
    ];


    
    const stories = {
      Fiction: [
        { title: 'Echoes of the Past', description: 'A historical fiction piece exploring forgotten memories.', image: 'https://images-cdn.fantasyflightgames.com/filer_public/91/77/9177c4a5-6402-467b-abe7-a03f6fcd3828/ahc12_preview1.png', link: '/story/echoes-of-the-past', type: 'Non-Fiction', views: 123, bookmarks: 45, hearts: 67 },
        { title: 'The Weaver’s Tale', description: 'A tale of creativity and history in Eldoria.', image: 'https://www.ohmytales.com/static/images/histoires/47/the-weavers-wishes-tales-from-japan-641.jpg', link: '/story/the-weavers-tale', type: 'Fiction', views: 234, bookmarks: 56, hearts: 89 },
      ],
      Romance: [
        { title: 'The Secret Garden of Dreams', description: 'A magical realism story about a hidden garden.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl598HFlvK9eztUWxhdVHUvmrw7ojutz6StBnLNOKtjZel4lGiGrTm9vhOZxRVUlcqsNA&usqp=CAU', link: '/story/secret-garden-of-dreams', type: 'Fiction', views: 345, bookmarks: 78, hearts: 101 },
      ],
      Thriller: [
        { title: 'The Last Lightkeeper', description: 'A poignant story about solitude and resilience.', image: 'https://images.hive.blog/0x0/https://files.peakd.com/file/peakd-hive/digitaladdiction/23tRzfVEmeFhdg7k2LP8eE9zkxhNdnHTZ1ziJH42eDR1RxepsBxNHjtiy1dHKeZLqhXV1.png', link: '/story/the-last-lightkeeper', type: 'Fiction', views: 456, bookmarks: 90, hearts: 123 },
      ],
      Fantasy: [
        { title: 'Chronicles of the Wandering Bard', description: 'An epic fantasy saga about a bard’s journey.', image: 'https://ik.imagekit.io/storybird/images/125d669b-7021-484e-8885-9b79ee826f11/10_661988849.png?tr=q-80', link: '/story/chronicles-of-the-wandering-bard', type: 'Poetry', views: 567, bookmarks: 12, hearts: 145 },
      ],
      Adventure: [
        { title: 'The Whispering Woods', description: 'A tale of mystery and adventure in an enchanted forest.', image: 'https://static.wikia.nocookie.net/grandchase/images/4/4e/Sky94.png/revision/latest?cb=20110330034016', link: '/story/the-whispering-woods', type: 'Fiction', views: 678, bookmarks: 34, hearts: 167 },
      ],
    };

    const Navbar = () => (
      <nav className="navbar navbar-expand-lg">
        <div className="container">
           <a className="logo navbar-brand text-[#8E24AA] fs-3" href="#">ModernStory <span className="gold">&</span> Tales</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
    );

    const ExploreStories = ({ setSelectedTab }) => (
      <div className="container my-4">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="explore-stories">Explore Stories</h1>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" href="#" onClick={(e) => { e.preventDefault(); setSelectedTab('All'); }}>All</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={(e) => { e.preventDefault(); setSelectedTab('Fiction'); }}>Fiction</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={(e) => { e.preventDefault(); setSelectedTab('Non-Fiction'); }}>Non-Fiction</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={(e) => { e.preventDefault(); setSelectedTab('Poetry'); }}>Poetry</a>
            </li>
          </ul>
        </div>
      </div>
    );

    const HeroCarousel = ({ setSelectedCategory }) => (
      <div id="heroCarousel" className="carousel slide hero-carousel" data-bs-ride="carousel">
        <div className="carousel-inner">
          {categories.map((category, index) => (
            <div key={category.name} className={`carousel-item ${index === 0 ? 'active' : ''}`} style={{ backgroundImage: `url(${category.image})`  }}>
              <div className="carousel-caption">
                <h3 onClick={() => setSelectedCategory(category.name)}>{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );

    const StoryCard = ({ story, index }) => (
      <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
        <div className="story-card fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
          <a href={story.link}>
            <img src={story.image} alt={story.title} />
          </a>
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
      </div>
    );

    const GenresPage = () => {
      const [selectedCategory, setSelectedCategory] = useState('Fiction');
      const [selectedTab, setSelectedTab] = useState('All');

      const filteredStories = selectedTab === 'All' 
        ? stories[selectedCategory] 
        : stories[selectedCategory].filter(story => story.type === selectedTab);

      return (
        <>
  {/* SEO */}
  <title>Genres | NewStoriesAndTales.com</title>
  <meta name="description" content="Explore genres and discover inspiring stories at NewStoriesAndTales.com" />
          <Navbar />
          <ExploreStories setSelectedTab={setSelectedTab} />
          <div className="container">
            <HeroCarousel setSelectedCategory={setSelectedCategory} />
          </div>
          <div className="container my-5">
            <h2 key={selectedTab} className="category-title">{selectedTab} Stories</h2>
            {filteredStories.length > 0 ? (
              <div className="row">
                {filteredStories.map((story, index) => (
                  <StoryCard key={story.title} story={story} index={index} />
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
              <p className="mt-3">©2025 StoryWeave. All rights reserved.</p>
            </div>
          </footer>
        </>
      );
    };

    
export default GenresPage;
