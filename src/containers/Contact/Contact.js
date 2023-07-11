import { forwardRef } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import atSign from '../../assets/images/email.jpg';
import ScreenHeading from '../../components/ScreenHeading/ScreenHeading';
import SocialMedia from '../../components/SocialMedia/SocialMedia';
import './Contact.css';
import { TypeAnimation } from 'react-type-animation';

const Contact = forwardRef((props, ref) => {
  return (
    <section className="contact-container" ref={ref}>
      <ScreenHeading subHeading="Lets Keep In Touch" title="Contact Me" />
      <div className="central-form">
        <h2>
          <TypeAnimation sequence={['Send Your Email Here! 📧', 2500]} />
        </h2>
        <div className="back-form">
          <div className="img-form">
            <img src={atSign} alt="at-sign" />
          </div>
          <form
            action="https://formsubmit.co/eadc7a400b13b1653e09b6f40c21a87e"
            method="POST"
          >
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" required />

            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" type="text" name="message" required />

            <button type="submit">
              Send <FaPaperPlane />
            </button>
          </form>
        </div>
        <div className="social-media">
          <SocialMedia />
        </div>
      </div>
    </section>
  );
});

export default Contact;
