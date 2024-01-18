// Functions and Parameters
// ========================

// Return type is string
function SayGreeting1(name: string): string {
    return `Hello, ${name}`;
}

console.info("Simple function, takes a string, returns a string...");
console.log(SayGreeting1("TypeScript"));

// ================================================================================================


// Return type can be string or number
function SayGreeting2(name: string): string | number {
    if (name === "TypeScript") {
        return 42;
    }
    return `Hello, ${name}`;
}

console.info("Simple function, takes a string, returns a string or a number...");
console.log(SayGreeting2("TypeScript"));
console.log(SayGreeting2("John"));

// ================================================================================================

// Optional 'age' parameter
function SayGreeting3(name: string, age?: number): string {
    if (age) {
        return `Hello, ${name}. Your age: ${age}.`;
    }
    return `Hello, ${name}`;
}

console.info("Simple function, takes a string and an optional number, returns a string...");
console.log(SayGreeting3("John"));
console.log(SayGreeting3("John", 42));

// ================================================================================================

// Optional 'age' parameter, but now with default value
function SayGreeting4(name: string, age: number = 0): string {
    return `Hello, ${name}. Your age: ${age}.`;
}

console.info("Simple function, takes a string and a number which has a default value, returns a string...");
console.log(SayGreeting4("John"));
console.log(SayGreeting4("John", 42));

// ================================================================================================

// Now with an optional rest parameter (which must be the last parameter)
function SayGreeting5(name: string, age: number, ...nicknames: string[]): string {
    let nicknamesCsv = "";
    for (const nickname of nicknames) {
        nicknamesCsv += `${nickname}, `;
    }
    if (nicknamesCsv.length > 0) {
        nicknamesCsv = nicknamesCsv.substr(0, nicknamesCsv.length - 2);
        return `Hello, ${name}. Your age: ${age}. Your nicknames: ${nicknamesCsv}`;
    }
    return `Hello, ${name}. Your age: ${age}.`;
}

console.log(SayGreeting4("John"));
console.log(SayGreeting5("John", 42));
console.log(SayGreeting5("John", 42, "foo"));
console.log(SayGreeting5("John", 42, "foo", "bar"));

// Arrow functions
// ===============

// parameters => expression (or function body)

let Square = (x: number) => x * x;
let result1 = Square(4); // Will be 16

let Add = (x: number, y: number) => x + y;
let result2 = Add(4, 5); // Will be 9

let Greeting = () => "Hello, TypeScript!";
let result3 = Greeting(); // Will be "Hello, world!"

// Function Overloading
// ====================

function SayGreeting6(name: string): string;
function SayGreeting6(name: string, age: number): string;

function SayGreeting6(name: string, age?: number): string {
    if (age) {
        return `Hello, ${name}. Your age: ${age}.`;
    } else {
        return `Hello, ${name}`;
    }
}

console.log(SayGreeting6("John"));
console.log(SayGreeting6("John", 42));

// Function Types
// ==============

function SayGreeting7(name: string, age: number): string {
    return `Hello:${name}|${age}`;
}

let funcGreeting: (name: string, age: number) => string;

funcGreeting = SayGreeting6;
console.log(funcGreeting("John", 42));

funcGreeting = SayGreeting7;
console.log(funcGreeting("John", 42));

// Interfaces
// ==========

interface IGreeting {
    (name: string, age: number): string;
}
