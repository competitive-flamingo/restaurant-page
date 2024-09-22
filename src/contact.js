export const contact = (function() {
    function CreateContact(header, position, phoneNumber, email) {
        const headerEle = document.createElement("p");
        headerEle.className = "header";
        headerEle.textContent = header;
        const positionEle = document.createElement("p");
        positionEle.textContent = position;
        const phoneNumberEle = document.createElement("p");
        phoneNumberEle.textContent = `Phone: ${phoneNumber}`;
        const emailEle = document.createElement("p");
        emailEle.textContent = `Email: ${email}`;
        return [
            headerEle,
            positionEle,
            phoneNumberEle,
            emailEle,
        ];
    };
    const pageHeader = document.createElement("h1");
    pageHeader.textContent = "Contct Us";
    const contacts = [
        CreateContact("Emma Waters", "General Manager", "(555) 123-4567", "emma.waters@oceanscatch.com"),
        CreateContact("Jack Fisher", "Head Chef", "(555) 987-6543", "jack.fisher@oceanscatch.com"),
        CreateContact("Sarah Tidewell", "Event Coordinator", "(555) 555-7890", "sarah.tidewell@oceanscatch.com"),
    ].map((current) => {
        const contactWrapper = document.createElement("div");
        contactWrapper.append(...current);
        return contactWrapper;
    });
    console.log(contacts);
    const details = document.createElement("div");
    details.className = "details";
    details.append(...contacts);
    return [
        pageHeader,
        details,
    ];
})();