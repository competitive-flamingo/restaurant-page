import blackenedRedSnapperIcon from "./images/blackened-red-snapper.jpg";
import crispyFishChipsIcon from "./images/crispy-fish-chips.jpg";
import garlicButterRiceIcon from "./images/garlic-butter-rice.jpg";
import goldenFriesIcon from "./images/golden-fries.jpg";
import grilledAtlanticSalmonIcon from "./images/grilled-atlantic-salmon.jpg";
import lemonSeaBreezeIcon from "./images/lemon-sea-breeze.jpg";
import mangoGreenTeaIcon from "./images/mango-green-tea.jpg";
import oceanSaladIcon from "./images/ocean-salad.jpg";
import tropicalOceanCoolerIcon from "./images/tropical-ocean-cooler.jpg";
export const menu = (function(){
    function FoodElement(header, description, {src, alt}) {
        const headerEle = document.createElement("p");
        headerEle.className = "header";
        headerEle.textContent = header;
        const descriptionELe = document.createElement("p");
        descriptionELe.textContent = description;
        const imageEle = document.createElement("img");
        imageEle.src = src;
        imageEle.alt = alt;
        return [
            headerEle,
            descriptionELe,
            imageEle,
        ]
    }
    const pageHeader = document.createElement("h1");
    pageHeader.textContent = "Menu";
    const sectionHeaders = ["Beverages", "Sides", "Main Dishes"].map((current) => {
        const h2 = document.createElement("h2");
        h2.textContent = current;
        return h2;
    });

    const sectionElements = [
        FoodElement("Lemon Sea Breeze - 2$", "A refreshing blend of fresh lemon juice, mint, and sparkling water.", {src: lemonSeaBreezeIcon, alt: "Lemon Sea Breeze"}),
        FoodElement("Tropical Ocean Cooler - 3$", "Pineapple, coconut water, and a splash of lime, served chilled over ice.", {src: tropicalOceanCoolerIcon, alt: "Tropical Ocean Cooler"}),
        FoodElement("Mango Green Tea - 4$", "Pineapple, coconut water, and a splash of lime, served chilled over ice.", {src: mangoGreenTeaIcon, alt: "Mango Green Tea"}),
        FoodElement("Golden Fries - 5$", "Crispy, golden fries seasoned with sea salt.", {src: goldenFriesIcon, alt: "Golden Fries"}),
        FoodElement("Garlic Butter Rice - 6$", "Fluffy rice tossed with a garlic and butter glaze.", {src: garlicButterRiceIcon, alt: "Garlic Butter Rice"}),
        FoodElement("Ocean Salad - 7$", "A fresh mix of lettuce, cherry tomatoes, cucumber, and red onions with a lemon vinaigrette.", {src: oceanSaladIcon, alt: "Ocean Salad"}),
        FoodElement("Grilled Atlantic Salmon - 8$", "Fresh Atlantic salmon, grilled to perfection and served with lemon butter sauce.", {src: grilledAtlanticSalmonIcon, alt: "Grilled Atlantic Salmon"}),
        FoodElement("Crispy Fish & Chips - 9$", "Hand-battered cod served with golden fries and tartar sauce.", {src: crispyFishChipsIcon, alt: "Crispy Fish and Chips"}),
        FoodElement("Blackened Red Snapper - 10$", "Red snapper fillet seasoned with bold spices and served with garlic butter rice.", {src: blackenedRedSnapperIcon, alt: "Blackened Red Snapper"}),
    ].map((current) => {
        const foodWrapper = document.createElement("div");
        foodWrapper.append(...current);
        return foodWrapper;
    });
    const details = document.createElement("div");
    details.className = "details";
    for(let i = 0 ; i < sectionHeaders.length ; i++) {
        sectionElements.splice(i * 3 + i, 0, sectionHeaders[i]);
    }
    details.append(...sectionElements);
    return [
        pageHeader,
        details,
    ];
})();