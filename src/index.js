import { contact } from "./contact.js";
import { home } from "./home.js";
import { menu } from "./menu.js";
import "./styles.css";
const content = document.querySelector("#content");
content.append(...home);
console.log(contact[1]);
const navBar = document.querySelector("nav");
navBar.addEventListener("click", (event) => {
    if(!event.target.className) return;
    while(content.firstChild) {
        content.removeChild(content.firstChild);
    }
    switch(event.target.closest("button").className) {
        case "home":
            content.append(...home);
            break;
        case "menu":
            content.append(...menu);
            break;
        case "contact-us":
            content.append(...contact);
            break;
    }
});