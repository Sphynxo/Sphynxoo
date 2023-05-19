"use strict";

const menuBtn = document.querySelector(".menu");
const mainNav = document.querySelector(".main-nav");
const servicesWeb = document.querySelector(".web-dev");
const servicesUi = document.querySelector(".ui-ux");
const servicesDesign = document.querySelector(".graphics");
let infoTxt = document.querySelector(".info-txt");

const servicesBtn = document.querySelector('.services-link');
const aboutBtn = document.querySelector('.about-link');
const worksBtn = document.querySelector('.works-link');
const contactBtn = document.querySelector('.contact-link');
const gitBtn = document.querySelector('.main-git');
const mailBtn = document.querySelector('.main-envelope');
const logoBtn = document.querySelector('.header-link')

let menuOpen = false;

menuBtn.addEventListener("click", function () {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuBtn.classList.remove("close");
    mainNav.classList.add("main-nav-in");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuBtn.classList.add("close");
    mainNav.classList.remove("main-nav-in");
    menuOpen = false;
  }
});

servicesWeb.addEventListener("click", function () {
  infoTxt.textContent =
    "Welcome to my web development service! I specialize in building modern and responsive websites using HTML5, CSS3, Tailwind CSS, TypeScript, JavaScript, and React.js. From visually appealing designs to seamless interactions, I create engaging websites that meet your unique needs. Let's work together to bring your web development project to life! Contact me today to discuss your requirements.";
  servicesWeb.classList.add("info-active");
  servicesUi.classList.remove("info-active");
  servicesDesign.classList.remove("info-active");
});

servicesUi.addEventListener("click", function () {
  infoTxt.textContent =
    "Welcome to my cutting-edge web design service! I create modern, visually appealing website designs using Adobe XD, Figma, and more. With a keen eye for design systems and trends, I prioritize responsive design and seamless user experiences. Contact me to discuss your unique web design needs, and let's create a stunning website together! Your digital success starts here!";
  servicesUi.classList.add("info-active");
  servicesWeb.classList.remove("info-active");
  servicesDesign.classList.remove("info-active");
});

servicesDesign.addEventListener("click", function () {
  infoTxt.textContent =
    "Welcome to my comprehensive graphic design service! I'm passionate about crafting visually captivating designs using industry-standard tools like Photoshop and Illustrator. Contact me to discuss your unique graphic design needs, and let's collaborate to create stunning visuals that make a lasting impact on your audience and elevate your brand to new heights! Let's design excellence together!";
  servicesDesign.classList.add("info-active");
  servicesUi.classList.remove("info-active");
  servicesWeb.classList.remove("info-active");
});

// Detect when the Services section is in view
window.addEventListener("scroll", function () {
  let servicesSection = document.getElementById("services");
  let servicesLink = document.querySelector(".services-link");
  let servicesBrB = document.querySelector(".services-br-b");
  let servicesBrA = document.querySelector(".services-br-a");

  let rect = servicesSection.getBoundingClientRect();
  if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
    // If Services section is in view, add CSS class to update style
    servicesLink.classList.add("main-nav-active");
    servicesBrB.classList.remove("hidden");
    servicesBrA.classList.remove("hidden");
  } else {
    // If Services section is not in view, remove CSS class to reset style
    servicesLink.classList.remove("main-nav-active");
    servicesBrB.classList.add("hidden");
    servicesBrA.classList.add("hidden");
  }
});

window.addEventListener("scroll", function () {
  let aboutSection = document.getElementById("about-me");
  let aboutLink = document.querySelector(".about-link");
  let aboutBrB = document.querySelector(".about-br-b");
  let aboutBrA = document.querySelector(".about-br-a");

  let rect = aboutSection.getBoundingClientRect();
  if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
    // If Services section is in view, add CSS class to update style
    aboutLink.classList.add("main-nav-active");
    aboutBrB.classList.remove("hidden");
    aboutBrA.classList.remove("hidden");
  } else {
    // If Services section is not in view, remove CSS class to reset style
    aboutLink.classList.remove("main-nav-active");
    aboutBrB.classList.add("hidden");
    aboutBrA.classList.add("hidden");
  }
});

window.addEventListener("scroll", function () {
  let worksSection = document.getElementById("works");
  let worksLink = document.querySelector(".works-link");
  let worksBrB = document.querySelector(".works-br-b");
  let worksBrA = document.querySelector(".works-br-a");

  let rect = worksSection.getBoundingClientRect();
  if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
    // If Services section is in view, add CSS class to update style
    worksLink.classList.add("main-nav-active");
    worksBrB.classList.remove("hidden");
    worksBrA.classList.remove("hidden");
  } else {
    // If Services section is not in view, remove CSS class to reset style
    worksLink.classList.remove("main-nav-active");
    worksBrB.classList.add("hidden");
    worksBrA.classList.add("hidden");
  }
});

window.addEventListener("scroll", function () {
  let contactSection = document.getElementById("contact");
  let contactLink = document.querySelector(".contact-link");
  let contactBrB = document.querySelector(".contact-br-b");
  let contactBrA = document.querySelector(".contact-br-a");

  let rect = contactSection.getBoundingClientRect();
  if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
    // If Services section is in view, add CSS class to update style
    contactLink.classList.add("main-nav-active");
    contactBrB.classList.remove("hidden");
    contactBrA.classList.remove("hidden");
  } else {
    // If Services section is not in view, remove CSS class to reset style
    contactLink.classList.remove("main-nav-active");
    contactBrB.classList.add("hidden");
    contactBrA.classList.add("hidden");
  }
});

function sendMail() {
  event.preventDefault();
  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  const serviceID = "service_wto95jh";
  const templateID = "template_uomqlcw";

  emailjs.send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      // alert("Success");
    })
    .catch((err) => console.log(err));
}


document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    type: "fade",
    rewind: true,
  });

  splide.mount();
});

servicesBtn.addEventListener('click', function() {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuBtn.classList.remove("close");
    mainNav.classList.add("main-nav-in");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuBtn.classList.add("close");
    mainNav.classList.remove("main-nav-in");
    menuOpen = false;
  }
})

aboutBtn.addEventListener('click', function() {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuBtn.classList.remove("close");
    mainNav.classList.add("main-nav-in");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuBtn.classList.add("close");
    mainNav.classList.remove("main-nav-in");
    menuOpen = false;
  }
})

worksBtn.addEventListener('click', function() {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuBtn.classList.remove("close");
    mainNav.classList.add("main-nav-in");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuBtn.classList.add("close");
    mainNav.classList.remove("main-nav-in");
    menuOpen = false;
  }
})

contactBtn.addEventListener('click', function() {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuBtn.classList.remove("close");
    mainNav.classList.add("main-nav-in");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuBtn.classList.add("close");
    mainNav.classList.remove("main-nav-in");
    menuOpen = false;
  }
})

gitBtn.addEventListener('click', function() {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuBtn.classList.remove("close");
    mainNav.classList.add("main-nav-in");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuBtn.classList.add("close");
    mainNav.classList.remove("main-nav-in");
    menuOpen = false;
  }
})

mailBtn.addEventListener('click', function() {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuBtn.classList.remove("close");
    mainNav.classList.add("main-nav-in");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuBtn.classList.add("close");
    mainNav.classList.remove("main-nav-in");
    menuOpen = false;
  }
})

logoBtn.addEventListener('click', function() {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuBtn.classList.remove("close");
    mainNav.classList.add("main-nav-in");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuBtn.classList.add("close");
    mainNav.classList.remove("main-nav-in");
    menuOpen = false;
  }
})