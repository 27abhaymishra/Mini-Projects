function febb(){
    let n = parseInt(document.getElementById("feb").value);
        let feb1 = 1; //
        let feb2 = 1;
          let sum = 0;
        for(let i = 3; i<=n; i++){
             sum = feb1 + feb2;
            
           feb1 = feb2;
             
              feb2= sum;
              document.getElementById("print").innerHTML = `sum is  ${sum}`;
          
        }
       

}