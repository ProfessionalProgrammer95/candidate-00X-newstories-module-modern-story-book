import react from 'react-dom'


const Community = () => {

    const IntroImage = () => (
      <img
        src="https://ik.imagekit.io/r2vo33j4i/community3.png?updatedAt=1748876045295"
        alt="Community Introduction"
        className="nst-intro-img"
      />
    );

    const MissionSection = () => (
      <div className="nst-mission">
        <div className="container text-center">
          <h2 className="nst-mission-title">Our Mission</h2>
          <p className="nst-mission-text">
            At Modern Story and Tales, we believe in the power of stories to shape our world. Our mission is to create a space where diverse voices can be heard, where creativity flourishes, and where stories inspire positive change. We are committed to fostering an inclusive community that celebrates the richness of human experience.
          </p>
        </div>
      </div>
    );

    const ValuesSection = () => (
      <div className="nst-values">
        <div className="container">
          <h2 className="nst-section-heading">Our Values</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="nst-value-item" style={{ animationDelay: '0.2s' }}>
                <div className="nst-value-icon">🌍</div>
                <h3 className="nst-value-title">Inclusion</h3>
                <p className="nst-value-text">We embrace diversity and ensure every voice is valued and heard.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="nst-value-item" style={{ animationDelay: '0.4s' }}>
                <div className="nst-value-icon">🎨</div>
                <h3 className="nst-value-title">Creativity</h3>
                <p className="nst-value-text">We encourage innovative storytelling and artistic expression.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="nst-value-item" style={{ animationDelay: '0.6s' }}>
                <div className="nst-value-icon">✨</div>
                <h3 className="nst-value-title">Inspiration</h3>
                <p className="nst-value-text">We aim to inspire positive change through impactful narratives.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    const CommunityMember = ({ name, role, image, delay }) => (
      <div className="col-md-4 mb-5">
        <div className="nst-community-member text-center p-4" style={{ animationDelay: `${delay}s` }}>
          <img src={image} alt={name} className="nst-member-img mx-auto mb-4" />
          <div className="nst-member-body">
            <h5 className="nst-member-name">{name}</h5>
            <p className="nst-member-role">{role}</p>
          </div>
        </div>
      </div>
    );

    const CommunitySection = () => (
      <div className="container">
        <h2 className="nst-section-heading">Meet Our Community</h2>
        <div className="row">
          <CommunityMember
            name="Sarah Bennett"
            role="Passionate storyteller and community builder."
            image="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="
            delay="0.2"
          />
          <CommunityMember
            name="Ethan Carter"
            role="Aspiring writer focusing on social impact."
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYxsG3Ac8-CCLG3PzEvZXAfVoQxmjHleJqjg&s"
            delay="0.4"
          />
          <CommunityMember
            name="Olivia Davis"
            role="Experienced editor and advocate for inclusive narratives."
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJKnniVd-1DwkG7PLBc_49rBUJFHxl9mQeUx-SrWwg38HoSAMyOnSqb-dJaIrVBGilGW8&usqp=CAU"
            delay="0.6"
          />
        </div>
      </div>
    );

    const JoinSection = () => (
      <div className="nst-join">
        <div className="container">
          <h2 className="nst-join-title">Join Our Community</h2>
          <p className="nst-join-text">Become a part of Modern Story & Tales and start sharing your stories today.</p>
          <button className="nst-join-btn">Get Started</button>
        </div>
      </div>
    );



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
        <IntroImage/>
        <MissionSection/>
        <ValuesSection/>
        <CommunitySection/>
        <JoinSection/>
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
)
};
export default Community;