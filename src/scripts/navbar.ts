const hamburger = document.getElementById("hamburger") as HTMLButtonElement | null;
const overlay = document.getElementById("mobile-overlay") as HTMLElement | null;
const header = document.getElementById("site-header") as HTMLElement | null;

function openOverlay(): void {
  hamburger?.setAttribute("aria-expanded", "true");
  hamburger?.classList.add("is-open");
  overlay?.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeOverlay(): void {
  hamburger?.setAttribute("aria-expanded", "false");
  hamburger?.classList.remove("is-open");
  overlay?.classList.remove("is-open");
  document.body.style.overflow = "";
}

if (hamburger) {
  hamburger.addEventListener("click", () => {
    hamburger.getAttribute("aria-expanded") === "true" ? closeOverlay() : openOverlay();
  });
}

overlay?.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", closeOverlay)
);

document.addEventListener("keydown", (e: KeyboardEvent) => {
  if (e.key === "Escape") closeOverlay();
});

window.addEventListener(
  "scroll",
  () => header?.classList.toggle("scrolled", window.scrollY > 40),
  { passive: true }
);

const nav = document.getElementById("desktop-nav") as HTMLElement | null;
const indicator = document.getElementById("nav-indicator") as HTMLElement | null;

function moveIndicatorTo(el: HTMLElement): void {
  if (!nav || !indicator) return;
  const navRect = nav.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();
  indicator.style.setProperty("--ind-left", `${elRect.left - navRect.left}px`);
  indicator.style.setProperty("--ind-width", `${elRect.width}px`);
}

function initIndicator(): void {
  if (!nav || !indicator) return;
  const active = nav.querySelector<HTMLElement>(".nav-link--active");
  if (!active) return;

  indicator.style.transition = "none";
  indicator.style.opacity = "1";
  moveIndicatorTo(active);

  requestAnimationFrame(() =>
    requestAnimationFrame(() => {
      indicator.style.transition = "";
    })
  );
}

nav?.querySelectorAll<HTMLElement>(".nav-link").forEach((link) => {
  link.addEventListener("mouseenter", () => moveIndicatorTo(link));
  link.addEventListener("mouseleave", () => {
    const active = nav?.querySelector<HTMLElement>(".nav-link--active");
    if (active) moveIndicatorTo(active);
  });
});

initIndicator();
window.addEventListener("resize", initIndicator);

document
  .querySelectorAll<HTMLAnchorElement>("#nav-list a, #mobile-nav-list a, #navBranding")
  .forEach((link) => {
    link.addEventListener("click", () => sessionStorage.setItem("navNavigating", "1"));
  });
