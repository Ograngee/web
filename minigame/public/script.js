document.addEventListener('DOMContentLoaded', function() {
    const generateRandomNumberButton = document.getElementById('generateRandomNumberButton');
    const minRangeInput = document.getElementById('minRange');
    const maxRangeInput = document.getElementById('maxRange');
    const randomNumberDisplay = document.getElementById('randomNumberDisplay');

    const checkGuessButton = document.getElementById('checkGuessButton');
    const guessInput = document.getElementById('guessInput');
    const guessResult = document.getElementById('guessResult');

    let secretNumber; // Declare secret number variable for guessing game

    if (generateRandomNumberButton) {
        generateRandomNumberButton.addEventListener('click', function() {
            const minRange = parseInt(minRangeInput.value);
            const maxRange = parseInt(maxRangeInput.value);

            if (isNaN(minRange) || isNaN(maxRange) || minRange >= maxRange) {
                alert('Please enter valid range. Min range should be less than max range.');
            } else {
                const randomNumber = generateRandomNumber(minRange, maxRange);
                randomNumberDisplay.textContent = randomNumber;
            }
        });
    }

    if (checkGuessButton) {
        checkGuessButton.addEventListener('click', function() {
            const userGuess = parseInt(guessInput.value);

            if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
                guessResult.textContent = 'Please enter a valid number between 1 and 100.';
            } else {
                checkGuess(userGuess);
            }
        });
    }

    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function generateSecretNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }

    function checkGuess(userGuess) {
        if (!secretNumber) {
            secretNumber = generateSecretNumber();
        }

        if (userGuess === secretNumber) {
            guessResult.textContent = 'Congratulations! You guessed the correct number.';
            secretNumber = null; // Reset secret number for a new game
        } else if (userGuess < secretNumber) {
            guessResult.textContent = 'The number is lower.';
        } else {
            guessResult.textContent = 'The number is higher.';
        }
    }
});
