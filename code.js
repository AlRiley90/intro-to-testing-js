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

function isFive(input){
if(input == 5){
    return true;
}else
    return false;
}


function isEven(input) {
    if (input % 2 === 0) {
        return true;
    } else
        return false;
}

function isVowel(input) {
    if (input == 'a' || input == 'A' || input == 'e' || input =='E' || input == 'i' || input == 'I' || input == 'o' || input == 'O' || input == 'u' || input =='U') {
        return true;
    } else {
        return false;
    }
}