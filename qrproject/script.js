let inputtext = document.getElementById("inputtext");
let imgqr = document.getElementById("imgqr");

function generateqr(){
     imgqr.src = "//api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputtext.value;
}