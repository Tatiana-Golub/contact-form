import { validateForm } from "../../utils/validateForm";

describe("validateForm", () => {
  const validData = {
    fname: "John",
    lname: "Doe",
    email: "john.doe@example.com",
    queryType: "general",
    message: "Hello",
    consent: true,
  };

  test("returns empty object when form data is valid", () => {
    const errors = validateForm(validData);

    expect(errors).toEqual({});
  });

  test("returns error when first name is empty", () => {
    const errors = validateForm({
      ...validData,
      fname: "",
    });

    expect(errors.fname).toBe("This field is required");
  });

  test("returns error when last name is empty", () => {
    const errors = validateForm({
      ...validData,
      lname: "   ",
    });

    expect(errors.lname).toBe("This field is required");
  });

  test("returns error for invalid email", () => {
    const errors = validateForm({
      ...validData,
      email: "invalid-email",
    });

    expect(errors.email).toBe("Please enter a valid email address");
  });

  test("returns error when query type is not selected", () => {
    const errors = validateForm({
      ...validData,
      queryType: "",
    });

    expect(errors.queryType).toBe("Please select a query type");
  });

  test("returns error when message is empty", () => {
    const errors = validateForm({
      ...validData,
      message: " ",
    });

    expect(errors.message).toBe("This field is required");
  });

  test("returns error when consent is false", () => {
    const errors = validateForm({
      ...validData,
      consent: false,
    });

    expect(errors.consent).toBe(
      "To submit this form, please consent to being contacted"
    );
  });

  test("returns all errors when all fields are invalid", () => {
    const errors = validateForm({
      fname: "",
      lname: "",
      email: "",
      queryType: "",
      message: "",
      consent: false,
    });

    expect(errors).toEqual({
      fname: "This field is required",
      lname: "This field is required",
      email: "Please enter a valid email address",
      queryType: "Please select a query type",
      message: "This field is required",
      consent: "To submit this form, please consent to being contacted",
    });
  });
});
