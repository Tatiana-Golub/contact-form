import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RadioGroup from "components/RadioGroup";

describe("RadioGroup", () => {
  test("renders radio buttons", () => {
    render(<RadioGroup value="" onChange={jest.fn()} />);

    expect(screen.getByText(/query type/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/general enquiry/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/support request/i)).toBeInTheDocument();
  });

  test("checks correct radio based on value prop", () => {
    render(<RadioGroup value="general" onChange={jest.fn()} />);

    expect(screen.getByLabelText(/general enquiry/i)).toBeChecked();
    expect(screen.getByLabelText(/support request/i)).not.toBeChecked();
  });

  test("calls onChange when radio is clicked", async () => {
    const handleChange = jest.fn();

    render(<RadioGroup value="" onChange={handleChange} />);

    await userEvent.click(screen.getByLabelText(/support request/i));

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test("sets aria-invalid=true when error exists", () => {
  render(
    <RadioGroup
      value=""
      onChange={jest.fn()}
      error="Please select a query type"
    />
  );

  const group = screen.getByRole("radiogroup");
  expect(group).toHaveAttribute("aria-invalid", "true");
});

test("does not set aria-invalid when no error", () => {
  render(<RadioGroup value="" onChange={jest.fn()} />);

  const group = screen.getByRole("radiogroup");
  expect(group).toHaveAttribute("aria-invalid", "false");
});

  test("renders error message when error is provided", () => {
    render(
      <RadioGroup
        value=""
        onChange={jest.fn()}
        error="Please select a query type"
      />
    );

    expect(
      screen.getByText(/please select a query type/i)
    ).toBeInTheDocument();
  });

  test("does not render error message when error is not provided", () => {
    render(<RadioGroup value="" onChange={jest.fn()} />);

    expect(
      screen.queryByText(/please select/i)
    ).not.toBeInTheDocument();
  });
});