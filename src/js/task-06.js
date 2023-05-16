
const inputValue = document.querySelector('#validation-input');
const validLength = inputValue.dataset.length;

const correctBlur = event => {
    const currentLenght = event.target.value.length;

    if(currentLenght === Number(validLength)) {
        inputValue.classList.add('valid') ;
        inputValue.classList.remove('invalid') ;
    }else {
        inputValue.classList.add('invalid') ;
        inputValue.classList.remove('valid') ; 
    }
};

inputValue.addEventListener('blur', correctBlur);



