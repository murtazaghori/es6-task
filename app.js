// Global Scope
// var func = "xyz";
// let func1 = "abc"
// const func2 = "pqr"
// function userName() {
//   console.log(func);
//   console.log(func1);
//   console.log(func2);
// }
// userName();

// //● Are they accessible globally?
// yess

// // ● Create a function and declare a variable using var inside the function.
// function names() {
//     var userName = "true";
//     console.log(userName);  // This will log "true" inside the function.
//   }
//   names();
  
//   // ● Declare a variable using let inside the function.
//   function names1() {
//     let userName1 = "true";
//     console.log(userName1);  // This will log "true" inside the function.
//   }
//   names1();
  
//   // ● Declare a variable using const inside the function.
//   function names2() {
//     const userName2 = "true";
//     console.log(userName2);  // This will log "true" inside the function.
//   }
//   names2();
  
//   // ● Try to log all three variables to the console outside the function.
//   console.log(userName);   // This will result in a ReferenceError: userName is not defined
//   console.log(userName1);  // This will result in a ReferenceError: userName1 is not defined
//   console.log(userName2);  // This will result in a ReferenceError: userName2 is not defined
  
// Block Scope

// if (true) {
//     var varVariable = 'var';
//     let letVariable = 'let';
//     const constVariable = 'const';
//   }
  
//   console.log(varVariable); // 'var'
//   console.log(letVariable); // ReferenceError: letVariable is not defined
//   console.log(constVariable); // ReferenceError: constVariable is not defined

  
// Hoisting with var
// console.log(varVariable); // undefined
// var varVariable = 'var';
// Hoisting with let and const
// console.log(letVariable); // ReferenceError: Cannot access 'letVariable' before initialization
// let letVariable = 'let';
// console.log(constVariable); // ReferenceError: Cannot access 'constVariable' before initialization
// const constVariable = 'const';
// // Re-declaration

// var varVariable = 'var';
// var varVariable = 'new var'; // no error
// console.log(varVariable); // 'new var'

// let letVariable = 'let';
// // let letVariable = 'new let'; // SyntaxError: Identifier 'letVariable' has already been declared
// console.log(letVariable); // 'let'

// const constVariable = 'const';
// // const constVariable = 'new const'; // SyntaxError: Identifier 'constVariable' has already been declared
// console.log(constVariable); // 'const'

// Re-assignment

// var varVariable = 'var';
// varVariable = 'new var'; // no error
// console.log(varVariable); // 'new var'

// let letVariable = 'let';
// letVariable = 'new let'; // no error
// console.log(letVariable); // 'new let'

// const constVariable = 'const';
// // constVariable = 'new const'; // TypeError: Assignment to constant variable.
// console.log(constVariable); // 'const'

// // Temporal Dead Zone (TDZ)

// if (true) {
//   console.log(letVariable); // ReferenceError: Cannot access 'letVariable' before initialization
//   let letVariable = 'let';
// }

// if (true) {
//   console.log(constVariable); // ReferenceError: Cannot access 'constVariable' before initialization
//   const constVariable = 'const';
// }

// String Interpolation
// const name = 'John';
// const age = 30;
// console.log(`${name} is ${age} years old.`); // "John is 30 years old."

// // Multi-line Strings
// const address = `123 Main St
// Anytown, USA 12345`;
// console.log(address);

// // Simple Expressions
// const num1 = 10;
// const num2 = 20;
// console.log(`The sum is ${num1 + num2}.`); // "The sum is 30."

// // Function Calls
// function greet(name) {
//   return `Hello, ${name}!`;
// }
// console.log(`Result: ${greet('John')}`); // "Result: Hello, John!"

// // Creating a Tagged Template
// function tag(strings, ...values) {
//   console.log(strings);
//   console.log(values);
// }
// tag`Hello, ${'John'}!`; // ["Hello, ", "!"] ["John"]

// // Formatting
// function format(strings, ...values) {
//   return strings.reduce((acc, str, i) => acc + str + (values[i] || ''), '');
// }
// console.log(format`Hello, ${'John'}!`); // "Hello, John!"

// // Conditional Logic
// const hour = 12;
// console.log(`Good ${hour < 12 ? 'morning' : 'afternoon'}!`); // "Good afternoon!"

// // Loops within Template Literals
// const items = ['apple', 'banana', 'cherry'];
// console.log(items.map(item => `<li>${item}</li>`).join('')); // "<li>apple</li><li>banana</li><li>cherry</li>"

// // Escaping Backticks
// console.log(`\``); // "`"

