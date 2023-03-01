let calc = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = +prompt('a', 0);
    this.b = +prompt('b', 0);
  }
};

calc.read();
alert( calc.sum() );
alert( calc.mul() );