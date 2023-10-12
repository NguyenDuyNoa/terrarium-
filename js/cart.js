const cart = JSON.parse(localStorage.getItem("cart"));

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
  document.getElementById('total-price').innerHTML = total.toLocaleString();

}

function renderCart() {
  let element = '';
  for (var i = 0; i < cart.length; i++) {
    element += `
      <div class="table-row">
        <div class="table-cell-checkbox"><input type="checkbox"></div>
        <div class="table-cell-product">
          <img src="${cart[i].imageUrl}" alt="">
          <span>${cart[i].name}</span>
        </div>
        <div class="table-cell">${(cart[i].price).toLocaleString()}</div>
        <div class="table-cell">
          <button onclick="decrease(${i})" class="quantity-button decrease">-</button>
          <span class="quantity">${cart[i].quantity}</span>
          <button onclick="increase(${i})" class="quantity-button increase">+</button>
        </div>
        <div class="table-cell">${(cart[i].quantity * cart[i].price).toLocaleString()}</div>
        <div class="table-cell"><button onclick="deleteItem(${i})" class="remove">Xóa</button></div>
      </div>
      `
  }
  document.getElementById('render').innerHTML = element;
  totalPrice();
}
renderCart();