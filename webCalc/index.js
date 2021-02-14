var numberOnDisplay = document.querySelector("h1.display");
var zeroB = document.querySelectorAll("button.numButtons")[9];
var oneB = document.querySelectorAll("button.numButtons")[6];
var twoB = document.querySelectorAll("button.numButtons")[7];
var threeB = document.querySelectorAll("button.numButtons")[8];
var fourB = document.querySelectorAll("button.numButtons")[3];
var fiveB = document.querySelectorAll("button.numButtons")[4];
var sixB = document.querySelectorAll("button.numButtons")[5];
var sevenB = document.querySelectorAll("button.numButtons")[0];
var eightB = document.querySelectorAll("button.numButtons")[1];
var nineB = document.querySelectorAll("button.numButtons")[2];
var clearB = document.querySelectorAll("button")[0];
var deleteB = document.querySelectorAll("button")[1];
var upendB = document.querySelectorAll("button")[2];
var squaredB = document.querySelectorAll("button")[3];
var rootB = document.querySelectorAll("button")[4];
var divideB = document.querySelectorAll("button")[5];
var multiplyB = document.querySelectorAll("button")[9];
var subctractB = document.querySelectorAll("button")[13];
var addB = document.querySelectorAll("button")[17];
var signB = document.querySelectorAll("button")[18];
var dotB = document.querySelectorAll("button")[20];
var equalB = document.querySelectorAll("button")[21];

zeroB.addEventListener("click", function(){numberOnDisplay.innerHTML = numberOnDisplay.textContent + "0"});
oneB.addEventListener("click", function(){numberOnDisplay.innerHTML = numberOnDisplay.textContent + "1"});
twoB.addEventListener("click", function(){numberOnDisplay.innerHTML = numberOnDisplay.textContent + "2"});
threeB.addEventListener("click", function(){numberOnDisplay.innerHTML = numberOnDisplay.textContent + "3"});
fourB.addEventListener("click", function(){numberOnDisplay.innerHTML = numberOnDisplay.textContent + "4"});
fiveB.addEventListener("click", function(){numberOnDisplay.innerHTML = numberOnDisplay.textContent + "5"});
sixB.addEventListener("click", function(){numberOnDisplay.innerHTML = numberOnDisplay.textContent + "6"});
sevenB.addEventListener("click", function(){numberOnDisplay.innerHTML = numberOnDisplay.textContent + "7"});
eightB.addEventListener("click", function(){numberOnDisplay.innerHTML = numberOnDisplay.textContent + "8"});
nineB.addEventListener("click", function(){numberOnDisplay.innerHTML = numberOnDisplay.textContent + "9"});
dotB.addEventListener("click", function(){numberOnDisplay.innerHTML = numberOnDisplay.textContent + "."});
clearB.addEventListener("click", function(){numberOnDisplay.innerHTML = "<div class='stand-display-div'></div>"});
deleteB.addEventListener("click", function(){
    if (Number(numberOnDisplay.textContent.length) != 1) {
      numberOnDisplay.innerHTML = numberOnDisplay.textContent.slice(0, (numberOnDisplay.textContent.length-1));
    } else {
      numberOnDisplay.innerHTML = "<div class='stand-display-div'></div>";
    }
});

var operationCode = 0;
var num1, num2;
// //1 -add | 2-subctract | 3-multiply | 4-divide | 5-square
addB.addEventListener("click", function(){
  num1 = Number(numberOnDisplay.textContent);
  numberOnDisplay.innerHTML = "<div class='stand-display-div'></div>"
  operationCode = 1;
});
subctractB.addEventListener("click", function(){
  num1 = Number(numberOnDisplay.textContent);
  numberOnDisplay.innerHTML = "<div class='stand-display-div'></div>"
  operationCode = 2;
});
multiplyB.addEventListener("click", function(){
  num1 = Number(numberOnDisplay.textContent);
  numberOnDisplay.innerHTML = "<div class='stand-display-div'></div>"
  operationCode = 3;
});
divideB.addEventListener("click", function(){
  num1 = Number(numberOnDisplay.textContent);
  numberOnDisplay.innerHTML = "<div class='stand-display-div'></div>"
  operationCode = 4;
});

equalB.addEventListener("click", function(){
  num2 = Number(numberOnDisplay.textContent);
  switch (operationCode) {
    case 1:
      numberOnDisplay.innerHTML = num1 + num2;
      break;
    case 2:
      numberOnDisplay.innerHTML = num1 - num2;
      break;
    case 3:
      numberOnDisplay.innerHTML = num1 * num2;
      break;
    case 4:
      numberOnDisplay.innerHTML = num1 / num2;
      break;
    default:
      numberOnDisplay.innerHTML = "Error";
  }
});
