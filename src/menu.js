const menu = (content) => {
    // welcome
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
        const welcomeButton = document.createElement("button");
        welcomeButton.textContent = "Download menu (PDF)"
        welcome.appendChild(welcomeButton);


        welcomeContainer.appendChild(welcome);
        content.appendChild(welcomeContainer);
    }

    createWelcome("welcome", "Our Menu", "All of our food is prepared by our team of trained kitchen staff from the sealed glass kitchen where you can see your food being made, without risk of little paws getting involved. The cafe is kept at the highest standard of hygiene and cleanliness, which is proven from our Food Standard rating of 5 - something the kitties are very proud of!");


    // meal deal
    const mealDealContainer = document.createElement("div");
    mealDealContainer.className = "meal-deal-container";

    const mealDeal = document.createElement("div");
    mealDeal.className = "meal-deal";

    const mealDealHeader = document.createElement("h1");
    mealDealHeader.textContent = "OUR CAT COFFEE DEAL";

    const mealDealHeader2 = document.createElement("h2");
    mealDealHeader2.textContent = "Choose any drink item, a dessert and biscuit as part of the deal!";

    const mealDealHeader3 = document.createElement("h3");
    mealDealHeader3.textContent = "ONLY £12.95";

    const mealDealHeader4 = document.createElement("h4");
    mealDealHeader4.textContent = "(Additional toppings charged extra)";
    mealDeal.appendChild(mealDealHeader);
    mealDeal.appendChild(mealDealHeader2);
    mealDeal.appendChild(mealDealHeader3);
    mealDeal.appendChild(mealDealHeader4);

    mealDealContainer.appendChild(mealDeal)
    content.appendChild(mealDealContainer);


    const createItem = (parent, name, price) => {
        const item = document.createElement("div");
        const itemHeader = document.createElement("h2");
        itemHeader.textContent = name;
        item.appendChild(itemHeader);
        const itemPrice = document.createElement("span");
        itemPrice.className = "price";
        itemPrice.textContent = " £" + price;
        itemHeader.appendChild(itemPrice);
        parent.appendChild(item);
    }

    const menu = document.createElement("div");
    menu.className = "menu";

    const drinksContainer = document.createElement("div");
    drinksContainer.className = "drinks-container";
    const drinksHeader = document.createElement("h1");
    drinksHeader.textContent = "Drinks";
    drinksHeader.className = "drinks-header";
    drinksContainer.appendChild(drinksHeader);

    const drinks = document.createElement("div");
    createItem(drinks, "Latte", "3.00");
    createItem(drinks, "Cappuccino", "3.60");
    createItem(drinks, "Black coffee", "3.00");
    createItem(drinks, "Espresso", "3.00");
    createItem(drinks, "Mocha", "2.00");
    drinksContainer.appendChild(drinks);
    menu.appendChild(drinksContainer);

    const foodContainer = document.createElement("div");
    foodContainer.className = "food-container";
    const foodHeader = document.createElement("h1");
    foodHeader.textContent = "Food";
    foodHeader.className = "food-header";
    foodContainer.appendChild(foodHeader);

    const food = document.createElement("div");
    createItem(food, "Jaffa cake", "3.00")
    createItem(food, "Cake", "3.50")
    createItem(food, "Chocolate cake", "2.00")
    createItem(food, "Cookies cake", "3.20")
    createItem(food, "Cherry cake", "2.00")
    foodContainer.appendChild(food);
    menu.appendChild(foodContainer);

    content.appendChild(menu);



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

export { menu };