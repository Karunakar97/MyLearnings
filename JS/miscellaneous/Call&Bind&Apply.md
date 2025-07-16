# call(), apply(), bind()

```javascript
let name = {
  firstName: "Karunakar",
  lastName: "Kukatla",
  printFullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

let name2 = {
  firstName: "Karunakar",
  lastName: "Kukatla",
};
//we can borrow function like this
name.printFullName.call(name2);

//but usually if it is reusable we write outside the function to re use it
function fullName(homeTown, state) {
  console.log(
    this.firstName + " " + this.lastName + " " + homeTown + " " + state
  );
}

//Call we can give reference to call that points to this and we can use it as function borrowing
fullName.call(name, "no homeTown", "no state");

// apply will accept array of arguments
fullName.apply(name, ["homeTown", "state"]);

// bind method returns that method or function so that we can use it later in our program that binds
// that memories this values
// we can pass other argument after the "this" argument

let printName = fullName.bind(name);
printName();
```

# Polyfill for bind method

```javascript
let name = {
  firstName: "Karunakar",
  lastName: "Kukatla",
};

function fullName(homeTown, state) {
  console.log(
    this.firstName + " " + this.lastName + " " + homeTown + " " + state
  );
}

//polyfill for bind method
Function.prototype.myBind = function (...args) {
  let obj = this; //this refer to the function
  params = args.slice(1); // [0] index is coming object so will slice the other
  return function (args2) {
    obj.apply(args[0], [...params, ...args2]); // we will concat both type of arguments so we use array and apply method
  };
};

let myName = fullName.myBind(name, "state");
myName("town");
```

# function currying

```javascript
function multiply(x, y) {
  console.log(x * y);
}

// by using bind method
let multiplyBy3 = multiply.bind(this, 2);
multiplyBy3(3);

let multiplyBy4 = multiply.bind(this, 2);
multiplyBy4(4);

//by using closures

function multiplyClosure(x) {
  return function (y) {
    console.log(x * y);
  };
}

let closureBy3 = multiplyClosure(2);
closureBy3(3);
let closureBy4 = multiplyClosure(4);
closureBy4(4);
```
