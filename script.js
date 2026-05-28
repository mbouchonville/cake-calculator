console.log("Calculator loaded!");
function calculateIngredients() {

    //CAKE MIX
        let cakeMixPrice = Number(document.getElementById("cakeMixPrice").value);

        let cakeMixUsed = Number(document.getElementById("cakeMixUsed").value);

        let cakeMixCost = (cakeMixUsed*cakeMixPrice);

    //BUTTER
        let butterPrice = Number(document.getElementById("butterPrice").value);

        let butterPackageAmount = Number(DocumentTimeline.getElementById("butterPackageAmount").value);

        let butterUsed = Number(document.getElementById("butterUsed").value)

        let butterCost = (butterUsed/butterPackageAmount) * butterPrice;

    //MILK
        let milkPrice = Number(document.getElementById("milkPrice").value);

        let milkContainerAmount = Number(document.getElementById("milkContainerAmount").value);

        let milkUsed = Number(document.getElementById("milkUsed").value);

        let milkCost = (milkUsed/milkContainerAmount) * milkPrice;

    //EGGS
        let eggPrice = Number(document.getElementById("eggPrice").value);

        let eggCartonAmount = Number(document.getElementById("eggCartonAmount").value);

        let eggsUsed = Number(document.getElementById("eggsUsed").value);

        let eggCost = (eggsUsed/eggCartonAmount)*eggPrice;

    //POWDERED SUGAR
        let powderedSugarCost = Number(document.getElementById("powderedSugarCost").value);

        let powderedSugarAmount = Number(document.getElementById("powderedSugarAmount").value);

        let powderedSugarUsed = Number(document.getElementById("powderedSugarUsed").value);

        let powderedSugarCost = (powderedSugarUsed/powderedSugarAmount) * powderedSugarCost;

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