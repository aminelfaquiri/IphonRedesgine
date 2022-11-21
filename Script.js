let liBtn = document.querySelectorAll("ul li img");
let productImg = document.querySelector(".show-product .product-img img");


liBtn.forEach((e)=>{
    e.onclick = ()=>{
         productImg.src = e.src ;
         document.body.style.backgroundColor = e.dataset.color ;
        
        }
   
})