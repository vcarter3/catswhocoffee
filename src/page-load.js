import Icon from "./icon.jpg";
import Curl from "./header.svg";

const pageLoad = (content) => {

    const navContainer = document.createElement("div");
    navContainer.className = "navigation-container";

    const nav = document.createElement("div");
    nav.className = "navigation";


    const iconCat = document.createElement("div");
    iconCat.id = "icon";
    const myIcon = new Image();
    myIcon.src = Icon;
    iconCat.appendChild(myIcon);
    nav.appendChild(iconCat);
    // Add the image to our existing div.



    const navLinks = document.createElement("ul");
    navLinks.className = "navigation-links";

    const home = document.createElement("li");
    home.id = "home";
    home.textContent = "Home";
    navLinks.appendChild(home);

    const menu = document.createElement("li");
    menu.id = "menu";
    menu.textContent = "Menu";
    navLinks.appendChild(menu);

    const theCats = document.createElement("li");
    theCats.id = "the-cats";
    theCats.textContent = "The Cats"
    navLinks.appendChild(theCats);

    const contact = document.createElement("li");
    contact.id = "contact";
    contact.textContent = "Contact"
    navLinks.appendChild(contact);

    const welcomeButton = document.createElement("button");
    welcomeButton.textContent = "Book a table"
    navLinks.appendChild(welcomeButton);

    nav.appendChild(navLinks);






    navContainer.appendChild(nav);

    const myCurl = new Image();
    myCurl.src = Curl;

    navContainer.appendChild(myCurl);


    // send before <div id="content"></div>
    content.parentNode.insertBefore(navContainer, content);




}

export { pageLoad };
