import React from "react";

export default function ContactCard({ icon, title, text }) {
  return (
    <div className="contact-card">
      <div className="icon-box">
        <i className={icon}></i>
      </div>
      <div className="contact-text">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}
