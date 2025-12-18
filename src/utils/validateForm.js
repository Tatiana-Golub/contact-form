export function validateForm(formData) {
  const errors = {};

  if (!formData.fname.trim()) errors.fname = "This field is required";
  if (!formData.lname.trim()) errors.lname = "This field is required";

  if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!formData.queryType) {
    errors.queryType = "Please select a query type";
  }

  if (!formData.message.trim()) {
    errors.message = "This field is required";
  }

  if (!formData.consent) {
    errors.consent = "To submit this form, please consent to being contacted";
  }

  return errors;
}