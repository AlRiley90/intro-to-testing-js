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
    if(input === undefined || input === true || input === false || input === null){
        return "Hello, World!";
    // }else if(input === Number){
    //     return "Hello, Number " +input +"!";
    }else
    return "Hello, " + input + "!";
}
//Ask about input being a number, how to write that