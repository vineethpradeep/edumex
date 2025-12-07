import "./card.css";

export default function Card({ title, children, footer }) {
  return (
    <div className="card">
      {title && <div className="card-header">{title}</div>}

      <div className="card-content">{children}</div>

      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
}
