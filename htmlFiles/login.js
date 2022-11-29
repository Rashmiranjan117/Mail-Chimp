document.querySelector("form").addEventListener("submit", idCheck)

let loginArr=[]
function idCheck(){
    event.preventDefault();
    // console.log("hh")
    let loginObj={
        username:document.getElementById("username").value,
        password:document.getElementById("password").value,
    }
    loginArr.push(loginObj)
    localStorage.setItem("UserLoginData", JSON.stringify(loginArr));
    loginArr.forEach(function(el){
        myFunc(el)
    })
}

function myFunc(el){

let data= JSON.parse(localStorage.getItem("UserSignUpData"));
console.log(data.username)
data.forEach(function(elem){
    if(el.username==elem.username && el.password==elem.password){
        alert("Login Successfull")
        window.location.href="./index.html";
    }else{
        alert("Login Failure")
    }
})

}