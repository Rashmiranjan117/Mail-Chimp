let form=document.querySelector("form");
form.addEventListener("submit", myfunc)

let signUpData=JSON.parse(localStorage.getItem("UserSignUpData"))||[];

function myfunc(){
    event.preventDefault();
    let signUpObj={
        email:document.getElementById("email").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
    }
    signUpData.push(signUpObj);
    localStorage.setItem("UserSignUpData",JSON.stringify(signUpData));
    alert("Account Created Successfully")
    window.location.href="./login.html"
}
