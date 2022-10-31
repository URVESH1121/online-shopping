fetch('product.json')
  .then(response => response.json())
  .then(data => {
    function display_product() {
      let cards = "";
      let products = data.all_products;
      for (key in products) {
        cards +=
          `
                  <div class="shop_card">
                      <h2 class="card-title">${products[key].title}</h2>
                      <div class="card-img-room">
                          <img class="card-img" src="${products[key].img}" alt="">
                      </div>
                      <p class="card-detail"> ${products[key].info}  </p>
                      <h2 class="card-title">Price - ${products[key].price}</h2>
                      <button class="card-btn" onclick= "addcart( ${products[key].id} ) " >Add To Cart</button>
                   </div> 
                  
                  `;
      }
      document.getElementById("shop_products").innerHTML = cards;
    }
    display_product();
  })
  .catch(err => console.error(err));

var cart_items = {};
var total_price = 0;
function addcart(item_id) {
  fetch('product.json')
    .then(response => response.json())
    .then(data => {
      let all_products = data.all_products;


      if (cart_items[item_id]) {
        cart_items[item_id].quantity += 1;
        cart_items[item_id].cart_price += cart_items[item_id].price;
        // console.log(cart_items);
        total_price += cart_items[item_id].price;
        return;
      }

      for (item of all_products) {
        // console.log(cart_items);
        if (item_id == item.id) {
          cart_items[item_id] = item;
          cart_items[item_id].quantity = 1;
          cart_items[item_id].cart_price = cart_items[item_id].price;
          total_price += cart_items[item_id].price;
          return;
        }
      }
    }
    ).catch(err => console.error(err));
  display_cart();
}



function display_cart() {
  var all_cart = "";

  // if (Object.keys(cart_items).length > 0) {
  Object.keys(cart_items).forEach(function (key) {
    all_cart += `
                <div class="cart-items">
                <h2 class="cart-title">${cart_items[key].title}</h2>
                    <div class="cart-img">
                        <img src="${cart_items[key].img}" alt="No Image">
                    </div>
  
                    <h2 class="cart-price">${cart_items[key].quantity}</h2>
                    <h2 class="cart-price">${cart_items[key].cart_price}</h2>
                </div>
            `;
  });

  all_cart += `<center> <h1> Total Price ${total_price} </h1> </center>`;
  document.getElementById("cart").innerHTML = all_cart;
  // } else {
  //   document.getElementById("cart").innerHTML =
  //     "<center> <h1> No Product Added in Cart </h1> </center> ";
  // }
}
var burger = document.querySelector(".burger");
var navBar = document.querySelector(".navbar");
var navList = document.querySelector(".navlist");

burger.addEventListener("click", () => {
  navBar.classList.toggle("resp_navbar");
  navList.classList.toggle("resp_navlist");
});

// code for showing cart section and hiding product section


function show_cart() {
  document.getElementById("cart").style.display = "block";
  document.getElementById("shop_products").style.display = "none";
  display_cart();
}

function show_shop() {
  document.getElementById("cart").style.display = "none";
  document.getElementById("shop_products").style.display = "block";
  document.getElementById("shop_products").style.display = "flex";
}
