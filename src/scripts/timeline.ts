let active = 0;
let hovered = -1;

const milestones = document.querySelectorAll<HTMLElement>(".tl-milestone");
const prevBtn = document.getElementById("tl-prev") as HTMLButtonElement | null;
const nextBtn = document.getElementById("tl-next") as HTMLButtonElement | null;
const cardYear = document.getElementById("tl-card-year");
const cardBody = document.getElementById("tl-card-body");
const cardSub = document.getElementById("tl-card-sub");
const cardTitle = document.getElementById("tl-card-title");
const cardDetail = document.getElementById("tl-card-detail");

function updateStates(): void {
  const focused = hovered >= 0 ? hovered : active;
  milestones.forEach((el, i) => {
    el.classList.toggle("is-active", i === active);
    el.classList.toggle("is-focused", i === focused);
  });
  if (prevBtn) prevBtn.disabled = active === 0;
  if (nextBtn) nextBtn.disabled = active === milestones.length - 1;
}

function animateCard(): void {
  if (!cardYear || !cardBody) return;
  cardYear.classList.remove("tl-card-animate");
  cardBody.classList.remove("tl-card-animate");
  void cardYear.offsetWidth;
  cardYear.classList.add("tl-card-animate");
  cardBody.classList.add("tl-card-animate");
}

function setActive(index: number): void {
  active = index;
  const { year, title, sub, detail } = milestones[active].dataset;
  if (cardYear) cardYear.textContent = year ?? "";
  if (cardSub) cardSub.textContent = `Milestone — ${sub ?? ""}`;
  if (cardTitle) cardTitle.textContent = title ?? "";
  if (cardDetail) cardDetail.textContent = detail ?? "";
  animateCard();
  updateStates();
}

milestones.forEach((el, i) => {
  el.addEventListener("click", () => setActive(i));
  el.addEventListener("mouseenter", () => {
    hovered = i;
    updateStates();
  });
  el.addEventListener("mouseleave", () => {
    hovered = -1;
    updateStates();
  });
});

prevBtn?.addEventListener("click", () => {
  if (active > 0) setActive(active - 1);
});
nextBtn?.addEventListener("click", () => {
  if (active < milestones.length - 1) setActive(active + 1);
});

updateStates();
