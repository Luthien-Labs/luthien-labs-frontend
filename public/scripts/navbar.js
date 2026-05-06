const mobileMenuButton = document.getElementById("mobileMenuButton");
const navBar = document.getElementById("navBar");

if (mobileMenuButton && navBar) {
  mobileMenuButton.addEventListener("click", () => {
    navBar.classList.add("transitioning");

    const isVisible = navBar.getAttribute("data-visible") === "true";
    navBar.setAttribute("data-visible", (!isVisible).toString());
    mobileMenuButton.setAttribute("aria-expanded", (!isVisible).toString());
    mobileMenuButton.classList.toggle("active", !isVisible);

    setTimeout(() => {
      navBar.classList.remove("transitioning");
    }, 300);
  });

  document.addEventListener("click", (event) => {
    if (
      navBar.getAttribute("data-visible") === "true" &&
      event.target !== mobileMenuButton &&
      !mobileMenuButton.contains(event.target)
    ) {
      navBar.classList.add("transitioning");
      navBar.setAttribute("data-visible", "false");
      mobileMenuButton.setAttribute("aria-expanded", "false");
      mobileMenuButton.classList.remove("active");
      setTimeout(() => {
        navBar.classList.remove("transitioning");
      }, 300);
    }
  });
}
