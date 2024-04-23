const codeBlocks = document.querySelectorAll('.code');
const userInput = document.getElementById('userInput');
const validateBtn = document.getElementById('validateBtn');
const resultElement = document.getElementById('result');

// X's message
codeBlocks[0].textContent = '2A.63BC6EB0B7C3504C48AE';

// Y's message
codeBlocks[1].textContent = '-48.86D00B45AE5FFA3B9AE1';

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