export default function RadioGroup({ value, onChange, error }) {
  return (
    <div className="field-group full-width">
      <label className="radio-label">Query Type *</label>

      <div className="radio-group" aria-invalid={!!error}>
        <label className={`radio-box ${value === "general" ? "active" : ""}`}>
          <input
            type="radio"
            name="queryType"
            value="general"
            checked={value === "general"}
            onChange={onChange}
          />
          General Enquiry
        </label>

        <label className={`radio-box ${value === "support" ? "active" : ""}`}>
          <input
            type="radio"
            name="queryType"
            value="support"
            checked={value === "support"}
            onChange={onChange}
          />
          Support Request
        </label>
      </div>

      {error && <p className="error">{error}</p>}
    </div>
  );
}