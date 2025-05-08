// Variables for story progression, inventory, etc.
let currentStage = 0;
let inventory = [];
let battleInProgress = false;

const storyStages = [
    {
        text: "Welcome to BioQuest, young scientist! You must explore different biological systems to save your project.",
        nextText: "You enter the Cell. What will you explore first?",
        choices: [
            { text: "Explore the Nucleus", action: exploreCell },
            { text: "Explore the Mitochondria", action: exploreDNA }
        ]
    },
    {
        text: "You have entered the DNA strand! Solve the sequence puzzle to progress.",
        nextText: "The DNA strand puzzle appears before you. Solve it correctly to continue.",
        choices: [
            { text: "Start DNA Repair", action: startBattle }
        ]
    }
];

// Start the game and the first storyline
function startAdventure() {
    document.getElementById("storyContainer").style.display = "none";
    displayStory(storyStages[currentStage]);
}

// Display story with choices
function displayStory(stage) {
    document.getElementById("storyText").innerText = stage.text;
    const buttonContainer = document.createElement('div');
    stage.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.onclick = choice.action;
        buttonContainer.appendChild(button);
    });
    document.getElementById("storyContainer").appendChild(buttonContainer);
}

// Explore Cell Location
function exploreCell() {
    currentStage = 1; // Advance to next stage
    displayStory(storyStages[currentStage]);
    document.getElementById("mapContainer").style.display = "none";
    document.getElementById("battleContainer").style.display = "block";
}

// Explore DNA Strand Location
function exploreDNA() {
    // You can add DNA puzzles and challenges here
    alert("Exploring DNA! You need to repair a sequence!");
    // Trigger Battle or Puzzle logic
}

// Start Battle/Puzzle Logic
function startBattle() {
    if (!battleInProgress) {
        battleInProgress = true;
        alert("A battle with a cell creature begins!");
        // You can simulate battles here with a choice of biology-based actions
    }
}

// Handle Inventory
function addItemToInventory(item) {
    inventory.push(item);
    const inventoryList = document.getElementById("inventoryList");
    const itemElement = document.createElement('li');
    itemElement.innerText = item;
    inventoryList.appendChild(itemElement);
}

// Inventory button action
function showInventory() {
    document.getElementById("inventoryContainer").style.display = "block";
}

