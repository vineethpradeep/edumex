import { FaTimes, FaCheck } from "react-icons/fa";
import "./modal.css";

export default function Modal({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
  confirmText,
  cancelText,
  confirmIcon,
  cancelIcon,
  confirmType = "confirm",
}) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h3>{title}</h3>
        <p>{message}</p>
        <div className="modal-actions">
          {cancelText && (
            <button className="cancel" onClick={onCancel}>
              {cancelIcon || <FaTimes />}
              {cancelText}
            </button>
          )}
          <button className={confirmType} onClick={onConfirm}>
            {confirmIcon || <FaCheck />}
            {confirmText || "OK"}
          </button>
        </div>
      </div>
    </div>
  );
}
