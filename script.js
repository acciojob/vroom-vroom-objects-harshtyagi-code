class Person {
  // Constructor that accepts name and age
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method that prints a greeting message
  greet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
  }
}

// Create an Employee class that inherits from Person
class Employee extends Person {
  // Constructor that accepts name, age, and jobTitle
  constructor(name, age, jobTitle) {
    // Call the parent constructor with name and age
    super(name, age);
    this.jobTitle = jobTitle;
  }

  // Method that prints a job-specific greeting message
  jobGreet() {
    console.log(
      `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`
    );
  }
}

// Example test case
// Create a Person instance with name Alice and age 25
let alice = new Person("Alice", 25);
// Call the greet method
alice.greet(); // Hello, my name is Alice, I am 25 years old.

// Create an Employee instance with name Bob, age 30, and job title Manager
let bob = new Employee("Bob", 30, "Manager");
// Call the jobGreet method
bob.jobGreet(); // Hello, my name is Bob, I am 30 years o