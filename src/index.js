import "./style.scss";

import { pageLoad } from './page-load';
import { home } from "./home";
import { menu } from "./menu";
import { theCats } from "./the-cats";
import { contact } from "./contact";

const divContent = document.querySelector("div#content");
pageLoad(divContent);
home(divContent);



// load the nav bar selectors
const navMenu = document.querySelector("#menu");
const navTheCats = document.querySelector("#the-cats");
const navContact = document.querySelector("#contact");
const navHome = document.querySelector("#home");

navHome.addEventListener("click", () => {
    divContent.replaceChildren();
    home(divContent);
});

navMenu.addEventListener("click", () => {
    divContent.replaceChildren();
    menu(divContent);
});
navTheCats.addEventListener("click", () => {
    divContent.replaceChildren();
    theCats(divContent);
});
navContact.addEventListener("click", () => {
    divContent.replaceChildren();
    contact(divContent);
});
