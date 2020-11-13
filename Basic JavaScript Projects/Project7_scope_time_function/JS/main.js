

function add_ten(){
    var x=25;
    document.write(x+10);
 }

 function add_twenty(){
    document.write(x+20);
 }

add_ten();
add_twenty();

if(14>2){
    document.write("The left number is smaller thatn the number on the right.")
}

function get_Date(){
    var d= new Date();
    var hours = d.getHours();
    if (hours < 20) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function compare_to_ten(a){
    if (a<10){
        document.write("Yes, your number " + a + "   is less than ten.");
    }   
    else {
        document.write("No, that is not true");
    }
}

function can_vote(){
    var age = document.getElementById("age").value;
    console.log(age); //to check the user input in console.
    if (age<18){
        var wait = 18-age;
        document.write("Sorry, you will have to wait "+ wait+" years"+ " to vote");
    }
    else {
        document.write("Yippee! you can exercise your right to vote.")
    }
}

function Time_right_now(){
    var d= new Date();
    var hour=d.getHours();
    var minutes=d.getMinutes();
    var seconds = d.getSeconds();
    document.write(hour + ":"+minutes+":"+seconds);
}

function Time_of_day(){
    var Time= new Date().getHours();
    console.log(Time);
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is the morning.";
    }
    else if (Time >12 == Time <18){
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time."
    }
   
    document.getElementById("Time_of_day").innerHTML = Reply;
}

