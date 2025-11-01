   document.addEventListener('DOMContentLoaded', function() {
       const form = document.getElementById('registration-form');

       // Load existing data if available
       const savedData = localStorage.getItem('userRegistration');
       if (savedData) {
           const data = JSON.parse(savedData);
           document.getElementById('username').value = data.username || '';
           document.getElementById('email').value = data.email || '';
           document.getElementById('password').value = data.password || '';
           document.getElementById('date-of-birth').value = data.dateOfBirth || '';
           document.getElementById('country').value = data.country || '';
           document.getElementById('type-of-game').value = data.gameType || '';
       }

       form.addEventListener('submit', function(event) {
           event.preventDefault(); // Prevent form from submitting normally

           // Collect form data
           const formData = {
               username: document.getElementById('username').value,
               email: document.getElementById('email').value,
               password: document.getElementById('password').value,
               dateOfBirth: document.getElementById('date-of-birth').value,
               country: document.getElementById('country').value,
               gameType: document.getElementById('type-of-game').value
           };

           // Store in localStorage
           localStorage.setItem('userRegistration', JSON.stringify(formData));

           // Alert user (you can replace with redirect or other action)
           alert('Registration data saved locally! You can now proceed to login.');

           // Optional: Redirect to login page
           // window.location.href = 'login.html';
       });
   });