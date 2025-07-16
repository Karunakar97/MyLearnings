# async vs defer vs normal in script tags in html

```html
<!-- this is normal script tag  -->
<script src=""></script>
<!--  -->
```

- In normal tag when we try to execute html file if we encounter normal script so
- html file execution stops and gets the script from network and executes it and then starts executing html again

```html
<!-- this is async script tag  -->
<script src="" async></script>
```

- while html starts executing this will start getting script from network asynchronously, when it counters script it stops there, as soon as it gets, it will start execution script then html
- but the order of execution is not guaranteed, may break dependencies
- use for independent scripts

```html
<!-- this is defer script tag  -->
<script src="" defer></script>
```

- this will also start executing asynchronously it will start getting script while executing html, but it won't stop execution when counters script, it will execute html completely then starts script execution
- order is guaranteed, use for scripts that relay on DOM
