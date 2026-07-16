const waitlistForm = document.querySelector("#waitlist-form");
const formMessage = document.querySelector("#form-message");

const readStoredList = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch {
    return [];
  }
};

const appendStoredItem = (key, item) => {
  const currentItems = readStoredList(key);
  currentItems.push({ ...item, createdAt: new Date().toISOString(), locale: "ru" });
  localStorage.setItem(key, JSON.stringify(currentItems));
};

waitlistForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(waitlistForm);
  const email = String(formData.get("email") || "").trim();

  if (!email) {
    formMessage.textContent = "Добавьте email.";
    formMessage.classList.remove("is-success");
    return;
  }

  appendStoredItem("orenWaitlist", {
    email,
    status: String(formData.get("status") || "").trim(),
    challenge: String(formData.get("challenge") || "").trim(),
  });

  waitlistForm.reset();
  formMessage.innerHTML = "<strong>Вы в списке.</strong><br>Скоро мы пригласим первых пользователей.";
  formMessage.classList.add("is-success");
});
