import { TypeAnimation } from 'react-type-animation';
import SocialMedia from '../../components/SocialMedia/SocialMedia';
import WaveDecoration from '../../components/WaveDecoration/WaveDecoration';
import * as constants from '../../constants';
import './Home.css';

const Home = ({ scrollIntoView, linkToCV }) => {
  return (
    <section className="home-container">
      <div className="profile-container ">
        <div className="profile-parent">
          <div className="profile-details">
            <div>
              <SocialMedia />
            </div>
            <div className="profile-details-name">
              <span className="primary-text">
                Hello, I am <span className="highlighted-text">Dawid</span>
              </span>
              <span className="hand-emoji" role="img" aria-label="waving hand">
                👋
              </span>
            </div>
            <div className="profile-details-role">
              <h1>
                <TypeAnimation
                  repeat={Infinity}
                  speed={100}
                  sequence={[
                    'Enthusiastic Web Dev 🔥',
                    2500,
                    'Front-End Developer 💪',
                    2500,
                    'Full-Stack Developer 💪',
                    2500,
                    'React/Angular Dev 💪',
                    2500,
                    'MERN/MEAN Stack Dev 💪',
                    2500
                  ]}
                />
              </h1>
              <span className="primary-text">
                <span className="profile-role-tagline">
                  I build things for the web using cutting-edge technologies.
                </span>
              </span>
            </div>
            <div className="profile-options">
              <button
                className="btn primary-btn"
                onClick={() => scrollIntoView(constants.CONTACT)}
              >
                Hire Me
              </button>
              <a href={linkToCV} target="_blank" rel="noopener noreferrer">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
          <div className="profile-picture">
            <div className="profile-picture-background"></div>
          </div>
        </div>
      </div>
      <WaveDecoration />
    </section>
  );
};

export default Home;
