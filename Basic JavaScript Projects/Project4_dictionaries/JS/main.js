
function my_Dictionary(){
    //create a class with key value pairs
    var Animal ={
        Species:"Dog", 
        Color:"Red", 
        Breed:"Labrador", 
        Age: 5, 
        Sound: "Bark!";

    };
    //delete Animal.Sound; //word operator
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}