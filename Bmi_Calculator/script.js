function bmi(){
    const a = parseFloat(document.getElementById("height").value);
    const b = parseFloat(document.getElementById("weight").value);

    const bmi = (b / (a*a));

    if(bmi < 16){
         document.getElementById("print").innerHTML ="Severe Thinness" ;
       
    }
    else if(bmi >= 18.5 && bmi<=25){
         document.getElementById("print").innerHTML ="Normal" ;

    }
    else if(bmi > 26){
        document.getElementById("print").innerHTML ="Over weight" ;
        
    }
    else{
         document.getElementById("print").innerHTML ="Obesity" ;
        
    }

}