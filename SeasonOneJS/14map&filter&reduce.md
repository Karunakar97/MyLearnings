# map(), filter(), reduce()

## map()
- To transform an array we use map()
```javascript
const arr = [1, 2,3,4,5]

function double (x){
    return x * 2
}

const output = arr.map(double)
//this will return an new array

//this can be written
const output = arr.map(function double(x){
    return x * 2
})

const output = arr.map((x)=>{
    return x * 2
})

```
 ## filter()
 - we use this to filter an array this will return new filtered array

```javascript
const arr = [1, 2, 3, 4, 5]

function isOdd (x){
    return x % 2
    //this will return true or false
}

const output = arr.filter(isOdd)
//this will return an new array that ara odd

```

 ## reduce()
 - we use this to get a single value out of an array
 - this finds value

```javascript
const arr = [1, 2, 3, 4, 5]


const output = arr.reduce(function (acc, current){
    acc = acc + current 
    // acc acts as a variable 
    // this sums entire array and that return back 
    return acc
},0)
//reduce accepts first parameter function and second is initial accumulator

const output = arr.reduce(function(max, curr){
    if(max > curr){
        max = curr
    }
    return max
    },0)

```

### Example two for reduce

 - find out count of each age group 
```javascript
    const users = [{
        firstName: 'KK', lastName:'k', age:27,}
        {firstName: 'john', lastName:'de', age:27,}
    {  firstName: 'trump', lastName:'j', age:75,}
        {firstName: 'aks', lastName:'h', age:50,
    }]

const output = users.reduce(function (acc, curr){
    if(acc[curr.age]){
        acc[curr.age] = ++ acc[curr.age] 
    }else{
        acc[curr.age] = 1
    }
    return acc
},{})
// this will return {27: 2, 75: 1, 50: 1}

```

### Example two for mix filter and map

 - find out first name of each person less than 30

```javascript
 const users = [{
        firstName: 'KK', lastName:'k', age:27,}
        {firstName: 'john', lastName:'de', age:27,}
    {  firstName: 'trump', lastName:'j', age:75,}
        {firstName: 'aks', lastName:'h', age:50,
    }]

const output = users.filter((x)=> x.age  < 30).map((x)=>x.firstName)
// this will return ['kk', 'john']

```
- without map and filter
```javascript
  const users = [
  { "firstName": "KK", "lastName": "k", "age": 27 },
  { "firstName": "john", "lastName": "de", "age": 27 },
  { "firstName": "trump", "lastName": "j", "age": 75 },
  { "firstName": "aks", "lastName": "h", "age": 50 }
]

const output = users.reduce(function (acc, curr){
    if(curr.age  < 30){
        acc.push(curr.firstName)
    }
    return acc
},[])
console.log(output)
// this will return ['kk', 'john']

```