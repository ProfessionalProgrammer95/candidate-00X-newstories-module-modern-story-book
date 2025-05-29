// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import { Container } from "react-bootstrap";
// import { Helmet } from "react-helmet";

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

// export default StoryPage;
