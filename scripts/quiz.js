document.addEventListener('DOMContentLoaded', () => {

    const quizForm = document.getElementById('quiz-form');
    const resultContainer = document.getElementById('quiz-result');
    const retakeButton = document.getElementById('retake-quiz-btn');

    // 1. Listen for the form to be submitted
    quizForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Stop the page from reloading

        // 2. Tally the answers
        let scoreA = 0;
        let scoreB = 0;
        let scoreC = 0;

        const answers = {
            q1: quizForm.q1.value,
            q2: quizForm.q2.value,
            q3: quizForm.q3.value,
        };

        // Loop through the answers and add up the scores
        for (let key in answers) {
            if (answers[key] === 'a') {
                scoreA++;
            } else if (answers[key] === 'b') {
                scoreB++;
            } else {
                scoreC++;
            }
        }

        // 3. Determine the result
        let resultTitle = '';
        let resultDescription = '';

        if (scoreA > scoreB && scoreA > scoreC) {
            // Mostly 'a' answers
            resultTitle = "The Duelist";
            resultDescription = "You're all about action! You have the confidence and reflexes to take the fight to the enemy. You are the tip of the spear, creating space for your team to win.";
        } else if (scoreB > scoreA && scoreB > scoreC) {
            // Mostly 'b' answers
            resultTitle = "The Strategist";
            resultDescription = "You're the brains of the operation. You see the bigger picture, control the map, and out-think your opponents. Your plans lead the team to victory.";
        } else {
            // Mostly 'c' or a tie
            resultTitle = "The Team Player";
            resultDescription = "You are the heart of the team. You focus on communication, support, and making sure everyone works together. You know that no one wins alone.";
        }

        // 4. Display the result
        document.getElementById('result-title').textContent = resultTitle;
        document.getElementById('result-description').textContent = resultDescription;

        quizForm.classList.add('hidden');
        resultContainer.classList.remove('hidden');
    });

    // 5. Add listener for the "Retake" button
    retakeButton.addEventListener('click', () => {
        resultContainer.classList.add('hidden');
        quizForm.classList.remove('hidden');
        quizForm.reset(); // Clear the radio buttons
    });
});