import { forwardRef, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import * as constants from '../../constants';
import './Header.css';

const Header = forwardRef(({ scrollIntoView }, ref) => {
  const [showMobileNavigation, setShowMobileNavigation] = useState(false);

  return (
    <header ref={ref} className="header">
      <div
        className="menu-toggle"
        onClick={() => setShowMobileNavigation(prev => !prev)}
      >
        <FaBars />
      </div>

      <nav onClick={() => setShowMobileNavigation(prev => !prev)}>
        <ul
          className={[
            'navigation',
            showMobileNavigation ? 'mobile-navigation' : null
          ].join(' ')}
        >
          <li
            onClick={() => {
              scrollIntoView(constants.TOP);
            }}
          >
            Home
          </li>
          <li
            onClick={() => {
              scrollIntoView(constants.ABOUT);
            }}
          >
            About
          </li>
          <li
            onClick={() => {
              scrollIntoView(constants.RESUME);
            }}
          >
            Resume
          </li>
          <li
            onClick={() => {
              scrollIntoView(constants.TESTIMONIAL);
            }}
          >
            Testimonial
          </li>
          <li
            onClick={() => {
              scrollIntoView(constants.CONTACT);
            }}
          >
            Contact
          </li>
        </ul>
      </nav>
    </header>
  );
});

export default Header;
