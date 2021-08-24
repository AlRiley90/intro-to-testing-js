//helloWorld function
function helloWorld() {
    return "Hello, World!";
}
//Refactor example
// const helloWorld = function(){
//     return "Hello, World!";
// }
function sayHello(input){
    if(input=== "Alex"){
        return "Hello, " +input+ "!";
    }else if(input === "Pat"){
        return "Hello, " + input + "!";
    }
    return "Hello, Jane!";
}
sayHello("Alex");

//Refactored code
function sayHello(input){
    return "Hello, " + input + "!";
}
sayHello("Pat");