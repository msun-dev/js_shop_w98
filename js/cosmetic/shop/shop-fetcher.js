const api_url = "https://fakestoreapi.com/products/"
var data = ''

async function getapi(url) {
    const response = await fetch(url)

    data = await response.json()
    if (response) { hideloader() }
    show(data)
}


const responceData = getapi(api_url)


function hideloader() {
    document.getElementById('loading').remove();
}

function show(data) {
    let tab = '';
    for (let r of data) {
        tab +=
            `<li class="shop-product"
            data-id="${r.id}" data-price="${r.price}" data-rate="${r.rating.rate}"
            data-category="${r.category}"
            >
<div class="card">
    <div class="shop-product-image" id="shop-preview"
        data-id="${r.id}" style='background-image: url("${r.image}");'>
    </div>
    <div class="shop-product-description">
        <h2 class="name">${r.title}</h2>
        <p class="price">${r.price} $</p>
        <div class="shop-item-buttons">
            <button onclick=addItem(${r.id})>Add to cart</button>
            <button>Add to favourites</button>
        </div>
    </div>
</div>
</li>`;
    }

    document.getElementById("products").innerHTML = tab;
} 