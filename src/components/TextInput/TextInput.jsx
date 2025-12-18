export default function TextInput({
  label,
  id,
  name,
  value,
  onChange,
  error,
  type = "text",
  className,
  fullWidth = false,
}) {
  return (
    <div className={`field-group ${fullWidth ? "full-width" : ""}`}>
      <label className={className} htmlFor={id}>
        {label}
      </label>

      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        aria-invalid={!!error}
      />

      {error && <p className="error">{error}</p>}
    </div>
  );
}