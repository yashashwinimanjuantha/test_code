document.getElementById('submitBtn').addEventListener('click', function () {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const age = document.getElementById('age').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const email = document.getElementById('email').value.trim();
    const description = document.getElementById('description').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    document.querySelectorAll('.error').forEach(function (error) {
        error.textContent = '';
    });

    let isValid = true;

    if (!firstName) {
        document.getElementById('firstNameError').textContent = 'First Name is required.';
        isValid = false;
    }
    if (!lastName) {
        document.getElementById('lastNameError').textContent = 'Last Name is required.';
        isValid = false;
    }
    if (!age || age < 18 || age > 100) {
        document.getElementById('ageError').textContent = 'Age must be between 18 and 100.';
        isValid = false;
    }
    if (!mobile || !/^\d{10}$/.test(mobile)) {
        document.getElementById('mobileError').textContent = 'Invalid Mobile Number.';
        isValid = false;
    }
    if (!email || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid Email Address.';
        isValid = false;
    }
    if (!description) {
        document.getElementById('descriptionError').textContent = 'Description is required.';
        isValid = false;
    }
    if (!password) {
        document.getElementById('passwordError').textContent = 'Password is required.';
        isValid = false;
    }
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
    }
});

function togglePasswordVisibility(inputId, toggleId) {
    const input = document.getElementById(inputId);
    const toggle = document.getElementById(toggleId);

    toggle.addEventListener('click', function () {
        if (input.type === 'password') {
            input.type = 'text';
        } else {
            input.type = 'password';
        }
    });
}

togglePasswordVisibility('password', 'togglePassword');
togglePasswordVisibility('confirmPassword', 'toggleConfirmPassword');