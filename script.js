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

    if (userAnswer === 'campuspond' || userAnswer === 'campus pond') {
        resultElement.innerHTML = `<a href="https://www.geeksforgeeks.org/print-longest-common-substring/" target="_blank">https://www.geeksforgeeks.org/print-longest-common-substring/</a>`;
        console.log('SECRET_WORD_PLACEHOLDER');
    } else if (userAnswer === 'UNLOCK_CODE_PLACEHOLDER') {
        resultElement.innerHTML = `Congratulations, level unlocked<br><a href="https://bit.ly/lastVaultFlag" target="_blank">https://bit.ly/lastVaultFlag</a>`;
    } else {
        resultElement.textContent = "I'm not that easy, try harder to decrypt";
    }

    userInput.value = '';
});
