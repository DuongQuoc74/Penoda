// ---------- PRODUCT LIST ---------- 
/*
var products = [
    {
        namep: "Jordan Delta 3 Mid",
        type: "jd3",
        id: "jd3-black",
        color: "black",
        price: 200,
        img: "./assets/image/jordan_delta_3_black.png",
        desc: ""
    },

    {
        namep: "Jordan Delta 3 Mid",
        type: "jd3",
        id: "jd3-khaki",
        color: "khaki",
        price: 200,
        img: "./assets/image/jordan_delta_3_khaki.png",
        desc: ""
    },

    {
        namep: "Air Jordan 1",
        type: "jd1",
        id: "jd1-white",
        color: "black",
        price: 200,
        img: "./assets/image/jordan_1_black_white.png",
        desc: ""
    },

    {
        namep: "Air Jordan 1",
        type: "jd1",
        id: "jd1-yellow",
        color: "yellow",
        price: 200,
        img: "./assets/image/jordan_1_yellow.png",
        desc: ""
    },

    {
        namep: "Air Jordan 1",
        type: "jd1",
        id: "jd1-orange",
        color: "orange",
        price: 200,
        img: "./assets/image/jordan_1_orange.png",
        desc: ""
    },

    {
        namep: "Air Jordan 1",
        type: "jd1",
        id: "jd1-violet",
        color: "violet",
        price: 200,
        img: "./assets/image/jordan_1_violet.png",
        desc: ""
    },

    {
        namep: "Nike Air Max 270",
        type: "AirMax",
        id: "AM270-white-black",
        color: "white",
        price: 200,
        img: "./assets/image/nike_airmax_270_white_black.png",
        desc: ""
    },

    {
        namep: "Nike Air Max 270",
        type: "AirMax",
        id: "AM270-white",
        color: "white",
        price: 200,
        img: "./assets/image/nike_airmax_270_white.png",
        desc: ""
    },

    {
        namep: "Nike Air Max 270",
        type: "AirMax",
        id: "AM270-black",
        color: "black",
        price: 200,
        img: "./assets/image/nike_airmax_270_black.png",
        desc: ""
    },
]*/

// Display product


/*
  var productGridList = document.querySelector(".list-product__grid");

products.forEach(function(product) {

    var productElement = 
    `<div class="l-4 m-6 c-12 product">
        <div class="product__link">
            <div class="product-item product__img">
                <img src="${product.img}"></img>
            </div>

            <div class="product__description-layer">
                <div class="product__description" onclick="noClosing(event)">
                    <div class="product__description--close">
                        <i class="fa-solid fa-xmark"></i>
                    </div>

                    <div class="product-item">
                        <div class="product-item__img">
                            <div class="dscr--product__img">
                                <img src="${product.img}" alt="">
                            </div>
                        </div>
                    </div>

                    <div class="product__information">
                        <div class="product-item dscr--product__name">${product.name}</div>
                        <p class="dscr--product__detail">${product.desc}.</p>
                        
                        <div class="wrap-price">
                            <div class="product-item product__price">$${product.price}</div>
                            <div class="buttons__added">
                                <input class="minus quantity-btn" type="button" value="-">
                                <input class="input-qty" name="" type="number" value="1">
                                <input class="plus quantity-btn" type="button" value="+">
                            </div>
                        </div>

                        <div class="buy-btn">
                            <button type="submit">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            

            <div class="product-item product__name">${product.name}</div>
            <div class="product-item product__rating">
                <i class="fa-solid fa-star star-icon--rate star-icon"></i>
                <i class="fa-solid fa-star star-icon--rate star-icon"></i>
                <i class="fa-solid fa-star star-icon--rate star-icon"></i>
                <i class="fa-solid fa-star star-icon--rate star-icon"></i>
                <i class="fa-solid fa-star star-icon"></i>
            </div>
            <div class="product-item product__price">$${product.price}</div>
        </div>
    </div>`
    productGridList.insertAdjacentHTML("beforeend", productElement)
    
})*/



// ---------- USER LIST ---------- 
var users = [
    {
        username: "admin",
        pass: "123",
        userID: 0,
        name: "nguyen van a"
    }
]



// ---------- CART LIST ---------- 


var carts = [ 
    {
        name: "",   // carts[0].name = users[0].name;
        cartID: "1", // l???y ID c???a user v?? duy???t v??o m???ng carts ????? t??m v?? hi???n th??? gi??? h??ng 
        productList: [
            {
                product: products[1],
                amount: 2,
                total: 200,
                check: true
            },

            {
                product: products[0],
                amount: 2,
                total: 200,
                check: false
            }
            
        ]
    },

    {
        name: "",   // carts[0].name = users[0].name;
        cartID: "2", // l???y ID c???a user v?? duy???t v??o m???ng carts ????? t??m v?? hi???n th??? gi??? h??ng 
        productList: [
            {
                product: products[1],
                amount: 2,
                total: 200
            },

            {
                product: products[1],
                amount: 2,
                total: 200
            }
            
        ]
    }
]


// for(var i = 0; i < carts.length; i++)
    console.log(carts[0]);


    
