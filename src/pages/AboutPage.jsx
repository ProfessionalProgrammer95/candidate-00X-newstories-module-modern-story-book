 import { useEffect } from "react";
 
 const AboutPage = () => {
      useEffect(() => {
        const taleboxes = document.querySelectorAll('.storybook-talebox');
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('reveal');
            }
          });
        }, { threshold: 0.1 });
        taleboxes.forEach(box => observer.observe(box));
      }, []);

      return (
      <div>
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
        <section className="storybook-section container storybook-intropage">
          <h1>About Modern Story and Tales</h1>
          <p>
            Modern Story and Tales is a community platform dedicated to impact storytelling, fostering creativity, inclusion, and inspiration. We believe in the power of stories to connect us, drive change, and celebrate the human experience. Our platform is designed to empower storytellers and engage audiences with meaningful narratives.
          </p>
        </section>

          <section className="storybook-section container storybook-parchment px-5">
            <h2 className="mb-5 text-center">What We Offer</h2>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="storybook-talebox p-4 text-center">
                  <div className="storybook-iconquill"></div>
                  <h3>Creative Tools</h3>
                  <p className="storybook-taleintro">Access a suite of intuitive tools to craft and share your stories, from writing to multimedia production.</p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="storybook-talebox p-4 text-center">
                  <div className="storybook-iconquill"></div>
                  <h3>Community Support</h3>
                  <p className="storybook-taleintro">Connect with a diverse community of storytellers, offering feedback, collaboration, and encouragement.</p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="storybook-talebox p-4 text-center">
                  <div className="storybook-iconquill"></div>
                  <h3>Discovery</h3>
                  <p className="storybook-taleintro">Explore a curated collection of impactful stories, discover new perspectives, and find inspiration for your own work.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="storybook-section container">
            <h2 className="mb-5 text-center">Featured Stories</h2>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="storybook-talebox position-relative">
                  <img src="https://ik.imagekit.io/r2vo33j4i/climate.png?updatedAt=1748948785698" className="storybook-taleimage" alt="Climate Change Story" />
                  <div className="storybook-bookmark"></div>
                  <div className="p-3">
                    <h3>Climate Change: Voices of Resilience</h3>
                    <p>Explore stories affected by climate change, highlighting resilience & innovative solutions.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="storybook-talebox position-relative">
                  <img src="https://ik.imagekit.io/r2vo33j4i/justic.png?updatedAt=1748949308198" className="storybook-taleimage" alt="Social Justice Story" />
                  <div className="storybook-bookmark"></div>
                  <div className="p-3">
                    <h3>Social Justice: Stories of Change</h3>
                    <p>Discover narratives that amplify marginalized voices and advocate for social justice and equality.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="storybook-talebox position-relative">
                  <img src="https://ik.imagekit.io/r2vo33j4i/personal.png?updatedAt=1748949705704" className="storybook-taleimage" alt="Personal Growth Story" />
                  <div className="storybook-bookmark"></div>
                  <div className="p-3">
                    <h3>Personal Growth: Journeys of Transformation</h3>
                    <p>Read stories about  overcoming challenges, achieving personal growth & fulfillment.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="storybook-section container storybook-parchment">
            <h2 className="mb-5 text-center">Our Strengths</h2>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="storybook-talebox p-4 text-center">
                  <div className="storybook-iconquill"></div>
                  <h3>Inclusive Community</h3>
                  <p className="storybook-taleintro">We celebrate diversity and ensure all voices are heard, creating a welcoming space for storytellers from all backgrounds.</p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="storybook-talebox p-4 text-center">
                  <div className="storybook-iconquill"></div>
                  <h3>Global Reach</h3>
                  <p className="storybook-taleintro">Our platform connects storytellers and audiences worldwide, fostering cross-cultural understanding.</p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="storybook-talebox p-4 text-center">
                  <div className="storybook-iconquill"></div>
                  <h3>Impact-Driven</h3>
                  <p className="storybook-taleintro">We focus on stories that inspire action, promote positive change, and contribute to a more equitable world.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="storybook-section container storybook-parchment text-center w-100 image-fluid">
            <img src="https://ik.imagekit.io/r2vo33j4i/about%20us.png?updatedAt=1748937654439" className="storybook-illustration w-100" alt="StoryWeave Illustration" />
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
        </div>
      );
    };

    export default AboutPage;