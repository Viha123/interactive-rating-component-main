var counter = 0;
const arr = new Array();
var finalElemenent;
function ratingSelected(ele){
    ele.style.backgroundColor = "hsl(216, 12%, 54%)";
    counter++;
    arr.push(ele);    
    if (counter==2){
        element1 = arr.shift();
        element1.style.backgroundColor = "hsl(216, 12%, 8%)";
        counter = 1;
    }    
    return finalElemenent;
}

function thankYouCard(){
    location.href = "/thankYou.html";
}
function selection(){
    console.log(arr[0].innerHTML);
    if(finalElemenent == "1" || finalElemenent == 1){
        document.getElementById("id").innerHTML = "You selected 1 / 5"
    }
    else if(finalElemenent == "2" || finalElemenent == 2){
        document.getElementById("id").innerHTML = "You selected 2 / 5"
    }
    else if(finalElemenent == "3" || finalElemenent == 3){
        document.getElementById("id").innerHTML = "You selected 3 / 5"
    }
    else if(finalElemenent == "4" || finalElemenent == 4){
        document.getElementById("id").innerHTML = "You selected 4 / 5"
    }
    else if(finalElemenent == "5" || finalElemenent == 5){
        document.getElementById("id").innerHTML = "You selected 5 / 5"
    }
}
    