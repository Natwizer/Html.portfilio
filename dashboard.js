document.getElementById('register-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (password === confirmPassword) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find((user) => user.username === username);
    if (!existingUser) {
      users.push({ username, password });
      localStorage.setItem('users', JSON.stringify(users));
      window.location.href = 'login.html';
    } else {
      document.getElementById('error-message').innerText = 'Username already exists';
    }
  } else {
    document.getElementById('error-message').innerText = 'Passwords do not match';
  }
});
