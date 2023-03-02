const btn_hamburger = document.querySelector("#icon-hamburger");
const btn_hamburger_close = document.querySelector("#icon-hamburger-close");

const menu_mobile = document.querySelector("#menu-mobile");

btn_hamburger.addEventListener("click", ()=>{
    btn_hamburger.style.display = "none";
    btn_hamburger_close.style.display = "block";

    menu_mobile.style.display = "block";
});

btn_hamburger_close.addEventListener("click", ()=>{
    btn_hamburger.style.display = "block";
    btn_hamburger_close.style.display = "none";

    menu_mobile.style.display = "none";
});