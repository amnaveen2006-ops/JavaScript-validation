document.addEventListener("DOMContentLoaded", function () {

    // ================= SIGNUP =================

    let signupForm = document.getElementById("signupForm");

    if (signupForm) {

        signupForm.addEventListener("submit", function (e) {

            e.preventDefault();

            let fullName = document.getElementById("fullName").value.trim();

            let email = document.getElementById("email").value.trim();

            let phone = document.getElementById("phone").value.trim();

            let city = document.getElementById("city").value.trim();

            let password = document.getElementById("password").value.trim();

            let confirmPassword = document.getElementById("confirmPassword").value.trim();

            // ERROR ELEMENTS
            let nameError = document.getElementById("nameError");

            let emailError = document.getElementById("emailError");

            let phoneError = document.getElementById("phoneError");

            let cityError = document.getElementById("cityError");

            let passwordError = document.getElementById("passwordError");

            let confirmPasswordError = document.getElementById("confirmPasswordError");

            // CLEAR ERRORS
            nameError.innerText = "";

            emailError.innerText = "";

            phoneError.innerText = "";

            cityError.innerText = "";

            passwordError.innerText = "";

            confirmPasswordError.innerText = "";

            let isValid = true;

            // NAME VALIDATION
            if (fullName === "") {

                nameError.innerText = "Full Name is required";

                isValid = false;
            }

            // EMAIL VALIDATION
            let emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                emailError.innerText = "Enter valid email";

                isValid = false;
            }

            // PHONE VALIDATION
            let phonePattern = /^[0-9]{10}$/;

            if (!phonePattern.test(phone)) {

                phoneError.innerText = "Enter 10 digit number";

                isValid = false;
            }

            // CITY VALIDATION
            let cityPattern = /^[A-Za-z ]+$/;

            if (!cityPattern.test(city)) {

                cityError.innerText = "Only alphabets allowed";

                isValid = false;
            }

            // PASSWORD VALIDATION
            let passwordPattern =
                /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

            if (!passwordPattern.test(password)) {

                passwordError.innerText =
                    "Minimum 8 characters with letters and numbers";

                isValid = false;
            }

            // CONFIRM PASSWORD
            if (password !== confirmPassword) {

                confirmPasswordError.innerText =
                    "Passwords do not match";

                isValid = false;
            }

            // SAVE DATA
            if (isValid) {

                let userData = {
                    fullName: fullName,
                    email: email,
                    phone: phone,
                    city: city,
                    password: password
                };

                localStorage.setItem(
                    "userData",
                    JSON.stringify(userData)
                );

                alert("Signup Successful");

                window.location.href = "loginform.html";
            }

        });

        // SHOW PASSWORD
        let showPassword =
            document.getElementById("showPassword");

        showPassword.addEventListener("click", function () {

            let password =
                document.getElementById("password");

            if (password.type === "password") {

                password.type = "text";

                showPassword.innerText = "Hide";

            } else {

                password.type = "password";

                showPassword.innerText = "Show";
            }

        });

    }

    // ================= SIGNIN =================

    let signinForm =
        document.getElementById("signinForm");

    if (signinForm) {

        signinForm.addEventListener("submit", function (e) {

            e.preventDefault();

            let signinEmail =
                document.getElementById("signinEmail").value.trim();

            let signinPassword =
                document.getElementById("signinPassword").value.trim();

            let signinEmailError =
                document.getElementById("signinEmailError");

            let signinPasswordError =
                document.getElementById("signinPasswordError");

            signinEmailError.innerText = "";

            signinPasswordError.innerText = "";

            let savedData =
                JSON.parse(localStorage.getItem("userData"));

            if (!savedData) {

                alert("No registered user found");

                return;
            }

            if (signinEmail !== savedData.email) {

                signinEmailError.innerText =
                    "Email does not match";

                return;
            }

            if (signinPassword !== savedData.password) {

                signinPasswordError.innerText =
                    "Password incorrect";

                return;
            }

            alert("Signin Successful");

            window.location.href = "travellapp.html";

        });

    }

});
