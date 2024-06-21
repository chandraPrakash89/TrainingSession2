/**
 * Get user details by form name
 * On click Add User show user details in same page in tabular form
 * Table row & data add dynamically
 */

document.getElementById('user-form').addEventListener('submit',
    function (event) {
        event.preventDefault();
        var formFields = document.forms["user-form"];

        var fullName = formFields["full-name"].value;
        var userName = formFields["username"].value;
        var email = formFields["email"].value;
        var phone = formFields["phone"].value;
        var gender = formFields["gender"].value;
        var address = formFields["address"].value;
        var birthdate = formFields["birthdate"].value;
        var hobbies = formFields["hobbies"].value;

        const tRow = document.createElement('tr')
        const tData = document.createElement('td')

        const fName = document.createElement("td")
        fName.textContent = fullName;
        const uName = document.createElement("td")
        uName.textContent = userName;
        const userGender = document.createElement("td")
        userGender.textContent = gender;
        const mail = document.createElement("td")
        mail.textContent = email;
        const userPhone = document.createElement("td")
        userPhone.textContent = phone;
        const userAddress = document.createElement("td")
        userAddress.textContent = address;
        const userBirthdate = document.createElement("td")
        userBirthdate.textContent = birthdate;
        const userHobbies = document.createElement("td")
        userHobbies.textContent = hobbies;

        tRow.appendChild(fName);
        tRow.appendChild(uName);
        tRow.appendChild(userGender);
        tRow.appendChild(userAddress);
        tRow.appendChild(userBirthdate);

        tRow.appendChild(userHobbies);
        tRow.appendChild(userPhone);
        tRow.appendChild(mail);
        tRow.appendChild(userAddress);
        tRow.appendChild(userBirthdate);

        document.getElementById("tableBody").appendChild(tRow);

    });