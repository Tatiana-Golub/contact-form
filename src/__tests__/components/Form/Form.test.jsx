import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "components/Form";
import { validateForm } from "../../../utils/validateForm";

jest.mock("../../../utils/validateForm", () => ({
  validateForm: jest.fn(),
}));

describe("Form", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders all form fields", () => {
    render(<Form />);

    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  test("does not submit form if there is validation errors", async () => {
    validateForm.mockReturnValue({
      fname: "Required",
    });

    render(<Form />);
      await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(validateForm).toHaveBeenCalled();
    expect(
      screen.queryByText(/message sent/i)
    ).not.toBeInTheDocument();
  });

  test("shows SuccessMessage upon successful submission", async () => {
    validateForm.mockReturnValue({});

    render(<Form />);

    await userEvent.type(screen.getByLabelText(/first name/i), "John");
    await userEvent.type(screen.getByLabelText(/last name/i), "Doe");
    await userEvent.type(screen.getByLabelText(/email/i), "johndoe@test.com");
    await userEvent.type(screen.getByLabelText(/message/i), "Hello!");
    await userEvent.click(screen.getByRole("checkbox"));

    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(
      screen.getByText(/message sent!/i)
    ).toBeInTheDocument();
  });

  test("clears form fields upon successful submission", async () => {
    validateForm.mockReturnValue({});

    render(<Form />);
    const firstName = screen.getByLabelText(/first name/i);
    const checkbox = screen.getByRole("checkbox");

    await userEvent.type(firstName, "Anna");
    await userEvent.click(checkbox);
    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(firstName).toHaveValue("");
    expect(checkbox).not.toBeChecked();
  });
});