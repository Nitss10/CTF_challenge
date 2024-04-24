const codeBlocks = document.querySelectorAll('.code');
const userInput = document.getElementById('userInput');
const validateBtn = document.getElementById('validateBtn');
const resultElement = document.getElementById('result');

// X's message
codeBlocks[0].textContent = 'X_MESSAGE_PLACEHOLDER';

// Y's message
codeBlocks[1].textContent = 'Y_MESSAGE_PLACEHOLDER';

validateBtn.addEventListener('click', () => {
    const userAnswer = userInput.value.toLowerCase().trim();

    if (userAnswer === 'VAR1_PLACEHOLDER' || userAnswer === 'VAR2_PLACEHOLDER') {
        resultElement.innerHTML = `<a href="LINK1_PLACEHOLDER" target="_blank">LINK1_PLACEHOLDER</a>`;
        console.log('SECRET_WORD_PLACEHOLDER');
    } else if (userAnswer === 'UNLOCK_CODE_PLACEHOLDER') {
        resultElement.innerHTML = `Congratulations, level unlocked<br><a href="LINK2_PLACEHOLDER" target="_blank">LINK2_PLACEHOLDER</a>`;
    } else {
        resultElement.textContent = "I'm not that easy, try harder to decrypt";
    }

    userInput.value = '';
});
