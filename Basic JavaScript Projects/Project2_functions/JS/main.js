
function myFunction(){
    var str= "You will see this in red!"
    var result = str.fontcolor("red");
    document.getElementById("myEvent").innerHTML=result;

}

function myFunction(){
    var sentence= "I am learning";
    sentence += " a lot from this book!"
    document.getElementById("Concatenate").innerHTML = sentence; //inside html of p element becomes variable sentence
}