// Nested Template Literals
// console.log(`
//   <table>
//     <tr>
//       <th>Name</th>
//       <th>Age</th>
//     </tr>
//     <tr>
//       <td>${'John'}</td>
//       <td>${30}</td>
//     </tr>
//   </table>
// `); // "<table>...</table>"

// // Rest Parameter
// function sum(...args) {
//   return args.reduce((a, b) => a + b, 0);
// }
// console.log(sum(1, 2, 3, 4, 5)); // 15

// // Spread Operator
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1, 4, 5, 6];
// console.log(arr2); // [1, 2, 3, 4, 5, 6]

// const obj1 = { a: 1, b: 2 };
// const obj2 = { ...obj1, c: 3, d: 4 };
// console.log(obj2); //


// Sum Function

// function sum(...args) {
//   return args.reduce((a, b) => a + b, 0);
// }

// console.log(sum(1, 2, 3, 4, 5)); // Output: 15


// Average Function

// function average(...args) {
//   return args.reduce((a, b) => a + b, 0) / args.length;
// }

// console.log(average(1, 2, 3, 4, 5)); // Output: 3


// First and Rest

// const numbers = [1, 2, 3, 4, 5];
// const [first, ...rest] = numbers;

// console.log(first); // Output: 1
// console.log(rest); // Output: [2, 3, 4, 5]


// Skip and Rest

// const colors = ["red", "green", "blue", "yellow", "orange"];
// const [, , ...remainingColors] = colors;

// console.log(remainingColors); // Output: ["blue", "yellow", "orange"]


// Basic Destructuring

// const person = {
//   name: "John Doe",
//   age: 30,
//   email: "john.doe@example.com",
//   address: "123 Main St"
// };

// const { name, email, ...rest } = person;

// console.log(name); // Output: "John Doe"
// console.log(email); // Output: "john.doe@example.com"
// console.log(rest); // Output: { age: 30, address: "123 Main St" }


// Nested Destructuring

// const student = {
//   id: 1,
//   name: "Jane Doe",
//   grades: [90, 85, 95],
//   info: {
//     age: 25,
//     major: "Computer Science"
//   }
// };

// const { id, name, info: { age, major } } = student;

// console.log(id); // Output: 1
// console.log(name); // Output: "Jane Doe"
// console.log(age); // Output: 25
// console.log(major); // Output: "Computer Science"


// Filter Even Numbers

// function filterEven(...args) {
//   return args.filter(num => num % 2 === 0);
// }

// console.log(filterEven(1, 2, 3, 4, 5)); // Output: [2, 4]


// Combine and Sort Arrays

// function combineAndSort(...args) {
//   return args.flat().sort((a, b) => a - b);
// }

// console.log(combineAndSort([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]


// Basic Callback

// function greet(name, callback) {
//   callback(`Hello, ${name}!`);
// }

// function printGreeting(message) {
//   console.log(message);
// }

// greet("John Doe", printGreeting); // Output: "Hello, John Doe!"


// Asynchronous Callback

// function fetchData(callback) {
//   setTimeout(() => {
//     callback({ data: "Hello, world!" });
//   }, 1000);
// }

// function displayData(data) {
//   console.log(data);
// }

// fetchData(displayData); // Output: { data: "Hello, world!" } after 1 second


// Simple Arrow Function

// const add = (a, b) => a + b;

// console.log(add(2, 3)); // Output: 5


// Arrow Function with Array Methods

// const numbers = [1, 2, 3, 4, 5];

// const squaredNumbers = numbers.map(num => num * num);

// console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]


// Variable Scope

// function outer() {
//   let x = 10;

//   function inner() {
//     console.log(x);
//   }

//   inner();
// }

// outer(); // Output: 10


// Closure

// function createCounter() {
//   let count = 0;

//   return function increment() {
//     count++;
//     console.log(count);
//   };
// }

// const counter1 = createCounter();
// const counter2 = createCounter();

// counter1(); // Output: 1
// counter1(); // Output: 2
// counter2(); // Output: 1


// Simple Default Parameters

// function greet(name = "World") {
//   console.log(`Hello, ${name}!`);
// }

// greet(); // Output: "Hello, World!"
// greet("John Doe"); //
// Fetch and Process Data
// function fetchUser() {
//     return new Promise((resolve, reject) => {
//         const user = { name: 'John Doe', age: 30 }; // Simulated user data
//         // Simulating a condition where user data might not be found
//         if (user) {
//             resolve(user);
//         } else {
//             reject('User not found');
//         }
//     });
// }

