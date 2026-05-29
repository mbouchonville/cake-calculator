console.log("Prices loaded!");

const saveButton = document.getElementById("savePricesButton");

saveButton.addEventListener("click", savePrices);

function savePrices() {

    let prices = {

        cakeMixPrice: document.getElementById("cakeMixPrice").value,
        
        butterPrice: document.getElementById("butterPrice").value,
        butterAmount: document.getElementById("butterAmount").value,

        milkPrice: document.getElementById("milkPrice").value,
        milkAmount: document.getElementById("milkAmount").value,

        eggPrice: document.getElementById("eggPrice").value,
        eggAmount: document.getElementById("eggAmount").value,

        powderedSugarPrice: document.getElementById("powderedSugarPrice").value,
        powderedSugarAmount: document.getElementById("powderedSugarAmount").value
    };

    localStorage.setItem("ingredientPrices", JSON.stringify(prices));

    console.log("Prices saved!");
}

function loadPrices() {

    let savedPrices = JSON.parse(localStorage.getItem("ingredientPrices"));

    console.log(savedPrices);

    if (savedPrices) {

        document.getElementById("cakeMixPrice").value = savedPrices.cakeMixPrice || "";

        document.getElementById("butterPrice").value = savedPrices.butterPrice || "";

        document.getElementById("butterAmount").value = savedPrices.butterAmount || "";

        document.getElementById("milkPrice").value = savedPrices.milkPrice || "";

        document.getElementById("milkAmount").value = savedPrices.milkAmount || "";

        document.getElementById("eggPrice").value = savedPrices.eggPrice || "";

        document.getElementById("eggAmount").value = savedPrices.eggAmount || "";

        document.getElementById("powderedSugarPrice").value = savedPrices.powderedSugarPrice || "";

        document.getElementById("powderedSugarAmount").value = savedPrices.powderedSugarAmount || "";
    }
}

loadPrices();