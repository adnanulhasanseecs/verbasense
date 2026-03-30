import { describe, expect, it } from "vitest";
import { contactFormSchema, parseContactForm } from "./contact-schema";

const base = {
  organization: "Org",
  designation: "Judge",
  phone: "",
  country: "US" as const,
  message: "x".repeat(20),
};

describe("contactFormSchema", () => {
  it("rejects empty name", () => {
    const r = contactFormSchema.safeParse({
      ...base,
      name: "",
    });
    expect(r.success).toBe(false);
  });

  it("rejects whitespace-only organization", () => {
    const r = contactFormSchema.safeParse({
      ...base,
      name: "Jane",
      organization: "   ",
    });
    expect(r.success).toBe(false);
  });

  it("rejects invalid phone when provided", () => {
    const r = contactFormSchema.safeParse({
      ...base,
      name: "Jane",
      phone: "bad",
    });
    expect(r.success).toBe(false);
  });

  it("rejects missing country", () => {
    const r = contactFormSchema.safeParse({
      ...base,
      name: "Jane",
      country: "",
    });
    expect(r.success).toBe(false);
  });

  it("rejects short message", () => {
    const r = contactFormSchema.safeParse({
      ...base,
      name: "Jane",
      message: "short",
    });
    expect(r.success).toBe(false);
  });

  it("accepts valid trimmed input", () => {
    const r = parseContactForm({
      name: "  Jane  ",
      phone: "",
      organization: " High Court ",
      designation: " IT Director ",
      country: "GB",
      message: "  " + "Request for technical discussion. ".repeat(2) + " ",
    });
    expect(r.success).toBe(true);
    if (r.success) {
      expect(r.data.name).toBe("Jane");
      expect(r.data.organization).toBe("High Court");
      expect(r.data.designation).toBe("IT Director");
      expect(r.data.country).toBe("GB");
      expect(r.data.message.length).toBeGreaterThanOrEqual(20);
    }
  });

  it("accepts optional phone when valid", () => {
    const r = contactFormSchema.safeParse({
      ...base,
      name: "Jane",
      phone: "+1 (555) 123-4567",
    });
    expect(r.success).toBe(true);
  });
});
