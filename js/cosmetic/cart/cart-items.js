// list should be made when we adding to cart to form some kind of json file with
// user cart

var cartItemsWindow = document.getElementById('cart-items-list')

var currentCartItems = []




function addItem(id) {
    addtoCart(id)
}


function updateCart() {
    renderCart()
    fetchTotal()
}

function addtoCart(id) {
    if (currentCartItems.some((item) => item.id === id)) {
        changeQuantity('plus', id)
    }

    else {
        const item = data.find((product) => product.id === id)
        currentCartItems.push({
            ...item,
            quantity: 1,
        });
    }

    updateCart()

}

function removeFromCart(id) {
    currentCartItems = currentCartItems.filter((item) => item.id !== id)
    updateCart()
}




function renderCart() {
    // for every item in currentCartItems
    //      createElement(id)
    cartItemsWindow.innerHTML = ``
    currentCartItems.forEach((item) => {
        cartItemsWindow.innerHTML +=
            `<li class="cart-item">
                <div class="cart-line">
                    <div class="cart-line-element item-name">${item.title}</div>
                    <div class="cart-line-element item-price-total" style="font-weight: bold;">${item.price}$</div>


                    <div class="title-bar-controls item-button">
                        <button class="button-plus" onclick="changeQuantity('plus', ${item.id})"></button>
                    </div>  
                    <div class="cart-line-element item-quantity">${item.quantity}</div>
                    <div class="title-bar-controls item-button">
                        <button class="button-minus" onclick="changeQuantity('minus', ${item.id})"></button>
                    </div>  
                    
                    <div class="title-bar-controls item-button">
                        <button aria-label="Close" onclick="removeFromCart(${item.id})"></button>
                    </div>
                </div>
            </li>`
    })
}

function changeQuantity(action, id) {
    currentCartItems = currentCartItems.map((item) => {
        let num = item.quantity


        if (item.id === id) {
            if (action === 'minus' && num > 1) {
                num--;
            }
            else if (action === 'plus' && num < 10) { //there should be item quantity in stock. There was nothing in api so i set it to 11
                num++;
            }
        }

        return {
            ...item,
            quantity: num,
        }
    });


    updateCart()
}


function fetchTotal() {
    let totalSum = 0;
    let totalItems = 0;

    currentCartItems.forEach((item) => {
        totalSum += item.price * item.quantity;
        totalItems += item.quantity;
    })

    totalSum = Math.round(totalSum * 100) / 100

    updateTotalSum(totalSum)
    updateTotalItems(totalItems)
}

function updateTotalSum(sum) {
    document.getElementById('cart-total').innerHTML = sum + '$'
    document.getElementById('botbar-cart-text').innerHTML = 'Cart: ' + sum + '$'
}

function updateTotalItems(total) {
    if (total == 1) { document.getElementById('cart-title').innerHTML = 'cart:_' + total + '_item_.exe' }
    else { document.getElementById('cart-title').innerHTML = 'cart:_' + total + '_items_.exe' }

}
