var col1 = document.querySelector(".color1");
var col2 = document.querySelector(".color2");
var h3 = document.querySelector("h3");
var body = document.getElementById("gradient");
function setGradientRt(){
    body.style.background = "linear-gradient(to right, "+col1.value + ","
    +col2.value+")";
    h3.textContent =body.style.background + ";";
    
}
function setGradientLt(){
    body.style.background = "linear-gradient(to left, "
    +col2.value+","+col1.value+")";
    h3.textContent = body.style.background + ";";
}
col1.addEventListener("input",setGradientRt);
col2.addEventListener("input",setGradientLt);