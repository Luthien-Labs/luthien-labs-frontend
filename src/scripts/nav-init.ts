if (sessionStorage.getItem("navNavigating")) {
  sessionStorage.removeItem("navNavigating");
  document.documentElement.classList.add("nav-navigating");
}
