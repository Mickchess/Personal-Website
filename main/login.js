document.addEventListener('DOMContentLoaded', function() {  

        localStorage.setItem('username', 'Cheese');
        localStorage.setItem('password', 'Pizza');

});





document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    
    if (username == localStorage.getItem('username') && password == localStorage.getItem('password')) {
        window.location.href = 'app.html';
    }
    else {
        alert('Invalid username or password!');
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        console.log(localStorage.getItem('username'));
        console.log(localStorage.getItem('password'));
        console.log(username);
        console.log(password);
    }
});