# Let and Const and Temporal dead zone

## Temporal dead zone

- let & const declarations are hoisted, but they are differently
- those are in temporal dead zone for time being

```javascript
console.log(b);
console.log(a);
let a = 10;
var b = 100;
```

- we can access b before initialed some value
- but if we try to access a but this gives error \*\*ReferenceError: Cannot access 'a' before initialization

```javascript
console.log(b);

let a = 10;
console.log(a);
var b = 100;
```

- but if you try to access it after 'a' declaration you will get value printed in the console, memory attached to global scope
- In the memory allocation both a and b are allocated memory and placed undefined in it
- but var b is in the global memory, in case of let and const they are stored in different memory space, we cannot access them before we put some values in it. that's how hoisting works for them
- temporal dead zone is the time since let variable is hoisted and till assigns a value
- phase of hoisting to initialization is the temporal dead zone

```javascript
console.log(a);

let a = 10;

var b = 100;
```

- from console.log(a) to initialization of let a = 10 is the temporal dead zone, whenever we try to access the variables in the temporal dead zone it throws \*\*ReferenceError: Cannot access 'a' before initialization

## ReferenceErrors

```javascript
console.log(x); // ReferenceError: x is not defined
//because it could not find the x in the global scope
console.log(b); // undefined
//memory was allocated to b but it has not yet initialized
console.log(a); //ReferenceError: Cannot access 'a' before initialization
//because you cannot access let variables in the temporal dead zone

console.log(window.b); //100
//because b is placed in global space
//window/this is nothing but a global object in the js browser

console.log(window.a); //undefined
//because let and const variables are maintained in a separate memory

let a = 10;
console.log(a); //10
var b = 100;
```

## let and const and var

- as per the above codes let is stricter than var
- but const is more stricter than var and let

```javascript
let a = 10;
let a = 100; //SyntaxError: Identifier 'a' has already been declared
//when syntax error it cannot run even a single line of code
```

- when declared let variable we cannot redeclare same variable with same name in the same scope

```javascript
let a = 10;
var a = 100; //SyntaxError: Identifier 'a' has already been declared
//when syntax error it cannot run even a single line of code
```

```javascript
var a = 10;
var a = 100; //In case of var we can re declare a variable with the same name again in the same scope
```

```javascript
let a = 10;
const a = 100; //SyntaxError: Identifier 'a' has already been declared
//when syntax error it cannot run even a single line of code
```

```javascript
let a;
a = 100;
//with let and var we can declare a variable and assign a values late in the code
```

```javascript
const a;
a = 100 //SyntaxError: Missing initializer in const declaration
// in case of const we need to declare and initialize in the same line like

const a = 100;

```

```javascript
const a = 100;
a = 1000; //TypeError: Assignment to constant variable
// we cannot re assign to constant variable
```

-- use const in the first place we don't run into errors
-- after use let because we cannot run into temporal dead zone because let variables are in temporal dead zone
-- use var very less in the day to day coding
-- to avoid temporal dead zone declaration/initializations put all the variables at the top of the scope
-- that means we are shrinking temporal dead zone to zero.
