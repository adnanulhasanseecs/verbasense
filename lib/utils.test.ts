import { describe, expect, it } from "vitest";
import { cn } from "./utils";

describe("cn", () => {
  it("merges conflicting Tailwind utilities", () => {
    expect(cn("p-2", "p-4")).toBe("p-4");
    expect(cn("px-2 py-1", "px-4")).toMatch(/px-4/);
  });

  it("handles conditional and falsy fragments", () => {
    expect(cn("base", false && "hidden", undefined, null)).toBe("base");
    expect(cn("a", true && "b")).toBe("a b");
  });
});
