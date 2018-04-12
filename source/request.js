var form = document.getElementById("form-request")

//Setup listener
form.addEventListener("change",calculateTotal);
function calculateTotal()
{
var food_styles = form.getElementsByClassName("food-style");
var driver_tips = form.getElementsByClassName("driver-tip");
var total= 0;

console.log(food_styles);
console.log(driver_tips);
//Determine food cost
for(var x = 0 ; x < food_styles.length; x++)
{
    console.log(food_styles[x]);
    console.log(food_styles[x].checked);
    if(food_styles[x].checked === true){
        total = Number(food_styles[x].value);
    }
}

//check which tip percentage is chosen.
for( var x = 0 ; x < driver_tips.length; x++){
    if(driver_tips[x].checked === true){
        total += Number(driver_tips[x].value/100 * total);
    }
}

//change the total on the page
document.getElementById("total").innerHTML = total.toFixed(2);
}
