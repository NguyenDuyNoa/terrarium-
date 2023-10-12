var products = [
    {
        id: 1,
        name: "Terrarium 103 - Komorebi",
        price: "250000",
        imageUrl: "https://9xgarden.com/wp-content/uploads/2021/03/terrarium-tieu-canh-trong-binh-thuy-tinh-9xgarden-100-600x600.jpg",
        link: "#"
    },
    {
        id: 2,
        name: "Terrarium 95 - By The Sea",
        price: "350000",
        imageUrl: "https://9xgarden.com/wp-content/uploads/2021/03/terrarium-tieu-canh-trong-binh-thuy-tinh-9xgarden-101-600x600.jpg",
        link: "#"
    },
    {
        id: 3,
        name: "Terrarium 95 - By The Sea",
        price: "350000",
        imageUrl: "https://9xgarden.com/wp-content/uploads/2021/03/terrarium-tieu-canh-trong-binh-thuy-tinh-9xgarden-101-600x600.jpg",
        link: "#"
    },
    {
        id: 4,
        name: "Terrarium 95 - By The Sea",
        price: "350000",
        imageUrl: "https://9xgarden.com/wp-content/uploads/2021/03/terrarium-tieu-canh-trong-binh-thuy-tinh-9xgarden-101-600x600.jpg",
        link: "#"
    },
    {
        id: 5,
        name: "Terrarium 95 - By The Sea",
        price: "350000",
        imageUrl: "https://9xgarden.com/wp-content/uploads/2021/03/terrarium-tieu-canh-trong-binh-thuy-tinh-9xgarden-101-600x600.jpg",
        link: "#"
    },
    {
        id: 6,
        name: "Terrarium 95 - By The Sea",
        price: "350000",
        imageUrl: "https://9xgarden.com/wp-content/uploads/2021/03/terrarium-tieu-canh-trong-binh-thuy-tinh-9xgarden-101-600x600.jpg",
        link: "#"
    },
    {
        id: 7,
        name: "Terrarium 95 - By The Sea",
        price: "350000",
        imageUrl: "https://9xgarden.com/wp-content/uploads/2021/03/terrarium-tieu-canh-trong-binh-thuy-tinh-9xgarden-101-600x600.jpg",
        link: "#"
    },
    {
        id: 8,
        name: "Terrarium 95 - By The Sea",
        price: "350000",
        imageUrl: "https://9xgarden.com/wp-content/uploads/2021/03/terrarium-tieu-canh-trong-binh-thuy-tinh-9xgarden-101-600x600.jpg",
        link: "#"
    },
    {
        id: 9,
        name: "Terrarium 95 - By The Sea",
        price: "350000",
        imageUrl: "https://9xgarden.com/wp-content/uploads/2021/03/terrarium-tieu-canh-trong-binh-thuy-tinh-9xgarden-101-600x600.jpg",
        link: "#"
    },
    {
        id: 10,
        name: "Terrarium 95 - By The Sea",
        price: "350000",
        imageUrl: "https://9xgarden.com/wp-content/uploads/2021/03/terrarium-tieu-canh-trong-binh-thuy-tinh-9xgarden-101-600x600.jpg",
        link: "#"
    },
    {
        id: 11,
        name: "Terrarium 95 - By The Sea",
        price: "350000",
        imageUrl: "https://9xgarden.com/wp-content/uploads/2021/03/terrarium-tieu-canh-trong-binh-thuy-tinh-9xgarden-101-600x600.jpg",
        link: "#"
    },
    {
        id: 12,
        name: "Terrarium 95 - By The Sea",
        price: "350000",
        imageUrl: "https://9xgarden.com/wp-content/uploads/2021/03/terrarium-tieu-canh-trong-binh-thuy-tinh-9xgarden-101-600x600.jpg",
        link: "#"
    },
];

function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) ?? [];
    let indexProduct = products.findIndex(x => x.id == id)

    let indexCart = cart.findIndex(x => x.id == id)
    if (indexCart !== -1) {
        cart[indexCart].quantity += 1;
        localStorage.setItem("cart", JSON.stringify(cart));
    } else {
        let updateCart = [...cart, { ...products[indexProduct], quantity: 1 }];
        localStorage.setItem("cart", JSON.stringify(updateCart));
    }
}

function renderProductList() {
    let element = '';
    for (var i = 0; i < products.length; i++) {
        element += `
        <div class="product-card">
            <div class="image-product">
                <img
                    class="image-product"
                    src="${products[i].imageUrl}"
                    alt="${products[i].name}"
                >
                <div class="actions">
                    <button class="favorite"><i class="fa-regular fa-heart"></i></button>
                    <button onclick="addToCart(${products[i].id})" class="cart"><i class="fa-solid fa-cart-shopping"></i></button>
                </div>
            </div>
            <h3 class="card-title">
                <a href="${products[i].link}">${products[i].name}</a>
            </h3>
            <h4>${products[i].price}</h4>      
        </div> 
        `
    }
    document.getElementById('product-list').innerHTML = element;
}
renderProductList();
