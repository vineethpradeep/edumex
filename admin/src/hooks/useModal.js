import { useState } from "react";

export default function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [config, setConfig] = useState({});

  // Open modal with config
  const openModal = ({
    title,
    message,
    onConfirm,
    onCancel,
    confirmText = "OK",
    cancelText,
  }) => {
    setConfig({ title, message, onConfirm, onCancel, confirmText, cancelText });
    setIsOpen(true);
  };

  // Close modal
  const closeModal = () => setIsOpen(false);

  // Confirm handler
  const confirm = () => {
    if (config.onConfirm) config.onConfirm();
    closeModal();
  };

  // Cancel handler
  const cancel = () => {
    if (config.onCancel) config.onCancel();
    closeModal();
  };

  return {
    isOpen,
    config,
    openModal,
    closeModal,
    confirm,
    cancel,
  };
}
