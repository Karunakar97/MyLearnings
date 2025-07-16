# debouncing

```javascript
let counter;
function getData() {
  counter++;
  console.log("typed" + counter);
}

function makeDelay(fn, delay) {
  let context = this; // if is optional that we can pass context and arguments
  args = arguments;
  let timer; // declaring timer id
  return function (args) {
    timer = setTimeout(() => {
      getData.apply(context, arguments);
    }, delay); // makes 1 sec delay
    return clearTimeout(timer); // clear timer
  };
}

let debounce = makeDelay(getData, 1000);
```
