let currentChapter = 0;
const chapters = [
    {
        story: "Welcome to BioQuest! Help Dr. Cell explore the wonders of the cell to unlock its secrets.",
        minigame: "exploreCell",
        title: "Cell Exploration"
    },
    {
        story: "Now, let's repair some DNA. Can you fix the damaged sequence?",
        minigame: "repairDNA",
        title: "DNA Repair"
    }
];

function startAdventure() {
    document.querySelector('button').style.display = 'none'; // Hide start button
    document.getElementById('storyContainer').style.display = 'block'; // Show story section
    document.getElementById('storyText').innerText = chapters[currentChapter].story;
}

function startExploration() {
    document.getElementById('storyContainer').style.display = 'none'; // Hide story
    document.getElementById('exploreContainer').style.display = 'block'; // Show exploration
    initCellExploration();
}

function initCellExploration() {
    // Organelles images and their names
    const organelles = [
        { name: 'Nucleus', image: 'https://via.placeholder.com/100' }, // Replace with real images
        { name: 'Mitochondria', image: 'https://via.placeholder.com/100' },
        { name: 'Ribosomes', image: 'https://via.placeholder.com/100' },
        { name: 'Endoplasmic Reticulum', image: 'https://via.placeholder.com/100' }
    ];

    const canvas = document.getElementById('cellCanvas');
    canvas.innerHTML = ''; // Clear previous content

    organelles.forEach(organelle => {
        const organelleDiv = document.createElement('div');
        organelleDiv.classList.add('organelle');
        organelleDiv.innerHTML = `<img src="${organelle.image}" alt="${organelle.name}"><br>${organelle.name}`;
        organelleDiv.onclick = () => startMinigame(organelle.name);
        canvas.appendChild(organelleDiv);
    });
}

function startMinigame(organelle) {
    alert(`You are now exploring the ${organelle}`);
    if (organelle === 'Mitochondria') {
        startDNARepairGame();
    }
}

function startDNARepairGame() {
    document.getElementById('exploreContainer').style.display = 'none'; // Hide exploration
    document.getElementById('minigameContainer').style.display = 'block'; // Show mini-game
    document.getElementById('dnaRepairGame').style.display = 'block'; // Show DNA repair
    initDNARepair();
}

function initDNARepair() {
    const dnaSequence = ['A', 'T', 'G', 'C'];
    const repairContainer = document.getElementById('dnaRepair');
    repairContainer.innerHTML = ''; // Clear previous content

    dnaSequence.forEach((nucleotide, index) => {
        const button = document.createElement('button');
        button.innerText = nucleotide;
        button.onclick = () => checkDNARepair(nucleotide, index);
        repairContainer.appendChild(button);
    });
}

function checkDNARepair(selectedNucleotide, index) {
    const correctSequence = ['A', 'T', 'G', 'C'];
    const isCorrect = selectedNucleotide === correctSequence[index];

    showFeedback(isCorrect);
}

function showFeedback(isCorrect) {
    const feedbackElement = document.getElementById('feedback');
    if (isCorrect) {
        feedbackElement.style.backgroundColor = 'green';
        feedbackElement.innerText = 'Correct!';
    } else {
        feedbackElement.style.backgroundColor = 'red';
        feedbackElement.innerText = 'Wrong!';
    }
    feedbackElement.style.display = 'block';
    setTimeout(() => {
        feedbackElement.style.display = 'none';
    }, 1000); // Hide feedback after 1 second
}

function completeMinigame() {
    alert("DNA sequence repaired! Well done.");
    document.getElementById('minigameContainer').style.display = 'none'; // Hide mini-game
    nextChapter();
}

function nextChapter() {
    currentChapter++;
    if (currentChapter < chapters.length) {
        document.getElementById('storyText').innerText = chapters[currentChapter].story;
        document.getElementById('storyContainer').style.display = 'block'; // Show story
    } else {
        alert("Congratulations, you've completed BioQuest!");
    }
}
