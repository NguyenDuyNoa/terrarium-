const userData = JSON.parse(localStorage.getItem("userData")) || [];

const randomId = () => {
    let newId = Math.floor(Math.random() * 999);
    return newId;
}

function validateEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validateForm() {
    var email = document.getElementById("email").value;
    var user = document.getElementById("user").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    var emailError = document.getElementById("emailError");
    var userError = document.getElementById("userError");
    var passwordError = document.getElementById("passwordError");
    var confirmPasswordError = document.getElementById("confirm-passwordError");

    // Reset all error messages
    emailError.innerText = "";
    userError.innerText = "";
    passwordError.innerText = "";
    confirmPasswordError.innerText = "";

    // Clear any previous error styles
    emailError.style.display = "none";
    userError.style.display = "none";
    passwordError.style.display = "none";
    confirmPasswordError.style.display = "none";

    var hasErrors = false;

    if (email.trim() === '') {
        emailError.innerText = "Vui lòng nhập địa chỉ email!";
        emailError.style.display = "block";
        hasErrors = true;
    } else if (!validateEmail(email)) {
        emailError.innerText = "Địa chỉ email không hợp lệ!";
        emailError.style.display = "block";
        hasErrors = true;
    }

    if (user.trim() === '') {
        userError.innerText = "Vui lòng nhập tên đăng nhập!";
        userError.style.display = "block";
        hasErrors = true;
    }

    if (password.trim() === '') {
        passwordError.innerText = "Vui lòng nhập mật khẩu!";
        passwordError.style.display = "block";
        hasErrors = true;
    }

    if (password !== confirmPassword) {
        confirmPasswordError.innerText = "Mật khẩu không trùng khớp!";
        confirmPasswordError.style.display = "block";
        hasErrors = true;
    }

    // Kiểm tra nếu có lỗi thì không submit form
    if (hasErrors) {
        return false;
    }

    // Nếu không có lỗi, submit form
    return true;
}

function register() {
    var isValid = validateForm();
    if (isValid) {
        var email = document.getElementById("email").value;
        var user = document.getElementById("user").value;
        var password = document.getElementById("password").value;

        let checkExist = userData.find(item => item.email == email);
        
        if (checkExist) {
            alert("Email tồn tại!");
        } else {
            var newUser = {
                id: randomId(),
                email: email,
                user: user,
                password: password
            };
            console.log("userData",userData)
    
            userData.push(newUser);
            localStorage.setItem("userData", JSON.stringify(userData))
            window.location.href = '../index.html';
            alert("Đăng ký thành công!");
        }
    }
}