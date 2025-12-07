import "./modal.css";
export default function Modal({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
  confirmText,
  cancelText,
}) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h3>{title}</h3>
        <p>{message}</p>
        <div className="modal-actions">
          {cancelText && <button onClick={onCancel}>{cancelText}</button>}
          <button onClick={onConfirm}>{confirmText || "OK"}</button>
        </div>
      </div>
    </div>
  );
}
