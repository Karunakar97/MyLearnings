# Higher order functions

- A function which takes another function as an argument or returns a function from itself are a the higher order function
- A function which can be passed as an argument another function are call back function that can be called late in the code

```javascript
function x() {
  console.log("namaste");
}
function y(x) {
  x();
}
```

## example

- calculate area of the radiuses

```javascript

const radius = [3,1,2,4]

const calculateArea = function (radius){
    const output= []
    for (let i =0; i < radius.length ;i ++){
        output.push(Math.PI * radius[i] * radius[i])
    }
    return output
}

console.log(calculateArea(radius))

const calculateCircumference = function (radius){
    const output= []
    for (let i =0; i < radius.length ;i ++){
        output.push(2 * Math.PI * radius[i] )
    }
    return output
}

console.log(calculateCircumference(radius))

const calculateDiameter = function (radius){
    const output= []
    for (let i =0; i < radius.length ;i ++){
        output.push(2 * radius[i] )
    }
    return output
}

console.log(calculateDiameter(radius))

- above examples have almost same code we should not repeat the same in software
- we need to optimize

const radius = [3,1,2,4]

const area = function(radius)=>{
    return Math.PI * radius * radius
}

const circumference = function(radius)=>{
    return Math.PI * radius
}

const diameter = function(radius)=>{
    return 2 * radius
}

const calculate = function (arr, logic){
    const output= []
    for (let i =0; i < arr.length ;i ++){
        output.push(logic(arr[i]))
    }
    return output
}

console.log(calculate(radius, area))
console.log(calculate(radius, circumference))
console.log(calculate(radius, diameter))

console.log(radius.map(area))//map is also higher order function it returns same

- how does map work?

Array.prototype.calculate = function(logic){ // now this prototypr function will be available for all the arrays in this scope
    const output= []
    for (let i =0; i < this.length; i++){
        output.push(logic(this[i]))
    }
    return output
}

console.log(radius.calculate(area)) //this is the same as map

```
