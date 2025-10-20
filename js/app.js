// Initialize the game
function init() {
    // Set up event listeners
    document.getElementById('loginBtn').addEventListener('click', login);
    document.getElementById('signupBtn').addEventListener('click', signup);
    document.getElementById('showSignup').addEventListener('click', () => showScreen('signup'));
    document.getElementById('showLogin').addEventListener('click', () => showScreen('login'));
    document.getElementById('logoutBtn').addEventListener('click', logout);
    document.getElementById('highScoresBtn').addEventListener('click', showHighScores);
    document.getElementById('selectSubjectBtn').addEventListener('click', () => showScreen('subject'));
    document.getElementById('selectDifficultyBtn').addEventListener('click', () => showScreen('difficulty'));
    document.getElementById('startQuizBtn').addEventListener('click', startQuiz);
    document.getElementById('backToClassBtn').addEventListener('click', () => showScreen('class'));
    document.getElementById('backToSubjectsBtn').addEventListener('click', () => showScreen('subject'));
    document.getElementById('backToSubjectsBtn2').addEventListener('click', () => showScreen('subject'));
    document.getElementById('quitQuizBtn').addEventListener('click', quitQuiz);
    document.getElementById('nextQuestionBtn').addEventListener('click', nextQuestion);
    document.getElementById('backToMenuBtn').addEventListener('click', () => showScreen('class'));
    document.getElementById('clearScoresBtn').addEventListener('click', clearScores);
    document.getElementById('playAgainBtn').addEventListener('click', playAgain);
    document.getElementById('soundToggle').addEventListener('click', toggleSound);

    // Initialize classes
    initClasses();
    
    // Initialize difficulty selection
    initDifficultySelection();
    
    // Try to play background music
    if (gameState.soundEnabled) {
        backgroundMusic.play().catch(e => console.log("Audio play failed:", e));
    }
}

// Login function
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (!username || !password) {
        showNotification('Please enter both username and password');
        return;
    }
    
    const users = JSON.parse(localStorage.getItem('quizUsers') || '{}');
    
    if (users[username] && users[username].password === password) {
        gameState.currentUser = username;
        showScreen('class');
        showNotification(`Welcome back, ${username}!`);
    } else {
        showNotification('Invalid username or password');
    }
}

// Signup function
function signup() {
    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (!username || !password) {
        showNotification('Please enter both username and password');
        return;
    }
    
    if (password !== confirmPassword) {
        showNotification('Passwords do not match');
        return;
    }
    
    const users = JSON.parse(localStorage.getItem('quizUsers') || '{}');
    
    if (users[username]) {
        showNotification('Username already exists');
        return;
    }
    
    users[username] = { password, highScores: {} };
    localStorage.setItem('quizUsers', JSON.stringify(users));
    
    gameState.currentUser = username;
    showScreen('class');
    showNotification(`Account created successfully! Welcome, ${username}!`);
}

// Logout function
function logout() {
    gameState.currentUser = null;
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('newUsername').value = '';
    document.getElementById('newPassword').value = '';
    document.getElementById('confirmPassword').value = '';
    showScreen('login');
}

// Initialize the game when the page loads
window.addEventListener('load', init);