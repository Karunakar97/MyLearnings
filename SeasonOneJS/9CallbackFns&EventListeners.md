# What is Callback Function in JS
- You take a function pass to another functions are callback function
- 
```javascript

setTimeout(function(){
    console.log('timer') // this function is Callback and this will be called back after 5 milli sec
},5000) 

function x(y){
    //this y function will be called back, that is why it is names as callback function
    console.log('called')
    y()
}

x(function y(){
    console.log('y')
}) //y is the Callback function



```

- when we run above code, we can see x, y in the call stack one after one, once they completes execution they get rid, 
- as we have given timer, after time completes it will then comes to the call stack that's the magic
- we can call callstack as a main thread

- any operation block the call stacks that means blocking the main thread/stack
- we should not use timers that takes longer times like heavy code we should use async await 

- we can do async ops using, call back functions and first class functions

# Event Listener 

- let's create a button 

```javascript

document.getElementById("clickMe")
.addEventListener("click", function btn(){
    console.log('clicked me')
})

```
- above event listener has a call back function it can be called when we clicked only
- if you put debugger at console we can see function comes to call stack

# Closure with Event Listener 

- make a counter with data hiding?

```javascript
function attackEventListener(){
    let count = 0
    document.getElementById("clickMe")
    .addEventListener("click", function btn(){
        count++
    console.log(count,'count')
    })

}
attackEventListener()

```
- the above Callback function forms a closure with parent remembers its values
- btn fun forms a closure with count and it remembers and increases the count

- we can check something in dev tools
- open Elements and click on button, you see   Event Listeners, you see click in it 
- open click you see button and open button click me 
- you see it has a handler 
- inside handler you have scopes check them 

# Garbage collection & removeEventListeners

- event listeners are heavy, in the above example we have closure that stays and waste of memory if don't use it 
- we need to free up the memory 

