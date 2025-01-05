
function calc(){
    let p = parseInt(document.getElementById('p').value);
    let i = parseInt(document.getElementById('I').value);
    let t = parseInt(document.getElementById('T').value);

    let loan = (p*i*(t/12))/100
   let emi =  (p+loan)/12
   alert(emi);
  
       }