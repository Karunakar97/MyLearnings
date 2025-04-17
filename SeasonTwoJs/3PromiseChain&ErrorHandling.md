# Consuming Promises

## Example
- we are creating e-com site

```javascript
const cart = ["shoes", "pants", "kurta"]

const promise = createOrder(cart)//creates order and returns order id

promise.then(function(orderId){
    // proceedToPayment(orderId)
    console.log(orderId)
})
.catch(function(err){ //error handling
    console.log(err.message)
})

// this is how consumer use promise
```

# Producer Part Promises

```javascript
function createOrder(cart){
    //to create promise we use new Promise of key this is a promise constructor
    // promise constructor function takes resolve and reject params
    const  pr = new Promise(function(resolve, reject){
        // here we write validation and functionality and db connections all things
        function validateCart = (cart){
            return true
        }
        if(validateCart(cart)){ // if valid
            const orderId = "123456789" // db calls and other functionality
            setTimeout(function(){ // creating a fake delay
            resolve(orderId) 
            },5000)

        }else{ // not valid case
            const err = new Error('Cart is no valid')
            reject(err) 
        }

    })
    return pr

}


```

# Promise Chaining
## Example

## Consuming Promises

```javascript
const cart = ["shoes", "pants", "kurta"]
 //creates order and returns order id

createOrder(cart)
.then(function(orderId){
    console.log(orderId)// we want to proceed to payment after getting orderID 
    return orderId // we need to return data in order to use chanining 
})
// .catch(function(err){ //if we have to go to the next call we need to add catch separately so that this is responsible for above one only
//     console.log(err.message)
// })
.then(function(orderId){
   return proceedToPayment(orderId) // in order to write .then to again that will fall to call back hell 
   // we can return it
})
.then(function(paymentInfo){
    console.log(paymentInfo)
})
.catch(function(err){ //error handling
    console.log(err.message)
})

// if you write .then after catch it will call if catch fails also
// to write depended services we need to keep catch after all .then only 
// this is how consumer use promise
```

## Producer Part Promises

```javascript
function createOrder(cart){
    //to create promise we use new Promise of key this is a promise constructor
    // promise constructor function takes resolve and reject params
    const  pr = new Promise(function(resolve, reject){
        // here we write validation and functionality and db connections all things
        function validateCart = (cart){
            return true
        }
        if(validateCart(cart)){ // if valid
            const orderId = "123456789" // db calls and other functionality
            setTimeout(function(){ // creating a fake delay
            resolve(orderId) 
            },5000)

        }else{ // not valid case
            const err = new Error('Cart is no valid')
            reject(err) 
        }

    })
    return pr

}

function  proceedToPayment(orderId){
    return new Promise(function (resolve, reject){
        resolve('Payment successful')
    })
}


```
