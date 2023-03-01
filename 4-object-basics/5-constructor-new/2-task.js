function Calc() {

  this.read = function() {
    this.a = +prompt('a', 0);
    this.b = +prompt('b', 0);
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
}

let calc = new Calc();
calc.read();

alert( "Sum=" + calc.sum() );
alert( "Mul=" + calc.mul() );