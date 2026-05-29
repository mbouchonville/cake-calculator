console.log("Calculator loaded!");

let savedPrices =
    JSON.parse(localStorage.getItem("ingredientPrices"));

if (!savedPrices) {
    alert("No saved prices found!");
}

    function calculateIngredients() {

    //CAKE MIX
        let cakeMixUsed = Number(savedPrices.cakeMixPrice);

    //BUTTER
        let butterUsed = Number(savedPrices.butterAmount);

    //MILK
        let milkUsed = Number(savedPrices.milkAmount);

    //EGGS
        let eggsUsed = Number(savedPrices.eggAmount);

    //POWDERED SUGAR
        let powderedSugarUsed = Number(savedPrices.powderedSugarAmount);

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