// list should be made when we adding to cart to form some kind of json file with
// user cart
var currentCartItems = ''

var cartItemsNum = 1

function addItem(id) {
    let idd = id - 1
    let tab = `<li class="cart-item">
    <div class="cart-line">
        <div class="cart-line-element item-number" style="font-weight: bold;">${cartItemsNum}</div>
        <div class="cart-line-element item-name">${data[idd].title}</div>
        <div class="cart-line-element item-price-total" style="font-weight: bold;">${data[idd].price}$</div>
        <div class="title-bar-controls item-delete">
            <button aria-label="Close"></button>
        </div>
    </div>
</li>`

    document.getElementById('cart-items-list').innerHTML += tab
    cartItemsNum++
}

function addCartItem(shopitem) {
    return
}

function updateBotBar(sum) {
    document.getElementById('botbar-cart-text').innerHTML = 'Cart: ' + sum + '$'
    console.log('upd');
}

function clearCart() {
    console.log('at start');
}