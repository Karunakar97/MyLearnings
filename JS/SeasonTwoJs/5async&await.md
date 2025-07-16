# async and await

- What is async?
- What is await?
- How async and await works behind the scenes?
- Examples of using async/await
- Error handling
- Interviews
- Async await vs Promise.then.catch

# async

- async is a keyword we use it before function to create async function
- async function always return a promise

- async function

```javascript
async function getData() {
  return "Namaste";
  //if you return a promise async function will return promise object
  //if you return a normal value it wraps normal value to promise and returns it
}
const promiseData = getData();
console.log(promiseData); //if you console here, this will console promise object
promiseData.then((res) => console.log(res)); // if we use .then this will give us direct response result "Namaste"
```

- Let's return a promise from async function

```javascript
const p = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("promise resolved");
  }, 5000);
});

async function getData() {
  return p; // this will return promise result
}
const promiseData = getData();
promiseData.then((res) => console.log(res));
```

# await

- await is the keyword that can only be used inside async function
- JS JS engine will appears to be stopped there until the promise get result
- async and await combo is used to handle the promises

## how do we handle promise before async and await

```javascript
// older way promise before async and await
const p = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("promise resolved");
  }, 5000);
});

function getData() {
  return p;
}
const promiseData = getData();
promiseData.then((res) => console.log(res)); // consoles prints later
console.log("Namaste JS"); //prints first because it won't wait until the above promise gets result
```

## with async and await

```javascript
// new way to handle
const p = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("promise resolved");
  }, 5000);
});

async function handlePromise() {
  const val = await p; // instead of .then after promise data if we use await this will give direct value "promise resolved"
  console.log("Namaste JS"); // this won't consoles until the val gets result because js will wait at the await line
  console.log(val);
}

handlePromise();
```

## Example 1

```javascript
const p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("promise1 resolved");
  }, 10000);
});

const p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("promise2 resolved");
  }, 5000);
});

async function handlePromise() {
  console.log("Hello world"); // this consoles first

  const val1 = await p1; // waits here
  console.log("after p1 promise"); // this will not console
  console.log(val1);

  const val2 = await p2;
  console.log("after p2 promise");
  console.log(val2);

  // from the above code waits for 10 sec then consoles
  /**
    hello world
    after p1 promise
    p1 promise resolved
    **/
  // again there is another await for p2 it has 5 sec time but as the above p1 await waited for 10 sec already this has also resolved but js engine does appear to be waiting but in the background this will not wait we don't see this in call stack
  // p2 also resolves  all consoles at a time
  // actual console
  /**
    hello world
    after p1 promise
    p1 promise resolved
    after p2 promise
    p2 promise resolved
    **/

  // if we change timers like p1 5 sec and p2 10 sec now console will be

  /**
    
    hello world 
    //consoles after five sec
    after p1 promise
    p1 promise resolved
    // consoles after +5 sec
    after p2 promise
    p2 promise resolved
    **/

  //
}

handlePromise();
```

### how it worked behind the scenes

- when js starts executing the code
- will see handlePromise in the call stack
- it consoles first line when it sees p1 promise it registers the promise and suspends the that function from execution so handlePromise will be gone from the call stack
- after promise get's resolved again handlePromise comes to the call stack and it starts execution from where it left so it consoles next two lines of the code
- after suspension call stack will be empty so that other actions can be done on the page as js is single threaded synchronous language it does not block the main thread
- here we have p1 has 5 sec and p2 has 10 sec so it registers the promises and suspends execution of that program after 5 sec it start execution from where it left and after 10 sec from p2
- if we reverse p1 10 sec and p2 5 sec it waits for p1 10 sec and it executes all of them at a time line by line as p2 has already resolved before p1 but it won't show
- try with debuggers at consoles after val with more wait time you'll understand

# realtime example

```javascript
async function handlePromise() {
  const GITHUB_API = "https://randomuser.me/api/?results=10";
  const val = await fetch(GITHUB_API);
  // fetch returns promise object
  // fetch is a promise this gives response that is un readable stream
  // .json() to convert to json value
  const jsonValue = await val.json(); // .json() is again promise
  console.log(jsonValue, "val");
}
handlePromise();
```

# error handling

```javascript
async function handlePromise() {
  const GITHUB_API = "https://randomuser.me/api/?results=10";
  try {
    const val = await fetch(GITHUB_API);
    const jsonValue = await val.json();
    console.log(jsonValue, "val");
  } catch (err) {
    console.log(err);
  }

  //instead of .then and .catch we can use try and catch blocks to get the err and result
}
handlePromise();
// we can do like this also without try catch
handlePromise().catch(() => {});
```

# async await vs Promise.then.catch

- it is just syntaxical sugar
- await does in the background like .then kind of things
- if possible use async await
