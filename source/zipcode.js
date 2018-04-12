var zipcode = document.getElementById("zipcode-button");
var zip_input = document.getElementById("zipcode");

zipcode.addEventListener("click", checkZipcode);

var zipcodes = ["75961", "75965", "77084"];


function checkZipcode()
{
    for(var x = 0 ; x < zipcodes.length; x++){
        if(zip_input.value == zipcodes[x])
        {
            return;
        }
    }

    //Zipcode not found.
    window.alert(zip_input.value + " is out of our delivery area.");
}