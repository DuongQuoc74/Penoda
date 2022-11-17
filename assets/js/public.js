function backToTop(){
     
   /* $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop()) {
                $('.back-to-top').fadeIn();
            }else {
                $('.back-to-top').fadeOut();
            }
        });
        $(".back-to-top").click(function(){
            $('html,body').animate({
                scrollTop:0
            },500);
        });
    });*/

    jQuery('html,body').animate({
        scrollTop: 0
    }, 1000);
}

   //auto Next slide
   var index=1;
   auto=function(){
       
       var imgs = ["./assets/image/1.jpg", "./assets/image/2.jpg"];
          document.getElementById('img').src = imgs[index];
          index++;
       if(index==2){
          index=0;
       }        
   }
   setInterval(auto,3000);

   var products = [
    {
        namep: "Jordan10",
        type: "jd3",
        id: "jd3-black",
        mau: "black",
        price: 799,
        img: "./assets/image/jordan_delta_3_black.png",
        desc: ""
    },

    {
        namep: "Nike1",
        type: "jd3",
        id: "jd3-khaki",
        mau: "khac",
        price: 699,
        img: "./assets/image/jordan_delta_3_khaki.png",
        desc: ""
    },

    {
        namep: "Air 1",
        type: "jd1",
        id: "jd1-white",
        mau: "black",
        price: 599,
        img: "./assets/image/jordan_1_black_white.png",
        desc: ""
    },

    {
        namep: "Air2",
        type: "jd1",
        id: "jd1-yellow",
        mau: "khac",
        price: 499,
        img: "./assets/image/jordan_1_yellow.png",
        desc: ""
    },

    {
        namep: "Air3",
        type: "jd1",
        id: "jd1-orange",
        mau: "khac",
        price: 399,
        img: "./assets/image/jordan_1_orange.png",
        desc: ""
    },

    {
        namep: "Nike2",
        type: "jd1",
        id: "jd1-violet",
        mau: "khac",
        price: 299,
        img: "./assets/image/jordan_1_violet.png",
        desc: ""
    },

    {
        namep: "Nike3",
        type: "AirMax",
        id: "AM270-white-black",
        mau: "white",
        price: 199,
        img: "./assets/image/nike_airmax_270_white_black.png",
        desc: ""
    },

    {
        namep: "Jordan2",
        type: "AirMax",
        id: "AM270-white",
        mau: "white",
        price: 199,
        img: "./assets/image/nike_airmax_270_white.png",
        desc: ""
    },

    {
        namep: "Jordan3",
        type: "AirMax",
        id: "AM270-black",
        mau: "black",
        price: 199,
        img: "./assets/image/nike_airmax_270_black.png",
        desc: ""
    },
]
// chọn sản phẩm cần lọc
function chon()
{
    //màu 
    var arr1= document.getElementsByClassName("mausac");
    var mausac__arr=[];
    for(i=0; i<arr1.length; i++)
    {
        if(arr1[i].checked==true) mausac__arr.push(arr1[i].value);
    }

    // giá 
    var arr2= document.getElementsByClassName("giaban");
    var giaban__arr=[];
    for(i=0; i<arr2.length; i++)
    {
        if(arr2[i].checked==true) giaban__arr.push(arr2[i].value);
    }
    showProduct(mausac__arr, giaban__arr);
}
    //Tìm kiếm sản phẩm
   /* function search(){
        var arr3 = document.getElementsByClassName("header--search__input");
        var search_arr =[];
        for(i=0; i<arr3.length;i++)
        {
            if(arr3[i]!=null) search_arr.push(arr3[i].value);
                                  
        }            
}*/

//------------Show Product-----------------------------------------

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
                        <div class="product-item dscr--product__name">${product.namep}</div>
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
            
            <div class="product-item product__name">${product.namep}</div>
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
})
//---tim kiếm tên -giá--

var search__input=document.querySelector('.form-input input');

    search__input.addEventListener('input',function(e){
        let txtSearch = e.target.value.trim().toLowerCase()
        let listP=document.querySelectorAll('.product')
        listP.forEach(item=>{
            console.log(item.innerText.toLowerCase().includes(txtSearch));
            if(item.innerText.toLowerCase().includes(txtSearch)){
                item.classList.remove('none')
            }
            else
            {
                item.classList.add('none')
            }
            
        })
    })

    //-- tắt sự kiện nhấn phím Enter load lại trang trên thẻ input
    var inputSearch = document.querySelector(".header--search__input");
console.log(inputSearch);

inputSearch.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
});



        
  
  

        

        
    

   // show sản phẩm
   
   function showProduct(mausac__arr=[], giaban__arr=[]){
      var listProduct = document.querySelector(".list-product__grid");
     
      listProduct.innerHTML='';
     
      
      
      for(i=0; i<products.length; i++)
    {
        namep=products[i].namep;
        type=products[i].type;
        id=products[i].id;
        mau=products[i].mau;
        gia=products[i].price; 
        img=products[i].img;
        desc=products[i].desc; 
    
        // lọc theo màu
        if(mausac__arr.length>0)
        {
            if(mausac__arr.includes(mau)==false) 
            {   
               
                continue;
            }
            
        }  

        // loc theo gia
        if(giaban__arr.length>0)
        {
            if(gia<200 && giaban__arr.includes('1')==false) 
            {
                 
                 continue;
            }
            
            if(gia>=200 && gia <500 && giaban__arr.includes('2')==false) 
            {
                
                continue;
            }
            if(gia>=500 && giaban__arr.includes('3')==false) 
            {   
                
                continue;
            }
         
        }
        

        
    
       
   
        listProduct.innerHTML+=
        `
        <div class="l-4 m-6 c-12 product">
           <div class="product__link">
            <div class="product-item product__img">
                <img src="${img}"></img>
            </div>

            <div class="product__description-layer">
                <div class="product__description" onclick="noClosing(event)">
                    <div class="product__description--close">
                        <i class="fa-solid fa-xmark"></i>
                    </div>

                    <div class="product-item">
                        <div class="product-item__img">
                            <div class="dscr--product__img">
                                <img src="${img}" alt="">
                            </div>
                        </div>
                    </div>

                    <div class="product__information">
                        <div class="product-item dscr--product__name">${namep}</div>
                        <p class="dscr--product__detail">${desc}.</p>
                        
                        <div class="wrap-price">
                            <div class="product-item product__price">$${gia}</div>
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
            

            <div class="product-item product__name">${namep}</div>
            <div class="product-item product__rating">
                <i class="fa-solid fa-star star-icon--rate star-icon"></i>
                <i class="fa-solid fa-star star-icon--rate star-icon"></i>
                <i class="fa-solid fa-star star-icon--rate star-icon"></i>
                <i class="fa-solid fa-star star-icon--rate star-icon"></i>
                <i class="fa-solid fa-star star-icon"></i>
            </div>
            <div class="product-item product__price">$${gia}</div>
        </div>
      </div>
       `;
    }
   }













