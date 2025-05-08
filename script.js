const questions = [
    {
        question: "What is the function of the mitochondria?",
        options: ["Protein Synthesis", "Energy Production", "Photosynthesis", "Cell Division"],
        answer: "Energy Production"
    },
    {
        question: "Which organelle is responsible for protein synthesis?",
        options: ["Nucleus", "Ribosomes", "Lysosomes", "Golgi Apparatus"],
        answer: "Ribosomes"
    },
    {
        question: "What is the outer layer of a plant cell called?",
        options: ["Plasma Membrane", "Nucleus", "Cell Wall", "Mitochondria"],
        answer: "Cell Wall"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function startGame() {
    document.querySelector('button').style.display = 'none'; // Hide the start button
    document.getElementById('quizContainer').style.display = 'block'; // Show quiz container
    loadQuestion();
}

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('questionContainer').innerText = currentQuestion.question;
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = ''; // Clear previous options

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });

    document.getElementById('nextButton').style.display = 'none'; // Hide next button initially
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        score++;
    }

    document.getElementById('score').innerText = `Score: ${score}`;
    document.getElementById('nextButton').style.display = 'block'; // Show next button
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        document.getElementById('score').innerText = `Congratulations! Your final score is: ${score}`;
        document.getElementById('nextButton').style.display = 'none'; // Hide next button
    }
}
