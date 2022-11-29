let form= document.querySelector('form');
form.addEventListener('submit',Myfunc )

let paidSignUpArr=[]
function Myfunc(event){
    event.preventDefault();
    let paidSignUpObj={
        email:document.getElementById('email').value,
        username:document.getElementById('username').value,
        plan:document.getElementById('plan').value,
        password:document.getElementById('password').value,
    }
    paidSignUpArr.push(paidSignUpObj);
    localStorage.setItem("UserSignUpData",JSON.stringify(paidSignUpArr));
    window.location.href="./Payments.html"
}