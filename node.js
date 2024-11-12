// Optional JavaScript functionality can be added here

document.addEventListener('DOMContentLoaded', function() {
  // You can add event listeners here, for example, to handle form submission or animations
  const form = document.querySelector('form');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for demo purposes
    alert("Form submitted!");
  });
});
