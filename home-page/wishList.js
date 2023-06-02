let wishListDiv = document.querySelector(".wishlist");

fetch(`http://localhost:3000/wishlist?_expand=product`)
.then(res => res.json())
.then(data =>{
    data.forEach(element => {
        console.log(element)
    });
    let htmlElements = data.map(element => {
        return `
        <div class="productDiv">
            <div class="productImg">
                <img class="productImg" src="${element.product.images}"/>
                <img src="./imges-homepage/removeWishList.svg" class="removeWishList" id="${element.product.id}">
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

    let removeBtn = document.querySelector(".removeWishList");

    removeBtn.addEventListener("click",(e)=>{
        let targetId = e.target.id;

        fetch(`http://localhost:3000/wishlist/1`,{
            method: "DELETE",
            headers:{'Content-type':'application/json'}
        })

    })
})


