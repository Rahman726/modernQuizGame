// Game state
const gameState = {
    currentUser: null,
    currentClass: null,
    currentSubject: null,
    currentDifficulty: null,
    currentQuestion: 1,
    score: 0,
    timer: 60,
    timerInterval: null,
    questions: [],
    selectedOption: null,
    soundEnabled: true,
    timePerQuestion: 60
};

// DOM Elements
const screens = {
    login: document.getElementById('loginScreen'),
    signup: document.getElementById('signupScreen'),
    class: document.getElementById('classScreen'),
    subject: document.getElementById('subjectScreen'),
    difficulty: document.getElementById('difficultyScreen'),
    quiz: document.getElementById('quizScreen'),
    highScores: document.getElementById('highScoresScreen'),
    gameOver: document.getElementById('gameOverScreen')
};

// Audio Elements
const backgroundMusic = document.getElementById('backgroundMusic');
const correctSound = document.getElementById('correctSound');
const wrongSound = document.getElementById('wrongSound');
const levelUpSound = document.getElementById('levelUpSound');
const gameOverSound = document.getElementById('gameOverSound');

// Utility function to shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Show a specific screen
function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
}

// Initialize classes
function initClasses() {
    const classes = Object.keys(questionDatabase);
    
    const classSelection = document.getElementById('classSelection');
    classSelection.innerHTML = '';
    
    classes.forEach(className => {
        const classCard = document.createElement('div');
        classCard.className = 'class-card';
        classCard.textContent = className;
        classCard.addEventListener('click', () => selectClass(className));
        classSelection.appendChild(classCard);
    });
}

// Initialize difficulty selection
function initDifficultySelection() {
    const difficultyCards = document.querySelectorAll('.difficulty-card');
    
    difficultyCards.forEach(card => {
        card.addEventListener('click', function() {
            // Deselect all difficulty cards
            difficultyCards.forEach(c => c.classList.remove('selected'));
            
            // Select the clicked card
            this.classList.add('selected');
            
            // Enable start quiz button
            document.getElementById('startQuizBtn').disabled = false;
            
            // Set the current difficulty
            gameState.currentDifficulty = this.getAttribute('data-difficulty');
            
            // Set time per question based on difficulty
            switch(gameState.currentDifficulty) {
                case 'easy':
                    gameState.timePerQuestion = 60;
                    break;
                case 'medium':
                    gameState.timePerQuestion = 45;
                    break;
                case 'hard':
                    gameState.timePerQuestion = 30;
                    break;
            }
        });
    });
}

// Select a class
function selectClass(className) {
    // Deselect all classes
    document.querySelectorAll('.class-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Select the clicked class
    event.target.classList.add('selected');
    gameState.currentClass = className;
    document.getElementById('selectSubjectBtn').disabled = false;
    
    // Initialize subjects for the selected class
    initSubjects();
}

// Initialize subjects for the selected class
function initSubjects() {
    const subjects = Object.keys(questionDatabase[gameState.currentClass]);
    
    const subjectGrid = document.getElementById('subjectGrid');
    subjectGrid.innerHTML = '';
    
    subjects.forEach(subject => {
        const subjectCard = document.createElement('div');
        subjectCard.className = 'subject-card';
        subjectCard.textContent = subject;
        subjectCard.addEventListener('click', () => selectSubject(subject));
        subjectGrid.appendChild(subjectCard);
    });
}

// Select a subject
function selectSubject(subject) {
    // Deselect all subjects
    document.querySelectorAll('.subject-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Select the clicked subject
    event.target.classList.add('selected');
    gameState.currentSubject = subject;
    document.getElementById('selectDifficultyBtn').disabled = false;
}

// Start the quiz
function startQuiz() {
    if (!gameState.currentClass || !gameState.currentSubject || !gameState.currentDifficulty) {
        showNotification('Please select a class, subject, and difficulty');
        return;
    }
    
    // Reset game state
    gameState.currentQuestion = 1;
    gameState.score = 0;
    
    // Get questions for the selected class, subject and difficulty
    gameState.questions = questionDatabase[gameState.currentClass][gameState.currentSubject][gameState.currentDifficulty];
    
    // Shuffle questions to make them random
    gameState.questions = shuffleArray(gameState.questions);
    
    // Show quiz screen and start the first question
    showScreen('quiz');
    loadQuestion();
    startTimer();
    
    // Update difficulty badge
    const difficultyBadge = document.getElementById('currentDifficulty');
    difficultyBadge.textContent = gameState.currentDifficulty.charAt(0).toUpperCase() + gameState.currentDifficulty.slice(1);
    difficultyBadge.className = `difficulty-badge ${gameState.currentDifficulty}`;
}

// Load the current question
function loadQuestion() {
    const question = gameState.questions[gameState.currentQuestion - 1];
    document.getElementById('question').textContent = question.text;
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectAnswer(index));
        optionsContainer.appendChild(optionElement);
    });
    
    // Reset UI state
    document.getElementById('nextQuestionBtn').style.display = 'none';
    gameState.selectedOption = null;
    
    // Update UI
    document.getElementById('currentQuestion').textContent = gameState.currentQuestion;
    document.getElementById('currentScore').textContent = gameState.score;
    document.getElementById('questionProgress').style.width = `${((gameState.currentQuestion - 1) / gameState.questions.length) * 100}%`;
}

