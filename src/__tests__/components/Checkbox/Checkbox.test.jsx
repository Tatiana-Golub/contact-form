import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Checkbox from "components/Checkbox";

describe("Checkbox", () => {
  test("renders checkbox input", () => {
    render(<Checkbox checked={false} onChange={jest.fn()} />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
  });

  test("checkbox reflects checked=true", () => {
    render(<Checkbox checked={true} onChange={jest.fn()} />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeChecked();
  });

  test("calls onChange when clicked", async () => {
    const handleChange = jest.fn();

    render(<Checkbox checked={false} onChange={handleChange} />);

    const checkbox = screen.getByRole("checkbox");
    await userEvent.click(checkbox);

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test("sets aria-invalid when error exists", () => {
    render(
      <Checkbox
        checked={false}
        onChange={jest.fn()}
        error="To submit this form, please consent to being contacted"
      />
    );

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toHaveAttribute("aria-invalid", "true");
  });

  test("does not set aria-invalid when no error", () => {
    render(<Checkbox checked={false} onChange={jest.fn()} />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toHaveAttribute("aria-invalid", "false");
  });

  test("renders error message when error is provided", () => {
    render(
      <Checkbox
        checked={false}
        onChange={jest.fn()}
        error="To submit this form, please consent to being contacted"
      />
    );

    expect(
      screen.getByText(/please consent to being contacted/i)
    ).toBeInTheDocument();
  });
});