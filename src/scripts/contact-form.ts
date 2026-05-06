const form = document.getElementById("contact-form") as HTMLFormElement | null;
const submitButton = document.getElementById("submit-button") as HTMLButtonElement | null;
const successMessage = document.getElementById("form-success") as HTMLElement | null;
const errorMessage = document.getElementById("form-error") as HTMLElement | null;

if (!form || !submitButton || !successMessage || !errorMessage) {
  throw new Error("contact-form.js: required DOM elements not found");
}

const API_URL = form.dataset.apiUrl;
const API_KEY = form.dataset.apiKey;

if (!API_URL || !API_KEY) {
  throw new Error("contact-form.js: data-api-url and data-api-key are required");
}

const generateDailyHash = async (): Promise<string> => {
  const date = new Date().toISOString().split("T")[0];
  const encoded = new TextEncoder().encode(`${API_KEY}-${date}`);
  const buffer = await crypto.subtle.digest("SHA-256", encoded);
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
};

form.addEventListener("submit", async (e: Event) => {
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
