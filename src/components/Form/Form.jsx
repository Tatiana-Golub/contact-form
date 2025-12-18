import { useState } from 'react';
import { validateForm } from '../../utils/validateForm';
import TextInput from '../TextInput';
import RadioGroup from "../RadioGroup";
import Textarea from "../Textarea";
import Checkbox from "../Checkbox";
import SuccessMessage from "../SuccessMessage";
import './Form.css';

const initialState = {
  fname: "",
  lname: "",
  email: "",
  queryType: "",
  message: "",
  consent: false,
};

export default function Form() {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitted(false);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
    setFormData(initialState);
  };

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <fieldset className="form__frame">
        <legend>
          <span>Contact Us</span>
        </legend>

        <div className="form__grid">
          <TextInput
            label="First Name *"
            id="fname"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
            error={errors.fname}
            className="fname-label"
          />

          <TextInput
            label="Last Name *"
            id="lname"
            name="lname"
            value={formData.lname}
            onChange={handleChange}
            error={errors.lname}
            className="lname-label"
          />

          <TextInput
            label="Email Address *"
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            className="email-label"
            fullWidth
          />

          <RadioGroup
            value={formData.queryType}
            onChange={handleChange}
            error={errors.queryType}
          />

          <Textarea
            label="Message *"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
          />

          <Checkbox
            checked={formData.consent}
            onChange={handleChange}
            error={errors.consent}
          />

          <div className="submit full-width">
            <button type="submit">Submit</button>
          </div>

          {isSubmitted && <SuccessMessage />}
        </div>
      </fieldset>
    </form>
  );
}