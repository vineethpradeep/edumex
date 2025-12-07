import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import "./pageHeader.css";

export default function PageHeader({
  title,
  subtitle,
  breadcrumbs = [],
  showBack = false,
  actions = [], // array of actions: { label, icon, onClick, show }
}) {
  const navigate = useNavigate();

  return (
    <div className="page-header modern">
      <div className="header-left">
        {breadcrumbs.length > 0 && (
          <nav className="breadcrumb">
            {breadcrumbs.map((b, i) => (
              <span key={i}>
                {b.to ? <Link to={b.to}>{b.label}</Link> : b.label}
                {i < breadcrumbs.length - 1 && (
                  <span className="breadcrumb-separator">/</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <div className="header-text">
          <h1 className="header-title">{title}</h1>
          {subtitle && <p className="header-subtitle">{subtitle}</p>}
        </div>
      </div>

      <div className="header-right">
        {showBack && (
          <button className="btn-back" onClick={() => navigate(-1)}>
            <FaArrowLeft className="back-icon" /> Back
          </button>
        )}

        {actions.map(
          (action, i) =>
            action.show !== false && (
              <button
                key={i}
                className="btn-action"
                onClick={action.onClick}
                title={action.label}
              >
                {action.icon} {action.label && <span>{action.label}</span>}
              </button>
            )
        )}
      </div>
    </div>
  );
}
