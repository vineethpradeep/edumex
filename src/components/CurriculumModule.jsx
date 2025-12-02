import { useState } from "react";

const CurriculumModule = ({ module, lessons = [], lessonsCount }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="curriculum-module mb-4 border rounded shadow-sm bg-white">
      {/* Module Header */}
      <div
        className="curriculum-header d-flex justify-content-between align-items-center px-3 py-3 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          backgroundColor: "#f7f9fa",
          borderBottom: "1px solid #e9ecef",
        }}
      >
        <h5 className="mb-0 fw-semibold">{module}</h5>
        <span className="text-muted small">{lessonsCount} lessons</span>
      </div>

      {/* Lessons List */}
      {isOpen && (
        <ul className="curriculum-lessons list-unstyled m-0">
          {lessons.map((lesson, idx) => (
            <li
              key={idx}
              className="d-flex align-items-center px-3 py-2 lesson-item"
              style={{
                borderBottom:
                  idx !== lessons.length - 1 ? "1px solid #f1f3f5" : "none",
              }}
            >
              <i className="bi bi-play-circle me-2 text-primary"></i>
              <span className="flex-grow-1">{lesson.title}</span>
              {lesson.credits && (
                <small className="text-muted">{lesson.credits} credits</small>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CurriculumModule;
