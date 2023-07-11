import './ResumeSegment.css';

const ResumeSegment = ({
  label,
  logoSrc,
  id,
  selectedSegmentId,
  setSelectedSegmentId
}) => {
  return (
    <div
      onClick={() => setSelectedSegmentId(id)}
      className={id === selectedSegmentId ? 'bullet selected-bullet' : 'bullet'}
    >
      <img className="bullet-logo" src={logoSrc} alt={label} />
      <span className="bullet-label">{label}</span>
    </div>
  );
};

export default ResumeSegment;
