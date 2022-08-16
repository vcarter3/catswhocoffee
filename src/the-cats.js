import Peanut from "./peanut.jpg";
import Snowy from "./snowy.jpg";
import Bread from "./bread.jpg";
import Dodge from "./dodge.jpg";
import Aristocat from "./aristocat.jpg";
import Guardian from "./guardian.jpg";
import Lucky from "./lucky.jpg";
import Goose from "./goose.jpg";
import Relate from "./relate.jpg";


const theCats = (content) => {
    const createWelcome = (classN, headerContent, description) => {
        const welcomeContainer = document.createElement("div");
        welcomeContainer.className = "welcome-container";

        const welcome = document.createElement("div");
        welcome.className = classN;
        const welcomeHeader = document.createElement("h1");
        welcomeHeader.textContent = headerContent;
        welcome.appendChild(welcomeHeader);
        const welcomeDescription = document.createElement("p1");
        welcomeDescription.textContent = description;



        welcome.appendChild(welcomeDescription);
        welcomeContainer.appendChild(welcome);

        content.appendChild(welcomeContainer);
    }
    createWelcome("welcome", "Meet the cats!", "Cats who Coffee is a re-homing and care facility for cats and kittens from a range of backgrounds. From rescue cats, to strays, to cats which have had medical issues - we take them in and look after them until they find their forever home.");

    const cats = document.createElement("div");
    cats.className = "cats";


    const createItem = (parent, name, src) => {
        const item = document.createElement("div");
        const myCat = new Image();
        myCat.src = src;
        item.appendChild(myCat);
        const itemHeader = document.createElement("h2");
        itemHeader.textContent = name;
        item.appendChild(itemHeader);
        parent.appendChild(item)

    }

    createItem(cats, "Peanut", Peanut);
    createItem(cats, "Snowy", Snowy);
    createItem(cats, "Bread", Bread);
    createItem(cats, "Dodge", Dodge);
    createItem(cats, "Aristocat", Aristocat);
    createItem(cats, "Guardian", Guardian);
    createItem(cats, "Lucky", Lucky);
    createItem(cats, "Goose", Goose);
    createItem(cats, "Relate", Relate);

    const catsContainer = document.createElement("div");
    catsContainer.className = "cats-container";
    catsContainer.appendChild(cats);
    content.appendChild(catsContainer);
}

export { theCats };