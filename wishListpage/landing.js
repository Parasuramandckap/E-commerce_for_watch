let Allproducts = document.querySelectorAll(".product-detatils")
let products = document.querySelector(".products")
let highlight = document.querySelector(".highlight")
let mostLovedproduct = document.querySelectorAll(".product-list")
window.addEventListener("DOMContentLoaded",()=>{
    fetch("http://localhost:3000/products/")
    .then(res=>res.json())
    .then(productsCreate=>{
        // console.log(data)
        //function call product genarate
            productGenarate(productsCreate)
        for(let i=0;i<4;i++){
            // console.log(productsCreate[i])
            let mostDiv = document.createElement("div")
            mostDiv.setAttribute("class","loved-list")
            
            let heartDiv = document.createElement("div")
            heartDiv.setAttribute("class","heart")
            heartDiv.innerHTML = `<i class="fa-regular fa-heart"></i>`
            
            mostDiv.appendChild(heartDiv)
            
            let product_list = document.createElement("div")
            product_list.setAttribute("class","product-list")
            mostDiv.appendChild(product_list)
            
            
            let most_love_img = document.createElement("img")
            most_love_img.setAttribute("src",productsCreate[i].images)
            product_list.appendChild(most_love_img)
            
            let brand =  document.createElement("p")
            brand.setAttribute("class","brand")
            brand.innerHTML = `<a>${productsCreate[i].brand}</a>`
            product_list.appendChild(brand)
 
            let price = document.createElement("p")
            price.setAttribute("class","price-rate")
            price.innerHTML = `${productsCreate[i].price}<span class="discount">${productsCreate[i].discount}</span><span class="offer">${productsCreate[i].offer}</span>`
            product_list.appendChild(price)
            
            highlight.appendChild(mostDiv)
        }
    }).catch((error)=>console.log(error))
})

function productGenarate(productsCreate){
    productsCreate.forEach((productsCreate)=>{
    //create div for product details
    let  product_details = document.createElement("div")
    product_details.setAttribute("class",`product-detatils ${productsCreate.gender}`)
    
    //create div for heartdiv icon
    let heartDiv =  document.createElement("div")
    heartDiv.setAttribute("class","heart")
    heartDiv.innerHTML = `<i class="fa-regular fa-heart"></i>`
    product_details.appendChild(heartDiv)
    
    //product imges
    let product_img = document.createElement("img")
    product_img.setAttribute("class","product-img")
    product_img.setAttribute("src",productsCreate.images)
    product_details.appendChild(product_img)
    
    // element for brand 
    let brand = document.createElement("p")
    brand.innerHTML = `<a>${productsCreate.brand}</a>`
    brand.setAttribute("class","brand")
    product_details.appendChild(brand)
    //call the brand to filter products function for filter
    filler_products(brand)
    // element for model_name 
    let model_name = document.createElement("p")
    model_name.innerText = `${productsCreate.series}`
    model_name.setAttribute("class","model-name")
    product_details.appendChild(model_name)
    
    // element for price
    let price_rate = document.createElement("h6")
    price_rate.innerHTML = `${productsCreate.price}<span class="discount">${productsCreate.discount}</span><span class="offer">${productsCreate.offer}</span>`
    price_rate.setAttribute("class","price-rate")
    product_details.appendChild(price_rate)
    
    // element for trend
    let trend = document.createElement("p")
    trend.setAttribute("class","trend")
    trend.innerHTML = `<a class="trending">Treanding</a>`
    product_details.appendChild(trend)
    
    //append product div to products
    products.appendChild(product_details)
    })

}

//addEventlisterner for filter
let filterIcon = document.querySelector(".filler-icon")
let filterDiv = document.querySelector(".filter")

filterIcon.addEventListener("click",()=>{
    filterDiv.classList.toggle("show")
    // hide(document.querySelector(".user"))
    // hide(document.querySelector(".wishlist"))
    // hide(document.querySelector(".cart"))
})



let search = document.querySelector(".search")

function filler_products(brandName){
    // console.log(name)
    search.addEventListener("keyup",(e)=>{
        let searchWord = e.target.value.toLowerCase()
        if(brandName.innerText.toLowerCase().indexOf(searchWord) !== -1){
            brandName.parentElement.style.display = "block"
        }else{
            brandName.parentElement.style.display = "none"
        }
    })

}
//this function for angerTag click add color
let angerTag = document.querySelectorAll(".category a")
angerTag.forEach(element => {
    element.addEventListener("click",(e)=>{
        angerTag.forEach((aTag)=>{
            if(e.target.innerText.toLowerCase()== aTag.innerText.toLowerCase()){
                aTag.style.color = "#10CED8"
            }
            else{
                aTag.style.color = "#182C3E"
            }
        })
    })
});


//filter
let gender = document.querySelectorAll("#gender")






