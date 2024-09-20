export const home = (function() {
    const h1 = document.createElement("h1");
    h1.appendChild(document.createTextNode("Ocean's Catch Restaurant"));
    const description = document.createElement("div");
    description.className = "description";
    description.appendChild(document.createTextNode("At Ocean's Catch, we pride ourselves on serving the freshest seafood, straight from the ocean to your plate. Whether you're a fan of grilled fish, fried favorites, or savory seafood stews, we have something to satisfy every palate. Our chefs prepare every dish with passion and precision, ensuring a flavorful dining experience for all seafood lovers.Come enjoy our cozy atmosphere, friendly service, and a taste of the sea right here in the heart of the city!"))
    const workHoursPs = ["", "", "", ""].map(() => document.createElement("p"));
    workHoursPs[0].className = "header";
    workHoursPs[0].textContent = "Hours"
    workHoursPs[1].textContent = "Monday - Thursday: 11:00 AM - 9:00 PM";
    workHoursPs[2].textContent = "Friday - Saturday: 11:00 AM - 10:00 PM";
    workHoursPs[3].textContent = "Sunday: Closed";
    const workHours = document.createElement("div");
    workHours.className = "work-hours";
    workHours.append(...workHoursPs);
    const locationPs = ["", "", "", ""].map(() => document.createElement("p"));
    locationPs[0].className = "header";
    locationPs[0].textContent = "Location";
    locationPs[1].textContent = "Ocean's Catch,";
    locationPs[2].textContent = "123 Harbor Lane,";
    locationPs[3].textContent = "Coastal City, CA 90210";
    const location = document.createElement("div");
    location.className = "location";
    location.append(...locationPs);
    const details = document.createElement("div");
    details.className = "details";
    details.append(description, workHours, location);
    return {
        h1,
        details,
    }
})();