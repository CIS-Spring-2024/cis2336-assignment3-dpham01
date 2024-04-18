function validateForm() {
    let isValid = true;

    const loc =  document.getElementById("location").value;

    let breakfastBurrito = parseInt(document.getElementById("breakfastBurrito").value) * 7;
    let breakfastSandwich = parseInt(document.getElementById("breakfastSandwich").value) * 6;
    let friedChickenWaffles = parseInt(document.getElementById("friedChickenWaffles").value) * 10;

    let friedChickenSandwich = parseInt(document.getElementById("friedChickenSandwich").value) * 8;
    let chickenCaesarSalad = parseInt(document.getElementById("chickenCaesarSalad").value) * 9;
    let cheeseburger = parseInt(document.getElementById("cheeseburger").value) * 7;

    let chickenRiceBowl = parseInt(document.getElementById("chickenRiceBowl").value) * 13;
    let tofuRiceBowl = parseInt(document.getElementById("tofuRiceBowl").value) * 10;
    let steakRiceBowl = parseInt(document.getElementById("steakRiceBowl").value) * 15;

    let total = breakfastBurrito + breakfastSandwich + friedChickenSandwich + friedChickenWaffles + chickenCaesarSalad + cheeseburger + chickenRiceBowl + tofuRiceBowl + steakRiceBowl
    
    if(total <= 0){
        alert("Your order was not processed due to an empty cart");
    }
    else{
        if(confirm("Confirm you order total of $" + total + " at "+ loc + "?")){
            alert("Your order has been received, $" + total + " has been deducted from your student account. It will be ready for pick up from " + loc + " in approx. 15 minutes.");
        }
        else{
            alert("Order has been canceled");
        }
    }

    return isValid;
}