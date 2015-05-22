ES6语法学习
====

* arrow functions
* const
* let
* default function params
* rest parameters
* call(…)
* array(…)
* class
* computed properties
* modules
* for…of
* Array comprehensions
* Generator comprehensions
* Iterators
* yield
* Template Strings
* block-level declaration
* destructing
* promoise

#arrow functions
`=>`
格式：param => expression

##基本用法
```javascript
//一个参数对应一个表达式
param => expression // x => x*x

//多个参数对应一个表达式
(param,[, param]) => expression; //(x,y)=>x+y;

//一个参数对应多个表达式
param => {statements}; //x=>{x++; return x*2;}

//多个参数对应多个表达式
([param][,param]) => {statements}; (x,y)=>{x++;y++;return x*y;}

//表达式里没有参数
() => expression;
() => {statements}

//传一个表达式，返回一个对象
([param])=>({key:param}); // x=>({name:x});

##原型、构造函数
```javascript
var func = x=> x++;
```
箭头函数作为一种特殊的函数，和普通的函数有什么异同点？原型、构造函数、父类、作用域等

* typeof func = function
* func instanceof Function = true
* new func() =  //TypeError: func is not a constructor
* func.constructor == Function  = true
* func.prototype = undefined;

`箭头函数`不是个构造器

##箭头函数的作用域

在strict模式下，箭头函数默认的this是undefined;
在非strict模式下，是window;

```javascript
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
```
箭头函数的作用域，箭头函数会保持作用域


##refrences
[arrow-functions-and-their-scope](http://jsrocks.org/cn/2014/10/arrow-functions-and-their-scope/)
[TC39 Wiki about Arrow Function](http://tc39wiki.calculist.org/es6/arrow-functions/)
[Arrow Functions in MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)