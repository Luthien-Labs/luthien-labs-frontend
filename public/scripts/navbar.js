const hamburger = document.getElementById("hamburger");
const overlay = document.getElementById("mobile-overlay");
const header = document.getElementById("site-header");

function openOverlay() {
  hamburger?.setAttribute("aria-expanded", "true");
  hamburger?.classList.add("is-open");
  overlay?.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeOverlay() {
  hamburger?.setAttribute("aria-expanded", "false");
  hamburger?.classList.remove("is-open");
  overlay?.classList.remove("is-open");
  document.body.style.overflow = "";
}

hamburger?.addEventListener("click", () => {
  hamburger.getAttribute("aria-expanded") === "true" ? closeOverlay() : openOverlay();
});

overlay?.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", closeOverlay)
);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeOverlay();
});

window.addEventListener(
  "scroll",
  () => header?.classList.toggle("scrolled", window.scrollY > 40),
  { passive: true }
);

const nav = document.getElementById("desktop-nav");
const indicator = document.getElementById("nav-indicator");

function moveIndicatorTo(el) {
  if (!nav || !indicator) return;
  const navRect = nav.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();
  indicator.style.setProperty("--ind-left", `${elRect.left - navRect.left}px`);
  indicator.style.setProperty("--ind-width", `${elRect.width}px`);
}

function initIndicator() {
  if (!nav || !indicator) return;
  const active = nav.querySelector(".nav-link--active");
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

nav?.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("mouseenter", () => moveIndicatorTo(link));
  link.addEventListener("mouseleave", () => {
    const active = nav.querySelector(".nav-link--active");
    if (active) moveIndicatorTo(active);
  });
});

initIndicator();
window.addEventListener("resize", initIndicator);

document
  .querySelectorAll("#nav-list a, #mobile-nav-list a, #navBranding")
  .forEach((link) => {
    link.addEventListener("click", () =>
      sessionStorage.setItem("navNavigating", "1")
    );
  });
