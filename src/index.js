import { home } from "./home.js";
import "./styles.css";
const content = document.querySelector("#content");
content.append(home.h1, home.details);
const navBar = document.querySelector("nav");
navBar.addEventListener("click", (event) => {
    if(!event.target.className) return;
    while(content.firstChild) {
        content.removeChild(content.firstChild);
    }
    if(event.target.closest('button').className === "home") {
        content.append(home.h1, home.details);
    }
});