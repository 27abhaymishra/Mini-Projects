let rand = Math.floor(Math.random() * 100);
let count = 10 ;
     function guess(){
      let number = parseInt(document.getElementById("num1").value) ;
      count--;

      if(count < 0){
         alert("your chance is over !")
         return ;
      }else{
          document.getElementById("ans").innerHTML = "number of chances left : " + count;
      if(rand == number){
          document.getElementById("ans").innerHTML = "Yeppp you guess correctly !! "
      }else if( number > rand){
          alert("guess lower !!!");
      }else{
          alert("guess higher !!!");
      }
      }
      }