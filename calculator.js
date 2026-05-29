console.log("Calculator loaded!");

let savedPrices =
    JSON.parse(localStorage.getItem("ingredientPrices"));

if (!savedPrices) {
    alert("No saved prices found!");
}

    function calculateIngredients() {

    //CAKE MIX
        let cakeMixPrice = Number(savedPrices.cakeMixPrice);

        let cakeMixUsed = Number(document.getElementById("cakeMixUsed").value);

        let cakeMixCost = cakeMixUsed * cakeMixPrice;

    //BUTTER
        let butterPrice = Number(savedPrices.butterPrice);

        let butterAmount = Number(savedPrices.butterAmount);

        let butterUsed = document.getElementById("butterUsed").value;

        let butterCost = (butterUsed/butterAmount) * butterPrice;

    //MILK
        let milkPrice = Number(savedPrices.milkPrice);

        let milkAmount = Number(savedPrices.milkAmount);

        let milkUsed = Number(document.getElementById("milkUsed").value);

        let milkCost = (milkUsed/milkAmount) * milkPrice;

    //EGGS
        let eggPrice = Number(savedPrices.eggPrice);

        let eggAmount = Number(savedPrices.eggAmount);

        let eggsUsed = Number(document.getElementById("eggsUsed").value);

        let eggCost = (eggsUsed/eggAmount) * eggPrice;

    //POWDERED SUGAR
        let powderedSugarPrice = Number(savedPrices.powderedSugarPrice);

        let powderedSugarAmount = Number(savedPrices.powderedSugarAmount);
        
        let powderedSugarUsed = Number(document.getElementById("powderedSugarUsed").value);

        let powderedSugarCost = (powderedSugarUsed/powderedSugarAmount) * powderedSugarPrice;
    //TOTAL
    let total =
        cakeMixCost +
        butterCost +
        milkCost +
        eggCost +
        powderedSugarCost;

    document.getElementById("ingredientTotal").innerText =
        "Ingredient Total: $" + total.toFixed(2);
}