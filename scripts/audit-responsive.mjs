#!/usr/bin/env node
/**
 * Automated browser QA of the production build at mobile, tablet, desktop,
 * and wide desktop viewports. No forms/orders are submitted.
 */
import { chromium } from "playwright";
import fs from "node:fs/promises";
import path from "node:path";

const BASE = process.env.AUDIT_BASE_URL || "http://127.0.0.1:3000";
const OUT = path.resolve("artifacts/responsive");
const widths = [320, 360, 390, 430, 600, 768, 850, 1024, 1440, 1920];
const routes = [
  "/", "/produits", "/enseignes-lumineuses", "/lettres-decoupees",
  "/signaletique", "/configurateur?style=cut-out",
  "/configurateur?style=lighted-box", "/demande-devis", "/contact",
  "/panier", "/checkout", "/accessoires", "/produits/panneau-dibond",
  "/blog", "/realisations", "/enseigne-saint-amand-les-eaux",
  "/enseigne-valenciennes", "/politique-confidentialite"
];
const snapRoutes = new Set(["/", "/produits", "/configurateur?style=cut-out", "/demande-devis"]);
const snapWidths = new Set([320, 390, 768, 1024, 1440]);
const failures = [];
const warnings = [];
const visits = [];
await fs.mkdir(OUT, { recursive: true });
const browser = await chromium.launch({ headless: true, args: ["--no-sandbox"] });

