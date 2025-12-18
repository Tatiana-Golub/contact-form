import { useEffect } from "react";
import checkIcon from "../../assets/images/icon-success-check.svg";

export default function SuccessMessage({ title, message, onClose, duration = 4000 }) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className="toast" role="status" aria-live="polite">
      <div className="toast__row">
        <img
          src={checkIcon}
          className="toast__icon"
          alt="success icon"
          aria-hidden="true"
        />
        <p className="toast__title">{title}</p>
      </div>

      <p className="toast__message">{message}</p>
    </div>
  );
}