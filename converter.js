
var toCelsius = document.getElementById("toCelsius");
var toFahrenheit = document.getElementById("toFahrenheit");
var submitButton = document.getElementById("submit");
var output = document.getElementById("ouput");
var clearButton = document.getElementById("clear");

submitButton.addEventListener("click", buttonFunction);
toCelsius.addEventListener("checked", celsiusFunction);
toFahrenheit.addEventListener("checked", fahrenheitFunction);


function buttonFunction() {
  if (document.getElementById("toCelsius").checked) {
    celsiusFunction();
    console.log("celsius checked");
  } else if (document.getElementById("toFahrenheit").checked) {
    fahrenheitFunction();
    console.log("fahrenheit checked");
  }
}


var userInput = document.getElementById("userInput");

userInput.addEventListener("input", inputFunction);

function inputFunction() {
  console.log("input entered");
}



function celsiusFunction() {
  var inputVariable = userInput.value;
  console.log(inputVariable);
  var celsiusEquation = ((inputVariable - 32) / 1.8);
  console.log(celsiusEquation);
  document.getElementById("output").innerHTML = celsiusEquation;
}


function fahrenheitFunction() {
  var inputVariable = userInput.value;
  console.log(inputVariable);
  var fahrenheitEquation = ((inputVariable * 1.8) + 32);
  console.log(fahrenheitEquation);
  document.getElementById("output").innerHTML = fahrenheitEquation;
}



