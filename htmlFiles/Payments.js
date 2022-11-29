let form=document.querySelector("form");
form.addEventListener("submit", myfunc);

let cardNo=1234;
let cv=123;

window.addEventListener("load",function(){
let  amount=data.forEach(function(el){
    document.getElementById("display").innerText=el.plan;
    });
   
})

let data = JSON.parse(localStorage.getItem("UserSignUpData"));
function myfunc(){
    event.preventDefault();
 let inputCardNo=document.getElementById("cardNo").value;
 let userCvv=document.getElementById("cvv").value;
 console.log(inputCardNo,userCvv);
 if(Number(inputCardNo)==cardNo && Number(userCvv) ==cv){
    alert("Payment Succesfull.")
    window.location.href="./login.html";
    return;
 }
 else{
   return alert("Incorrect data provided")
 }
}