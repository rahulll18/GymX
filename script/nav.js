ScrollReveal().reveal(".section", { delay: 700 });
// Create navbar elements
const nav = document.createElement("nav");
nav.classList.add("nav_main");

const navLink = document.createElement("a");
navLink.href = "Home.html";
const navLogo = document.createElement("img");
navLogo.src = "./img/logo-nav.png";
navLogo.alt = "";
navLink.appendChild(navLogo);
navLink.appendChild(document.createTextNode("GymX"));

const navMenu = document.createElement("div");
navMenu.classList.add("nav_menu");

const navList = document.createElement("ul");
navList.classList.add("nav_list");

const navItems = [
  { href: "#", text: "Home" },
  { href: "#aboutUS", text: "About Us" },
  { href: "#Store", text: "Store" },
  { href: "#contactUs", text: "Contact Us" },
];

navItems.forEach((item) => {
  const li = document.createElement("li");
  li.classList.add("nav_item");
  const a = document.createElement("a");
  a.href = item.href;
  a.textContent = item.text;
  li.appendChild(a);
  navList.appendChild(li);
});

const navButton = document.createElement("button");
navButton.type = "button";
navButton.classList.add("nav_button");
const navButtonLink = document.createElement("a");
navButtonLink.href = "./Login.html";
navButtonLink.target = "_blank";
navButtonLink.textContent = "Login";
navButton.appendChild(navButtonLink);

// Assemble navbar
navMenu.appendChild(navList);
navMenu.appendChild(navButton);

nav.appendChild(navLink);
nav.appendChild(navMenu);

// Append to body
document.body.prepend(nav);
