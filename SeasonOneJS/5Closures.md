# Closures in JS  

 -- closure is a function is bind together with it's lexical environment forms a closure
 -- closure is a function bundled together with it's lexical scope forms a closure
 -- inside y function it forms a closure 
 -- function y bundled together with x's lexical env or scope

```javascript
function x(){
    var a = 7
    function y(){
        console.log(a)
    }
    y()
}
x()
```

-- In js we can assign a function to a variable, we can return a function inside a function, we can pass a function as parameter to other function js is different from other languages.

```javascript
function x(){
    var a = 7
    function y(){
        console.log(a)
    }
   return y
}
var z = x()
console.log(z)//it console entire z function
//if we invoke z() after any point of time in the program it consoles 7
z() //consoles 7
```

-- as we learned after return or after completing the execution the respective functions execution context is deleted from call stack but
-- in the above case we got 7 printed after so many lines of code 
-- when we return y in the x not just code was return it returns closure 
-- that closure closed with a function along with it's lexical scope that was return 
-- here while returning the function it remembers it's lexical environment 
-- so when it tries to find a in the y function it does not find and it has a reference memory that is a function, as it remembers it, it prints 7

```javascript
function x(){
    var a = 7
    function y(){
        console.log(a)
    }
    a = 100
   return y
}
var z = x()
//if we invoke z() after any point of time in the program it consoles 7
z() //consoles 100
```
-- it consoles 100 because it does remember a reference or a's identifier, it does'nt remember the value 
-- let's little deeper

```javascript
function z(){
    b=1000
    function x(){
        var a = 7
            function y(){
                console.log(a,b)
            }
            y()
        }
         x() 
   
    }
z()

```

-- in the above code x forms a closure with it's parent's lexical scope and z function forms a closure with it's parents lexical.