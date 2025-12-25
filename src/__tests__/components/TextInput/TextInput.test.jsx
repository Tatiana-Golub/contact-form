import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TextInput from "components/TextInput";

describe("TextInput", () => {
    test("renders label and input", () => {
        render(
            <TextInput
                label="First Name *"
                id="fname"
                name="fname"
                value=""
                onChange={jest.fn()}
            />
        );

        expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    });

    test("calls onChange when typing", async () => {
        const handleChange = jest.fn();

        render(
            <TextInput
                label="First Name *"
                id="fname"
                name="fname"
                value=""
                onChange={handleChange}
            />
        );

        const input = screen.getByLabelText(/first name/i);

        await userEvent.type(input, "John");

        expect(handleChange).toHaveBeenCalled();
    });


    test("sets aria-invalid=true when error exists", () => {
        render(
            <TextInput
                label="Email *"
                id="email"
                name="email"
                value=""
                onChange={jest.fn()}
                error="Invalid email"
            />
        );

        const input = screen.getByLabelText(/email/i);

        expect(input).toHaveAttribute("aria-invalid", "true");
        expect(screen.getByRole("alert")).toBeInTheDocument();
    });

    test("does not render error when error is not provided", () => {
        render(
            <TextInput
                label="Email *"
                id="email"
                name="email"
                value=""
                onChange={jest.fn()}
            />
        );

        expect(screen.queryByRole("alert")).toBeNull();
    });

    test("renders input with correct type", () => {
        render(
            <TextInput
                label="Email *"
                id="email"
                name="email"
                type="email"
                value=""
                onChange={jest.fn()}
            />
        );

        const input = screen.getByLabelText(/email/i);
        expect(input).toHaveAttribute("type", "email");
    });
});