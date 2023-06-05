document.getElementById('cart-minimize').onclick = function () {

    document.getElementById('cart').classList.add('hidden');
    document.getElementById('cart-botbar').classList.remove('active');

};

document.getElementById('cart-botbar').onclick = function () {

    var cart = document.getElementById('cart');

    if (!cart.classList.contains('hidden')) {

        document.getElementById('cart').classList.add('hidden');
        document.getElementById('cart-botbar').classList.remove('active');

    }


    else if (cart.classList.contains('hidden')) {
        //plink();

        document.getElementById('cart-botbar').classList.add('active');
        document.getElementById('cart').classList.remove('hidden');

    }
};



// cart animation. doesnt work 
//
// function plink() {
//     var ofs = 0;
//     var el = document.getElementById('cart-botbar');

//     window.setInterval(function () {
//         el.style.backgroundColor = 'rgba(255,0,0,' + Math.abs(Math.sin(ofs)) + ')';
//         ofs += 0.01;
//     }, 10);
// }

