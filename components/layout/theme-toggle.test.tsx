import { ThemeToggle } from "@/components/layout/theme-toggle";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

const mockSetTheme = vi.fn();
const mockUseTheme = vi.fn();

vi.mock("next-themes", () => ({
  useTheme: () => mockUseTheme(),
}));

describe("ThemeToggle", () => {
  it("toggles from light to dark", async () => {
    const user = userEvent.setup();
    mockUseTheme.mockReturnValue({
      resolvedTheme: "light",
      theme: "light",
      setTheme: mockSetTheme,
    });

    render(<ThemeToggle />);
    await user.click(
      await screen.findByRole("button", { name: /switch to dark mode/i }),
    );

    expect(mockSetTheme).toHaveBeenCalledWith("dark");
  });

  it("toggles from dark to light", async () => {
    const user = userEvent.setup();
    mockUseTheme.mockReturnValue({
      resolvedTheme: "dark",
      theme: "dark",
      setTheme: mockSetTheme,
    });

    render(<ThemeToggle />);
    await user.click(
      await screen.findByRole("button", { name: /switch to light mode/i }),
    );

    expect(mockSetTheme).toHaveBeenCalledWith("light");
  });
});
