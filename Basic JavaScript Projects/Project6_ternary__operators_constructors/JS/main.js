function Ride_Function() {
    var Height, Can_ride;
    Height= document.getElementById("Height").value;
    Can_ride = (Height<52) ? "You are too short": "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride +" to ride ";
}

function Check_voting_eligibility(){
    //get the user input
    var user_age, Can_vote;
    user_age = document.getElementById("age").value;
    Can_vote = (user_age < 18) ? "You are not old enough to vote ": "You can vote!";
    document.getElementById("toPrint").innerHTML= Can_vote + "Check done.";
}

//This is the constructor
function Vehicle(Make, Model, Year, Color){
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Ab = new Vehicle("Dodge", "Viper", 2020, "Red");
var Bc = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Cd = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Ab drives a "+Ab.Vehicle_Color + "-colored "+Ab.Vehicle_Model + " manufactured in "+Ab.Vehicle_Year;
}

//defining a constructor: 
function construct(FirstName, LastName, Age){
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.Age = Age;
}
//Making construct objects: instantiating the objects
var Person1 = new construct("Bob", "Harvey", 29);
var Person2 = new construct("Amanda", "Blue", 78);
var Person3 = new construct("Bailey", "Smith", 11);

document.write(Person1.FirstName + " "+Person2.LastName);

//Prints the Person details
function makePerson(){
    document.getElementById("New_and_This").innerHTML = "This is Person2: "+Person2.FirstName + " "+Person2.LastName;
}

//or you can nest this function in nesty() after the first line.
function Count(){
    var Starting_point = 9;
    function Plus_one(){
        Starting_point +=1;
    }
    Plus_one();
    return Starting_point;
}

//nested function
function nesty(){
    document.getElementById("Nested_function").innerHTML = Count();
}
    


