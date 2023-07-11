import './ScreenHeading.css';

const ScreenHeading = ({ title, subHeading }) => {
  return (
    <div className="heading-container">
      <div className="screen-heading">{title}</div>
      {subHeading && <div className="screen-sub-heading">{subHeading}</div>}
      <div className="heading-seperator">
        <div className="seperator-line"></div>
        <div className="seperator-blob">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ScreenHeading;
