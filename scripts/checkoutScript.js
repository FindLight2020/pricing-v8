document.getElementById('registerBtn').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
    this.classList.add('active');
    ///document.getElementById('loginBtn').classList.remove('active');
});

function mockLogin() {
    var email = document.getElementById('loginEmail');
    var password = document.getElementById('loginPassword');

    if (!email.checkValidity() || !password.checkValidity()) {
        alert("Please use a valid email and password.");
        return;
    }

    // Hide the login form and toggle buttons
    document.getElementById('loginForm').style.display = 'none';
    //document.getElementById('toggleButtons').style.display = 'none';

    // Show the post-login section
    document.getElementById('postLogin').style.display = 'block';

    // Update user's name in welcome message
    // In real scenario, this would come from the server
    //document.getElementById('userName').textContent = email.split('@')[0]; // Extract name from email
}

function proceedToPayment() {
    // Logic to redirect or handle the payment process
    window.location.href = 'https://square.link/u/Mz8wNUKF'; // Redirect to payment page or modal
}

function mockRegister() {
    var isValid = true;

    // List of all the input fields
    var inputs = [
        document.getElementById('fullName'),
        document.getElementById('registerEmail'),
        document.getElementById('registerPassword'),
        document.getElementById('confirmPassword'),
        document.getElementById('company'),
        document.getElementById('website'),
        document.getElementById('countrySelect')
    ];

    // Check each field and add 'invalid' class if it's empty
    inputs.forEach(function(input) {
        if (!input.checkValidity()) {
            input.classList.add('invalid');
            isValid = false;
        } else {
            input.classList.remove('invalid');
        }
    });

    // Stop the function if any field is invalid
    if (!isValid) {
        alert("Please fill in all required fields.");
        return;
    }

    // Check if passwords match
    var password = document.getElementById('registerPassword');
    var confirmPassword = document.getElementById('confirmPassword');
    if (password.value !== confirmPassword.value) {
        alert("Passwords do not match.");
        password.classList.add('invalid');
        confirmPassword.classList.add('invalid');
        return;
    }

    // Proceed with hiding the registration form and showing the post-login section
    document.getElementById('registerForm').style.display = 'none';
    ///document.getElementById('toggleButtons').style.display = 'none';
    document.getElementById('postLogin').style.display = 'block';

    // Update user's name in welcome message
    //var email = document.getElementById('registerEmail');
    //document.getElementById('userName').textContent = email.value.split('@')[0];
}

document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('registerPassword');
    const passwordError = document.getElementById('passwordError');

    const validatePassword = debounce(function() {
        if (passwordInput.value.length < 8) {
            passwordError.style.display = 'block';
        } else {
            passwordError.style.display = 'none';
        }
    }, 500); // Delay of 500 milliseconds

    passwordInput.addEventListener('input', validatePassword);
});

document.getElementById('confirmPassword').addEventListener('input', function() {
    var password = document.getElementById('registerPassword').value;
    var confirmPassword = this.value;
    var confirmPasswordError = document.getElementById('confirmPasswordError');

    if (password !== confirmPassword) {
        confirmPasswordError.style.display = 'block';
    } else {
        confirmPasswordError.style.display = 'none';
    }
});

function debounce(func, wait) {
    let timeout;

    return function() {
        const later = function() {
            clearTimeout(timeout);
            func();
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

document.getElementById('currentYear').textContent = new Date().getFullYear();

document.getElementById('toggleDetails').addEventListener('click', function(event) {
    event.preventDefault();
    var detailsDiv = document.getElementById('details');
    var hideDetailsLink = document.getElementById('hideDetails');
    detailsDiv.style.display = 'flex'; // Changed from 'block' to 'flex'
    hideDetailsLink.style.display = 'inline';
    this.style.display = 'none';
});

document.getElementById('hideDetails').addEventListener('click', function(event) {
    event.preventDefault();
    var detailsDiv = document.getElementById('details');
    var showDetailsLink = document.getElementById('toggleDetails');
    detailsDiv.style.display = 'none';
    showDetailsLink.style.display = 'inline';
    this.style.display = 'none';
});
