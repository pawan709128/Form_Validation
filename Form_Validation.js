function validateForm() {
    // Get input values
    let name = document.getElementById('name').value;
    let fatherName = document.getElementById('father-name').value;
    let mobile = document.getElementById('mobile').value;
    let email = document.getElementById('email').value;
  
    // Error elements
    let nameError = document.getElementById('name_error');
    let fatherNameError = document.getElementById('father_name_error');
    let mobileError = document.getElementById('mobile_error');
    let emailError = document.getElementById('email_error');
  
    // Clear previous error messages
    nameError.style.display = 'none';
    fatherNameError.style.display = 'none';
    mobileError.style.display = 'none';
    emailError.style.display = 'none';
  
    // Validate name
    if (name === '') {
      nameError.innerHTML = 'Please enter your Name';
      nameError.style.display = 'inline';
    }
  
    // Validate father's name
    if (fatherName === '') {
      fatherNameError.innerHTML = "Please enter your Father's Name";
      fatherNameError.style.display = 'inline';
    }
  
    // Validate mobile number
    if (mobile === '') {
      mobileError.innerHTML = 'Please enter your Mobile Number';
      mobileError.style.display = 'inline';
    } else if (!/^\d{10}$/.test(mobile)) {
      mobileError.innerHTML = 'Mobile number must be 10 digits';
      mobileError.style.display = 'inline';
    }
  
    // Validate email
    if (email === '') {
      emailError.innerHTML = 'Please enter your Email';
      emailError.style.display = 'inline';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailError.innerHTML = 'Please enter a valid Email';
      emailError.style.display = 'inline';
    }
  }
  