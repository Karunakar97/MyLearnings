1. What is the closure?  
    - A function along with it's outer environment bundled together forms a closure
    - Closure is combination of a function and it's lexical scope
    - Each and every function in the js has access to it's parents lexical environment 
    - if the function is executed in other scope not in it's scope it still access it's parent's lexical scope  
    **Example**
    ```javascript
    function outer(){
        var a = 10
        function inner(){ // this function forms a closure with it's parent lexical environment
            console.log(a)
        }
        return inner()
    }
    outer()();//()() this will call outer and inner functions as outer returns inner fun
    ```