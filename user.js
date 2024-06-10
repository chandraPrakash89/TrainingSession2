
document.getElementById('regForm').addEventListener('submit',
    function (event) {
        event.preventDefault();
        var fullName = document.getElementById('full-name').value;
        var userName = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        var confirmPassword = document.getElementById('confirm-password').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var birthdate = document.getElementById('birthdate').value;
        var gender = document.getElementById('gender').value;
        var country = document.getElementById('country').value;
        var bio = document.getElementById('bio').value;

        var checkboxes = document.querySelectorAll('input[type="checkbox"][name="hobbies"]');
        var selectedHobbies = [];
        checkboxes.forEach(function (checkbox) {
            if (checkbox.checked) {
                selectedHobbies.push(checkbox.value);
            }
        });

        var profilePic = document.getElementById('profile-picture');
        var file = profilePic.files[0];

        var agreeCheckbox = document.getElementById('agreeCheckbox');



        console.log("++++++++++++userDetails+++++++++++++");

        console.log("Full Name: ", fullName);
        console.log("User Name: ", userName);
        console.log("Password: ", password);
        console.log("Confirm Password: ", confirmPassword);
        console.log("Email: ", email);
        console.log("Phone: ", phone);
        console.log("Birth Date: ", birthdate);
        console.log("Gender: ", gender);
        console.log("Country: ", country);
        console.log("Phone: ", phone);
        console.log('Selected Hobbies: ', selectedHobbies);

        if (file) {
            console.log('File Name: ' + file.name);
            console.log('File Type: ' + file.type);
            console.log('File Size: ' + file.size + ' bytes');
        } else {
            console.log('No file selected.');
        }

        console.log("Bio: ", bio);

        console.log('Agree to Terms and Conditions: ' + agreeCheckbox?.checked);


    });

