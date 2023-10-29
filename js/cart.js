const cart = JSON.parse(localStorage.getItem("cart"));
const totalProduct = document.getElementById("totalProduct");

function formatCurrency(number) {
  return number.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
}

function updateTotalProductCount() {
  let total = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  document.getElementById('totalProduct').textContent = total.toLocaleString();
}

function deleteItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function decrease(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1;
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }
}

function increase(index) {
  cart[index].quantity += 1;
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function totalPrice() {
  let total = cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
  document.getElementById('total-price').innerHTML = formatCurrency(total);
}

function renderCart() {
  let element = '';
  for (var i = 0; i < cart.length; i++) {
    const price = parseInt(cart[i].price);
    element += `
      <div class="table-row">
        <div class="table-cell-product">
          <img src="${cart[i].imageUrl}" alt="">
          <span>${cart[i].name}</span>
        </div>
        <div class="table-cell">${formatCurrency(price)}</div> <!-- Chuyển giá thành chuỗi định dạng -->
        <div class="table-cell">
          <button onclick="decrease(${i})" class="quantity-button decrease">-</button>
          <span class="quantity">${cart[i].quantity}</span>
          <button onclick="increase(${i})" class="quantity-button increase">+</button>
        </div>
        <div class="table-cell">${formatCurrency(cart[i].quantity * price)}</div> <!-- Chuyển giá thành chuỗi định dạng -->
        <div class="table-cell"><button onclick="deleteItem(${i})" class="remove">Xóa</button></div>
      </div>
      `
  }
  document.getElementById('render').innerHTML = element;
  totalPrice();
  updateTotalProductCount();
}

renderCart();
