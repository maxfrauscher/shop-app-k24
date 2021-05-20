# shop-app-k24

![alt text](https://i.imgur.com/UQtoukf.jpg)

## Agenda

1.  General information
2.  Project setup
3.  Navigation
4.  Product page
5.  Cart page
6.  Responsive design

## 1. General information

The project shop-app-k24 is a fully responsive web shop application. All functionalities are going to be presented in the further course of the documentation.

<b>Author:</b> Maximilian Frauscher

<b>Framework:</b> Vue.js <br>
<b>Plugins:</b> Vuex, Vue Router <br>
<b>Icon Library:</b> Primeicons

## 2. Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Tests

```
npm run test:unit
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## 3. Navigation

<b>Home:</b> Navigates to the homepage (placeholder). <br>
<b>Products:</b> Navigates to the products page.<br>
<b>Offers:</b> Navigates to the offers page (placeholder). <br>
<b>Service:</b> Navigates to the service page (placeholder). <br>
<b>Cart (Icon):</b> Navigates to the shopping cart.

### 3.1 Menu point is hovered

Hovering with the mouse over the menu point "Products" highlights its top line with the highlight color orange. <br><br>
![](https://i.imgur.com/wLGLhPT.png)

### 3.2 Menu point is selected

A left mouse click on a menu point selects it. If a menu point is selected it changes the background color to dark gray. <br><br>
![](https://i.imgur.com/bYHtXJO.png)

### 3.3 Items in cart

The number next to the cart shows the amount of products in the cart. It counts each product group without adding the quantity of each product.

![](https://i.imgur.com/iCWeE5J.png)

## 4. Product page

![](https://i.imgur.com/iIcSfiN.png)

The available products are listed on the product page in a grid layout (which changes depending on the width of the client device).

### 4.1 Single product card

![](https://i.imgur.com/Oh6D5b7.png)

The single product card holds the name, the price and a short description of the product. Below the description there is also a highlighted number of how many products are left in stock and the "Add to Cart" button.

### 4.2 Add to Cart/ Sold Out

A left mouse click on the "Add to Cart" button adds the product to the cart.
There are three states of the button.

<hr>

![](https://i.imgur.com/WWvGIhB.png)<br>
<b>normal state: </b> No actions.<br><br>

<hr>

![](https://i.imgur.com/g6oPBig.png)<br>
<b>hover state: </b> After hovering with the mouse the background color changes to orange.<br><br>

<hr>

![](https://i.imgur.com/3OSDE1A.png)<br>
<b>disabled state:</b> The text changes to "Sold Out" if there are no products left in stock. The button can't be clicked in this state.<br><br>

<hr>

### 4.3 In stock

The in stock field highlights how many products are left in stock. It has two states.

<hr>

![](https://i.imgur.com/w1JgOTY.png)<br>
<b>normal state:</b> It shows the number of the remaining pieces.<br><br>

<hr>

![](https://i.imgur.com/r90drWt.png)<br>
<b>disabled state: </b>It changes its background color if there are no more products in stock.<br><br>

<hr>

## 5. Cart page

![](https://i.imgur.com/YftKrJ9.png)

The cart page shows a table of all products added to the cart.

### 5.1 Cart column

![](https://i.imgur.com/1pA1JZV.png)

The column holds the information of a single product with its quantity and the price (dependent on the quantity). Also there is the price of each piece in brackets and a remove button to remove each piece from the cart.

### 5.2 Cart table

![](https://i.imgur.com/PqifFOm.png)

The table combines the different products and calculates the total price.

### 5.2 Remove from cart

The "remove" button removes a product from the cart. If the amount is one the product will be removed completely from the cart. Otherwise if the amount is greater than one the product stays in the cart but the amount will be reduced by one. There are two states of the "remove" button.

<hr>

![](https://i.imgur.com/26tU9Nb.png)<br>
<b>normal state:</b> No actions.<br><br>

<hr>

![](https://i.imgur.com/1QhIiQM.png)<br>
<b>hover state: </b> After hovering with the mouse the background color changes to orange.<br><br>

<hr>

### 5.3 Cart is empty

If there is no product in the cart a white bar with the text "The cart is empty" will be shown.

![](https://i.imgur.com/tcvfnrG.png)

## 6. Responsive design

The layout of the product page and the cart page will change depending on the device width.

![](https://i.imgur.com/ShpFuQ5.png)

---

Thanks in advance! <br>
Maximilian Frauscher
