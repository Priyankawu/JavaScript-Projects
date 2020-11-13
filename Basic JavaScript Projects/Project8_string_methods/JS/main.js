//string.concat(string1, string2, string3) function to join several strings
function full_Sentence(){
    var part_1 =  "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence ";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("concatenate").innerHTML = whole_sentence;
}

//string.slice() method for strings
function slice_Method(){
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML=Section;
}

//document.write("hello".toUpperCase());
var str = "This is a string to locate and experiment with";
//document.write(str.search("locate"));

function string_Method(){
    var x= 140;
    var xtos = x.toString();
    document.getElementById("Numbers_to_string").innerHTML = xtos;
}

//not working
function precision_Method() {
    var x = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = x.toPrecision(10);
}