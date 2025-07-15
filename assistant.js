// assistant.js
// GitHub repo: https://github.com/gonzalezjulio01/cs81-module6b-assistant

// Constructor for personal assistant
function PersonalAssistant(name) {
  this.name = name;         // Assistant's name
  this.tasks = [];          // Array to hold tasks
  this.mood = "neutral";    // Default mood
}

// Method to add a task
PersonalAssistant.prototype.addTask = function(task) {
  this.tasks.push(task);
  console.log("Task added:", task);
};

// Method to complete a task
PersonalAssistant.prototype.completeTask = function() {
  if (this.tasks.length > 0) {
    let finished = this.tasks.shift();
    console.log("Completing task:", finished);
    this.mood = "accomplished";
  } else {
    console.log("No tasks to complete.");
  }
};

// Method to report current mood
PersonalAssistant.prototype.reportMood = function() {
  console.log("Mood:", this.mood);
};

// Simulating a day
let myAssistant = new PersonalAssistant("Nova");

console.log("Hi! I'm " + myAssistant.name + ", your assistant.");

myAssistant.reportMood(); // Before doing anything

// Adding real-life tasks
myAssistant.addTask("Finish JavaScript assignment");
myAssistant.addTask("Reply to messages");
myAssistant.addTask("Clean up my workspace");

// Completing some tasks
myAssistant.completeTask(); // Finishes "Finish JavaScript assignment"
myAssistant.reportMood();   // Mood changes after completing a task

myAssistant.completeTask(); // Finishes "Reply to messages"
myAssistant.reportMood();   // Still feeling accomplished
