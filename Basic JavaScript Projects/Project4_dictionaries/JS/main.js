
function my_Dictionary(){
    //create a class with key value pairs
    var Animal ={
        Species:"Dog", 
        Color:"Red", 
        Breed:"Labrador", 
        Age: 5, 
        Sound: "Bark!"
    };
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}

//boolean isNaN("")
    function my_Test(){
        document.getElementById("Test").innerHTML=isNaN("hello");
    }
//why is this not working?
    function my_Test1(){
        document.getElementById("Test1").innerHTML=isNaN("007");
    }

    document.write(2E309); //positive infinity
    document.write(3E309); //negative infinity
    //delete Animal.Sound; //word operator
    
    //document.write(typeof 5);
    //document.write(typeof "hello");

   
   
