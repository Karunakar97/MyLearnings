function attackEventListener(){
    let count = 0
    document.getElementById("clickMe")
    .addEventListener("click", function btn(){
        count++
    console.log(count,'count')
    })

}
attackEventListener()