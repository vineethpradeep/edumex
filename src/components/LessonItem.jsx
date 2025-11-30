const LessonItem = ({ title, icon, duration }) => (
  <div className="lesson-item">
    <div className="lesson-info">
      <i className={icon}></i>
      <span>{title}</span>
    </div>
    <span className="lesson-duration">{duration}</span>
  </div>
);

export default LessonItem;
