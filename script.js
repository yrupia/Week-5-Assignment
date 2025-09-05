/* Part 1: Variable Declarations and Conditionals */
let age = 20;
let isStudent = true;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

if (isStudent) {
  console.log("You are a student.");
} else {
  console.log("You are not a student.");
}

/* Part 2: Custom Functions */
function greet(name) {
  return `Hello, ${name}!`;
}

function addNumbers(a, b) {
  return a + b;
}

console.log(greet("Yohana"));
console.log(addNumbers(5, 10));

/* Part 3: Loops */
// For loop example
for (let i = 1; i <= 5; i++) {
  console.log(`For loop iteration: ${i}`);
}

// While loop example
let j = 1;
while (j <= 5) {
  console.log(`While loop iteration: ${j}`);
  j++;
}

/* Part 4: DOM Interactions */
// Change text of paragraph
const btnChangeText = document.getElementById('btnChangeText');
const textParagraph = document.getElementById('textParagraph');

btnChangeText.addEventListener('click', () => {
  textParagraph.textContent = "Text has been changed!";
});

// Show input value
const btnShowInput = document.getElementById('btnShowInput');
const userInput = document.getElementById('userInput');

btnShowInput.addEventListener('click', () => {
  alert(`You typed: ${userInput.value}`);
});

// Dynamically create a list
const listContainer = document.getElementById('listContainer');
const fruits = ["Apple", "Banana", "Orange"];

const ul = document.createElement('ul');
fruits.forEach(fruit => {
  const li = document.createElement('li');
  li.textContent = fruit;
  ul.appendChild(li);
});
listContainer.appendChild(ul);
