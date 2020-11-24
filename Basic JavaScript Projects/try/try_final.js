//gt(0): select all elements > 0 and hide them
$("#slideshow > div:gt(0)").hide();

// setInterval(function(), time): executes the given function multiple times every 3sec
// until clearInterval called or window closed.
setInterval(function() {
     //how does below work??
     $('#slideshow > div:first') //first div in slideshow
     .fadeOut(1000)
     .next()        //returns object with 2 properties-- done, value
     .fadeIn(1000)
     .end()         //return matched element of previous state
     .appendTo('#slideshow');}, 2000);
//-------------------------------------------------------------------
//open the popup Form
function openForm(){
     document.getElementById("myForm").style.display = "block";
}
//close the popup Form
function closeForm() {
     document.getElementById("myForm").style.display = "none";        
}