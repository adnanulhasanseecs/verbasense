"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { getSortedCountryOptions } from "@/lib/countries";
import { contactFormSchema, type ContactFormValues } from "@/lib/contact-schema";
import { cn } from "@/lib/utils";
import * as React from "react";

const initial: ContactFormValues = {
  name: "",
  phone: "",
  organization: "",
  designation: "",
  country: "",
  message: "",
};

const selectClassName = cn(
  "h-10 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm text-foreground transition-colors",
  "outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
  "disabled:cursor-not-allowed disabled:opacity-50 dark:bg-input/30",
);

export function ContactForm() {
  const countries = React.useMemo(() => getSortedCountryOptions(), []);
  const [values, setValues] = React.useState<ContactFormValues>(initial);
  const [website, setWebsite] = React.useState("");
  const [errors, setErrors] = React.useState<
    Partial<Record<keyof ContactFormValues, string>>
  >({});
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(false);
    setSubmitError(null);
    const parsed = contactFormSchema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof ContactFormValues, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof ContactFormValues;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...parsed.data, website }),
      });
      if (!res.ok) {
        const payload = (await res.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(payload?.error || "Unable to submit inquiry");
      }
      setSubmitted(true);
      setValues(initial);
      setWebsite("");
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Unable to submit inquiry at this time.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-border/60 bg-card p-6 shadow-sm md:p-8"
      noValidate
    >
      {/* Honeypot (hidden from human users) */}
      <input
        type="text"
        name="website"
        autoComplete="off"
        tabIndex={-1}
        aria-hidden
        className="hidden"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="contact-name">Full name</Label>
          <Input
            id="contact-name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
          />
          {errors.name ? (
            <p id="contact-name-error" className="text-sm text-destructive" role="alert">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-phone">Phone (optional)</Label>
          <Input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={values.phone}
            onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "contact-phone-error" : undefined}
          />
          {errors.phone ? (
            <p id="contact-phone-error" className="text-sm text-destructive" role="alert">
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-country">Country / region</Label>
          <select
            id="contact-country"
            name="country"
            autoComplete="country"
            value={values.country}
            onChange={(e) =>
              setValues((v) => ({ ...v, country: e.target.value }))
            }
            aria-invalid={!!errors.country}
            aria-describedby={errors.country ? "contact-country-error" : undefined}
            className={selectClassName}
          >
            <option value="">Select country</option>
            {countries.map((c) => (
              <option key={c.code} value={c.code}>
                {c.name}
              </option>
            ))}
          </select>
          {errors.country ? (
            <p
              id="contact-country-error"
              className="text-sm text-destructive"
              role="alert"
            >
              {errors.country}
            </p>
          ) : null}
        </div>

        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="contact-org">Organization</Label>
          <Input
            id="contact-org"
            name="organization"
            autoComplete="organization"
            value={values.organization}
            onChange={(e) =>
              setValues((v) => ({ ...v, organization: e.target.value }))
            }
            aria-invalid={!!errors.organization}
            aria-describedby={
              errors.organization ? "contact-org-error" : undefined
            }
          />
          {errors.organization ? (
            <p id="contact-org-error" className="text-sm text-destructive" role="alert">
              {errors.organization}
            </p>
          ) : null}
        </div>

        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="contact-designation">Designation / title</Label>
          <Input
            id="contact-designation"
            name="designation"
            autoComplete="organization-title"
            value={values.designation}
            onChange={(e) =>
              setValues((v) => ({ ...v, designation: e.target.value }))
            }
            aria-invalid={!!errors.designation}
            aria-describedby={
              errors.designation ? "contact-designation-error" : undefined
            }
          />
          {errors.designation ? (
            <p
              id="contact-designation-error"
              className="text-sm text-destructive"
              role="alert"
            >
              {errors.designation}
            </p>
          ) : null}
        </div>

        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="contact-message">Message</Label>
          <Textarea
            id="contact-message"
            name="message"
            rows={5}
            value={values.message}
            onChange={(e) =>
              setValues((v) => ({ ...v, message: e.target.value }))
            }
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "contact-msg-error" : undefined}
          />
          {errors.message ? (
            <p id="contact-msg-error" className="text-sm text-destructive" role="alert">
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>

      <Button type="submit" className="rounded-2xl" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit inquiry"}
      </Button>
      {submitted ? (
        <p
          className="text-sm font-medium text-primary"
          role="status"
          aria-live="polite"
        >
          Thank you. Our team will respond promptly to coordinate a detailed discussion
          based on your requirements.
        </p>
      ) : null}
      {submitError ? (
        <p className="text-sm font-medium text-destructive" role="alert">
          {submitError}
        </p>
      ) : null}
    </form>
  );
}
