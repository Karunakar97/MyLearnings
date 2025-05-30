# Promise API's

- majorly there are four types of promise api's
- all of them take list of promises

# Theory Part

## Promise.all

- it is used to run multiple promises, like 10 api's at the same time
- let's assume there are three promises
- Promise([p1, p2, p3]) p1 takes 3sec p2 takes 1sec
- it will wait for all of them to finish ex p1 takes 3sec p2 takes 1sec p3 takes 1sec so it will wait for 3sec and it will give the result as array of out put [val1, val2, val3] if all success
- if one promise gets rejected, the output will be the error
- if p2 takes one sec and rejected then immediately throws an error, it will not wait for other promises
- if i want the other two api's success response promise.all won't work like that we have promise.allSettled()

## promise.allSettled()

- it works the same as promise.all(), but this will work like
- if p1, p3 success and p2 is failure, then it will wait until all the api's settle this will give result [val1, err, val3]

## promise.race()

- it wait for for the first promise settled whether success or failure it throws the result
- it will give val of the first settled promise [val]
- Promise([p1, p2, p3]) p1 takes 3sec p2 takes 1sec
- as p2 takes 1sec it gives result first of this, if it fails the error will be thrown as success result
- it won't wait for other api's

## promise.any()

- it wait for for the first successful promise settled, and then gives result,
- any of them fails first it won't give result it waits for success one
- if all of them fails? result will be AggregateError:All Promises were rejected
  [err1, err2, err3]
- play with code above all four types

# Code Part

```javascript
// const p1 = fetch('') we can use fetch call also as we don't have now
const p1 = new Promise((resolve, reject) => {
  // setTimeout(()=> resolve('p1 success'),3000)
  setTimeout(() => reject("p1 fail"), 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p2 success"), 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p3 success"), 2000);
});

Promise.all([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
    console.log(err.errors); // this will return aggregator errors
  });
```
