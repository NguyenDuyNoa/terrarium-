var products = [
    {
        name: "Terrarium 103 - Komorebi",
        price: "250.000₫",
        imageUrl: "https://9xgarden.com/wp-content/uploads/2021/03/terrarium-tieu-canh-trong-binh-thuy-tinh-9xgarden-100-600x600.jpg",
        link: "#"
    },
    {
        name: "Terrarium 95 - By The Sea",
        price: "350.000₫",
        imageUrl: "https://9xgarden.com/wp-content/uploads/2021/03/terrarium-tieu-canh-trong-binh-thuy-tinh-9xgarden-101-600x600.jpg",
        link: "#"
    },
    {
        name: "Terrarium 95 - By The Sea",
        price: "350.000₫",
        imageUrl: "https://9xgarden.com/wp-content/uploads/2021/03/terrarium-tieu-canh-trong-binh-thuy-tinh-9xgarden-101-600x600.jpg",
        link: "#"
    },
    {
        name: "Terrarium 95 - By The Sea",
        price: "350.000₫",
        imageUrl: "https://9xgarden.com/wp-content/uploads/2021/03/terrarium-tieu-canh-trong-binh-thuy-tinh-9xgarden-101-600x600.jpg",
        link: "#"
    },
    {
        name: "Terrarium 95 - By The Sea",
        price: "350.000₫",
        imageUrl: "https://9xgarden.com/wp-content/uploads/2021/03/terrarium-tieu-canh-trong-binh-thuy-tinh-9xgarden-101-600x600.jpg",
        link: "#"
    },
    {
        name: "Terrarium 95 - By The Sea",
        price: "350.000₫",
        imageUrl: "https://9xgarden.com/wp-content/uploads/2021/03/terrarium-tieu-canh-trong-binh-thuy-tinh-9xgarden-101-600x600.jpg",
        link: "#"
    },
    {
        name: "Terrarium 95 - By The Sea",
        price: "350.000₫",
        imageUrl: "https://9xgarden.com/wp-content/uploads/2021/03/terrarium-tieu-canh-trong-binh-thuy-tinh-9xgarden-101-600x600.jpg",
        link: "#"
    },
    {
        name: "Terrarium 95 - By The Sea",
        price: "350.000₫",
        imageUrl: "https://9xgarden.com/wp-content/uploads/2021/03/terrarium-tieu-canh-trong-binh-thuy-tinh-9xgarden-101-600x600.jpg",
        link: "#"
    },
    {
        name: "Terrarium 95 - By The Sea",
        price: "350.000₫",
        imageUrl: "https://9xgarden.com/wp-content/uploads/2021/03/terrarium-tieu-canh-trong-binh-thuy-tinh-9xgarden-101-600x600.jpg",
        link: "#"
    },
    {
        name: "Terrarium 95 - By The Sea",
        price: "350.000₫",
        imageUrl: "https://9xgarden.com/wp-content/uploads/2021/03/terrarium-tieu-canh-trong-binh-thuy-tinh-9xgarden-101-600x600.jpg",
        link: "#"
    },
    {
        name: "Terrarium 95 - By The Sea",
        price: "350.000₫",
        imageUrl: "https://9xgarden.com/wp-content/uploads/2021/03/terrarium-tieu-canh-trong-binh-thuy-tinh-9xgarden-101-600x600.jpg",
        link: "#"
    },
    {
        name: "Terrarium 95 - By The Sea",
        price: "350.000₫",
        imageUrl: "https://9xgarden.com/wp-content/uploads/2021/03/terrarium-tieu-canh-trong-binh-thuy-tinh-9xgarden-101-600x600.jpg",
        link: "#"
    },
];


var productContainer = document.querySelector(".product-list");

for (var i = 0; i < products.length; i++) {
    var product = products[i];
    
    var productCard = document.createElement("div");
    productCard.classList.add("product-card");
    
    var productImage = document.createElement("img");
    productImage.src = product.imageUrl;
    productImage.alt = product.name;
    
    var productTitle = document.createElement("h3");
    productTitle.classList.add("card-title");

    var productLink = document.createElement("a");
    productLink.href = product.link;
    productLink.textContent = product.name;
    productTitle.appendChild(productLink);
    
    var productPrice = document.createElement("h4");
    productPrice.textContent = product.price;
    
    productCard.appendChild(productImage);
    productCard.appendChild(productTitle);
    productCard.appendChild(productPrice);
    
    productContainer.appendChild(productCard);
}
