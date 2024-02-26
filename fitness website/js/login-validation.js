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
    
    // document.getElementById('loginForm').submit();
  }