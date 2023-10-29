var products = [
    {
        id: 1,
        name: "Terrarium 103 - Komorebi",
        price: "250000",
        imageUrl: "https://bizweb.dktcdn.net/thumb/large/100/181/287/products/z3449063710036-c57cc2df85cb917cc2b4fb227556038b.jpg?v=1653743931227",
        link: "#",
        type: "Cầu tròn"
    },
    {
        id: 2,
        name: "Terrarium 95 - By The Sea",
        price: "350000",
        imageUrl: "https://bizweb.dktcdn.net/thumb/large/100/181/287/products/z3440621067951-77f7462217ab2bb492414f428cae35b8.jpg?v=1653721750570",
        link: "#",
        type: "Cầu tròn"
    },
    {
        id: 3,
        name: "Terrarium 239 - Tropical Breath",
        price: "900000",
        imageUrl: "https://bizweb.dktcdn.net/thumb/1024x1024/100/181/287/products/z3431291181304-8934584b4e90c790bd48071ceb32406b.jpg?v=1653368212507",
        link: "#",
        type: "Cầu tròn"
    },
    {
        id: 4,
        name: "Terrarium 100 - Green Planet",
        price: "690000",
        imageUrl: "https://bizweb.dktcdn.net/thumb/1024x1024/100/181/287/products/green-planet-1.jpg?v=1625900727187",
        link: "#",
        type: "Cầu tròn"
    },
    {
        id: 5,
        name: "Terrarium 15 - Tình Yêu Lớn",
        price: "690000",
        imageUrl: "https://bizweb.dktcdn.net/thumb/large/100/181/287/products/z2564090112337-8387c9d3adda7b7519708bda08cd99e1.jpg?v=1624352148137",
        link: "#",
        type: "Cầu tròn"
    },
    {
        id: 6,
        name: "Terrarium 122 - Beauty Of Ecosystem",
        price: "900000",
        imageUrl: "https://bizweb.dktcdn.net/thumb/1024x1024/100/181/287/products/z2695175135147-d3e60c747a7a55c583f808ea2aec4155.jpg?v=1629384806630",
        link: "#",
        type: "Cầu tròn"
    },
    {
        id: 7,
        name: "Terrarium 130 - GAIA Fores",
        price: "690000",
        imageUrl: "https://bizweb.dktcdn.net/thumb/1024x1024/100/181/287/products/z2688411258772-40d2977ed065459a4d87eb4fbc34eaad.jpg?v=1629105887753",
        link: "#",
        type: "Cầu tròn"
    },
    {
        id: 8,
        name: "Terrarium 85 - Vạn Sự Trong Tầm Tay",
        price: "450000",
        imageUrl: "https://bizweb.dktcdn.net/thumb/large/100/181/287/products/9.jpg?v=1587475636397",
        link: "#",
        type: "Cầu tròn"
    },
    {
        id: 9,
        name: "Terrarium 42 - Mã Đáo Thành Công",
        price: "1800000",
        imageUrl: "https://bizweb.dktcdn.net/thumb/large/100/181/287/products/z2465830376018-290580853d2c25629a2a06966152405d.jpg?v=1619964321763",
        link: "#",
        type: "Cầu tròn"
    },
    {
        id: 10,
        name: "Terrarium 300 - Dạo chơi cùng Totoro",
        price: "1000000",
        imageUrl: "https://bizweb.dktcdn.net/thumb/1024x1024/100/181/287/products/tb1xkongxxxxxxeaxxxxxxxxxxx-0-item-pic.jpg?v=1685786544987",
        link: "#",
        type: "Cầu tròn"
    },
    {
        id: 11,
        name: "Terrarium 129 - Ecology",
        price: "3500000",
        imageUrl: "https://bizweb.dktcdn.net/thumb/1024x1024/100/181/287/products/pro2.jpg?v=1646983412780",
        link: "#",
        type: "Cầu tròn"
    },
    {
        id: 12,
        name: "Terrarium 58 - Hành Tinh Xanh",
        price: "800000",
        imageUrl: "https://bizweb.dktcdn.net/thumb/large/100/181/287/products/42780528-1798244896940283-8112332467748208640-n.jpg?v=1629202516460",
        link: "#",
        type: "Cầu tròn"
    }
];
function formatCurrency(number) {
    return number.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
}

function addToCart(event, id) {
    event.stopPropagation();
    let cart = JSON.parse(localStorage.getItem("cart")) ?? [];
    const userData = JSON.parse(localStorage.getItem("userData"));
    let indexProduct = products.findIndex(x => x.id == id)
    if (userData) {
        let indexCart = cart.findIndex(x => x.id == id)
        if (indexCart !== -1) {
            cart[indexCart].quantity += 1;
            localStorage.setItem("cart", JSON.stringify(cart));
        } else {
            let updateCart = [...cart, { ...products[indexProduct], quantity: 1 }];
            localStorage.setItem("cart", JSON.stringify(updateCart));
        }
        alert("Thêm vào giỏ hàng thành công!");

        setTimeout(function () {
            alertBox.style.display = "none";
        }, 2000);
    } else {
        alert("Xin vui lòng đăng nhập để thêm vào giỏ hàng!")
        window.location.href = '../html/login.html'
    }
}


function viewProduct(id) {
    const product = products.find((product) => product.id === id);
    if (product) {
        localStorage.setItem("product", JSON.stringify(product));
        window.location.href = `./html/product-item.html?id=${id}`;
    } else {
        alert("Không tìm thấy sản phẩm!");
    }
}

function renderProductList() {
    let element = '';
    for (var i = 0; i < products.length; i++) {
        const price = parseInt(products[i].price);
        element += `
        <div class="product-card" onclick="viewProduct(${products[i].id})">
            <div class="image-product">
                <img
                    class="image-product"
                    src="${products[i].imageUrl}"
                    alt="${products[i].name}"
                >
                <div class="actions">
                    <button class="favorite"><i class="fa-regular fa-heart"></i></button>
                    <button onclick="addToCart(event, ${products[i].id})" class="cart"><i class="fa-solid fa-cart-shopping"></i></button>
                </div>
            </div>
            <h5 style = " margin-top: 10px">${products[i].type}</h5>
            <h3 class="card-title">
                <a>${products[i].name}</a>
            </h3>
            <h4>${formatCurrency(price)}</h4>      
        </div> 
        `
    }
    document.getElementById('product-list').innerHTML = element;
}
renderProductList();
