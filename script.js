// Array containing your 10 products
const products = [
    { name: "The lost on an island", price: "$0.10", img: "images/lost.jpeg", link: "https://payhip.com/b/CtwVc" },
    { name: "The poor woodcutter and his son", price: "0.10$", img: "images/wson.jpeg", link: "https://payhip.com/b/o17Qp" },
    { name: "Forged in secret", price: "0.10$", img: "images/vilg.jpeg", link: "https://payhip.com/b/F8smB" },
    { name: "The king son and shepered girl", price: "0.10$", img: "images/shprd.jpeg", link: "https://payhip.com/b/KVCcF" },
    { name: "Small Messenger Bag For Women", price: "0.99$", img: "images/bg.png", link: "https://s.click.aliexpress.com/e/_c3Xu67PX" },
    { name: "New Style Female Handbag", price: "0.99$", img: "images/bnb.png", link: "https://s.click.aliexpress.com/e/_c3Nps62p" },
    { name: " Vegetable Slicer", price: "0.99$", img: "images/nn.png", link: "https://s.click.aliexpress.com/e/_c3Dt3MYz" },
    { name: "Oil Spray for Cooking", price: "0.99$", img: "images/spry.png", link: " https://s.click.aliexpress.com/e/_c3uTTh1x" },
    { name: " Apple Pencil with LED Power", price: "0.99$", img: "images/bb.png", link: "https://s.click.aliexpress.com/e/_c3cJ8Pnx" },
    { name: "Wireless Signal Booster Wifi", price: "0.99$", img: "images/bc.png", link: "https://s.click.aliexpress.com/e/_c4P8SvPj" }
];

const container = document.getElementById('product-container');

// Function to render products
function displayProducts() {
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <a href="${product.link}" class="buy-now">Buy Now</a>
        `;
        
        container.appendChild(card);
    });
}

// Initialize the product list
window.onload = displayProducts;

// Simple Alert for Contact Form
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you, Younas will get back to you soon!');
});