/* Variables */
const display = document.querySelector(".calculator__display h1")
const result = document.querySelector(".numresul")
const dot = document.querySelector(".numdot")
const reset = document.querySelector(".numres")
const more = document.querySelector(".nummore")
const less = document.querySelector(".numless")
const x = document.querySelector(".numx")
const slash = document.querySelector(".numslash")
const del = document.querySelector(".numdel")
const num9 = document.querySelector(".num9")
const num8 = document.querySelector(".num8")
const num7 = document.querySelector(".num7")
const num6 = document.querySelector(".num6")
const num5 = document.querySelector(".num5")
const num4 = document.querySelector(".num4")
const num3 = document.querySelector(".num3")
const num2 = document.querySelector(".num2")
const num1 = document.querySelector(".num1")
const num0 = document.querySelector(".num0")

/* Event */
result.addEventListener("click", countResult)
dot.addEventListener("click", numDot)
reset.addEventListener("click", delet)
more.addEventListener("click", mathOperator)
less.addEventListener("click", mathOperator)
x.addEventListener("click", mathOperator) 
slash.addEventListener("click", mathOperator)
del.addEventListener("click", delet)
num9.addEventListener("click", displayNum)
num8.addEventListener("click", displayNum)
num7.addEventListener("click", displayNum)
num6.addEventListener("click", displayNum)
num5.addEventListener("click", displayNum)
num4.addEventListener("click", displayNum)
num3.addEventListener("click", displayNum)
num2.addEventListener("click", displayNum)
num1.addEventListener("click", displayNum)
num0.addEventListener("click", displayNum)


/* Functions */
function displayNum(num) {
  display.innerHTML += num.currentTarget.children[0].innerHTML;
}

function delet(){
  display.innerHTML = "";
}

function numDot(){
  display.innerHTML += ".";
}

function mathOperator(num){
  if (display.innerHTML.includes("+") || display.innerHTML.includes("-") || display.innerHTML.includes("*") || display.innerHTML.includes("/")){
    return ;
  }
  display.innerHTML += " "
  display.innerHTML += num.currentTarget.children[0].innerHTML;
  display.innerHTML += " "
}


function countResult() {
   let count = eval(display.innerText)
   display.innerText = count
}