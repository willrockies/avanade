function hello(callback){
    callback()
}

hello(function(){
    console.log("hello world")
})
console.log("teste")