import { render, screen } from "@testing-library/react";
import Textarea from "components/Textarea";
import userEvent from "@testing-library/user-event";

describe("Textarea", () => {
  test("renders textarea with label", () => {
    render(
      <Textarea
        label="Message *"
        id="message"
        name="message"
        value=""
        onChange={jest.fn()}
      />
    );

    const textarea = screen.getByLabelText(/message/i);
    expect(textarea).toBeInTheDocument();
    expect(textarea.tagName).toBe("TEXTAREA");
  });

  test("passes value to textarea", () => {
    render(
      <Textarea
        label="Message *"
        id="message"
        name="message"
        value="Hello world"
        onChange={jest.fn()}
      />
    );

    const textarea = screen.getByDisplayValue("Hello world");
    expect(textarea).toBeInTheDocument();
  });

  test("calls onChange when textarea value changes", async () => {
    const handleChange = jest.fn();

    render(
      <Textarea
        label="Message *"
        id="message"
        name="message"
        value=""
        onChange={handleChange}
      />
    );

    const textarea = screen.getByLabelText(/message/i);

    await userEvent.type(textarea, "New message");

    expect(handleChange).toHaveBeenCalled();
  });

  test("sets aria-invalid=true when error exists", () => {
    render(
      <Textarea
        label="Message *"
        id="message"
        name="message"
        value=""
        onChange={jest.fn()}
        error="This field is required"
      />
    );

    const textarea = screen.getByLabelText(/message/i);
    expect(textarea).toHaveAttribute("aria-invalid", "true");
  });

  test("sets aria-invalid=false when no error", () => {
    render(
      <Textarea
        label="Message *"
        id="message"
        name="message"
        value=""
        onChange={jest.fn()}
      />
    );

    const textarea = screen.getByLabelText(/message/i);
    expect(textarea).toHaveAttribute("aria-invalid", "false");
  });

  test("renders error message when error is provided", () => {
    render(
      <Textarea
        label="Message *"
        id="message"
        name="message"
        value=""
        onChange={jest.fn()}
        error="This field is required"
      />
    );

    expect(screen.getByText(/this field is required/i)).toBeInTheDocument();
  });

  test("does not render error message when error is not provided", () => {
    render(
      <Textarea
        label="Message *"
        id="message"
        name="message"
        value=""
        onChange={jest.fn()}
      />
    );

    expect(screen.queryByText(/this field is required/i)).not.toBeInTheDocument();
  });
});