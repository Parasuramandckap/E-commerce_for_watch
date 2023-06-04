let wishListDiv = document.querySelector(".wishlist");
let heartBtn = document.querySelector(".heartBtn");
heartBtn.addEventListener("click",()=>{
    wishListDiv.classList.toggle("activeDiv")
})

fetch(`http://localhost:3000/wishlist?_expand=product`)
.then(res => res.json())
.then(data =>{

    let htmlElements = data.map(element => {

        return `
        <div class="productDiv">
            <div class= "removeBtn" id=${element.id}>
                <i class="fa-solid fa-xmark"  id=${element.id}></i>
            </div>
            <div class="productImg">
                <img class="productImg" src="${element.product.images}"/>
            </div>  
            <div class="productLine"></div>
            <div class="productDetails">
                <p class="productName">${element.product.name}</p>
                <p class="productDetailShort">${element.product.name.slice(0,5)}</p>
                <p class="productPrice">${element.product.price}</p>
            </div>
        </div>
        `
    }).join("")
    wishListDiv.innerHTML = htmlElements
    let removeBtn = document.querySelectorAll(".removeBtn")
    removeBtn.forEach(getRemoveBtn => {
        getRemoveBtn.addEventListener("click",(e)=>{
          let targetId = e.target.id
          fetch(`http://localhost:3000/wishlist/${targetId}`,{
            method:'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
          })
          console.log("jeeva")
        })
    });
})



