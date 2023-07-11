import { FaQuoteLeft, FaQuoteRight, FaStar } from 'react-icons/fa';
import './TestimonialSlide.css';

const TestimonialSlide = ({ children, stars, imgSrc, name, desc }) => {
  return (
    <div className="testi-item">
      <div className="testi-comment">
        <p>
          <FaQuoteLeft className="quote-left-icon" />
          {children}
          <FaQuoteRight className="quote-right-icon" />
        </p>
        <ul className="stars list-unstyled">
          {Array(stars)
            .fill()
            .map((_, i) => (
              <li key={i}>
                <FaStar className="star-icon" />
              </li>
            ))}
        </ul>
      </div>
      <figure className="client-info">
        <img src={imgSrc} alt="client avatar"></img>
        <figcaption>
          <h5>{name}</h5>
          <p>{desc}</p>
        </figcaption>
      </figure>
    </div>
  );
};

export default TestimonialSlide;
