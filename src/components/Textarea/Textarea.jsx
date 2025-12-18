import ErrorMessage from "../ErrorMessage";

export default function Textarea({
  label,
  id,
  name,
  value,
  onChange,
  error,
}) {
  return (
    <div className="field-group full-width">
      <label className="message-label" htmlFor={id}>
        {label}
      </label>

      <textarea
        id={id}
        name={name}
        rows="3"
        value={value}
        onChange={onChange}
        aria-invalid={!!error}
      />

      <ErrorMessage message={error} />
    </div>
  );
}