// function fetchPosts(user) {
//     return new Promise((resolve, reject) => {
//         const posts = [
//             { title: 'Post 1', content: 'This is the first post.' },
//             { title: 'Post 2', content: 'This is the second post.' }
//         ]; // Simulated posts data for the user
//         resolve(posts);
//     });
// }

// async function getUserAndPosts() {
//     try {
//         const user = await fetchUser(); // Fetch user data
//         console.log('User:', user);
        
//         const posts = await fetchPosts(user); // Fetch user posts
//         console.log('Posts:', posts);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// // Error Handling in async/await
// function fetchUserWithError() {
//     return new Promise((resolve, reject) => {
//         const user = null; // Simulated error case where user is not found
//         if (user) {
//             resolve(user);
//         } else {
//             reject('User not found');
//         }
//     });
// }

// async function getUserInfo() {
//     try {
//         const user = await fetchUserWithError(); // This will throw an error
//         console.log('User:', user);
//     } catch (error) {
//         console.error('Error fetching user info:', error); // Error handling
//     }
// }

// // Simulate API Calls
// function apiCall() {
//     return new Promise((resolve, reject) => {
//         const delay = Math.random() * 2000 + 1000; // Random delay between 1-3 seconds
//         setTimeout(() => {
//             const success = Math.random() > 0.2; // 80% chance of success
//             if (success) {
//                 resolve('Data received');
//             } else {
//                 reject('API call failed');
//             }
//         }, delay);
//     });
// }

// async function getData() {
//     try {
//         const result1 = await apiCall(); // First API call
//         console.log(result1);

//         const result2 = await apiCall(); // Second API call
//         console.log(result2);

//         const result3 = await apiCall(); // Third API call
//         console.log(result3);
//     } catch (error) {
//         console.error('Error in API calls:', error); // Handle any error
//     }
// }

// // Run the functions

// getUserAndPosts();   // Fetch user and posts
// getUserInfo();       // Fetch user info with error handling
// getData();           // Simulate API calls


//simple condition
// Create a variable age
// let age = 20; // You can change this value to test different cases

// // Use the ternary operator to assign the value to canVote
// let canVote = (age >= 18) ? "Yes" : "No";

// // Log canVote to the console
// console.log(canVote);


// . Even or Odd:

// // Create a variable number
// let number = 7; // You can change this value to test different cases

// // Use the ternary operator to assign evenOrOdd
// let evenOrOdd = (number % 2 === 0) ? "Even" : "Odd";

// // Log evenOrOdd to the console
// console.log(evenOrOdd);
// Grade Evaluation:

// // Create a variable score
// let score = 85; // You can change this value to test different cases

// // Use the ternary operator to assign grade
// let grade = (score >= 90) ? "A" :
//             (score >= 80) ? "B" :
//             (score >= 70) ? "C" :
//             (score >= 60) ? "D" : "F";

// // Log grade to the console
// console.log(grade);
//  Login Status:

// // Create a variable isLoggedIn
// let isLoggedIn = true; // Change this to false to test the other case

// // Use ternary operator and logical operators to assign statusMessage
// let statusMessage = isLoggedIn ? "Welcome back!" : "Please log in";

// // Log statusMessage to the console
// console.log(statusMessage);
//  Discount Eligibility:

// // Create variables isMember and purchaseAmount
// let isMember = true; // Change this to false to test the other case
// let purchaseAmount = 150;

// // Use ternary operator and logical operators to assign discount
// let discount = (isMember && purchaseAmount > 100) ? purchaseAmount * 0.1 : 0;

// // Log discount to the console
// console.log(discount);
//  Determine Max Value:

// // Create a function maxValue(a, b)
// function maxValue(a, b) {
//     return (a > b) ? a : b;
// }

// // Call the function with two numbers and log the result
// console.log(maxValue(10, 20)); // Logs 20
//  Greeting Message:
// javascript
// Copy code
// // Create a function greet(name)
// function greet(name = '') {
//     return name ? `Hello, ${name}!` : 'Hello, guest!';
// }

// // Call the function with and without a name and log the result
// console.log(greet('John'));  // Logs: Hello, John!
// console.log(greet());        // Logs: Hello, guest!
//  Mapping Values:

// // Create an array of numbers
// let numbers = [1, 2, 3, 4, 5];

// // Use map with a ternary operator to create a new array
// let mappedArray = numbers.map(num => (num % 2 === 0) ? num * 2 : num * 3);

