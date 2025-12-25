import { render, screen } from "@testing-library/react";
import SuccessMessage from "components/SuccessMessage";

describe("SuccessMessage", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test("renders title and message", () => {
    render(
      <SuccessMessage
        title="Message Sent!"
        message="We will contact you soon."
        onClose={jest.fn()}
      />
    );

    expect(
      screen.getByText(/message sent/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/we will contact you soon/i)
    ).toBeInTheDocument();
  });

  test("renders success icon image", () => {
    render(
      <SuccessMessage
        title="Success"
        message="Done"
        onClose={jest.fn()}
      />
    );

    const icon = screen.getByAltText(/success icon/i);
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("aria-hidden", "true");
  });

  test("has correct accessibility attributes", () => {
    render(
      <SuccessMessage
        title="Success"
        message="Done"
        onClose={jest.fn()}
      />
    );

    const toast = screen.getByRole("status");

    expect(toast).toHaveAttribute("aria-live", "polite");
  });

  test("calls onClose after default duration (4000ms)", () => {
    const onClose = jest.fn();

    render(
      <SuccessMessage
        title="Success"
        message="Done"
        onClose={onClose}
      />
    );

    expect(onClose).not.toHaveBeenCalled();

    jest.advanceTimersByTime(4000);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test("calls onClose after custom duration", () => {
    const onClose = jest.fn();

    render(
      <SuccessMessage
        title="Success"
        message="Done"
        duration={2000}
        onClose={onClose}
      />
    );

    jest.advanceTimersByTime(2000);

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});