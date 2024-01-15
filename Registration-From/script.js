const form = document.querySelector('#form');
const fullname = document.querySelector('#fullname');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('.form');
const confirmPassword = document.querySelector('#re-password');


//show error messasge

//event listeners
form.addEventListener('submit',function(event){
    event.preventDefault();
    if(username ===""){
        showError(`${username} Username is required`);
    }else{
        showSuccess(`${username}`)
    }
})