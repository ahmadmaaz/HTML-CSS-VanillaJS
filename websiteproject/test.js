setInterval(time34,1)
function time34(){
date= new Date();
let am_pm='AM'
let hour= date.getHours();
let minute= date.getMinutes();
let second= date.getSeconds();

if (hour>12){
    hour-=12
    am_pm='PM'}
else if (hour<12){
    hour='0'+hour
}if (hour==0){
    hour=12}
if(minute<10){
    minute='0'+minute
}
if(second<10){
    second='0'+second
}
document.getElementById('clock').innerHTML= hour+' : '+minute+" : "+second+"        "+ am_pm

}
time34()
document.querySelector('.click').onclick = function myFunction() {
    document.getElementById("demo").style.background = "red";
}
document.querySelector('.click1').onclick = function myFunction1() {
    document.getElementById("demo").style.background = "yellow";
}
document.querySelector('.click2').onclick = function myFunction2() {
    document.getElementById("demo").style.background = "blue";
}
document.querySelector('.click3').onclick = function myFunction3() {
    document.getElementById("demo").style.background = "silver";
}
document.querySelector('.click4').onclick = function myFunction4() {
    document.getElementById("demo").style.background = "brown";
}
document.querySelector('.click5').onclick = function myFunction5() {
    document.getElementById("demo").style.background = "gold";
}
document.querySelector('.click6').onclick = function myFunction6() {
    document.getElementById("demo").style.background = "purple";
}
document.querySelector('.click7').onclick = function myFunction7() {
    document.getElementById("demo").style.background = "white";
}
function validate(){
    var username= document.querySelector('.input').value
    var password= document.querySelector('.input2').value
    if( password==='admin' && username ==='admin'){
        alert('Login Succesfully')
        
    } else if (password.length=== 0 || username.length===0){
        alert('Fill all the fields')
    }
    else{
        alert('Login Failed')
    }
}
const ahmad='ahmad';
const closedFace= document.querySelector('.closed')
const openFace= document.querySelector('.open')
closedFace.addEventListener('click',() =>{
    if (openFace.classList.contains('open')){
        openFace.classList.add('active');
        closedFace.classList.remove('active')
    }
})
openFace.addEventListener('click', ()=> {
    closedFace.classList.add('active')
    openFace.classList.remove('active')
})
document.getElementById('footer').onclick= function yoh(){
    alert('Dont Mess with me !')
} 