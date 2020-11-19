// This function calculates the price of the pizza chosen.
function getReceipt() {
    var text1 = "<h3>You Ordered:</h3>";
    var sizeTotal = 0;
    var runningTotal = 0;
    //[input.size, input.size, input.size, input.size, input.size]
    var sizeArray = document.getElementsByClassName("size");
    for (var i=0; i < sizeArray.length; i++) { //a , instead of a ; caused 25 minutes of debugging :(
       
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>"; //put br in quotes
         }
    }
    // match the chosen pizza and set it's price. 
    if(selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    }
    if(selectedSize === "Small Pizza") {
        sizeTotal = 8;
    }
    if(selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    }
    if(selectedSize === "Large Pizza") {
        sizeTotal = 14;
    }
    if(selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;

    console.log(selectedSize+ " =$" +sizeTotal+ ".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $" +runningTotal+ ".00");
    getTopping(runningTotal,text1);
}

//***********************************************************//
// This function calculates the total number of toppings chosen and 
 // displays the Total price of the pizza.
function getTopping(runningTotal, text1) {
    // this variable tells how much money for toppings
    var toppingTotal = 0;
    var selectedToppings = [];
    var toppingArray = document.getElementsByClassName("toppings");
    
    for (var j=0; j<toppingArray.length; j++) {
        if(toppingArray[j].checked) {
            selectedToppings.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value + "<br>";
        }
    }
    //number of toppings
    var toppingCount = selectedToppings.length;
    
    if(toppingCount > 1) {
        toppingTotal = (toppingCount-1);    // only charge for >1 toppings
    }
    else {
        toppingTotal = 0;                   //one free topping
    }
    
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount + " topping - 1 free topping = "+"$"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$" + runningTotal +".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal+".00"+"</strong></h3>";
}

/*********************************** DONE! *********************************/