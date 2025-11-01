document.addEventListener('DOMContentLoaded', () => {

    const box = document.getElementById('reaction-box');
    const text = document.getElementById('reaction-text');

    let timerId;
    let startTime;

    // This function will be called when it's time to turn green
    const showGoScreen = () => {
        box.className = 'go'; // Set to green
        text.textContent = 'CLICK!';
        startTime = Date.now(); // Log the exact start time
    };

    // This function starts the game
    const startGame = () => {
        box.className = 'ready'; // Set to red
        text.textContent = 'Wait for green...';

        // Pick a random time between 2 and 5 seconds
        const randomTime = Math.random() * 3000 + 2000;

        timerId = setTimeout(showGoScreen, randomTime);
    };

    // This function handles a click
    const handleClick = () => {

        // State 1: "Click to Start" (blue)
        if (box.classList.contains('waiting')) {
            startGame();
            return;
        }

        // State 2: "Wait for it..." (red)
        if (box.classList.contains('ready')) {
            // Clicked too soon!
            clearTimeout(timerId); // Cancel the green screen
            box.className = 'fail';
            text.textContent = 'Too soon! Click to try again.';

            // Set it back to the 'waiting' state after a delay
            setTimeout(() => {
                box.className = 'waiting';
                text.textContent = 'Click to Start';
            }, 2000);
            return;
        }

        // State 3: "CLICK!" (green)
        if (box.classList.contains('go')) {
            // Clicked successfully!
            const endTime = Date.now();
            const reactionTime = endTime - startTime;

            box.className = 'waiting';
            text.textContent = `Your time: ${reactionTime}ms. Click to play again.`;
            return;
        }
    };

    box.addEventListener('click', handleClick);
});