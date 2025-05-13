# event delegation

```html
<body>
    <div>
        <ul id="category">
            <li id="laptops">laptops</li>
            <li id="cameras">cameras</li>
            <li id="shoes">shoes</li>
        </ul>
    </div>
    <script src="./index.js"></script>
</body>
```

```javascript
document.querySelector('#category').addEventListener('click',(e)=>{
    if(e.target.tagName === 'LI'){
        // window.location.href = "/" + e.target.id
    }
})
```

- as we know event bubbling it bubbles up
- the event delegation is used to handle multiple elements click handles from parents 
- for example we have a parent element in the we have 100's of sub categories/cards so those come dynamically 
- so we cannot write click handlers to each and every element we use delegation to handle it from parent

- benefits are less memory usage and less code, performance, making dom to easy render
- drawbacks we cannot use it for scroll events etc
- make sure to check element tag name as we may have somethings inside card elements also 