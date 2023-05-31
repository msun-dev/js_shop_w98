var item_preview = document.querySelector('.item-preview');
var item_botbar = document.getElementById('item-botbar');

document.querySelector('body').addEventListener('click', function (event) {
    let element = event.target

    console.log(element);

    if (element.className === 'shop-product-image') {
        changePreview(Number(element.getAttribute('data-id')) - 1)
        showPreview()
    }

    else if (!(document.querySelector('.item-preview').contains(element))) {
        hidePreview()
    }

}
);

function changePreview(id) {
    document.getElementById('preview-img').src = data[id].image
    document.getElementById('preview-name').innerHTML = data[id].title
    document.getElementById('preview-description').innerHTML = data[id].description
    document.getElementById('preview-stock').innerHTML = 'Price: ' + data[id].price
}

function showPreview() {
    item_preview.classList.remove('hidden');
    item_botbar.classList.add('active');
}

function hidePreview() {
    item_preview.classList.add('hidden');
    item_botbar.classList.remove('active');
}

document.getElementById('close-preview').onclick = function () {
    hidePreview()
}