const api_url = "https://fakestoreapi.com/products/"
var data = ''

async function getapi(url) {
    const response = await fetch(url)

    data = await response.json()
    if (response) { hideloader() }
    show(data)

    addTypeOptions()
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
            data-category="${r.category}" data-fav="false"
            >
<div class="card">
    <div class="shop-product-image" id="shop-preview"
        data-preview-id="${r.id}" style='background-image: url("${r.image}");'>
    </div>
    <div class="shop-product-description">
        <h2 class="name">${r.title}</h2>
        <p class="price">${r.price} $</p>
        <div class="shop-item-buttons">
            <button onclick=addItem(${r.id})>Add to cart</button>
            <button id="addFav" onclick=addFavourite(${r.id})>Add to favourites</button>
            <button id="removeFav" class="hidden" onclick=removeFavourite(${r.id})>Remove from favourites</button>
        </div>
    </div>
</div>
</li>`;
    }

    document.getElementById("products").innerHTML = tab;
}

function addTypeOptions() {
    var types = []
    for (var item in data) {
        if (!types.includes(data[item].category)) { types.push(data[item].category) };
    }

    sessionStorage.setItem('types', JSON.stringify(types))

    var selectTypes = document.getElementById('select-type')
    for (var type in types) {
        var opt = document.createElement('option')
        opt.value = types[type]
        opt.innerHTML = types[type]
        selectTypes.add(opt)
    }
}
