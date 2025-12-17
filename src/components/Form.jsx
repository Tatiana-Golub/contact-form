import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    queryType: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fname.trim()) newErrors.fname = "This field is required";
    if (!formData.lname.trim()) newErrors.lname = "This field is required";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Please enter a valid email address";
    if (!formData.queryType)
      newErrors.queryType = "Please select a query type";
    if (!formData.message.trim())
      newErrors.message = "This field is required";
    if (!formData.consent)
      newErrors.consent = "To submit this form, please consent to being contacted";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitted(false);
    } else {
      setErrors({});
      setIsSubmitted(true);
      setFormData({
        fname: "",
        lname: "",
        email: "",
        queryType: "",
        message: "",
        consent: false,
      });
    }
  };

  return (
    <div className="formpage">
      <form className="form" onSubmit={handleSubmit} noValidate>
        <fieldset className="form__frame">
          <legend><span>Contact Us</span></legend>
          <div className="form__grid">
            {/* First & Last Name */}
            <div className="field-group">
              <label className='fname-label' htmlFor="fname">First Name *</label>
              <input
                type="text"
                id="fname"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
                aria-invalid={!!errors.fname}
              />
              {errors.fname && <p className="error">{errors.fname}</p>}
            </div>

            <div className="field-group">
              <label className='lname-label' htmlFor="lname">Last Name *</label>
              <input
                type="text"
                id="lname"
                name="lname"
                value={formData.lname}
                onChange={handleChange}
                aria-invalid={!!errors.lname}
              />
              {errors.lname && <p className="error">{errors.lname}</p>}
            </div>

            {/* Email */}
            <div className="field-group full-width">
              <label className='email-label' htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                aria-invalid={!!errors.email}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>

            {/* Query Type */}
            <div className="field-group full-width">
              <label className='radio-label'>Query Type *</label>
              <div className="radio-group">
                <label
                  className={`radio-box ${
                    formData.queryType === "general" ? "active" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="queryType"
                    value="general"
                    checked={formData.queryType === "general"}
                    onChange={handleChange}
                  />
                  General Enquiry
                </label>

                <label
                  className={`radio-box ${
                    formData.queryType === "support" ? "active" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="queryType"
                    value="support"
                    checked={formData.queryType === "support"}
                    onChange={handleChange}
                  />
                  Support Request
                </label>
              </div>
              {errors.queryType && <p className="error">{errors.queryType}</p>}
            </div>

            {/* Message */}
            <div className="field-group full-width">
              <label className='message-label' htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                aria-invalid={!!errors.message}
              />
              {errors.message && <p className="error">{errors.message}</p>}
            </div>

            {/* Consent */}
            <div className="consent full-width">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                />
                I consent to being contacted by the team *
              </label>
              {errors.consent && <p className="error">{errors.consent}</p>}
            </div>

            {/* Submit */}
            <div className="submit full-width">
              <button type="submit">Submit</button>
            </div>

            {isSubmitted && (
              <div className="success full-width">
                <p>✅ Message Sent! We’ll be in touch soon.</p>
              </div>
            )}
          </div>
        </fieldset>
      </form>
    </div>
  );
}