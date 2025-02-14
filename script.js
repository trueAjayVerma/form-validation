const userName = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const submit = document.getElementById('submit')
const nameError = document.getElementById('nameError')
const emailError = document.getElementById('emailError')
const passError = document.getElementById('passError')
const pass2Error = document.getElementById('pass2Error')
const form = document.getElementById('form')


submit.addEventListener("click", (e) => {
    e.preventDefault()
    let errorFlag = false;
    if (userName.value == "") {
        nameError.innerHTML = "Please Enter Your Name";
        nameError.classList.add("showerror");
        userName.classList.add("error-border");
        errorFlag = true;
    }
    if (email.value == "") {
        emailError.innerHTML = "Please Enter Your Email";
        emailError.classList.add("showerror");
        email.classList.add("error-border");
        errorFlag = true;
    }
    if (email.value != "") {
        if (email.value.indexOf("@") < 1 || email.value.lastIndexOf(".") < email.value.indexOf("@") + 2 || email.value.lastIndexOf(".") + 2 >= email.value.length) {
            emailError.innerHTML = "Please Enter A Valid Email Address"
            emailError.classList.add("showerror")
            email.classList.add("error-border");
            errorFlag = true;
        }
    }
    if (password.value == "") {
        passError.innerHTML = "Please Enter Your Password";
        passError.classList.add("showerror");
        password.classList.add("error-border");
        errorFlag = true;
    }
    if (password.value != "") {
        if (password.value.length < 8) {
            passError.innerHTML = "Password Must Be At Least 8 Characters"
            passError.classList.add("showerror")
            password.classList.add("error-border");
            errorFlag = true;
        }
        else if (password.value.search(/[0-9]/) == -1) {
            passError.innerHTML = "Password Must Contain At Least One Number"
            passError.classList.add("showerror")
            password.classList.add("error-border");
            errorFlag = true;
        }
        else if (password.value.search(/[a-z]/) == -1) {
            passError.innerHTML = "Password Must Contain At Least One Lowercase Letter"
            passError.classList.add("showerror")
            password.classList.add("error-border");
            errorFlag = true;
        }
        else if (password.value.search(/[A-Z]/) == -1) {
            passError.innerHTML = "Password Must Contain At Least One Uppercase Letter"
            passError.classList.add("showerror")
            password.classList.add("error-border");
            errorFlag = true;
        }
        else if (password.value.search(/[!@#$%^&*]/) == -1) {
            passError.innerHTML = "Password Must Contain At Least One Special Character"
            passError.classList.add("showerror")
            password.classList.add("error-border");
            errorFlag = true;
        }
    }
    if (password2.value == "") {
        pass2Error.innerHTML = "Please Confirm Your Password"
        pass2Error.classList.add("showerror")
        password2.classList.add("error-border");
        errorFlag = true;
    }
    if (password2.value != "") {

        if (password.value != password2.value) {
            pass2Error.innerHTML = "Passwords Do Not Match"
            pass2Error.classList.add("showerror")
            password2.classList.add("error-border");
            errorFlag = true;
        }
    }
    if (errorFlag) {
        const shakeElements = [userName, email, password, password2];
        shakeElements.forEach(element => {
            if (element.nextElementSibling.classList.contains("showerror")) {
                element.classList.add("shake");
                setTimeout(() => {
                    element.classList.remove("shake");
                }, 500);
            }
        });
    }
    if (!errorFlag) {
        alert("Form Submitted Successfully")
    }
})

userName.addEventListener("input", () => {
    nameError.innerHTML = ""
    nameError.classList.remove("showerror")
    userName.classList.remove("error-border");
})
email.addEventListener("input", () => {
    emailError.innerHTML = ""
    emailError.classList.remove("showerror")
    email.classList.remove("error-border");
})
password.addEventListener("input", () => {
    passError.innerHTML = ""
    passError.classList.remove("showerror")
    password.classList.remove("error-border");
})
password2.addEventListener("input", () => {
    pass2Error.innerHTML = ""
    pass2Error.classList.remove("showerror")
    password2.classList.remove("error-border");

})

email.addEventListener("blur", () => {
    if (email.value != "") {
        if (email.value.indexOf("@") < 1 || email.value.lastIndexOf(".") < email.value.indexOf("@") + 2 || email.value.lastIndexOf(".") + 2 >= email.value.length) {
            emailError.innerHTML = "Please Enter A Valid Email Address"
            emailError.classList.add("showerror")
            email.classList.add("error-border");
        }
    }
})