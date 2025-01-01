console.log("Content script is running");

document.addEventListener("DOMContentLoaded", () => {
  const link = document.querySelector<HTMLSpanElement>(".text-link");

  if (link) {
    link.innerHTML = "hehe";
  } else {
    console.log("Element with class 'text-link' is absent.");
  }
});
