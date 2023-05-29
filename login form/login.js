const form = document.querySelector("#formbtn")

let email = document.querySelector("#email")

let password = document.querySelector("#password")

let Alertmessage = document.querySelector("#alert-message")

let showicon =  document.querySelector("#showicon")

form.addEventListener("click", (e) => {
    e.preventDefault();
    let emailVal = email.value.trim()
    let passwordVal = password.value.trim()
    let userDetails = [];
    
    if (emailVal === "") {
        seterror(email, "field is required")
    } else {
        setSuccess(email, "succes")
        userDetails.push(emailVal)
    }
    if (passwordVal === "") {
        seterror(password, "field is required")
    } else {
        setSuccess(password, "succes")
        userDetails.push(passwordVal)
    }

    fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            if(element.email === userDetails[0] && element.password === userDetails[1]){
                let localStroge = window.localStorage
                localStroge.setItem("email",userDetails[0])
                localStroge.setItem("password",userDetails[1])
                window.location = window.location.origin+"/home-page/landing-page.html"  
            }
            else{
                alertMessage("uset not exits")
            }
        });
    })
})
// function verifyUser(userDetails) {

// }


function seterror(element, message) {
    let tagerElementsibling = element.nextElementSibling
    tagerElementsibling.innerText = message
    tagerElementsibling.style.visibility = "visible"
    tagerElementsibling.style.color = "red"
    element.style.border = "1px solid red"
}
function setSuccess(element, message) {
    let tagerElementsibling = element.nextElementSibling
    tagerElementsibling.innerText = message
    tagerElementsibling.style.visibility = "hidden"
    element.style.border = "1px solid #10CED8"
    element.style.borderR0adius = "5px";
}



function alertMessage(message){
    Alertmessage.innerText = message
    Alertmessage.style.visibility = "visible"
    window.setTimeout(() => {
        Alertmessage.style.visibility = "hidden"
    }, 1000);
}

showicon.addEventListener("click",()=>{
    if(showicon.className == "fa-solid fa-eye-slash"){
        showicon.className = "fa-solid fa-eye"
        password.type = "text"
    }
    else{
        showicon.className = "fa-solid fa-eye-slash"
        password.type = "password"
    }
})