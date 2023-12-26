function authenticateUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username === 'your-name' && password === 'student-nf23') {
      alert('Login successful');
      window.location.href = 'success.html'; // Redirect to success page
    } else {
      alert('Invalid credentials. Please try again.');
    }
  }
  