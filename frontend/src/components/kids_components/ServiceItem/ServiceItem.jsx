export const ServiceItem = ({ icon, title, description }) => {
  return (
    <div className="service-item text-center d-flex flex-column align-items-center p-4 mb-4">
      <div className="service-icon mb-3">{icon}</div>
      <h5 className="service-title mb-2">{title}</h5>
      <p className="service-desc mb-0">{description}</p>
    </div>
  );
};
