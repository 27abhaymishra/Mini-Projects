let counter = 0 ;
function plus(){
    parseInt(document.getElementById("print").innerHTML = ++counter);
}
function minus(){
    parseInt(document.getElementById("print").innerHTML = --counter);
}
function reset(){
    counter = 0 ;
    parseInt(document.getElementById("print").innerHTML = 0);
}