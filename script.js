// ===== Part 1: Variables, Conditionals, and Output =====

// Get references to DOM elements
const userNumberInput = document.getElementById('userNumber');
const checkNumberBtn = document.getElementById('checkNumberBtn');
const part1Output = document.getElementById('part1Output');

checkNumberBtn.addEventListener('click', () => {
  const num = Number(userNumberInput.value);

  // Conditionals to check the number
  if (isNaN(num)) {
    part1Output.textContent = "Please enter a valid number.";
  } else if (num > 0) {
    part1Output.textContent = "Your number is positive.";
  } else if (num < 0) {
    part1Output.textContent = "Your number is negative.";
  } else {
    part1Output.textContent = "You entered zero.";
  }
});

// ===== Part 2: Functions =====

// Function 1: Calculate total price with tax
function calculateTotalPrice(price, taxRate) {
  return price + price * taxRate;
}

// Function 2: Format a string to uppercase and add exclamation
function shout(message) {
  return message.toUpperCase() + '!';
}

// Example usage
console.log(calculateTotalPrice(100, 0.08));  // 108
console.log(shout('hello world'));             // HELLO WORLD!

// ===== Part 3: Loops =====

// Loop 1: For loop to print numbers 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(`Number ${i}`);
}

// Loop 2: Loop through an array using forEach
const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach(fruit => {
  console.log(`I like ${fruit}`);
});

// ===== Part 4: DOM Manipulation =====

// Toggle the color of the box between lightblue and tomato
const toggleColorBtn = document.getElementById('toggleColorBtn');
const colorBox = document.getElementById('colorBox');

toggleColorBtn.addEventListener('click', () => {
  colorBox.classList.toggle('red');
});

// Additional DOM interactions:

// 1. Change button text on click
toggleColorBtn.addEventListener('click', () => {
  if (colorBox.classList.contains('red')) {
    toggleColorBtn.textContent = 'Switch to Blue';
  } else {
    toggleColorBtn.textContent = 'Switch to Red';
  }
});

// 2. Create and append a new paragraph dynamically
function addParagraph(text) {
  const p = document.createElement('p');
  p.textContent = text;
  document.body.appendChild(p);
}

addParagraph('This paragraph was added dynamically via JavaScript.');

