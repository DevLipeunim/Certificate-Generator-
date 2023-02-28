// ===== The Date and Time that is placed on the certificate =====
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
document.querySelector('.date').innerHTML = date
document.querySelector('.time').innerHTML = time

let popUp = document.getElementById("popUp");
let btn = document.getElementById("btn");

function openpopUp(){
    popUp.classList.add("open-popup");
    btn.classList.add("close-btn");

    var person = document.getElementById("person").value;
    var skill = document.getElementById("skill").value;
    if (person == ""){
        alert("Please Enter your Full Name");
        document.location.reload()
        popUp.classList.remove("open-popup");
    } else if (skill == "") {
        alert("Please Enter Skill/Package");
        document.location.reload()
        popUp.classList.remove("open-popup");
    }else{
        document.querySelector('.perSon').innerHTML = person
        document.querySelector('.skiLL').innerHTML = skill
    }
}
function closepopUp(){
    popUp.classList.remove("open-popup");
    btn.classList.remove("close-btn");
    document.location.reload()
}