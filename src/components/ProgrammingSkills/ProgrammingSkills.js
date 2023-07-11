import './ProgrammingSkills.css';

const ProgrammingSkills = ({ skill, ratingPercentage }) => (
  <div className="skills">
    <span>{skill}</span>
    <div className="percentage-bar">
      <div
        style={{ width: ratingPercentage + '%' }}
        className="activ-percentage-bar"
      ></div>
    </div>
  </div>
);

export default ProgrammingSkills;
