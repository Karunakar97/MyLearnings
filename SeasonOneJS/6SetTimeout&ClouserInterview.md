# setTimeout and closure interview questions  

```javascript
function x(){
    var i = 1;
    setTimeout(function (){
        console.log(i)
    },3000)
    console.log('already printed')
}
x()
```
- js won't wait until setTimeout completes it goes to the next line 
- the function in the timeout will form a closure and it takes i reference with it.
- timeout takes a call back function and sets a timer to it, and put's it somewhere, and calls it back once the time completes 

## Example once let's console 1 to 6 with the timer
**using var**
```javascript
function x(){
// var i is the global scope so it 
    for(var i = 1, i <=5, i++>){
        setTimeout(function (){
            console.log(i)
        },i * 1000)
    }
    
    console.log('already printed')
}
x()
```
- in the above it consoles 6 five times, because 
- every time loop runs it forms a closure, set timeout will take that function and puts a timer and put's it somewhere
- here closure forms with it's lexical environment for every function, so every function remembers i's reference, so before timer get's over by that time loops is over it puts i= 6 
- after timer is over every function starts run and it finds the i's reference and consoles 
- closures remember references not values of those references.

**using let**
```javascript
function x(){
// let is a block scoped variable
    for(let i = 1, i <=5, i++>){
        setTimeout(function (){
            console.log(i)
        },i * 1000)
    }
    
    console.log('already printed')
}
x()
```
- Now it consoles 1 to 5 in a sequence 
- As let is a block scoped variable it creates a new i variable to each function and forms a closer 
- each and every time it refers to different memories.

**if they ask us strictly using var we need to console 1 to 5 sequence**

```javascript
function x(){

    for(var i = 1, i <=5, i++>){
        function close(val){
            setTimeout(function (){
            console.log(val)
        },val * 1000)
        }
        close(i)
    }
    
    console.log('already printed')
}
x()
```