/* 
Project: "Silly Character Customizer"
Objective:
You’ll create a small interactive webpage that generates a random, 
funny character with attributes like name, age, favorite food, and special powers. 
The user can also customize certain aspects, such as the character's name or age.

Project Breakdown:
Declare, Initialize, and Update Variables:


You’ll create variables to store different character attributes 
(name, age, favorite food, etc.).
Users will have the option to update some of these variables, like 
changing the character’s name or age.

Use different data types for each attribute:
characterName (string)
Age (number)
Is the character a superhero? (boolean)
Special powers (array)
Favorite food (string)
Conduct Basic Math Operations:

You can randomly generate the character's age using math operations.
You could also include a small feature where the character's age increases 
or decreases when a button is clicked.
Create and Manipulate Strings:

Use string manipulation to generate a funny description of the character 
based on the data. You can concatenate strings or use template literals to 
display the character's attributes in a creative and humorous ways.
*/


// Declare and initialize variables

let characterName = "Captain Waffles";
let age = 25;
let isSuperhero = true;
let favoriteFood = "Pizza";

let specialPowers = [
    "can fly faster than light",
    "shoots spaghetti from hands",
    "talks to squirrel",
    "turns homework into cookies"
];

// Function to generate a random character description

function generateCharacter() {
   
    // Random age
    age = Math.floor(Math.random() *80) + 10;

    // Random power
    let randomPower =
    specialPowers[Math.floor(Math.random() *specialPowers.length)];
    
   // Funny description
   let description = `Meet ${characterName}, a ${age}-year-old ${
        isSuperhero ? "superhero" : "troublemaker"
    } who loves ${favoriteFood} and ${randomPower}!`;

   // Display description
   document.querySelector("#characterDescription").textContent =
       description;
    
}

// Functions to update character's age
function increaseAge() {
    age++;
    updateDescription();
}

function decreaseAge() {
    if (age > 1) {
    age--;
    }
   
    updateDescription();
}

// Function to update the character's description after changing age
function updateDescription() {
    let randomPower =
        specialPowers[Math.floor(Math.random() * specialPowers.length)];

    let description = `Meet ${characterName}, a ${age}-year-old ${
        isSuperhero ? "superhero" : "troublemaker"
    } who loves ${favoriteFood} and ${randomPower}!`;

    document.querySelector("#characterDescription").textContent =
        description;
}

// Add event listeners for buttons using querySelector

document
    .querySelector("#generateButton")
    .addEventListener("click", generateCharacter);

document
    .querySelector("#increaseAgeButton")
    .addEventListener("click", increaseAge);

document
    .querySelector("#decreaseAgeButton")
    .addEventListener("click", decreaseAge);