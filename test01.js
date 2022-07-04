var a = 'abc';
console.log(typeof (a));
var b = 5;
console.log(typeof (b));
var c = false;
console.log(typeof (c));
var aa = ['abc', 'def', 'ghi'];
console.log(aa);
console.log(typeof (aa));
var bb = ['abc', 'def', 'ghi'];
console.log(bb);
console.log(typeof (bb));
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet(name, "World");
function greet1(name) {
    console.log("Hello, " + name.lastName + ", " + name.firstName);
}
var myName = {
    firstName: "abc",
    lastName: "def"
};
greet1(myName);
function printId(id) {
    console.log("ID is: " + id);
}
printId(5);
printId('abc');