// Select an answer
function selectAnswer(optionIndex) {
    if (gameState.selectedOption !== null) return; // Prevent multiple selections
    
    gameState.selectedOption = optionIndex;
    const question = gameState.questions[gameState.currentQuestion - 1];
    const options = document.querySelectorAll('.option');
    
    // Disable all options
    options.forEach(option => {
        option.style.pointerEvents = 'none';
    });
    
    // Mark correct and wrong answers
    options[question.correctAnswer].classList.add('correct');
    if (optionIndex !== question.correctAnswer) {
        options[optionIndex].classList.add('wrong');
        
        // Play wrong sound
        if (gameState.soundEnabled) {
            wrongSound.currentTime = 0;
            wrongSound.play();
        }
    } else {
        // Play correct sound and update score
        if (gameState.soundEnabled) {
            correctSound.currentTime = 0;
            correctSound.play();
        }
        
        // Calculate score based on time remaining and difficulty
        const timeBonus = Math.floor(gameState.timer / 2);
        let difficultyMultiplier;
        switch(gameState.currentDifficulty) {
            case 'easy': difficultyMultiplier = 1; break;
            case 'medium': difficultyMultiplier = 2; break;
            case 'hard': difficultyMultiplier = 3; break;
        }
        
        gameState.score += 10 * difficultyMultiplier + timeBonus;
        document.getElementById('currentScore').textContent = gameState.score;
    }
    
    // Show next question button
    document.getElementById('nextQuestionBtn').style.display = 'block';
}

// Move to the next question
function nextQuestion() {
    gameState.currentQuestion++;
    
    if (gameState.currentQuestion <= gameState.questions.length) {
        loadQuestion();
        resetTimer();
    } else {
        // Quiz completed
        quizCompleted();
    }
}

// Handle quiz completion
function quizCompleted() {
    clearInterval(gameState.timerInterval);
    saveHighScore();
    
    // Play game over sound
    if (gameState.soundEnabled) {
        gameOverSound.currentTime = 0;
        gameOverSound.play();
    }
    
    document.getElementById('finalScore').textContent = gameState.score;
    
    // Update difficulty badge
    const difficultyBadge = document.getElementById('finalDifficulty');
    difficultyBadge.textContent = gameState.currentDifficulty.charAt(0).toUpperCase() + gameState.currentDifficulty.slice(1);
    difficultyBadge.className = `difficulty-badge ${gameState.currentDifficulty}`;
    
    showScreen('gameOver');
    showNotification(`Quiz completed! Your score: ${gameState.score}`);
}

// Start the timer
function startTimer() {
    gameState.timer = gameState.timePerQuestion;
    document.getElementById('timer').textContent = gameState.timer;
    
    gameState.timerInterval = setInterval(() => {
        gameState.timer--;
        document.getElementById('timer').textContent = gameState.timer;
        
        if (gameState.timer <= 0) {
            clearInterval(gameState.timerInterval);
            timeUp();
        }
    }, 1000);
}

