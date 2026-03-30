import { ContactForm } from "@/components/contact/contact-form";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

afterEach(() => {
  vi.restoreAllMocks();
});

describe("ContactForm", () => {
  it("associates labels with inputs", () => {
    render(<ContactForm />);
    expect(screen.getByLabelText("Full name")).toBeInTheDocument();
    expect(screen.getByLabelText(/phone \(optional\)/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/country \/ region/i)).toBeInTheDocument();
    expect(screen.getByLabelText("Organization")).toBeInTheDocument();
    expect(screen.getByLabelText(/designation \/ title/i)).toBeInTheDocument();
    expect(screen.getByLabelText("Message")).toBeInTheDocument();
  });

  it("shows validation on empty submit", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    await user.click(screen.getByRole("button", { name: /submit inquiry/i }));
    const alerts = await screen.findAllByRole("alert");
    expect(alerts.length).toBeGreaterThanOrEqual(1);
  });

  it("shows success after valid submit", async () => {
    const user = userEvent.setup();
    vi.spyOn(globalThis, "fetch").mockResolvedValue({ ok: true } as Response);
    render(<ContactForm />);
    await user.type(screen.getByLabelText("Full name"), "Test User");
    await user.type(screen.getByLabelText("Organization"), "High Court");
    await user.type(screen.getByLabelText(/designation \/ title/i), "Registrar");
    await user.selectOptions(screen.getByLabelText(/country \/ region/i), "US");
    await user.type(
      screen.getByLabelText("Message"),
      "This is a valid message with enough length.",
    );
    await user.click(screen.getByRole("button", { name: /submit inquiry/i }));
    expect(await screen.findByText(/thank you/i)).toBeInTheDocument();
  });
});
