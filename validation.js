// Employee Registration Form Validation
function validateForm() {
     const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Check if any field is empty
  if (!username || !email || !password) {
    alert("All fields are required!");
    return false;
  }

  // Validate email format using regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Invalid email format!");
    return false;
  }

  // Check password length
  if (password.length < 8) {
    alert("Password must be at least 8 characters long!");
    return false;
  }

  // Additional validation logic can be added here if needed

  // If all validations pass, the form will be submitted
  return true;
    return true;
}

// Login Form Validation
function validateLoginForm() {
  function validateForm() {
            const phoneInput = document.getElementById('phone');
            const licenceInput = document.getElementById('licence');

            // Phone validation: Check if the phone number contains only digits and has a length of 10
            if (!/^[0-9]{10}$/.test(phoneInput.value)) {
                alert("Please enter a valid 10-digit phone number.");
                phoneInput.focus();
                return false;
            }

            // Licence validation: Check if the licence number contains only digits and has a length of 16
            if (!/^[0-9]{16}$/.test(licenceInput.value)) {
                alert("Please enter a valid 16-digit driving licence number.");
                licenceInput.focus();
                return false;
            }

            return true; // Form submission will continue if validation passes
        }
}
