# Function Statement Or Function Declaration

- both are same

```javascript
function a() {
  console.log("a called");
}
```

# Function Expression

```javascript
var b = function () {
  console.log("b called");
};
```

# Anonymous Function

- a function does not have an identity
- a it is a syntax error we need to give a name to function

```javascript
 function(){ // Uncaught SyntaxError: Function statements require a function name
    console.log(' called')
}
```

# Named Function Expression

```javascript
var b = function xyz() {
  console.log("b called");
};
```

- if you call b() you get result
- but xyz() will give Uncaught ReferenceError: xyz is not defined

# Difference between Parameter & Arguments

```javascript
var b = function (param1, param2) {
  console.log("b called");
};
b(arg1, arg2);
```

# First Class Functions Or First Class Citizens

- ability to pass a function as an argument or return a function from a function, those all are first class functions

- when functions are treated as value, returned as values, assigned to variable all we can explain

```javascript
var b = function xyz(param) {
  console.log(param); //consoles function
  return function z() {};
};

function c() {}

b(c);
```

- majority above things can be used with arrow functions also
