1.  What is the closure?  
     - A function along with it's outer environment bundled together forms a closure - Closure is combination of a function and it's lexical scope - Each and every function in the js has access to it's parents lexical environment - if the function is executed in other scope not in it's scope it still access it's parent's lexical scope  
     **Example1**
    `javascript
    function outer(){
        var a = 10
        function inner(){ // this function forms a closure with it's parent lexical environment
            console.log(a)
        }
        return inner()
    }
    outer()();//()() this will call outer and inner functions as outer returns inner fun
    `
    **Example2**
    ```javascript
    function outer(){
            function inner(){
                console.log(a)
            }
             let a = 10 // as let is block scoped variable still it works it stays in that evn
            return inner()
        }
        var close = outer();
        close() //parenthesis can be like this
        ```
    -- little more stages example

````javascript
function outest(){
   var c = 20
   function outer(b){
       function inner(){
           console.log(a, b, c)// still this inner forms a closure with it's parents lexical scope
       }
       let a = 10 // if it does not find this in local this will go to global scope
       return inner
   }
   return outer
}
let a = 100
var close = outest()('hello world')
close() //consoles 10, 'hello world', 20
   ```

**Uses of Closure**

- Data privacy
- Data Hiding

**disadvantages**
- over use of memory
````
