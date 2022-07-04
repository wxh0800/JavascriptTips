const a: string ='abc'
console.log(typeof(a))

const b: number = 5
console.log(typeof(b))

const c: boolean = false
console.log(typeof(c))

const aa : string[] =['abc', 'def', 'ghi']
console.log(aa)
console.log(typeof(aa))

const bb : Array<string> =['abc', 'def', 'ghi']
console.log(bb)
console.log(typeof(bb))

function greet(name: string) {
	console.log("Hello, " + name + "!")
}

greet("World");

// function greet1(name:{firstName: string, lastName: string}) {
// 	console.log("Hello, " + name.lastName + ", " + name.firstName)
// }

// const myName = {
// 	firstName : "abc",
// 	lastName : "def"
// }

// greet1(myName)