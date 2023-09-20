const userData = JSON.parse(localStorage.getItem("userData")) || [];
let login = () => {
    let user = document.getElementById("user").value;
    let password = document.getElementById("password").value;
    let arrUser = [];
    let arrPass = [];

    // thêm vào mảng rỗng
    for (let i = 0; i < userData.length; i++) {
        arrUser.push(userData[i].user);
        arrPass.push(userData[i].password);
    }

    //kiểm tra vị trí user
    let index = arrUser.indexOf(user);

    if (index != -1) {
        if (arrPass[index] == password) {
            window.location.href = '../index.html'
            alert("Đăng nhập thành công!")
        } else {
            alert("Mật khẩu không chính xát!")
        }
    } else {
        alert("User không chính xác!")
    }
}