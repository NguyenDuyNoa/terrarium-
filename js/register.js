const userData = JSON.parse(localStorage.getItem("userData")) || [];
const ramdomId = () => {
    let newId = Math.floor(Math.random() * 999);
    return ramdomId;
}

const register = () => {
    let email = document.getElementById("email").value;
    let user = document.getElementById("user").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    //kiểm tra email tồn tại
    let checkExist = userData.find(item => item.email == email);

    if (password !== confirmPassword) {
        alert("Mật khẩu không trùng khớp!");
    } else if (checkExist) {
        alert("Email tồn tại!");
    } else {
        let newUser = {
            id: ramdomId(),
            email: email,
            user: user,
            password: password
        }
        userData.push(newUser);
        localStorage.setItem("userData", JSON.stringify(userData));
        alert("Đăng ký thành công!");
    }
}