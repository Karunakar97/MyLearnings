# event bubbling & capturing/trickling

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      div {
        min-width: 100px;
        min-height: 100px;
        border-width: 1px;
        border-color: black;
        border-style: solid;
        padding: 30px;
      }
    </style>
  </head>

  <body>
    <div id="grandParent">
      <div id="parent">
        <div id="child"></div>
      </div>
    </div>
    <script src="./index.js"></script>
  </body>
</html>
```

```javascript
document.querySelector("#grandParent").addEventListener(
  "click",
  (e) => {
    console.log("Grand Parent");
  },
  true
);

document.querySelector("#parent").addEventListener(
  "click",
  (e) => {
    console.log("Parent");
  },
  true
);

document.querySelector("#child").addEventListener(
  "click",
  (e) => {
    console.log("child");
  },
  true
);

//by default the third parameter to addEventListener is false that means it is event capturing
//as per W3C they fixed first is capturing/trickling then bubbling will happen
//when is is default false you will see events call from top to bottom then console print from top
//if you make them true bubbling will happen that means events calls from bottom to top
//in capturing if you lick on parent it will call parent, grand parent , it bubbles from that level
//it check capturing if false then checks bubbling
//if you keep middle one false it won't call while capturing but while bubbling it calls like, grandparent, child, parent
//to prevent this propagation from the handler you can take e and call e.stopPropagation()
//if you call it on top it will stop there or in the bottom it stops there
```
