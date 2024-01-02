function validateForm() {
    // Get form inputs
    var username = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Reset error messages
    document.getElementById('emailError').innerHTML = '';
    document.getElementById('passwordError').innerHTML = '';

    // Validate username
    if (username.trim() === '') {
        document.getElementById('emailError').innerHTML = 'Email is required';
        return false;
    }

    // Validate password
    if (password.trim() === '') {
        document.getElementById('passwordError').innerHTML = 'Password is required';
        return false;
    }

    // Additional validation logic can be added here

    // If all validations pass, the form will be submitted
    return true;
}