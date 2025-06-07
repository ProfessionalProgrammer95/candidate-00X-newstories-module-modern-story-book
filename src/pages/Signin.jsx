import { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';


const Signin = () => {
     const [activeTab, setActiveTab] = useState('signin');
      const [signinData, setSigninData] = useState({ email: '', password: '' });
      const [signupData, setSignupData] = useState({ username: '', email: '', password: '', confirmPassword: '' });
      const [isVisible, setIsVisible] = useState(false);
      const navigate = useNavigate();
      

      useEffect(() => {
        console.log('Component mounted');
        setTimeout(() => {
          setIsVisible(true);
          console.log('Container set to visible');
        }, 100);
      }, []);

      const handleSigninChange = (e) => {
        setSigninData({ ...signinData, [e.target.name]: e.target.value });
      };

      const handleSignupChange = (e) => {
        setSignupData({ ...signupData, [e.target.name]: e.target.value });
      };

      const handleSigninSubmit = (e) => {
        e.preventDefault();
        console.log('Sign-In submitted:', signinData);
        alert('Sign-In successful!');
        setSigninData({ email: '', password: '' });
        navigate('/home'); 
      };

      const handleSignupSubmit = (e) => {
        e.preventDefault();
        if (signupData.password !== signupData.confirmPassword) {
          alert('Passwords do not match!');
          return;
        }
        console.log('Sign-Up submitted:', signupData);
        alert('Sign-Up successful!');
        setSignupData({ username: '', email: '', password: '', confirmPassword: '' });
        setActiveTab('signin');
      };

      const tabWidth = 150;
      const tabUnderlineStyle = {
        left: activeTab === 'signin' ? 'calc(50% - 150px)' : 'calc(50%)',
        width: `${tabWidth}px`
      };
       

      useEffect(() => {
        console.log('Header component mounted');
        setTimeout(() => {
          setIsVisible(true);
          console.log('Header set to visible');
        }, 100);
      }, []);
    return (
        <>
        {/* <div className="nst-starfield">
            <div className="nst-star"></div>
            <div className="nst-star"></div>
            <div className="nst-star"></div>
            <div className="nst-star"></div>
        </div>
         <div className="nst-main-container">
          <header className={`nst-header ${isVisible ? 'visible' : ''}`}>
            <h1 className="nst-header-title">
              <span className="nst-header-glyph">✍</span>Modern Story and Tales
              <span className="nst-header-ink-drip"></span>
              <span className="nst-header-ornament"></span>
            </h1>
          </header>
        </div>
         */}
        <div className='signin-from-users'>
            
        <div className={`nst-auth-container ${isVisible ? 'visible' : ''}`}>
          <span className="nst-auth-star top-left">✦</span>
          <span className="nst-auth-star bottom-right">✦</span>
          <h1 className="nst-auth-heading">
            <span className="nst-auth-dropcap">{activeTab === 'signin' ? 'S' : 'J'}</span>
            {activeTab === 'signin' ? 'ign In' : 'oin the Story'}
            <span className="nst-auth-quill">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.5 2.5l-10 10-2.5-2.5L2 13l5 5 12.5-12.5z" />
              </svg>
            </span>
          </h1>
          <div className="nst-auth-tabs">
            <button
              className={`nst-tab-button ${activeTab === 'signin' ? 'active' : ''}`}
              onClick={() => setActiveTab('signin')}
            >
              Sign In
            </button>
            <button
              className={`nst-tab-button ${activeTab === 'signup' ? 'active' : ''}`}
              onClick={() => setActiveTab('signup')}
            >
              Sign Up
            </button>
            <div className="nst-tab-underline" style={tabUnderlineStyle}></div>
          </div>
          <div style={{ position: 'relative', minHeight: '300px' }}>
            <form
              onSubmit={handleSigninSubmit}
              className={`nst-auth-form ${activeTab !== 'signin' ? 'hidden' : ''}`}
            >
              <div className="nst-auth-form-section">
                <label htmlFor="signin-email" className="nst-auth-label">Email</label>
                <input
                  type="email"
                  id="signin-email"
                  name="email"
                  value={signinData.email}
                  onChange={handleSigninChange}
                  placeholder="Enter your email"
                  className="nst-auth-input"
                  required
                />
              </div>
              <div className="nst-auth-form-section">
                <label htmlFor="signin-password" className="nst-auth-label">Password</label>
                <input
                  type="password"
                  id="signin-password"
                  name="password"
                  value={signinData.password}
                  onChange={handleSigninChange}
                  placeholder="Enter your password"
                  className="nst-auth-input"
                  required
                />
              </div>
              <button type="submit" className="nst-auth-submit">
                <span className="nst-auth-submit-text">Sign In</span>
                <span className="nst-auth-submit-bg"></span>
                <span className="nst-auth-bookmark"></span>
              </button>
            </form>
            <form
              onSubmit={handleSignupSubmit}
              className={`nst-auth-form ${activeTab !== 'signup' ? 'hidden' : ''}`}
            >
              <div className="nst-auth-form-section">
                <label htmlFor="signup-username" className="nst-auth-label">Username</label>
                <input
                  type="text"
                  id="signup-username"
                  name="username"
                  value={signupData.username}
                  onChange={handleSignupChange}
                  placeholder="Choose a username"
                  className="nst-auth-input"
                  required
                />
              </div>
              <div className="nst-auth-form-section">
                <label htmlFor="signup-email" className="nst-auth-label">Email</label>
                <input
                  type="email"
                  id="signup-email"
                  name="email"
                  value={signupData.email}
                  onChange={handleSignupChange}
                  placeholder="Enter your email"
                  className="nst-auth-input"
                  required
                />
              </div>
              <div className="nst-auth-form-section">
                <label htmlFor="signup-password" className="nst-auth-label">Password</label>
                <input
                  type="password"
                  id="signup-password"
                  name="password"
                  value={signupData.password}
                  onChange={handleSignupChange}
                  placeholder="Create a password"
                  className="nst-auth-input"
                  required
                />
              </div>
              <div className="nst-auth-form-section">
                <label htmlFor="signup-confirm-password" className="nst-auth-label">Confirm Password</label>
                <input
                  type="password"
                  id="signup-confirm-password"
                  name="confirmPassword"
                  value={signupData.confirmPassword}
                  onChange={handleSignupChange}
                  placeholder="Confirm your password"
                  className="nst-auth-input"
                  required
                />
              </div>
              <button type="submit" className="nst-auth-submit">
                <span className="nst-auth-submit-text">Sign Up</span>
                <span className="nst-auth-submit-bg"></span>
                <span className="nst-auth-bookmark"></span>
              </button>
            </form>
          </div>
        </div>
        </div>
        </>
    );
};
export default Signin;