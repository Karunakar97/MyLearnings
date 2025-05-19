# inheritance
- one object is trying to access methods and properties of other objects

# prototype
- A prototype in JavaScript is an object from which other objects inherit properties and methods.

```javascript
let arr = ['karunakar', 'kk', 'john']
let obj = {
    name:'Karunakar',
    address:'Hyd',
    getIntro:function(){
        console.log(this.name + 'from' + this.address)
    }
}

let obj2 = {
    name:'sam'
}

function check(){}

//to get access to prototypes of object or array using __proto__
//example arr__proto__
//for object obj__proto__
//for function check__proto__.__proto__

//prototypal inheritance

//this is not good practice but for example 

obj2.__proto__ = obj

// you will see obj properties and methods in obj2 we can access also 
// like wise we can inherit anything into any
```

# prototype chain 

- when we try to access something from an object it checks there if does't find 
it goes to the prototype if doesn't find it goes to proto's proto if not again points to null