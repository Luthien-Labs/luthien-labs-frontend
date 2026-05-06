// API config is read from data attributes injected by Astro at build time,
// keeping env vars out of committed source while still embedding them in the built HTML.
const form = document.getElementById("contact-form");
const API_URL = form?.dataset.apiUrl;
const API_KEY = form?.dataset.apiKey;

const generateDailyHash = async () => {
  const date = new Date().toISOString().split("T")[0];
  const encoded = new TextEncoder().encode(`${API_KEY}-${date}`);
  const buffer = await crypto.subtle.digest("SHA-256", encoded);
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
};

const submitButton = document.getElementById("submit-button");
const successMessage = document.getElementById("form-success");
const errorMessage = document.getElementById("form-error");

form?.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (!form.reportValidity()) return;

  const data = new FormData(form);

  submitButton.disabled = true;
  submitButton.textContent = "Transmitting…";
  successMessage.hidden = true;
  errorMessage.hidden = true;

  try {
    const hash = await generateDailyHash();
    const subject = (data.get("subject") || "").toString().trim();

    const response = await fetch(`${API_URL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": hash,
      },
      body: JSON.stringify({
        name: data.get("name"),
        email: data.get("email"),
        ...(subject ? { subject } : {}),
        message: data.get("message"),
        website: data.get("website") || undefined,
      }),
    });

    if (response.ok) {
      successMessage.hidden = false;
      form.reset();
    } else {
      errorMessage.hidden = false;
    }
  } catch {
    errorMessage.hidden = false;
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Submit Inquiry";
  }
});
