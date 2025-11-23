import LessonItem from "./LessonItem";

const CurriculumModule = ({ module, lessonsCount, lessons }) => (
  <div className="curriculum-section">
    <div className="section-header">
      <h4>{module}</h4>
      <span className="lessons-count">{lessonsCount}</span>
    </div>
    <div className="lessons">
      {lessons.map((lesson, i) => (
        <LessonItem key={i} {...lesson} />
      ))}
    </div>
  </div>
);

export default CurriculumModule;
