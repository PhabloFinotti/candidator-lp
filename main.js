import "./assets/css/tailwind.css";

const menuMobile = document.getElementById('menuMobile')
document.getElementById('menu').addEventListener('click', function(){
  document.getElementById('menu').classList.toggle('active')
  menuMobile.classList.toggle('active')
})

const menuMobileLinks = document.querySelectorAll('ul li a')

menuMobileLinks.forEach((link) => {
  link.addEventListener('click', function(){
    if(menuMobile.classList.contains('active')){
      document.getElementById('menu').classList.toggle('active')
      menuMobile.classList.toggle('active')
    }
  })
})



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
  
  const modalButtons = document.querySelectorAll(`button[data-toggle="modalForm"]`)
  const modalBackdrop = document.getElementById('modalFormBackdrop');
  const modalBody = document.getElementById('modalFormBody');
  modalButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if(modalBackdrop.classList.contains('modal-backdrop-leaving')){
        openModal()
      }else{
        closeModal()
      }
    });
  });

  document.addEventListener('keyup', function(e) {
    if (e.key === "Escape") { 
      closeModal();
    }
  });

  modalBackdrop.addEventListener("click", function () {
    console.log('clicado')
    closeModal();
  })

function openModal(){
  document.getElementsByTagName('body')[0].style.overflow = 'hidden';
  modalBackdrop.parentElement.classList.remove('hidden')
  modalBackdrop.classList.remove("modal-backdrop-leaving");
  modalBackdrop.classList.add("modal-backdrop-entering");
  modalBody.classList.remove("modal-leaving");
  modalBody.classList.add("modal-entering");
}

function closeModal(){
  document.getElementsByTagName('body')[0].style.overflow = 'auto';
  modalBackdrop.classList.remove("modal-backdrop-entering");
  modalBackdrop.classList.add("modal-backdrop-leaving");
  modalBody.classList.remove("modal-entering") 
  modalBody.classList.add("modal-leaving");
  setTimeout(() => {
    modalBackdrop.parentElement.classList.add('hidden')
  }, 300);
}


