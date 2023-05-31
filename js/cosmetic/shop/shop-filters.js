function getItems(type) { /* data-rate/data-price */
    let categoryItems = document.querySelectorAll(type);
    console.log(type, ' sadasds');
    let categoryItemsArray = Array.from(categoryItems);
    return categoryItemsArray;
}

let sortSelect = document.getElementById('select-sort');
sortSelect.addEventListener('change', function () {
    switch (this.value) {
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