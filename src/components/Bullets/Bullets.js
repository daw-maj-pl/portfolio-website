import './Bullets.css';

const Bullets = ({ list }) => {
  return list.map((item, i) => (
    <div className="tech-item" key={i}>
      <div className="tech-blob"></div>
      <span>{item}</span>
    </div>
  ));
};

export default Bullets;