// // Log the new array to the console
// console.log(mappedArray);  // Logs: [3, 4, 9, 8, 15]
//  Filtering Values:

// // Create an array of strings
// let strings = ['apple', 'banana', 'cat', 'dog', 'hi'];

// // Use filter with a ternary operator to create a new array
// let filteredArray = strings.filter(str => str.length > 3);

// // Log the new array to the console
// console.log(filteredArray);  // Logs: ['apple', 'banana']
//  Copying an Array:


// // Create an array originalArray with some elements
// let originalArray = [1, 2, 3];

// // Use the spread operator to create a copy
// let copiedArray = [...originalArray];

// // Log both arrays to the console to verify they are the same but not the same reference
// console.log(originalArray); // Logs: [1, 2, 3]
// console.log(copiedArray);   // Logs: [1, 2, 3]
// console.log(originalArray === copiedArray); // Logs: false
// . Merging Arrays:


// // Create two arrays
// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];

// // Use the spread operator to merge the arrays
// let mergedArray = [...array1, ...array2];

// // Log mergedArray to the console
// console.log(mergedArray);  // Logs: [1, 2, 3, 4, 5, 6]
//  Adding Elements to an Array:


// // Create an array numbers with some elements
// let numbers = [2, 3, 4];

// // Use spread operator to add elements to the beginning and end
// let updatedArray = [0, ...numbers, 5];

// // Log the updated array to the console
// console.log(updatedArray);  // Logs: [0, 2, 3, 4, 5]
//  Copying an Object:


// // Create an object originalObject
// let originalObject = { name: 'Alice', age: 25 };

// // Use spread operator to create a copy of the object
// let copiedObject = { ...originalObject };

// // Log both objects to the console to verify they are the same but not the same reference
// console.log(originalObject); // Logs: { name: 'Alice', age: 25 }
// console.log(copiedObject);   // Logs: { name: 'Alice', age: 25 }
// console.log(originalObject === copiedObject); // Logs: false
//  Merging Objects:


// // Create two objects
// let object1 = { name: 'Alice', age: 25 };
// let object2 = { age: 30, email: 'alice@example.com' };

// // Use the spread operator to merge the objects
// let mergedObject = { ...object1, ...object2 };

// // Log mergedObject to the console
// console.log(mergedObject);  // Logs: { name: 'Alice', age: 30, email: 'alice@example.com' }
//  Updating Object Properties:

// // Create an object user
// let user = { name: 'Alice', age: 25, email: 'alice@example.com' };

// // Use the spread operator to update properties
// let updatedUser = { ...user, email: 'new-email@example.com', address: '123 Main St' };

// // Log the updatedUser object to the console
// console.log(updatedUser);  // Logs: { name: 'Alice', age: 25, email: 'new-email@example.com', address: '123 Main St' }
//  Passing Array Elements as Arguments:

// // Create a function sum
// function sum(a, b, c) {
//     return a + b + c;
// }

// // Create an array numbers
// let numbers = [1, 2, 3];

// // Use the spread operator to pass elements as arguments
// console.log(sum(...numbers)); // Logs: 6
//  Combining Multiple Arrays:

// // Create a function combineArrays
// function combineArrays(...arrays) {
//     return [].concat(...arrays);
// }

// // Call the function with multiple arrays and log the result
// let array1 = [1, 2];
// let array2 = [3, 4];
// let array3 = [5, 6];

// console.log(combineArrays(array1, array2, array3));  // Logs: [1, 2, 3, 4, 5, 6]


// // Create a nested array
// let nestedArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// // Use the spread operator to create a shallow copy
// let copiedArray = [...nestedArray];

// // Modify the inner arrays in the copied array
// copiedArray[0][0] = 99;  // Modify the first element of the first inner array
// copiedArray[1][2] = 100; // Modify the third element of the second inner array

// // Log both the original and copied arrays
// console.log("Original array:", nestedArray);
// console.log("Copied array:", copiedArray);
// Original array: [[99, 2, 3], [4, 5, 100], [7, 8, 9]]
// Copied array: [[99, 2, 3], [4, 5, 100], [7, 8, 9]]

//Basic Destructuring:
// // Create an array fruits
// let fruits = ["apple", "banana", "cherry"];

// // Use destructuring to assign the elements to variables
// let [firstFruit, secondFruit, thirdFruit] = fruits;

// // Log the variables to the console
// console.log(firstFruit);  // Logs: "apple"
// console.log(secondFruit); // Logs: "banana"
// console.log(thirdFruit);  // Logs: "cherry"
//output
// apple
// banana
// cherry

