console.log("Calculator loaded!");

let savedPrices =
    JSON.parse(localStorage.getItem("ingredientPrices"));

if (!savedPrices) {
    alert("No saved prices found!");
}
// Helper function to get numeric value from input fields, defaulting to 0 if empty
function getValue(id) {
    return Number(document.getElementById(id).value) || 0;
}
    function calculateIngredients() {

    //CAKE MIX
        let cakeMixPrice = Number(savedPrices.cakeMixPrice);

        let cakeMixUsed = getValue("cakeMixUsed");

        let cakeMixCost = cakeMixUsed * cakeMixPrice;

    //BUTTER
        let butterPrice = Number(savedPrices.butterPrice);

        let butterAmount = Number(savedPrices.butterAmount);

        let butterUsed = getValue("butterUsed");

        let butterCost = (butterUsed/butterAmount) * butterPrice;

    //MILK
        let milkPrice = Number(savedPrices.milkPrice);

        let milkAmount = Number(savedPrices.milkAmount);

        let milkUsed = getValue("milkUsed");

        let milkCost = (milkUsed/milkAmount) * milkPrice;

    //EGGS
        let eggPrice = Number(savedPrices.eggPrice);

        let eggAmount = Number(savedPrices.eggAmount);

        let eggsUsed = getValue("eggsUsed");

        let eggCost = (eggsUsed/eggAmount) * eggPrice;

    //POWDERED SUGAR
        let powderedSugarPrice = Number(savedPrices.powderedSugarPrice);

        let powderedSugarAmount = Number(savedPrices.powderedSugarAmount);
        
        let powderedSugarUsed = getValue("powderedSugarUsed");

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