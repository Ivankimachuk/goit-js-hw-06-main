
const inputText = document.getElementById('name-input');
const outputText = document.getElementById('name-output');

inputText.addEventListener('input', (event) => {
    if (inputText.value === '') {
        outputText.textContent = 'Anonymous' ;
    } else {
    outputText.textContent = event.currentTarget.value;
    }
});
