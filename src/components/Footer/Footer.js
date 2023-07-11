import { FaArrowUp } from 'react-icons/fa';
import * as constants from '../../constants';
import './Footer.css';

export default function Footer(props) {
  return (
    <footer className="footer">
      Copyright &copy; 2021-{new Date().getFullYear()} Dawid Majdzik
      <button
        className="arrow-up-btn"
        onClick={() => props.scrollIntoView(constants.TOP)}
      >
        <FaArrowUp className="arrow-up-btn-icon" />
      </button>
    </footer>
  );
}
