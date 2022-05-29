var counter = 0;
const arr = new Array();
var finalElement = new Array(); 
var element1;
function ratingSelected(ele){
    ele.style.backgroundColor = "hsl(216, 12%, 54%)";
    counter++;
    arr.push(ele);  
    finalElement.push(ele);  
    if (counter==2){
        element1 = arr.shift();
        element1.style.backgroundColor = "hsl(216, 12%, 8%)";
        counter = 1;
    }
    console.log(finalElement);    
}

var s = document.getElementById("submit");
s.addEventListener("click", function(){
    document.getElementById("card1").style.display = "none";
    document.getElementById("card2").style.display = "flex";

    document.getElementsByTagName("changeValue")[0].innerHTML = finalElement.pop().innerHTML;
})