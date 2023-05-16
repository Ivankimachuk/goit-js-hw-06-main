const textControl = document.querySelector('#font-size-control');
const textBacik = document.querySelector("#text");

textControl.addEventListener('input', () => {
    textBacik.style.fontSize = `${textControl.value}px`;
});