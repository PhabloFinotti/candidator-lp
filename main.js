import "./assets/css/tailwind.css";
let switchers = document.querySelectorAll(".switcher");
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

switchers.forEach((switcher) => {
  switcher.addEventListener("click", function () {
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }
    }
  });
});

  const accordionButtons = document.querySelectorAll(`button[aria-controls^="accordion-collapse-body-"]`)
  accordionButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const accordionBody = document.querySelector(button.getAttribute("data-accordion-target"));
      button.classList.toggle("active");
      accordionBody.classList.toggle("hidden");

      if(button.getAttribute("data-last-accordion") == 'true'){
        button.classList.toggle("rounded-b-xl")
      }
    });
  });
