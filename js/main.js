"use strict"


let openBtn = document.getElementById("offer");
let newsBtn = document.getElementById("news");
let contactBtn = document.getElementById("contact");
let offerBtn = document.getElementById("offer2");
let aboutBtn = document.getElementById("about");


//eventlyssnare
openBtn.addEventListener('click', btnClick);
newsBtn.addEventListener('click', newsClick);
contactBtn.addEventListener('click', contactClick);
offerBtn.addEventListener('click', offerClick);
aboutBtn.addEventListener('click', aboutClick);


function btnClick(){
    window.location="offer.html";
}

function newsClick(){
    window.location="news.html";
}
function contactClick(){
    window.location="contact.html";
}
function offerClick(){
    window.location="offer.html";
}
function aboutClick(){
    window.location="about.html";
}