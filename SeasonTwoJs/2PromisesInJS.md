# Promises
- used for async operations 

## Example
- we are creating e-com site
```javascript
const cart = ["shoes", "pants", "kurta"]

createOrder(card)//creates order and returns order id

proceedToPayment(orderId)

//before promise we used callback
createOrder(function (orderId){
    proceedToPayment(orderId)
})

// now create order will call proceed to payment but this is not a right way
// but it may call or may not or it may call twice
// there is no guarantee 
// that is iversion of control

// after promise

const promise = createOrder(card) //promise returns an object with some data in each state

// first {data:undefined}
//after execution {data:response}
//if fails {data: failed}

// once we get the response how do we then proceed to payment
// we use 'then' call back function which is attached to promise

// the everything is in our hands like once getting the order creation data only we are moving forward

promise.then(function(orderId){
    proceedToPayment(orderId)
})

```

## Real Example

```javascript
const GITHUB_API = "https://randomuser.me/api/?results=10";
//use open source api

// we use fetch 
// fetch work as promise example
const user = fetch(GITHUB_API)
//promise has three state "pending", "fullfilled", "rejected"
console.log(user)// immediately shows pending state

//after filling console will be updates

user.then(function(data){
    console.log(data)// we can do after getting data
})

//promise objects are immutable

```

## Interview question
- What is the promise?

- Promise is an object that represents eventual completion of an asynchronous operation

- Some people also call

- Promise object is place holder for a certain time until we receive data
- It's a container for future value

## Example two
```javascript
createOrder(cart, function (){
    ProceedToPayment(function (){
        showOrderSummery( function(){
            updateWallet()
        })
    })
})

//How do we handle more dependency situation
// promise chaining

promise
.then(function(orderId){
 return   proceedToPayment(orderId)
})
.then(function(paymentInfo){
   return showOrderSummery(paymentInfo)
})
.then(function(paymentInfo){
   return updateWallet(paymentInfo)
})

```