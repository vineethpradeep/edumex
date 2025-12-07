import { Link } from "react-router-dom";
const SidebarCard = ({ course }) => {
  if (!course) return null;

  const { price, originalPrice, features = [], info = [], tags = [] } = course;

  return (
    <>
      {/* Pricing */}
      <div className="pricing-card">
        <div className="price">
          <span className="currency">£</span>
          <span className="amount">{price}</span>
          <span className="period">/course</span>
        </div>
        {originalPrice && (
          <div className="original-price">£{originalPrice}</div>
        )}
        <div className="course-features">
          {features.map((f, i) => (
            <div key={i} className="feature">
              <i className={f.icon}></i>
              <span>{f.text}</span>
            </div>
          ))}
        </div>

        <button className="btn-enroll">
          <Link to={`/enroll`} className="btn-enroll">
            Enroll Now
          </Link>
        </button>
        <button className="btn-preview">Preview Course</button>
      </div>

      {/* Info */}
      {info.length > 0 && (
        <div className="course-info-card">
          <h4>Course Information</h4>
          {info.map((item, i) => (
            <div key={i} className="info-item">
              <span className="label">{item.label}:</span>
              <span className="value">{item.value}</span>
            </div>
          ))}
        </div>
      )}

      {/* Tags */}
      {tags.length > 0 && (
        <div className="course-tags">
          <h4>Tags</h4>
          <div className="tags-list">
            {tags.map((tag, i) => (
              <span key={i} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SidebarCard;
