import Cat from "./cat.png";

const home = (content) => {
    const welcome = document.createElement("div");
    welcome.className = "welcome-home";
    const welcomeL = document.createElement("div");
    welcomeL.className = "welcome-left";
    const welcomeHeader = document.createElement("h1");
    welcomeHeader.textContent = "WELCOME TO CATS WHO COFFEE, ";
    const spanAlt = document.createElement("span");
    spanAlt.className = "alt";
    spanAlt.textContent = "GOOD COFFEE, HAPPY PEOPLE!"
    welcomeHeader.appendChild(spanAlt);
    welcomeL.appendChild(welcomeHeader);
    const welcomeDescription = document.createElement("p1");
    welcomeDescription.textContent = "Cats who Coffee is designed with felines in mind, with wide open spaces and lots of kitty toys - but that is not to say that humans are left out! Each table has comfortable sofas and armchairs to maximise your experience and relaxation! Come and say hello!";
    welcomeL.appendChild(welcomeDescription);
    const welcomeButton = document.createElement("button");
    welcomeButton.textContent = "Book a table"
    welcomeL.appendChild(welcomeButton);
    welcome.appendChild(welcomeL);

    const myCat = new Image();
    myCat.src = Cat;
    welcome.appendChild(myCat);
    content.appendChild(welcome);

    const joinContainer = document.createElement("div");
    joinContainer.className = "join-container";
    const join = document.createElement("div");
    join.className = "join";
    const joinHeader = document.createElement("h1");
    joinHeader.textContent = "Join us for coffee!";
    const grid = document.createElement("div");
    grid.className = "grid";


    const createItem = (parent, name, description, buttonName) => {
        const item = document.createElement("div");
        const itemHeader = document.createElement("h2");
        itemHeader.textContent = name;
        item.appendChild(itemHeader);
        const itemDescription = document.createElement("p1");
        itemDescription.textContent = description
        item.appendChild(itemDescription);
        const button = document.createElement("button");
        button.textContent = buttonName;
        item.appendChild(button);
        parent.appendChild(item)
    }

    createItem(grid, "PUR..FECT CATS!", "Meet your future feline friends in all their paw-some glory", "The Cats");
    createItem(grid, "JOIN THE CAT CLUB", "Regular visitor? Get your exclusive perks and discounts", "Perks");
    createItem(grid, "CONTACT US", "Want to adopt a cat, or just have a question for us? No problem!", "Contact");
    join.appendChild(joinHeader);
    join.appendChild(grid);
    joinContainer.appendChild(join);
    content.appendChild(joinContainer);


    const endContainer = document.createElement("div");
    endContainer.className = "end";
    const endHeader = document.createElement("h1");
    endHeader.textContent = "What are you waiting for?";
    const endButton = document.createElement("button");
    endButton.textContent = "Book a table";
    endContainer.appendChild(endHeader);
    endContainer.appendChild(endButton);

    content.appendChild(endContainer);


}

export { home };

