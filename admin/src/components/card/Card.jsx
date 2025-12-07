import "./card.css";

export default function Card({ title, actions, children, footer }) {
  return (
    <div className="card">
      {(title || actions) && (
        <div className="card-header">
          {title && <h3 className="card-title">{title}</h3>}

          {actions && <div className="card-actions">{actions}</div>}
        </div>
      )}

      <div className="card-content">{children}</div>

      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
}
