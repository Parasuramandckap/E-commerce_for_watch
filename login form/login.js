// const form = document.querySelector("#formbtn")
const form =  document.querySelector("#form")

let email = document.querySelector("#email")


let password = document.querySelector("#password")

let Alertmessage = document.querySelector("#alert-message")

let showicon =  document.querySelector("#showicon")



form.addEventListener("click", (e) => {
    e.preventDefault();

    let emailVal = email.value.trim()
    let passwordVal = password.value.trim()
    
    
    if (emailVal === "") {
        seterror(email, "field is required")
    } else {
        setSuccess(email, "succes")
    }
    if (passwordVal === "") {
        seterror(password, "field is required")
    } else {
        setSuccess(password, "succes")
    }
    
    
    Verifiy(emailVal,passwordVal)
})

function Verifiy(emailVal,passwordVal){
    if(emailVal != "" && passwordVal != ""){
        fetch("http://localhost:3000/users")
        .then(res=>res.json())
        .then(data => {
            data.forEach(userDetails => {
                if(userDetails.email == emailVal && userDetails.password == passwordVal){
                    let localStroge = window.localStorage
                    localStroge.setItem("email",emailVal)
                    localStroge.setItem("password",passwordVal)
                    window.location = window.location.origin+"/home-page/landing-page.html"
                }
                else{
                    alertMessage("credential not found") 
                }
            });
        })
    }
}

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

email.addEventListener("keyup",(e)=>change(e))
password.addEventListener("keyup",(e)=>change(e))
function change(e){
    e.target.nextElementSibling.style.visibility = "hidden"
}