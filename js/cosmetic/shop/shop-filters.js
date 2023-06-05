// sort

function getItems(type) { /* data-rate/data-price */
    let categoryItems = document.querySelectorAll(type);
    console.log(type, ' sadasds');
    let categoryItemsArray = Array.from(categoryItems);
    return categoryItemsArray;
}

let sortSelect = document.getElementById('select-sort');
sortSelect.addEventListener('change', function () {
    switch (this.value) { // should be implemented differently
        case '0': sortByID(); break;
        case '1': sortByPriceHigh(); break;
        case '2': sortByPriceLow(); break;
        case '3': sortByRateHigh(); break;
        case '4': sortByRateLow(); break;
        default: console.log('default! EleGiggle');
    }
});

function sortByPriceHigh() {
    sortThings('data-price', true)
}

function sortByPriceLow() {
    sortThings('data-price', false)
}

function sortByRateHigh() {
    sortThings('data-rate', true)
}

function sortByRateLow() {
    sortThings('data-rate', false)
}

function sortByID() {
    sortThings('data-id', false)
}

function sortThings(data, ascending) {
    var stores_li = document.querySelectorAll('.shop-product');

    [].slice.call(stores_li).sort(function (a, b) {
        var A = a.getAttribute(data)
        var B = b.getAttribute(data)
        if (ascending) { return (B - A) }
        else { return (A - B) }
    })
        .forEach(function (el) { el.parentNode.appendChild(el) });
}


// type filter



let typeSelect = document.getElementById('select-type')
let types = JSON.parse(sessionStorage.getItem('types'))


typeSelect.addEventListener('change', function () {
    let products = document.querySelectorAll('.shop-product')
    // now watch this
    products.forEach(element => {
        element.classList.add('hidden');
    });
    if (this.value === 'all') {
        let products = document.querySelectorAll('.shop-product')
        products.forEach(element => {
            element.classList.remove('hidden')
        });
    } else {
        console.log("[data-type=" + CSS.escape(this.value) + "]");

        let selectedProducts = document.querySelectorAll("[data-category=" + CSS.escape(this.value) + "]")
        selectedProducts.forEach(element => {
            element.classList.remove('hidden')
        })
    }
})

// favourites


var favourites = JSON.parse(localStorage.getItem('favourites')) // id nums
if (favourites == null) { favourites = [] }
setTimeout(renderFavButtons, 500); // найс костыль
console.log(favourites);

function renderFavButtons() {
    let items = document.querySelectorAll('.shop-product')
    items.forEach(item => {
        item.querySelector('#removeFav').classList.add('hidden')
        item.querySelector('#addFav').classList.remove('hidden')
    })

    favourites.forEach(fava => {
        let item = document.querySelector("[data-id=" + CSS.escape(fava) + "]")
        item.querySelector('#removeFav').classList.remove('hidden')
        item.querySelector('#addFav').classList.add('hidden')
    }) // nice name 
}

function addFavourite(id) { // rework this
    if (favourites.includes(id)) { return '' }
    favourites.push(id)

    localStorage.setItem('favourites', JSON.stringify(favourites))
    renderFavButtons()
}

function removeFavourite(id) { // and this
    var index = favourites.indexOf(id);
    if (index !== -1) {
        favourites.splice(index, 1);
    }

    localStorage.setItem('favourites', JSON.stringify(favourites))
    renderFavButtons()
}

const checkbox = document.getElementById('example1') // id is hardcoded in 98 css 
checkbox.addEventListener('change', (event) => {
    if (favourites.length == 0) { checkbox.checked = false }
    else if (event.currentTarget.checked) {
        showFavs();
    } else {
        notShowFavs()
    }
})

function showFavs() {
    if (favourites.length == 0) { return '' }

    let products = document.querySelectorAll('.shop-product')
    renderFavButtons()
    products.forEach(element => {
        if (!favourites.includes(Number(element.getAttribute('data-id')))) {
            element.classList.add('hidden')
        }
    })
}

function notShowFavs() {
    let products = document.querySelectorAll('.shop-product')

    products.forEach(element => {
        if (!favourites.includes(element.getAttribute('data-id'))) {
            element.classList.remove('hidden')
        }
    })
}