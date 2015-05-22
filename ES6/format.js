function Programmer(options) {
  this.name = options.name;
  this.age = options.age;

  this.sayHello = function() {
    setTimeout(() = > {
      console.log(this)
    }, 1000)
  }

  this.kall = function(f) {
    f();
  };
  this.getInfo = function() {
    console.log('age=' + this.age);
    (() = > console.log('name:' + this.name + ' age:' + this.age))();

    function innerFunction() {
      console.log(this);
      console.log('name:' + this.name + ' age:' + this.age);
      (() = > console.log('name:' + this.name + ' age:' + this.age))();
    }

    innerFunction();
    this.kall(function() {
      console.log('[kall]name:' + this.name + ' age:' + this.age)
    })
    this.kall(() = > console.log('[kall arrow]name:' + this.name + ' age:' + this.age));
    // innerFunction.apply(this)
    return this;
  }
}

var p = new Programmer({
  name: 'sgqm',
  age: 30
});

p.getInfo().sayHello();