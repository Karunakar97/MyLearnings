# Issues with callbacks

- Callback hell
- Inversion of control

## callback hell

- Call back hell is call back inside callback and inside if it goes on like below example
- Code will grow horizontally, that is also called pyramid of doom
- As we know JS is the synchronous single threaded language it can do one thing at a time.
- It has one callstack it will quickly executes whatever comes in to it.

```javascript
console.log("namaste");

console.log("javascript");

console.log("season2");
// above code will run line by line consoles will prints

//let's see ecom example
//usually after creating order only will go to the payment so we have to call two api's example

const cart = ["shoes", "pants", "kurta"];

api.createOrder();

api.ProceedToPayment();
//so we cannot wait until create completes

// we have to create an order first and then proceed to payment so we have dependency here for that, will use callback

api.createOrder(cart, function () {
  api.ProceedToPayment();
});
//now create order will handle the proceed to payment but we have to show order summery as well

//now will pass this summery api to payment function

api.createOrder(cart, function () {
  api.ProceedToPayment(function () {
    api.showOrderSummery();
  });
});

//now I want to update the wallet as well

api.updateWallet();

//now will pass this summery api to payment function

api.createOrder(cart, function () {
  api.ProceedToPayment(function () {
    api.showOrderSummery(function () {
      api.updateWallet();
    });
  });
});

// this is not the right way of writing
```

## Fix the problem

## Inversion of control

- we loose control on our code using callback
- In the above example we are trusting one api that will callback another api function that is very risky
- We are directly giving control to other call back functions

- We will study this in the next episode
