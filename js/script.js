//input fields
var celsius = document.getElementById('celsius');
var fahrenheit = document.getElementById('fahrenheit');
var kelvin = document.getElementById('kelvin');

//buttons
var convert = document.getElementById('convert');
var reset = document.getElementById('reset');

//function to convert
convert.onclick = function functionConvert() {
    if(celsius.value !== ""){
        fahrenheit.value = ((parseFloat(celsius.value) * 9 / 5) + 32).toFixed(2);
        kelvin.value = (parseFloat(celsius.value) + 273.15).toFixed(2);

    } else if( fahrenheit.value !== ""){
        celsius.value = ((parseFloat(fahrenheit.value) - 32) * 5 / 9).toFixed(2);
        kelvin.value = ((parseFloat(fahrenheit.value)- 32) * 5 / 9 + 273.15).toFixed(2);

    } else if(kelvin.value !== ""){
        celsius.value = (parseFloat(kelvin.value) - 273.15).toFixed(2);
        fahrenheit.value = ((parseFloat(kelvin.value) - 273.15) * 9 /5 + 32).toFixed(2);
    }
     
};

//function to reset
reset.onclick = function functionReset(){
    celsius.value = "";
    fahrenheit.value = "";
    kelvin.value = "";

}