// Reset the timer
function resetTimer() {
    clearInterval(gameState.timerInterval);
    startTimer();
}

// Handle time up
function timeUp() {
    if (gameState.selectedOption === null) {
        // Auto-select wrong answer if no selection was made
        const options = document.querySelectorAll('.option');
        const question = gameState.questions[gameState.currentQuestion - 1];
        
        options[question.correctAnswer].classList.add('correct');
        options[0].classList.add('wrong');
        
        document.getElementById('nextQuestionBtn').style.display = 'block';
        showNotification('Time is up!');
    }
}

// Quit the quiz
function quitQuiz() {
    clearInterval(gameState.timerInterval);
    
    if (gameState.score > 0) {
        saveHighScore();
    }
    
    showScreen('class');
}

// Save high score
function saveHighScore() {
    const users = JSON.parse(localStorage.getItem('quizUsers') || '{}');
    
    if (!users[gameState.currentUser]) {
        users[gameState.currentUser] = { password: '', highScores: {} };
    }
    
    if (!users[gameState.currentUser].highScores) {
        users[gameState.currentUser].highScores = {};
    }
    
    const scoreKey = `${gameState.currentClass}_${gameState.currentSubject}_${gameState.currentDifficulty}`;
    const subjectScores = users[gameState.currentUser].highScores[scoreKey] || [];
    subjectScores.push({
        score: gameState.score,
        date: new Date().toISOString()
    });
    
    // Keep only top 10 scores per subject/difficulty
    subjectScores.sort((a, b) => b.score - a.score);
    if (subjectScores.length > 10) {
        subjectScores.splice(10);
    }
    
    users[gameState.currentUser].highScores[scoreKey] = subjectScores;
    localStorage.setItem('quizUsers', JSON.stringify(users));
}

// Show high scores
function showHighScores() {
    const users = JSON.parse(localStorage.getItem('quizUsers') || '{}');
    const currentUser = users[gameState.currentUser];
    
    const highScoresList = document.getElementById('highScoresList');
    highScoresList.innerHTML = '';
    
    if (!currentUser || !currentUser.highScores || Object.keys(currentUser.highScores).length === 0) {
        highScoresList.innerHTML = '<div class="score-item">No high scores yet</div>';
    } else {
        Object.entries(currentUser.highScores).forEach(([classSubjectDifficulty, scores]) => {
            const [classLevel, subject, difficulty] = classSubjectDifficulty.split('_');
            const subjectHeader = document.createElement('div');
            subjectHeader.style.fontWeight = 'bold';
            subjectHeader.style.marginTop = '10px';
            subjectHeader.innerHTML = `${classLevel} - ${subject} - <span class="difficulty-badge ${difficulty}">${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}</span>`;
            highScoresList.appendChild(subjectHeader);
            
            scores.forEach((score, index) => {
                const scoreItem = document.createElement('div');
                scoreItem.className = 'score-item';
                scoreItem.innerHTML = `
                    <span>${index + 1}. ${new Date(score.date).toLocaleDateString()}</span>
                    <span>Score: ${score.score}</span>
                `;
                highScoresList.appendChild(scoreItem);
            });
        });
    }
    
    showScreen('highScores');
}

// Clear high scores
function clearScores() {
    if (confirm('Are you sure you want to clear all your high scores?')) {
        const users = JSON.parse(localStorage.getItem('quizUsers') || '{}');
        
        if (users[gameState.currentUser]) {
            users[gameState.currentUser].highScores = {};
            localStorage.setItem('quizUsers', JSON.stringify(users));
            showHighScores();
            showNotification('High scores cleared');
        }
    }
}

// Play again
function playAgain() {
    showScreen('difficulty');
}

// Toggle sound
function toggleSound() {
    gameState.soundEnabled = !gameState.soundEnabled;
    const soundToggle = document.getElementById('soundToggle');
    
    if (gameState.soundEnabled) {
        soundToggle.textContent = '🔊';
        backgroundMusic.play().catch(e => console.log("Audio play failed:", e));
    } else {
        soundToggle.textContent = '🔇';
        backgroundMusic.pause();
    }
}

// Show notification
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';
    
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}