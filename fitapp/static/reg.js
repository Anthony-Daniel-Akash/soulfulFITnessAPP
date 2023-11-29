function validate_form() {
    var name = document.getElementById('name').value;
    var address = document.getElementById('address').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var date = document.getElementById('date').value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var age = document.getElementById('age').value;

    var error_message = document.getElementById('error_message');
    error_message.innerHTML = ''; // Clear previous error messages

    if (!name || !address || !email || !phone || !date || !gender || !age) {
        error_message.innerHTML = 'Please fill out all fields.';
        return false;
    }

    if(email.indexof("@") == -1 || email.length < 6){
        text="Please enter a valid E-mail ID.";
        error_message.innerHTML=text;
        return false;
    }

    if(isNaN(phone) || phone.length !=10){
        text="Please Enter a valid Phone Number";
        error_message.innerHTML=text;
        return false;
    }
  
    var date_regex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!date_regex.test(date)) {
        error_message.innerHTML = 'Invalid date format. Please use dd/mm/yyyy.';
        return false;
    }
}
    document.addEventListener('DOMContentLoaded', function () {

        const submitBtn = document.getElementById('submit');
        submitBtn.addEventListener('click', function () {
            alert('your registration is confirmed,we will contact you through mail!');
            window.history.back();
            
    })})