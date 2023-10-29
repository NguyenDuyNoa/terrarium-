const product = JSON.parse(localStorage.getItem("product"));
if (product) {
    const productName = product.name;
    const nameProductElements = document.querySelectorAll(".name-product");
    if (nameProductElements) {
        nameProductElements.forEach(function (element) {
            element.textContent = productName;
        });
    }
    const imageUrl = product.imageUrl;
    const imgElement = document.querySelector("#image img");
    if (imgElement) {
        imgElement.src = imageUrl;
        imgElement.alt = product.name;
    }

    const smallImageDiv = document.querySelector(".small-image");
    if (smallImageDiv) {
        smallImageDiv.innerHTML = "";
        for (let i = 0; i < 3; i++) {
            const smallImg = document.createElement("img");
            smallImg.src = imageUrl;
            smallImg.alt = product.name;
            smallImageDiv.appendChild(smallImg);
        }
    }
    const price = parseInt(product.price);
    const formattedPrice = price.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
    const priceElement = document.getElementById("price-product");
    if (priceElement) {
        priceElement.textContent = formattedPrice;
    }
} else {
    console.log("Không tìm thấy thông tin sản phẩm.");
}

const decreaseButton = document.getElementById("decreaseButton");
const increaseButton = document.getElementById("increaseButton");
const quantityInput = document.getElementById("quantityInput");

function decreaseQuantity() {
    let currentQuantity = parseInt(quantityInput.value, 10);
    if (currentQuantity > 1) {
        currentQuantity--;
        quantityInput.value = currentQuantity;
    }
}

function increaseQuantity() {
    let currentQuantity = parseInt(quantityInput.value, 10);
    currentQuantity++;
    quantityInput.value = currentQuantity;
}

decreaseButton.addEventListener("click", decreaseQuantity);
increaseButton.addEventListener("click", increaseQuantity);

const quantityInputElement = document.getElementById("quantityInput");
const currentQuantity = parseInt(quantityInputElement.value); // Chuyển giá trị sang kiểu số nguyên

const userData = JSON.parse(localStorage.getItem("userData"));

function addToCart() {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const product = JSON.parse(localStorage.getItem("product"));
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (userData) {
        const quantityInputElement = document.getElementById("quantityInput");
        const currentQuantity = parseInt(quantityInputElement.value); // Chuyển giá trị sang kiểu số nguyên

        const existingProductIndex = cart.findIndex((item) => item.id === product.id);

        if (existingProductIndex !== -1) {
            cart[existingProductIndex].quantity += currentQuantity;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: currentQuantity,
                imageUrl: product.imageUrl
            });
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Thêm vào giỏ hàng thành công!");
        quantityInputElement.value = "1";
    } else {
        alert("Xin vui lòng đăng nhập để thêm vào giỏ hàng!");
        window.location.href = '../html/login.html';
    }
}
