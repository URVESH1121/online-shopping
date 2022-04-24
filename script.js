
const all_products = [

    {
        id: 1,
        title: 'Laptop ',
        price: 85000,
        img: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
        info: ' Hp paviliean laptop, i7 processor  , 16gb ram, 500gb ssd, slim  lsptop  '
    },

    {
        id: 2,
        title: 'Mobile',
        price: 15000,
        img: 'https://images.unsplash.com/photo-1529653762956-b0a27278529c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80',
        info: ' Oppo Reno phone dark black 4gm ram & 128gb rom '
    },

    {
        id: 3,
        title: 'Watch',
        price: 30000,
        img: 'https://images.unsplash.com/photo-1521485950395-bcfb8fc9bd06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        info: ' Rolex for Royal watch   '
    },

    {
        id: 4,
        title: 'T-Shirt',
        price: 5000,
        img: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
        info: ' cotton material  tshirt'
    },

    {
        id: 5,
        title: 'Jeans',
        price: 5000,
        img: 'https://images.unsplash.com/photo-1541085388148-a30647cab28f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
        info: ' mens jenes , 38 size washable '
    },



]






function display_product() {

    var cards = ''

    for (let item of all_products) {

        cards = cards + `
        
        <div class="shop_card">
            <h2 class="card-title">   ${item.title}    </h2>
            <div class="card-img-room">
                <img class="card-img"
                    src=" ${item.img}  "
                    alt="">
            </div>
            <p class="card-detail"> ${item.info}  </p>
            <h2 class="card-title">Price - ${item.price}</h2>
            <button class="card-btn" onclick= "addcart( ${item.id} ) " >Add To Cart</button>
         </div> 
        
        `

    }
    // End of for loop , injecting all cards into  shop_products section 
    document.getElementById('shop_products').innerHTML = cards
}


display_product()









var cart_items = {}
var total_price = 0

function addcart(item_id) {

    if (cart_items[item_id]) {
        cart_items[item_id].quantity += 1
        cart_items[item_id].cart_price += cart_items[item_id].price
        console.log(cart_items)

        total_price += cart_items[item_id].price

        return
    }


    for (item of all_products) {

        if (item_id == item.id) {
            cart_items[item_id] = item
            cart_items[item_id].quantity = 1
            cart_items[item_id].cart_price = cart_items[item_id].price

            total_price += cart_items[item_id].price
            return
        }
    }

}



function display_cart() {

    var all_cart = ''


    if (Object.keys(cart_items).length > 0) {

        for (k in cart_items) {

            all_cart = all_cart + `
                <div class="cart-items">
                <h2 class="cart-title">${cart_items[k].title}</h2>
                    <div class="cart-img">
                        <img src="${cart_items[k].img}" alt="No Image">
                    </div>
                    
                    <h2 class="cart-price">${cart_items[k].quantity}</h2>
                    <h2 class="cart-price">${cart_items[k].cart_price}</h2>
                </div>
            `
        }
        all_cart += `<center> <h1> Total Price ${ total_price } </h1> </center>`
        document.getElementById('cart').innerHTML = all_cart


    }

    else {
        document.getElementById('cart').innerHTML = '<center> <h1> No Product Added in Cart </h1> </center> '
    }
}var burger = document.querySelector('.burger')
var navBar = document.querySelector('.navbar')
var navList = document.querySelector('.navlist')


burger.addEventListener('click', () => {

    navBar.classList.toggle('resp_navbar')
    navList.classList.toggle('resp_navlist')

})

// code for showing cart section and hiding product section

function show_cart() {
    document.getElementById('cart').style.display = 'block'
    document.getElementById('shop_products').style.display = 'none'
    display_cart();
}

function show_shop() {
    document.getElementById('cart').style.display = 'none'
    document.getElementById('shop_products').style.display = 'block'
    document.getElementById('shop_products').style.display = 'flex'
}





