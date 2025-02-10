let btn = document.querySelector("#back");
btn.addEventListener("click" , function() {

    let randomcolor = getRandomColor();
  let p =   document.getElementById("ans");
  p.innerHTML = ` Code of Background-color:   ${randomcolor}`;
    document.body.style.backgroundColor = randomcolor;
   

});

function getRandomColor(){
    let red = Math.floor( Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
     let color = `rgb(${red} , ${green}, ${blue})`;  
     return color;
}