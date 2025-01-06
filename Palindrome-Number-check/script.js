function palindrome(){
    let n = parseInt(document.getElementById("num1").value);

    let rev = 0;
    let dummy = n;
    
    while(n != 0){
        let rem = n % 10;
        rev = rev * 10 + rem;
        n = Math.floor(n / 10);
    }
    if( dummy == rev){
        document.getElementById("print").innerHTML = "Palindrome"
    }else{
        document.getElementById("print").innerHTML = "Not Palindrome"
    }
   }
