function validateForm() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email.trim() === '') {
      alert('Please enter your email.');
      return;
    }

    if (password.trim() === '') {
      alert('Please enter your password.');
      return;
    }

    
    alert('Form is valid. You can submit it now!');
    // Uncomment the line below to submit the form
    // document.getElementById('loginForm').submit();
  }