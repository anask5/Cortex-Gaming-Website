            document.addEventListener('DOMContentLoaded', function() {
                const form = document.getElementById('login-form');

                form.addEventListener('submit', function(event) {
                    event.preventDefault(); // Prevent form from submitting normally

                    // Get form data
                    const email = document.getElementById('email').value;
                    const password = document.getElementById('password').value;

                    // Retrieve stored registration data
                    const savedData = localStorage.getItem('userRegistration');
                    if (savedData) {
                        const data = JSON.parse(savedData);

                        // Check if email and password match
                        if (data.email === email && data.password === password) {
                            // Successful login: redirect to index.html
                            alert('Login successful! Redirecting to home page.');
                            window.location.href = 'index.html';
                        } else {
                            // Failed login
                            alert('Invalid email or password. Please try again.');
                        }
                    } else {
                        // No registration data found
                        alert('No account found. Please register first.');
                    }
                });
            });