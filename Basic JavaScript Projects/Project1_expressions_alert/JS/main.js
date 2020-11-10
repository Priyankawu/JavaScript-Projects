window.alert("Pop-up window");
document.write("Hello, world!");
var A = " Priyanka ";
var B=" Thakan ";
var name=A+B;               //concatenates the strings
document.write(name);
name = name.fontcolor("red"); //colors the font red
document.write(name);
var add = 3+5;
document.write(add);
document.write(" hello again");


function My_First_Function(){       //defining a function and naming it
    var str="This text is green!";  //defining a variable and giving it sting value
    var result=str.fontcolor("green");//Using the fontcolor method on str variable
    document.getElementById("Green_Text").innerHTML = result; //putting result value in HTML element that has id "Green_Text"
}