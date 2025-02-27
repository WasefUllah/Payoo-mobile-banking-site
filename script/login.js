
const logIn = document.getElementById('login-btn');
logIn.addEventListener('click', function(event){
    event.preventDefault();
    const phoneNumber = document.getElementById('phoneNumber').value;
    const PIN = document.getElementById('PIN').value;
    if(phoneNumber.length === 11){
        if(parseInt(PIN) === 1234){
            window.location.href = "./main.html"
        }else{
            alert('pin is 1234');
        }
    }else{
        alert('give random 11 digit number');
    }
})