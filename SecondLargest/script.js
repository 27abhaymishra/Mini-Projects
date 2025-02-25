function SecondLargest(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let num3 = parseInt(document.getElementById("num3").value);

    let sum = num1 + num2 + num3;
    let largest = Math.max(num1 , num2, num3);
      let smallest = Math.min(num1 , num2, num3);

      let secondlargest = sum - (largest + smallest);
      document.getElementById("ans").innerHTML =  "Second Largest Number is : " + secondlargest;
}
