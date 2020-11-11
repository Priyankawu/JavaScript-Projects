function addition(){
    var answer=2+2;
    document.getElementById("Math").innerHTML = "2+2 ="+ answer;
} //not working

function subtraction(){
    var answer = 10-2;
    document.getElementById("sub").innerHTML = "10-2 =" +answer;
}

function multiplication(){
    var answer = 3*8;
    document.getElementById("mult").innerHTML = "3*8 ="+answer;
}
function division(){
    var answer = 24/12;
    document.getElementById("divi").innerHTML = "24/12 = "+answer;
}

function more_Math(){
    var simple_Math = (1+2) *10 /2-5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals "+ simple_Math;
}

function modulus_Operator(){
    var simple_Math = 25 % 3;
    document.getElementById("Math").innerHTML = "when you divide 25 by 3 you have a remainder of: " + simple_Math ;
}

function negate(){
    var answer = 10;
    document.getElementById("Math").innerHTML = -answer;
}

function increment(){
    var x=5;
    x++;
    document.write(x); //erases everything else
}

function decrement(){
    var x = 5.25;
    x--;
    document.write(x);
}

window.alert(Math.random()); //gives value between 0 and 1
window.alert(Math.random()*100); //Math ovject, random function
