- this in global space
- this inside a function
- this in strict mode -(this substitution)
- this value depends on how this is called (window)
- this inside a object method
- call apply bind methods (sharing methods)
- this inside arrow functions
- this inside nested arrow function
- this inside DOM

# this

- this is a keyword

# this in global space

```javascript
let a = 10;
// whatever we write on the top level is global space

function a() {
  // whatever we write inside the function is functional space
}
//if we console "this"
console.log(this); // will see global object (window) - global object in the sense in the browser it is window
// "this" consoles depends on the environment like nodejs, or browser

function a() {
  console.log(this); // "this" consoles window object like the outside console but "this" is not same as out side one
  // "this" inside function works differently in strict mode or non strict mode
  // if we write "use strict" on top of js file that means strict mode
  // in the strict mode it consoles undefined, in the non strict mode it uses "this" substitution and substitutes global object/window
  // if the value of "this" keyword is undefined or null "this" keyword will be replaced with the global object only in non strict mode
}
a();

// "this" value depends on how "this" is called
window.a();
// if this is called like above one this consoles global object in any mode, because we attached reference to it
// if you use it with reference it takes reference and consoles reference this, else it consoles undefined inside function
```

# this in object

```javascript

const obj = {
    a:10
    x:function(){
        console.log(this) // value of this inside method also depends on how we call
    }
}

// difference between method and function
// if you write a function inside an object that is method
// if you call obj.x() that is method, x is the method of obj

obj.x()// refers to object when call "this" inside method so here it consoles obj

```

# difference between call, apply, bind

- is used when you have to sharing method

```javascript
const student1={
    name:'Akshay',
    printName:function{
        console.log(this.name)
    }
}

const student2={
    name:'Deepika',
}

// we want to print student1 name so we call

student.printName() //as this.name refers to student1 object, it consoles 'Akshay'

// now i want to share printName method with student2

student.printName.call(student2) // so call() will accept this so if we pass student2 to student.printName method using call of method the student1 'this' will be override by student2 'this' so we see Deepika in console

// learn call, apply, bind video to better understanding

```

# this inside arrow function

```javascript

// arrow functions does not have their own "this"
// the value of "this" inside arrow function is depends on lexical environment

const obj = {
    a:10
    x:()=>{
        console.log(this) // value of "this" here is based on lexical context (enclosing lexical context)
    }
}
obj.x()// this console global object/window
 // lexical means where it is present
 // here it doesn't refer to obj object it refer to window object

// example 2

 const obj2 = {
    a:10
    x:function(){
        const y = ()=>{
        console.log(this)
        }
        y()
    }
}

obj2.x()// this will console obj2
// now the arrow function is not the method but arrow function is enclosed within the method function

// above example will work like below one
 const obj2 = {
    a:10
    x:function(){
        console.log(this)
    }
}

```

# this inside DOM

- "this" value inside DOM elements "this" reference to html elements

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>kk</h1>
    <button id="clickMe" onclick="alert(this)">Click Me</button>
    <script src="./index.js"></script>
  </body>
</html>
```

- when you click on button this shows buttonElement in alert
- this behaves differently inside constructors and classes
