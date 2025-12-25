import { render, screen } from "@testing-library/react";
import ErrorMessage from "components/ErrorMessage";

describe("ErrorMessage", () => {
  test("does not render if there is no message", () => {
    const { container } = render(<ErrorMessage />);

    expect(container).toBeEmptyDOMElement();
  });

  test("does not render if message = empty string", () => {
    const { container } = render(<ErrorMessage message="" />);

    expect(container).toBeEmptyDOMElement();
  });

  test("renders error message", () => {
    render(<ErrorMessage message="This field is required" />);

    const error = screen.getByText("This field is required");

    expect(error).toBeInTheDocument();
    expect(error).toHaveClass("error");
  });

  test("has role='alert' for accessibility", () => {
    render(<ErrorMessage message="Invalid email" />);

    const alert = screen.getByRole("alert");

    expect(alert).toHaveTextContent("Invalid email");
  });
});