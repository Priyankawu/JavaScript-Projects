var Total = 0;

var tip = 0;

function display(){
   console.log(Total);
   //custom tip has priority
   custom_tip();
   document.getElementById("Total").value=Total; 
}

//calculates the Total amount after tip
function calculate_tip(n){
    Total = 0;
    var cost = parseInt(document.getElementById("Cost").value);
    console.log("cost was: "+document.getElementById("Cost").value);
   //parseInt(string) changes string to int
    
    console.log("tip is: "+ n);
    console.log("cost is "+cost);
    tip = cost * (n/100);
    console.log("tip "+tip);
    Total = cost+tip;
    console.log("cost+tip"+Total);
    
}

//??? not working
function clear(){
    console.log("hello");
    var arr = document.getElementsByTagName("input");
    console.log(" the arr is "+arr);
    var len = arr.length;
    if (len>0){
        for (var i=0; i<len; i++) {
            arr[i].value="";
        }
    }
}

//calculates the Total amount after tip
function custom_tip(){
    Total = 0;
    if (document.getElementById("percentage").checked || document.getElementById("dollars").checked) {
        var n = document.getElementById("custom").value;
        var cost = parseInt(document.getElementById("Cost").value);
    //var tip;
    //if % is checked, calculate that
        if(document.getElementById("percentage").checked) {
            tip = cost * (n/100);
            console.log("custom percentage tip: "+tip);
       
        }
         else if(document.getElementById("dollars").checked){
             tip = parseInt(n);
            console.log("custom tip: "+tip);
        }
    Total = cost +tip;
    }
}