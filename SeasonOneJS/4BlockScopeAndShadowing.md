# Block Scope and Shadowing in JS  

 -- block is {  }
 -- block is also known as combined statement 
```javascript
    const a = 100;
    console.log(a)
 ```
--above code grouping multiple statements together, where javascript expects one statement
```javascript
    if(true) console.log(true);
    //if expects one statement here above code is perfectly valid one statement
 ```
 ```javascript
    if(true){
        const a = 100;
        console.log(a)
    }
    //when we have to execute multiple statements we need block to group them in to group where js expects single statement 
    //that is what block in the above code
 ```

## block scope
- what all the elements accessible inside the { } block scoped.

 ```javascript
   {
    var a = 10;
    let b = 100;
    const c = 1000;
    console.log(a)//10
    console.log(b)//100
    console.log(c)//1000
   }
   console.log(a)//10 we have accessed because it is in the global scope
    console.log(b)// Uncaught ReferenceError: b is not defined
    console.log(c)
  
 ```
- in if we run above code in the hoisting var kept in the global scope and let and const are in different memory
- we can access var a variable outside the above block but cannot access let and const because they were block scoped variables in this context  

## shadowing
-if we have same named variable outside the block is called shadowing
 ```javascript
    var a  = 1000
   {
    var a = 10;//this variable shadowing outside block a variable
    // in the scope both a variables points to same reference in the global scope 
    //first it allocated 1000 to a and then allocates 10 to it
    let b = 100;
    const c = 1000;
    console.log(a)//10
    console.log(b)//100
    console.log(c)//1000
   }  
   console.log(a)//10
 ```
 - in the case of let

 ```javascript
    let b  = 1000// it stored in a different scope
   {
    var a = 10;//stored in global scope
    let b = 100;// shadowed above b
    const c = 1000;
    //both b and c are stored in block scope
    console.log(a)//10
    console.log(b)//100
    console.log(c)//1000
   }  
   console.log(b)//1000
   //accessed from separate memory
   console.log(a)//accessed from global scope
   //outside the scope it has not shadowed in the case of let
 ```
 - in the case of const it will behave same 
 - in case function scope also it behaves same
## illegal shadowing
  ```javascript
    let a  = 1000
   {
    var a = 10 // syntaxError: identifier 'a' has already been declared
   }  
   
 ```
 

```javascript
    let a  = 1000
   {
    let a = 10 // it perfectly works
   }  
   
```
```javascript
    var a  = 1000
   {
    let a = 10 // it perfectly works
   }  
   
 ```