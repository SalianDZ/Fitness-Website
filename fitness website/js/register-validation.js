function validateRegisterForm() {
    var name = document.getElementById('register-name').value;
    var email = document.getElementById('register-email').value;
    var password = document.getElementById('register-password').value;
    var confirmPassword = document.getElementById('register-confirm-password').value;

    if (name.trim() === '') {
      alert('Please enter your name.');
      return;
    }

    if (email.trim() === '') {
      alert('Please enter your email.');
      return;
    }

    if (password.trim() === '') {
      alert('Please enter your password.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // If all validations pass, you can submit the form or perform further actions.
    alert('Form is valid. You can submit it now!');

    // document.getElementById('signupForm').submit();
  }