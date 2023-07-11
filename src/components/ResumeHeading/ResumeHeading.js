import './ResumeHeading.css';

const ResumeHeading = props => {
  return (
    <div className="resume-heading">
      <div className="resume-main-heading">
        <div className="heading-bullet"></div>
        {props.link ? (
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            {props.heading}
          </a>
        ) : (
          <span>{props.heading} </span>
        )}
        {props.fromDate && props.toDate ? (
          <div className="heading-date">
            {props.fromDate + '-' + props.toDate}
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="resume-sub-heading">
        <span>{props.subHeading ? props.subHeading : ''}</span>
      </div>
      <div className="resume-heading-description">
        <span>{props.description ? props.description : ''}</span>
      </div>
    </div>
  );
};

export default ResumeHeading;
