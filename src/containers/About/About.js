import { forwardRef, useEffect, useState } from 'react';
import Bullets from '../../components/Bullets/Bullets';
import ScreenHeading from '../../components/ScreenHeading/ScreenHeading';
import * as constants from '../../constants';
import { db, doc, getDoc } from '../../firebase';
import './About.css';

const About = forwardRef(({ scrollIntoView, linkToCV }, ref) => {
  const [description, setDescription] = useState([]);
  const [techList, setTechList] = useState([]);

  useEffect(() => {
    (async () => {
      const docRef = doc(db, 'portfolio', 'about');
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setDescription(docSnap.data().description);
        setTechList(docSnap.data().technologies);
      }
    })();
  }, []);

  return (
    <section className="about-me-container" ref={ref}>
      <div className="about-me-parent">
        <ScreenHeading title="About Me" subHeading="Why Choose Me?" />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            {description.map((desc, i) => (
              <div className="about-me-description" key={i}>
                {desc}
              </div>
            ))}
            <div className="about-me-highlights">
              <div>Technologies I've been working with:</div>
              <Bullets list={techList} />
            </div>
            <div className="about-me-options">
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
        </div>
      </div>
    </section>
  );
});

export default About;
