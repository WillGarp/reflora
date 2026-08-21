import { Page } from "../types";

export function goTo(page: Page) {
  window.location.hash = page === "home" ? "" : page;
  window.scrollTo({ top: 0, behavior: "smooth" });
}