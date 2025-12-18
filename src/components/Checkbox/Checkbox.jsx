export default function Checkbox({ checked, onChange, error }) {
  return (
    <div className="consent full-width">
      <label className="checkbox-label">
        <input
          type="checkbox"
          name="consent"
          checked={checked}
          onChange={onChange}
          aria-invalid={!!error}
        />
        I consent to being contacted by the team *
      </label>

      {error && <p className="error">{error}</p>}
    </div>
  );
}