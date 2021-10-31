import Typical from 'react-typical';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a href="https://www.facebook.com/">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="https://www.instagram.com/">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/">
              <i className="fa fa-youtube-square"></i>
            </a>
            <a href="https://twitter.com/">
              <i className="fa fa-twitter"></i>
            </a>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I am <span className="highlighted-text">Dawid</span> 👋
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    'Enthusiastic Web Dev 🔥',
                    1000,
                    'Frontend Developer 💪',
                    1000,
                    'Full Stack Developer 💪',
                    1000,
                    'React/Angular Dev 💪',
                    1000,
                    'MERN/MEAN Stack Dev 💪',
                    1000
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                I build things for the web using cutting-edge technologies.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">Hire Me</button>
            <a href="dawid-cv.pdf" download="dawid-cv.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
