const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', defaultSubmit);

function defaultSubmit (event)  {
    event.preventDefault();

    const {
        elements : {email, password} 
    } = event.currentTarget;
    
    if (email.value === '' || password.value === '') {
        return alert('Будь ласка заповніть всі поля!') 
    };

    console.log('Email : ', email.value );
    console.log('Password : ' , password.value );

    event.currentTarget.reset();
}


