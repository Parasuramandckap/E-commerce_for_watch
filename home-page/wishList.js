let wishListDiv = document.querySelector(".wishlist");

fetch(`http://localhost:3000/wishlist?_expand=product`)
.then(res => res.json())
.then(data =>{
    data.forEach(element => {
        console.log(element.product)
    });
    let htmlElements = data.map(element => {
        return `
        <div class="productDiv">
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
})
