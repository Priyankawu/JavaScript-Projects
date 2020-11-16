
function Call_Loop(){
    var count = 0;
    var inner = "This is the 0-9 count: ";
    while (count < 10){
        inner = inner + "<br>" +count;
        document.getElementById("Loop").innerHTML = inner;
        count++;
    }
}

//return statement
function five(){
    var x = 5;
    return x;
}

function helper(){
    document.getElementById("ret").innerHTML = five();
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content="";
var Y;
function for_Loop(){
    for(Y = 0; Y < Instruments.length; Y++) {
        Content = Content +Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is "+
    Cat_Picture[2] + ".";
}

//not working, not printing anything
function constant_function(){
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue"; //changing a property's value
   Musical_Instrument.price = "$900"; //adding a property with a value;
    
    document.getElementById("Constant").innerHTML = "The cost of the "+Musical_Instrument.type + " was "+Musical_Instrument.price;
   
}

//U cannot reassign a const
//const X = 10;
//X = 2; Error: Assignment to constant variable
//document.write(X);

//U can reassign a var
//var A = 10;
//A = 7;
//document.write(A);
//? Why are these not printing? 
//var x = 82;
//document.getElementById("let_try").innerHTML = "x";

//{
   // let x = 33;
   // document.getElementById("let_try").innerHTML = "x";
//}
//document.getElementById("let_try").innerHTML = "x";

let car = {
    make: "Dodge",
    model: "Viper",
    year: "2021",
    color: "red",
    description: function(){
        return "The car is a "+this.year+this.color+this.make+this.model;
    }
};
document.getElementById("Car_Object").innerHTML=car.description();

//break - for loops
function break_loop(){
    var str = "Print this: ";
    for (i=0; i<10; i++){
        if(i==6) {break;}   //will print upto 5
        str = str+i +"<br>";
        document.getElementById("breaky").innerHTML = str;
    }
}

//continue - for loops
function continue_loop(){
    var str = "This is to continue the loop: ";
    for(i=0; i<10; i++){
        if(i ==  6) { continue;}  //will print 0-9 except 6
        str = str + i + "<br>";
        document.getElementById("conti").innerHTML = str;
    }
}