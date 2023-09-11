// Singleton
// Object.create


// object literals

const mySym = Symbol("Key1")

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "myKey1",
    age: 18,
    location: "Mumbai",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser['email']);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = 'Hitesh@chatgpt.com'
//Object.freeze(JsUser)
//JsUser.email = 'Hitesh@microsoft.com'

console.log(JsUser['email']);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hellow JS User, ${this.name}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




