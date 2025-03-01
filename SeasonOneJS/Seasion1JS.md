# JS Season One

```javascript
function MyName(){
    console.log('Name')
}
```

**above code consoles name**  
_kmkmk_    
===========
> 123 mkjkjnkjnkj  
===========
# undefined vs not defined
### undefined
-undefined is a special key word, that represents respective variable is not assigned any value 
-undefined not empty it takes place until the value is assigned  
```javascript
var a;
console.log(a)//undefined
a = 10
console.log(a)//10
a = "hello"
console.log(a)//hello
```
-javascript is a loosely typed language, with var declared variables we can assign different data types to same variable
-also called weekly typed language and more flexible language
-never assign undefined to any variable it not good practice 

### not defined
-it means you have not declared any variable but you are trying to access unknown one
```javascript
var a;
console.log(x)//x is not defined because js did not allocate any memory to x as we have not declared 
```

# scope chain, scope & lexical environment  

Scope means where you can access a function or variable  
-scope depends on lexical environment  

```javascript
function a(){
    console.log(b)//10
    function c(){
        console.log(b)//10
    }
    c()

}

var b = 10
a()
```
-Let's assume when we start executing the above code a global execution context is created in callstack 
- as usual it creates memory stage and code execution stage it allocates undefined to variables, entire code to function
- in the first **GEC** in the memory component a will allocated entire a function code 
-in the code execution it invokes function a then another **EC** created for a and pushed above the **GEC** , 
- In the **a** context, memory will allocate to b=undefined variable and it has a function c so it will store entire function to c then
- then in the code execution b=10 allocated and c function is invoked 
- so again another **EC** will pushed to callstack so now we have 
    GC-->a's EC -- > b's EC   

## Lexical Environment  
```javascript
function a(){
    var b= 10
    function c(){
        console.log(b)//10
        console.log(x)
    }
    c()

}

var b = 10
a()
```
- lexical means - continution, in order, in hirarcy 
- whenever execution context is created along with it a lexical environment is also created.
- Lexical environment is a local memory along with it's parent lexical environment
- local memory + lexical environment of it's parent 
- in the above code C is has a local memory and it is sitting in it's parent A's lexical environment 
- and A has it's local memory and it is sitting in the global lexical environment  

- Whenever memory component is created it get's reference to the lexical environment of it's parent 
- in the above code C has a local memory and it has a reference memory it points to A's memory, similarly A also have memory and reference memory A's reference memory points to global memory space, global has it's own memory and it has also reference memory that points to null.

## scope chain 
 - in the above code if we try to log of b in c function it looks for b variable in it's local memory, if it does not find it goes to it's reference memory/paren't lexical environment that is A if it finds b variable it consoles 10
 - if we try to console X in C function it searches in it's local memory if it won't find, then it goes to it's reference memory that is A's memory it searches here, if it won't find here A has reference memory that is global memory it searches there, if it won't find global has it's reference memory that is null so it will consoles X is not defined 

 **The process of searching for a variable or memory is called scope chain**

# Let and Const and Temporal dead zone   
## Temporal dead zone 
 - let & const declarations are hoisted, but they are differently 
 - those are in temporal dead zone for time being

 ```javascript
 console.log(b)
 console.log(a)
 let a=10;
 var b= 100;
 ```
 - we can access b before initialed some value 
 - but if we try to access a but this gives error **ReferenceError: Cannot access 'a' before initialization  
 ```javascript
 console.log(b)

 let a=10;
  console.log(a)
 var b= 100;
 ```
- but if you try to access it after 'a' declaration you will get value printed in the console, memory attached to global scope
- In the memory allocation both a and b are allocated memory and placed undefined in it 
- but var b is in the global memory, in case of let and const they are stored in different memory space, we cannot access them before we put some values in it. that's how hoisting works for them 
- temporal dead zone is the time since let variable is hoisted and till assigns a value 
- phase of hoisting to initialization is the temporal dead zone
 ```javascript
 console.log(a)

 let a=10;
 
 var b= 100;
 ```
 - from console.log(a) to initialization of let a = 10 is the temporal dead zone, whenever we try to access the variables in the temporal dead zone it throws **ReferenceError: Cannot access 'a' before initialization 

 ## ReferenceErrors
  ```javascript
 console.log(x) // ReferenceError: x is not defined 
 //because it could not find the x in the global scope
 console.log(b)// undefined 
 //memory was allocated to b but it has not yet initialized
 console.log(a) //ReferenceError: Cannot access 'a' before initialization
 //because you cannot access let variables in the temporal dead zone

console.log(window.b)//100
//because b is placed in global space 
//window/this is nothing but a global object in the js browser 

console.log(window.a)//undefined 
//because let and const variables are maintained in a separate memory

 let a=10;
  console.log(a)//10
 var b= 100;
 ```

 ## let and const and var

 - as per the above codes let is stricter than var 
 - but const is more stricter than var and let

 ```javascript
 let a = 10;
 let a = 100 //SyntaxError: Identifier 'a' has already been declared
 //when syntax error it cannot run even a single line of code
 ```
- when declared let variable we cannot redeclare same variable with same name in the same scope

 ```javascript
 let a = 10;
 var a = 100 //SyntaxError: Identifier 'a' has already been declared
 //when syntax error it cannot run even a single line of code
 ```

 ```javascript
 var a = 10;
 var a = 100 //In case of var we can re declare a variable with the same name again in the same scope
 ```
 ```javascript
 let a = 10;
 const a = 100 //SyntaxError: Identifier 'a' has already been declared
 //when syntax error it cannot run even a single line of code
 ```

  ```javascript
 let a;
a = 100
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
a = 1000 //TypeError: Assignment to constant variable
// we cannot re assign to constant variable
 ```

 -- use const in the first place we don't run into errors
 -- after use let because we cannot run into temporal dead zone because let variables are in temporal dead zone
 -- use var very less in the day to day coding 
 -- to avoid temporal dead zone declaration/initializations put all the variables at the top of the scope 
 -- that means we are shrinking temporal dead zone to zero.