for (const width of widths) {
  const height = width <= 430 ? 780 : width <= 850 ? 900 : 900;
  const context = await browser.newContext({
    viewport: { width, height },
    deviceScaleFactor: 1,
    isMobile: width <= 430,
    hasTouch: width <= 430
  });
  await context.addInitScript(() => {
    try {
      localStorage.setItem("mjpub-consent", "declined");
      localStorage.setItem("mjpub-theme", "light");
    } catch {}
  });
  const page = await context.newPage();
  const jsErrors = [];
  page.on("pageerror", e => jsErrors.push(e.message));

  for (const route of routes) {
    const url = BASE + route;
    let response;
    try {
      response = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 20000 });
      await page.evaluate(() => document.fonts.ready);
      const result = await page.evaluate(() => {
        const root = document.documentElement;
        const innerWidth = window.innerWidth;
        const visible = element => {
          const rect = element.getBoundingClientRect();
          const computed = getComputedStyle(element);
          return rect.width > 0 && rect.height > 0 &&
            computed.display !== "none" && computed.visibility !== "hidden";
        };
        const brokenImages = Array.from(document.images)
          .filter(img => visible(img) && img.complete && img.naturalWidth === 0)
          .map(img => img.getAttribute("src") || img.getAttribute("data-src") || "unknown");
        const clippedControls = Array.from(document.querySelectorAll("button,a,input,select,textarea"))
          .filter(visible)
          .filter(el => {
            const r = el.getBoundingClientRect();
            return r.right > innerWidth + 3 || r.left < -3;
          }).slice(0, 6).map(el => ({
            element: el.tagName,
            label: (el.textContent || el.getAttribute("aria-label") || "").trim().slice(0, 45),
            rect: [Math.round(el.getBoundingClientRect().left), Math.round(el.getBoundingClientRect().right)]
          }));
        return {
          viewport: innerWidth,
          documentWidth: root.scrollWidth,
          bodyWidth: document.body.scrollWidth,
          overflow: root.scrollWidth - innerWidth,
          brokenImages,
          clippedControls,
          h1: document.querySelectorAll("main h1").length
        };
      });
      const visit = { width, route, status: response?.status(), ...result };
      visits.push(visit);
      if (!response || response.status() >= 400) failures.push({ width, route, issue: "HTTP " + response?.status() });
      const actualOverflow = Math.max(result.documentWidth, result.bodyWidth, result.viewport) - width;
      if (actualOverflow > 3) failures.push({ width, route, issue: "Actual viewport expansion", pixels: actualOverflow });
      if (result.brokenImages.length) failures.push({ width, route, issue: "Broken images", sources: result.brokenImages });
      if (result.clippedControls.length) warnings.push({ width, route, issue: "Controls outside viewport", details: result.clippedControls });

      if (route === "/produits" && width <= 430) {
        const photos = await page.locator(".catalog-service-row").evaluateAll(rows =>
          rows.map(row => ({
            cardWidth: row.getBoundingClientRect().width,
            imageWidth: row.querySelector(".row-image")?.getBoundingClientRect().width || 0
          }))
        );
        if (photos.length !== 3 || photos.some(({cardWidth,imageWidth}) => imageWidth < cardWidth * 0.9)) {
          failures.push({width,route,issue:"Catalogue images must occupy at least 90% of each mobile card",photos});
        }
      }
      if (route === "/" && (width === 320 || width === 390)) {
        const debug = await page.evaluate(() => {
          const describe = selector => {
            const element = document.querySelector(selector);
            if (!element) return null;
            const r = element.getBoundingClientRect();
            const style = getComputedStyle(element);
            const hit = document.elementFromPoint(Math.min(window.innerWidth - 1, (r.left + r.right) / 2), Math.min(window.innerHeight - 1, (r.top + r.bottom) / 2));
            return {
              selector, display: style.display, position: style.position,
              rect: [r.left,r.top,r.right,r.bottom].map(Math.round),
              hit: hit?.className?.toString().slice(0,100)
            };
          };
          return {
            viewportMeta: document.querySelector('meta[name="viewport"]')?.content,
            visualWidth: window.visualViewport?.width,
            innerWidth: window.innerWidth, clientWidth: document.documentElement.clientWidth,
            screenWidth: window.screen.width,
            headerAction: describe(".header-configure"),
            menu: describe(".menu-trigger"),
            mobileCTA: describe(".mobile-configure"),
            body: describe("body"),
            wideElements: [...document.querySelectorAll("body *")]
              .filter(el => {
                const r = el.getBoundingClientRect();
                const st = getComputedStyle(el);
                return r.width > 0 && st.display!=="none" && st.visibility!=="hidden"
                  && r.right > window.screen.width + 6;
              })
              .slice(0,16)
              .map(el=>({tag:el.tagName,class:el.className?.toString().slice(0,70),right:Math.round(el.getBoundingClientRect().right),width:Math.round(el.getBoundingClientRect().width)}))
          };
        });
        console.log("MOBILE DEBUG " + width + ": " + JSON.stringify(debug));
      }
      if (route === "/" && width === 390) {
        const img = page.locator(".brand-hero-photo img, .solution-photo img, .solution-mini-visual img");
        if ((await img.count()) !== 4) failures.push({ width, route, issue: "Expected 4 homepage product photos" });
        const cutOut = page.getByRole("radio", { name: /Lettres 3D/i });
        if (await cutOut.count()) {
          await cutOut.check();
          const href = await page.locator(".entry-start").getAttribute("href");
          if (href !== "/configurateur?style=cut-out") failures.push({ width, route, issue: "Cut-out CTA does not lead to configurator", href });
        } else failures.push({ width, route, issue: "Cut-out style radio missing" });
        const menu = page.getByRole("button", {name:/Ouvrir le menu/i});
        if (await menu.isVisible()) {
          await menu.click({timeout: 3000});
          if (!(await page.locator("#navigation-mobile").isVisible())) {
            failures.push({width, route, issue: "Mobile menu failed to open"});
          }
          await page.keyboard.press("Escape");
        }
      }
      if (snapRoutes.has(route) && snapWidths.has(width)) {
        await page.screenshot({
          path: path.join(OUT, route.replace(/[/?=]/g, "_") + "-" + width + ".png"),
          fullPage: width === 390 || width === 1440,
          animations: "disabled"
        });
      }
    } catch (error) {
      failures.push({ width, route, issue: String(error).slice(0, 250) });
    }
  }
  if (jsErrors.length) warnings.push({ width, issue: "Client JavaScript exceptions", details: [...new Set(jsErrors)].slice(0, 10) });
  await context.close();
  console.log("Audited " + width + "px / " + routes.length + " routes");
}
await browser.close();
const report = {
  generated: new Date().toISOString(),
  routes: routes.length, widths, totalVisits: visits.length, failures, warnings,
  visits
};
await fs.writeFile(path.join(OUT, "report.json"), JSON.stringify(report, null, 2));
await fs.writeFile(path.join(OUT, "SUMMARY.md"), [
  "# MJ PUB responsive browser audit",
  "",
  "- Real Chromium browser, built Next.js production server.",
  "- " + visits.length + " route / viewport combinations.",
  "- Tested widths: " + widths.join(", ") + " px.",
  "- " + failures.length + " failures; " + warnings.length + " warnings.",
  "",
  "## Failures",
  ...failures.map(f => "- " + f.width + "px " + f.route + ": " + f.issue + (f.pixels ? " (" + f.pixels + " px)" : "")),
  "",
  "## Warnings (first 30)",
  ...warnings.slice(0, 30).map(f => "- " + (f.width || "?") + "px " + (f.route || "") + ": " + f.issue),
  ""
].join("\n"));
console.log("Responsive QA: " + visits.length + " visits, " + failures.length + " failures, " + warnings.length + " warnings.");
for (const f of failures.slice(0, 50)) console.error("FAIL: " + JSON.stringify(f));
if (failures.length) process.exitCode = 1;
