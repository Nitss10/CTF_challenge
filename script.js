const codeBlocks = document.querySelectorAll('.code');
const userInput = document.getElementById('userInput');
const validateBtn = document.getElementById('validateBtn');
const resultElement = document.getElementById('result');

// X's message
codeBlocks[0].textContent = '42.389594';

// Y's message
codeBlocks[1].textContent = '-72.526612';

validateBtn.addEventListener('click', () => {
    const userAnswer = userInput.value.toLowerCase().trim();

    if (userAnswer === 'campuspond' || userAnswer === 'campus pond') {
        resultElement.innerHTML = `<a href="https://www.geeksforgeeks.org/print-longest-common-substring/" target="_blank">https://www.geeksforgeeks.org/print-longest-common-substring/</a>`;
        console.log('wipuspocus');
    } else if (userAnswer === 'puspo') {
        resultElement.innerHTML = `Congratulations, level unlocked<br><a href="https://bit.ly/lastVault" target="_blank">https://bit.ly/lastVault</a>`;
    } else {
        resultElement.textContent = "I'm not that easy, try harder to decrypt";
    }

    userInput.value = '';
});