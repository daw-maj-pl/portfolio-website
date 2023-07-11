import wave from '../../assets/images/wave.svg';
import './WaveDecoration.css';

const WaveDecoration = () => {
  return (
    <div className="wave-container">
      <img src={wave} alt="wave decoration" />
    </div>
  );
};

export default WaveDecoration;
