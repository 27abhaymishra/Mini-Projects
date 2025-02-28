let count = 0;
      
let a = 16;
let b = 2;

function sum(){
 
 document.getElementById("ans").innerHTML = ++count;
 document.getElementById("para").style.fontSize = (a + count * b) + "px";


}
function minus(){
 document.getElementById("ans").innerHTML = --count;
 document.getElementById("para").style.fontSize = (a + count * b) + "px";

}