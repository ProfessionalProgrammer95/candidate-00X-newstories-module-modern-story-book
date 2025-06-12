import {useState} from 'react';
import {Card, Col, Container} from 'react-bootstrap';
import {Link, useParams} from 'react-router-dom';


    // Sample story data
    export const storiesData = [
      {
        id: "the-whispering-woods",
        title: "The Whispering Woods",
        description: "A tale of mystery in an enchanted forest.",
        genre: "Fantasy",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwVZBpL4IUwvyowJTwHdaTLNSkvDUGL6tCAQ&s",
        views: "1.2K",
        bookmarks: "300",
        hearts: "450",
        content: "Deep within the Whispering Woods, where the trees spoke in hushed tones, a young adventurer named Elara stumbled upon a secret that would change her life forever. The forest, alive with magic, revealed its ancient guardians—spirits of the old world who had been forgotten by time. As Elara ventured deeper, the whispers grew louder, guiding her to a hidden grove where a crystal pool shimmered under the moonlight. There, she discovered a truth about her lineage: she was the last descendant of the forest's protectors, destined to restore its fading magic. But with great power came great danger, as dark forces sought to claim the forest's magic for themselves. Elara's journey had just begun, and the woods would test her courage, wisdom, and heart.",
        author: "Lila Evergreen",
        date: "May 15, 2025"
      },
      {
        id: 2,
        title: "Echoes of the Past",
        description: "A journey through time to uncover hidden truths.",
        genre: "Historical Fiction",
        image: "https://ik.imagekit.io/storybird/images/29f3f20c-6b4a-4cd0-992f-1f80f44cc24a/0_654752463.webp?tr=q-80",
        views: "2.5K",
        bookmarks: "500",
        hearts: "600",
        content: "In the quaint village of Eldwood, historian Clara unearthed an old journal buried beneath the ruins of a forgotten manor. The journal belonged to a woman named Beatrice, who lived during the 18th century, and its pages told a story of forbidden love, betrayal, and a secret that could rewrite history. As Clara delved deeper into Beatrice's life, she found herself inexplicably drawn into the past, experiencing vivid dreams where she walked in Beatrice's shoes. With each dream, Clara uncovered more about a conspiracy that threatened the village's very existence. Torn between the past and present, Clara had to decide whether to reveal the truth and risk altering the future, or let the echoes of the past remain silent forever.",
        author: "James Harrow",
        date: "April 22, 2025"
      },
      {
        id: "starlit-dreams",
        title: "Starlit Dreams",
        description: "A romantic adventure under the night sky.",
        genre: "Romance",
        image: "https://images.blogmickey.com/spai/q_lossy+w_977+to_auto+ret_img/media.blogmickey.com/wp-content/uploads/2024/08/20002738/disney-starlight-nighttime-parade-concept-art-1-2048x1152.jpg",
        views: "1.8K",
        bookmarks: "400",
        hearts: "520",
        content: "Under the vast canopy of a starlit sky, Mia and Leo found solace in each other's company. They had met by chance during a meteor shower, their paths crossing on a hilltop far from the city lights. What began as a shared moment of wonder soon blossomed into a deep connection, as they embarked on a journey to chase the stars. From stargazing in remote meadows to dancing under the northern lights, their love grew with each adventure. But when life's challenges threatened to pull them apart, Mia and Leo had to decide if their love was strong enough to withstand the distance—or if their starlit dreams would remain just that, dreams. A tale of love, longing, and the magic of the night sky.",
        author: "Sophie Moon",
        date: "March 10, 2025"
      },
      {
        id: "modern-english-literature",
        title: "Modern English Literature",
        description: "A young modern literature embarks on a perilous journey...",
        genre: "Historical",
        image: "https://m.media-amazon.com/images/I/71SSJ-hYDtL._AC_UF1000,1000_QL80_.jpg",
        views: "1.8K",
        bookmarks: "400",
        hearts: "520",
        content: "Under the vast canopy of a starlit sky, Mia and Leo found solace in each other's company. They had met by chance during a meteor shower, their paths crossing on a hilltop far from the city lights. What began as a shared moment of wonder soon blossomed into a deep connection, as they embarked on a journey to chase the stars. From stargazing in remote meadows to dancing under the northern lights, their love grew with each adventure. But when life's challenges threatened to pull them apart, Mia and Leo had to decide if their love was strong enough to withstand the distance—or if their starlit dreams would remain just that, dreams. A tale of love, longing, and the magic of the night sky.",
        author: "Sophie Moon",
        date: "March 10, 2025"
      },
      {
        id: "5",
        title: "The-Adventurers-Guild",
        description: "An Adventurers discovers a powerful Guild...",
        genre: "Historical",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRo5aYnKmmtr7bNk_Ez1wbE0Zj62gvv7h7dw&s",
        views: "1.8K",
        bookmarks: "400",
        hearts: "520",
        content: "Under the vast canopy of a starlit sky, Mia and Leo found solace in each other's company. They had met by chance during a meteor shower, their paths crossing on a hilltop far from the city lights. What began as a shared moment of wonder soon blossomed into a deep connection, as they embarked on a journey to chase the stars. From stargazing in remote meadows to dancing under the northern lights, their love grew with each adventure. But when life's challenges threatened to pull them apart, Mia and Leo had to decide if their love was strong enough to withstand the distance—or if their starlit dreams would remain just that, dreams. A tale of love, longing, and the magic of the night sky.",
        author: "Sophie Moon",
        date: "March 10, 2025"
      },
      {
        id: "6",
        title: "The First Spell Book",
        description: "An elf seeks to restore balance to the forest...",
        genre: "Adventurers",
        image: "https://m.media-amazon.com/images/I/61P4sHlKtDL._AC_UF1000,1000_QL80_.jpg",
        views: "1.8K",
        bookmarks: "400",
        hearts: "520",
        content: "Under the vast canopy of a starlit sky, Mia and Leo found solace in each other's company. They had met by chance during a meteor shower, their paths crossing on a hilltop far from the city lights. What began as a shared moment of wonder soon blossomed into a deep connection, as they embarked on a journey to chase the stars. From stargazing in remote meadows to dancing under the northern lights, their love grew with each adventure. But when life's challenges threatened to pull them apart, Mia and Leo had to decide if their love was strong enough to withstand the distance—or if their starlit dreams would remain just that, dreams. A tale of love, longing, and the magic of the night sky.",
        author: "Sophie Moon",
        date: "March 10, 2025"
      },
      {
        id: 'echoes-of-the-past',
        title: 'Echoes of the Past',
        description: 'A historical fiction piece exploring forgotten memories.',
         genre: "Historical",
        image: 'https://images-cdn.fantasyflightgames.com/filer_public/91/77/9177c4a5-6402-467b-abe7-a03f6fcd3828/ahc12_preview1.png',
        views: 123,
        bookmarks: 45,
        hearts: 67,
         content: "Under the vast canopy of a starlit sky, Mia and Leo found solace in each other's company. They had met by chance during a meteor shower, their paths crossing on a hilltop far from the city lights. What began as a shared moment of wonder soon blossomed into a deep connection, as they embarked on a journey to chase the stars. From stargazing in remote meadows to dancing under the northern lights, their love grew with each adventure. But when life's challenges threatened to pull them apart, Mia and Leo had to decide if their love was strong enough to withstand the distance—or if their starlit dreams would remain just that, dreams. A tale of love, longing, and the magic of the night sky.",
        author: "Sophie Moon",
        date: "March 10, 2025"
      },
      {
        id: 'the-Weaver’s-tale',
        title: 'The Weaver’s Tale',
        description: 'A tale of creativity and history in Eldoria.',
         genre: "Historical",
        image: 'https://www.ohmytales.com/static/images/histoires/47/the-weavers-wishes-tales-from-japan-641.jpg',
 
        views: 123,
        bookmarks: 45,
        hearts: 67,
         content: "Under the vast canopy of a starlit sky, Mia and Leo found solace in each other's company. They had met by chance during a meteor shower, their paths crossing on a hilltop far from the city lights. What began as a shared moment of wonder soon blossomed into a deep connection, as they embarked on a journey to chase the stars. From stargazing in remote meadows to dancing under the northern lights, their love grew with each adventure. But when life's challenges threatened to pull them apart, Mia and Leo had to decide if their love was strong enough to withstand the distance—or if their starlit dreams would remain just that, dreams. A tale of love, longing, and the magic of the night sky.",
        author: "Sophie Moon",
        date: "March 10, 2025"
      },
    {
        id: 'the-secret-garden-of-dreams',
        title: 'The Secret Garden of Dreams',
        description: 'A magical realism story.',
         genre: "Potery",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl598HFlvK9eztUWxhdVHUvmrw7ojutz6StBnLNOKtjZel4lGiGrTm9vhOZxRVUlcqsNA&usqp=CAU',
 
        views: 345,
        bookmarks: 78,
        hearts: 101,
         content: "Under the vast canopy of a starlit sky, Mia and Leo found solace in each other's company. They had met by chance during a meteor shower, their paths crossing on a hilltop far from the city lights. What began as a shared moment of wonder soon blossomed into a deep connection, as they embarked on a journey to chase the stars. From stargazing in remote meadows to dancing under the northern lights, their love grew with each adventure. But when life's challenges threatened to pull them apart, Mia and Leo had to decide if their love was strong enough to withstand the distance—or if their starlit dreams would remain just that, dreams. A tale of love, longing, and the magic of the night sky.",
        author: "Sophie Moon",
        date: "March 10, 2025"
      },
      {
       id: 'the-last-lightkeeper',
        title: 'The Last Lightkeeper',
        description: 'A poignant story about solitude and resilience',
         genre: "Poigant",
        image: 'https://images.hive.blog/0x0/https://files.peakd.com/file/peakd-hive/digitaladdiction/23tRzfVEmeFhdg7k2LP8eE9zkxhNdnHTZ1ziJH42eDR1RxepsBxNHjtiy1dHKeZLqhXV1.png',
 
        views: 456,
        bookmarks: 90,
        hearts: 123,
         content: "Under the vast canopy of a starlit sky, Mia and Leo found solace in each other's company. They had met by chance during a meteor shower, their paths crossing on a hilltop far from the city lights. What began as a shared moment of wonder soon blossomed into a deep connection, as they embarked on a journey to chase the stars. From stargazing in remote meadows to dancing under the northern lights, their love grew with each adventure. But when life's challenges threatened to pull them apart, Mia and Leo had to decide if their love was strong enough to withstand the distance—or if their starlit dreams would remain just that, dreams. A tale of love, longing, and the magic of the night sky.",
        author: "Sophie Moon",
        date: "March 10, 2025"
      },
    ];


    export const Navbar = () => (
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
          <li className="nav-item"><a className="nav-link btn btn-signin ms-2" href="/signin">Logout</a></li>
        </ul>
      </div>
    </div>
  </nav>
);

    // Story Card Component
    export const StoryCard = ({ title, description, image, views, bookmarks, hearts, genre, id }) => {
      const [isBookmarked, setIsBookmarked] = useState(false);

      return (
        <Col md={4} sm={6} xs={10} className='mx-auto py-2'>
          <Link to={`/stories/${id}`} style={{ textDecoration: 'none' }}>
            <Card className="story-card">
              <Card.Img variant="top" src={image} />
              <Card.Body className="story-card-body">
                <Card.Title className="story-card-title">{title}</Card.Title>
                <Card.Text className="story-card-text">{description}</Card.Text>
                <span className="genre-tag">{genre}</span>
              </Card.Body>
              <div className="story-card-footer">
                <div className="story-stats">
                  <i className="bi bi-eye"></i> {views}
                  <i className="bi bi-heart-fill ms-2"></i> {hearts}
                </div>
                <i
                  className={`bi ${isBookmarked ? 'bi-bookmark-fill' : 'bi-bookmark'} bookmark-icon`}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsBookmarked(!isBookmarked);
                  }}
                ></i>
              </div>
            </Card>
          </Link>
        </Col>
      );
    };
      

    // Story Content Page Component
    const StoryContentPage = () => {
      const { id } = useParams();
  const story = storiesData.find((s) => String(s.id) === String(id));

      if (!story) {
        return <Container><h2 className="section-title">Story Not Found</h2></Container>;
      }

      return (

         <div>
          {/* Navigation */}
         <Navbar/>
        <Container className="story-content px-5 Sdcontainer">
          <h1>{story.title}</h1>
          <div className="story-meta">
            <span>By {story.author}</span>
            <span>{story.date}</span>
          </div>
          <p>{story.content}</p>
          <div className='unique-icons'>
            <span><i class="bi bi-eye me-2"></i>{story.views}</span>
            <span><i class="bi bi-heart-fill ms-3 me-2"></i>{story.hearts}</span>
            <span><i class="bi bi-bookmark bookmark-icon ms-2 me-2"></i>{story.bookmarks}</span>
          </div>
        </Container>
         <footer className="footer ">
        <div className="container">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <p className="mt-3">©2025 ModernStories&Tales All rights reserved.</p>
        </div>
      </footer>
        </div>
      );
    };

export default StoryContentPage;
