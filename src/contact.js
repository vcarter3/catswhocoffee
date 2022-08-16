import Location from "./restaurant-location.png";

const contact = (content) => {
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
    createWelcome("welcome", "Say Hello", "Got a question about the coffee shop, or perhaps looking to adopt a cat? Get in touch below!");

    const contact = document.createElement('div')
    contact.classList.add('contact')
    const phoneNumber = document.createElement('p')
    phoneNumber.textContent = '📞 01234 56789';
    const address = document.createElement('p')
    address.textContent = '🏠 42 Cat Boulevard, Catham, UK';

    const location = document.createElement("div");
    location.id = "location";
    const myLocation = new Image();
    myLocation.src = Location;
    location.appendChild(myLocation);

    contact.appendChild(phoneNumber);
    contact.appendChild(address);
    contact.appendChild(myLocation);

    content.appendChild(contact);



}

export { contact };