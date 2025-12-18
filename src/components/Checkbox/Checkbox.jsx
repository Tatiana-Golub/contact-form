import ErrorMessage from "../ErrorMessage";

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

      <ErrorMessage message={error} />
    </div>
  );
}