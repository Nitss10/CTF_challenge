const codeBlocks = document.querySelectorAll('.code');
const userInput = document.getElementById('userInput');
const validateBtn = document.getElementById('validateBtn');
const resultElement = document.getElementById('result');

let data; // Declare a variable to store the API data

// Fetch data from the API
async function fetchData() {
  try {
    const response = await fetch('/.netlify/functions/data');
    data = await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Populate code blocks
async function populateCodeBlocks() {
  await fetchData(); // Wait for data to be fetched
  if (data) {
    codeBlocks[0].textContent = data.X_MESSAGE;
    codeBlocks[1].textContent = data.Y_MESSAGE;
  } else {
    console.error('Failed to fetch data');
  }
}

populateCodeBlocks(); // Call the function to populate code blocks

// Handle validation
validateBtn.addEventListener('click', () => {
  const userAnswer = userInput.value.toLowerCase().trim();
  if (data) {
    if (userAnswer === data.VAR1 || userAnswer === data.VAR2) {
      resultElement.innerHTML = `<a href="${data.LINK1}" target="_blank">${data.LINK1}</a>`;
      console.log(data.SECRET_WORD);
    } else if (userAnswer === data.UNLOCK_CODE) {
      resultElement.innerHTML = `Congratulations, level unlocked<br><a href="${data.LINK2}" target="_blank">${data.LINK2}</a>`;
    } else {
      resultElement.textContent = "I'm not that easy, try harder to decrypt";
    }
  } else {
    resultElement.textContent = "Failed to fetch data from the API";
  }
  userInput.value = '';
});