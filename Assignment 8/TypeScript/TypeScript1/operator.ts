


class Arithmetic
{
  operator(a:number,b:number)
    {
 
      var addition:number,subtraction:number,multiplication:number,division:number,modulus:number;           
      addition = a + b;
      subtraction = a - b;
      multiplication = a * b;
      division = a / b;
      modulus = a % b;
      var span = document.createElement("span");
      span.innerText = "Addition Of Numbers is " + addition + "\n" +
      "Subtraction Of Numbers is " + subtraction + "\n" +
      "Multiplication Of Numbers is " + multiplication + "\n" +
      "Division Of Numbers is " + division + "\n" +
      "Modulus Of Numbers is " + modulus + "\n";

      document.body.appendChild(span);            
    }
}

window.onload = () => 
{
    var a: number,b:number;
    a = parseInt(prompt("Enter A First Number"));
    b = parseInt(prompt("Enter A Second Number"));
    var arithmetic = new Arithmetic();
    var span = document.createElement("span");
    span.style.color = "green";
    span.innerText = "First number is->" + a + "\n" + "Second Number is->" + b + "\n";
    document.body.appendChild(span);  
    arithmetic.operator(a, b);  
}