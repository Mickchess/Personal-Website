document.addEventListener('DOMContentLoaded', function() {  

    if (localStorage.getItem('username') == null) {
        localStorage.setItem('username', 'mryuill');
        localStorage.setItem('password', 'pizza');
    }
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
    }
});