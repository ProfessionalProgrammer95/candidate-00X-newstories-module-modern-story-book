import React from "react";
import {  BrowserRouter, Routes, Route, Link, useParams  } from "react-router-dom";
import { Navbar, Nav, Container, Button, Card, Row, Col  } from "react-bootstrap";




// const stories = {
//   "warriors-path": {
//     title: "The Warrior’s Path",
//     content: "Once upon a time, in a land of magic and courage...",
//     image: "/images/story1.jpg",
//   },
//   "wizards-spell": {
//     title: "The Wizard’s Spell",
//     content: "In the ancient halls of Eldoria, a wizard discovered...",
//     image: "/images/story2.jpg",
//   },
//   "elfs-journey": {
//     title: "The Elf’s Journey",
//     content: "Through mystical forests, the elf sought her destiny...",
//     image: "/images/story3.jpg",
//   },
// };

// function StoryPage() {
//   const { id } = useParams();
//   const story = stories[id];

//   if (!story) {
//     return (
//       <Container className="py-5">
//         <h2>Story Not Found</h2>
//         <Link to="/">Return to Home</Link>
//       </Container>
//     );
//   }

//   return (
//     <>
//       <Helmet>
//         <title>{story.title} | NewStoriesAndTales.com</title>
//         <meta name="description" content={`Read "${story.title}" on NewStoriesAndTales.com`} />
//       </Helmet>
//       <Header />
//       <Container className="py-5">
//         <img src={story.image} alt={story.title} className="img-fluid mb-4" style={{ borderRadius: "18px", maxHeight: "350px", objectFit: "cover" }} />
//         <h1 style={{ fontFamily: "'Playfair Display', serif" }}>{story.title}</h1>
//         <p style={{ fontFamily: "'Merriweather', serif", fontSize: "1.15rem", marginTop: "2rem" }}>
//           <span className="dropcap">{story.content.charAt(0)}</span>
//           {story.content.slice(1)}
//         </p>
//         <Link to="/" className="storybook-btn mt-4">← Back to Home</Link>
//       </Container>
//       <Footer />
//     </>
//   );
// }



    const stories = [
      {
        id: 1,
        title: "The Weaver's Tale",
        author: "Anya Sharma",
        date: "July 15, 2024",
        image: "https://via.placeholder.com/1500x400?text=Weaving+Scene",
        teaser: "In the quaint village of Eldoria, nestled amidst rolling hills and whispering woods, lived a young woman named Anya...",
        content: [
          "In the quaint village of Eldoria, nestled amidst rolling hills and whispering woods, lived a young woman named Anya. She was known for her extraordinary talent in weaving, not just fabrics, but stories that captivated the hearts of all who listened. Her tales were as vibrant and intricate as the tapestries she created, each thread representing a character, a moment, or a lesson learned.",
          "One day, a mysterious traveler arrived in Eldoria, seeking Anya’s help. He carried with him a tattered piece of cloth, said to hold the key to an ancient prophecy. Anya, intrigued by the challenge, accepted the task. As she began to weave, the cloth transformed, revealing scenes of a forgotten kingdom, its rise, and its fall. The villagers gathered around, mesmerized by the unfolding story, their faces reflecting the emotions of the characters within the tapestry.",
          "Through her weaving, Anya not only revealed the prophecy but also taught the villagers the importance of preserving their history and learning from the past. The traveler, grateful for her help, revealed himself to be the last descendant of the fallen kingdom, tasked with finding someone worthy of restoring its legacy. He chose Anya, recognizing her wisdom and creativity.",
          "Anya, with the support of her village, embarked on a journey to rebuild the kingdom, weaving a new chapter in its history, filled with hope and resilience."
        ],
        likes: 234,
        comments: 56,
        shares: 123
      },
      {
        id: 2,
        title: "The Starlit Quill",
        author: "Liam Thorn",
        date: "August 20, 2024",
        image: "https://via.placeholder.com/1500x400?text=Starry+Night",
        teaser: "Under the starlit sky of Vespera, a young scribe named Liam discovered a magical quill that brought his words to life...",
        content: [
          "Under the starlit sky of Vespera, a young scribe named Liam discovered a magical quill that brought his words to life. Each stroke of the quill painted vivid scenes in the air, turning his stories into reality for all to see.",
          "Liam used his newfound power to inspire the people of Vespera, weaving tales of courage and hope. But with great power came great responsibility, and soon he faced a choice that would change the fate of his village forever.",
          "Through his journey, Liam learned the true magic of storytelling—not in the quill, but in the hearts of those who believed in his words."
        ],
        likes: 189,
        comments: 42,
        shares: 97
      }
    ];

    class ErrorBoundary extends React.Component {
      state = { hasError: false };

      static getDerivedStateFromError(error) {
        return { hasError: true };
      }

      render() {
        if (this.state.hasError) {
          return (
            <div className="error-boundary">
              <h2>Something went wrong.</h2>
              <p>Please try refreshing the page.</p>
            </div>
          );
        }
        return this.props.children;
      }
    }

    const StoryCard = ({ story }) => {
      return (
        <Col md={4} className="mb-4">
          <Link to={`/stories/${story.id}`} style={{ textDecoration: 'none' }}>
            <Card className="story-card">
              <Card.Img variant="top" src={story.image} />
              <Card.Body className="story-card-body">
                <Card.Title className="story-card-title">{story.title}</Card.Title>
                <div className="story-card-meta">
                  By <span>{story.author}</span> | {story.date}
                </div>
                <Card.Text className="story-card-text">{story.teaser}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      );
    };

    const StoryPage = () => {
      const { id } = useParams();
      const story = stories.find(s => s.id === parseInt(id));

      if (!story) {
        return <Container className="text-center mt-5"><h2>Story Not Found</h2></Container>;
      }

      return (
        <div>
          <Navbar expand="lg" className="navbar">
            <Container>
              <Navbar.Brand as={Link} to="/">StoryWeave</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link as={Link} to="/">Explore</Nav.Link>
                  <Nav.Link href="#">Create</Nav.Link>
                  <Nav.Link href="#">Community</Nav.Link>
                  <Nav.Link href="#">About</Nav.Link>
                  <Nav.Link href="#">Sign In</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <div className="hero-section" style={{ backgroundImage: `url(${story.image})` }}>
            <div className="hero-overlay"></div>
            <div className="quill-flourish"></div>
            <div className="quill-flourish"></div>
            <div className="quill-flourish"></div>
            <div className="hero-text">
              <h1>{story.title}</h1>
            </div>
          </div>

          <Container className="story-container">
            <div className="bookmark-icon"></div>
            <h1 className="story-title">{story.title}</h1>
            <div className="story-meta">
              By <span>{story.author}</span> | {story.date}
            </div>
            <div className="story-content">
              {story.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="story-actions">
              <Button variant="outline-primary"><i className="bi bi-heart"></i> {story.likes}</Button>
              <Button variant="outline-primary"><i className="bi bi-chat"></i> {story.comments}</Button>
              <Button variant="outline-primary"><i className="bi bi-share"></i> {story.shares}</Button>
            </div>
          </Container>

          <footer className="footer">
            <div>
              <a href="#">About</a>
              <a href="#">Contact</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
            <div className="mt-3">
              <a href="#"><i className="bi bi-twitter"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-facebook"></i></a>
            </div>
            <p className="mt-3">©2024 StoryWeave. All rights reserved.</p>
          </footer>
        </div>
      );
    };

    // const StoryPage = () => {
    //   return (
    //     <div>
    //       <Navbar expand="lg" className="navbar">
    //         <Container>
    //           <Navbar.Brand as={Link} to="/">StoryWeave</Navbar.Brand>
    //           <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //           <Navbar.Collapse id="basic-navbar-nav">
    //             <Nav className="ms-auto">
    //               <Nav.Link as={Link} to="/">Explore</Nav.Link>
    //               <Nav.Link href="#">Create</Nav.Link>
    //               <Nav.Link href="#">Community</Nav.Link>
    //               <Nav.Link href="#">About</Nav.Link>
    //               <Nav.Link href="#">Sign In</Nav.Link>
    //             </Nav>
    //           </Navbar.Collapse>
    //         </Container>
    //       </Navbar>

    //       <Container className="mt-5">
    //         <h1 className="text-center mb-4" style={{ fontFamily: 'Playfair Display', color: '#8E24AA' }}>
    //           Explore Stories
    //         </h1>
    //         <Row>
    //           {stories.map(story => (
    //             <StoryCard key={story.id} story={story} />
    //           ))}
    //         </Row>
    //       </Container>

    //       <footer className="footer">
    //         <div>
    //           <a href="#">About</a>
    //           <a href="#">Contact</a>
    //           <a href="#">Privacy Policy</a>
    //           <a href="#">Terms of Service</a>
    //         </div>
    //         <div className="mt-3">
    //           <a href="#"><i className="bi bi-twitter"></i></a>
    //           <a href="#"><i className="bi bi-instagram"></i></a>
    //           <a href="#"><i className="bi bi-facebook"></i></a>
    //         </div>
    //         <p className="mt-3">©2024 StoryWeave. All rights reserved.</p>
    //       </footer>
    //     </div>
    //   );
    // };





export default StoryPage;
