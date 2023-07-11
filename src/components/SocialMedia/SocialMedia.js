import { IconContext } from 'react-icons';
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { SiCodecademy, SiCodewars } from 'react-icons/si';
import './SocialMedia.css';

const SocialMedia = () => {
  return (
    <IconContext.Provider value={{ className: 'social-media-icons' }}>
      <a
        className='social-media-link'
        href="https://www.facebook.com/dawid.majdzik/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaFacebookSquare />
      </a>
      <a
        className='social-media-link'
        href="https://github.com/daw-maj-pl"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaGithubSquare />
      </a>
      <a
        className='social-media-link'
        href="https://www.linkedin.com/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaLinkedin />
      </a>
      <a
        className='social-media-link'
        href="https://www.codewars.com/users/daw-maj-pl"
        rel="noopener noreferrer"
        target="_blank"
      >
        <SiCodewars />
      </a>
      <a
        className='social-media-link'
        href="https://www.codecademy.com/profiles/dawidMajdzik8780145331"
        rel="noopener noreferrer"
        target="_blank"
      >
        <SiCodecademy />
      </a>
    </IconContext.Provider>
  );
};

export default SocialMedia;
