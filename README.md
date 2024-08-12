# Minimal shop prototype in w98 style

## About

Shop API used in this project: https://fakestoreapi.com/

Everything you will see in this website was inspired in some ways by this thing: https://joelgc.com/.
Some code was copypasted. If something works - why bother to make it yourself?
Also w98 stylesheet [https://unpkg.com/98.css] was heavily modified (in index.css LULE) bcs vanilla version sucks big stinky ass.

Was added/made/modified in 98.css: 
- Window icon support
- Functional botbar with icons and shit 
- Windows js functionality (hide/show/etc (How about to make them draggable?))  
- Other little improvements I already forgot about

<hr>

## Previews

**1** - Main screen:
<img src="/previews/preview_1.png">

**2** - Screen with item preview and cart opened:
<img src="/previews/preview_2.png">

<hr>

## TO-DO

### GENERAL

- [ ] Make own version of 98.css with all changes i made in index.css
- [ ] Rewrite website using VUE framework

<hr>

### FUNCTIONALITY

### Shop:

- [x] Show all products using API request
- [x] Add type filter support
- [x] Sort by price/rating support
- [x] Item card with description
- [x] 'Favourites' support
- [x] Local storage for 'Favourites'
- [ ] Favourites and type filter don't work well together. Fix it! 
I should take list of shop products buy shop-product class and only visible ones
 
### Cart:

- [x] Cart item list
- [x] Add item quantity buttons
- [x] Update cart total in botbar on item on cart change
- [x] Remove item when clicked on X
- [ ] Local storage for cart (?)

<hr>

### UX (pobably will never be implemented)

### Shop:

- [ ] Mobile support (never)
- [ ] Rating on card
- [ ] Rating in item preview

### Cart: 

- [ ] Scroll to bottom of cart when adding new item
- [ ] Botbar cart animation when adding items (blinking (w98 style))
- [ ] Item image

<hr>

### 98.CSS

- [ ] If you press minimize button in cart while item preview is opened - both will close

<hr>
<hr>

## Deployment

```
git clone  https://github.com/MsUn-123/js_shop_w98;
cd js_shop_w98;

npm thingy-magingy
```
