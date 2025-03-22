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
