import { Page } from "../types";

export function goTo(page: Page) {
  const url = new URL(window.location.href);

  if (page === "home") {
    url.hash = "";
  } else {
    url.hash = page;
  }

  window.history.pushState({}, "", url);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo({ top: 0, behavior: "smooth" });
}