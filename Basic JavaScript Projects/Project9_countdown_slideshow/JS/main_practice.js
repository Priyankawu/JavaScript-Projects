
function countdown(){
    var seconds = document.getElementById("seconds").value;
    console.log(seconds);
    function tick(){
        seconds=seconds-1;
        document.getElementById("timer").innerHTML = seconds;
        setTimeout(tick,1000); //recursion, setTimeout: program pauses for that much time.
        if(seconds == -1){      //? how is this executed everytime? or what tells it to do tick again?
            alert("Time's up!");
        }
    }
    tick();
}