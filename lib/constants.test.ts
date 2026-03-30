import { describe, expect, it } from "vitest";
import {
  judicialFeatureItems,
  navItems,
  uspItems,
  vipHomeZigzagFeatures,
} from "./constants";

const expectedHrefs = ["/", "/platform", "/about", "/contact"];

describe("navItems", () => {
  it("includes all primary routes", () => {
    const hrefs = navItems.map((n) => n.href);
    for (const h of expectedHrefs) {
      expect(hrefs).toContain(h);
    }
  });

  it("has no duplicate hrefs", () => {
    const hrefs = navItems.map((n) => n.href);
    expect(new Set(hrefs).size).toBe(hrefs.length);
  });
});

describe("content entries", () => {
  it("uspItems have required keys", () => {
    for (const u of uspItems) {
      expect(u.id).toBeTruthy();
      expect(u.title).toBeTruthy();
      expect(u.description).toBeTruthy();
    }
  });

  it("judicialFeatureItems have required keys", () => {
    for (const f of judicialFeatureItems) {
      expect(f.id).toBeTruthy();
      expect(f.title).toBeTruthy();
      expect(f.description).toBeTruthy();
      expect(f.image).toMatch(/^\/brand\/[\w./-]+\.(webp|png)$/);
    }
  });

  it("vipHomeZigzagFeatures have required keys", () => {
    for (const f of vipHomeZigzagFeatures) {
      expect(f.id).toBeTruthy();
      expect(f.title).toBeTruthy();
      expect(f.description).toBeTruthy();
      if (f.image !== null) {
        expect(f.image).toMatch(/^\/brand\/[\w./-]+\.(webp|png)$/);
      }
    }
  });
});
