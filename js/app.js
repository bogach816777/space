(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const menuBurger = document.querySelector(".page__title");
    const menuBurger2 = document.querySelector(".page__text");
    const menuBurger3 = document.querySelector(".circle");
    const menuBurger4 = document.querySelector(".btn_next1");
    const menuBurger5 = document.querySelector(".btn_prev1");
    const menuBurger7 = document.querySelector(".cont__title");
    const menuBurger8 = document.querySelector(".cont__text");
    const menuBurger6 = document.querySelector(".cont");
    const menuBurgercontainer = document.querySelector(".page__container");
    const menuBody2 = document.querySelector(".btn_prev1");
    const menuBody = document.querySelector(".button_next");
    const menuBody3 = document.querySelector(".btn_next1");
    if (menuBody) menuBody.addEventListener("click", (function(e) {
        menuBody.classList.toggle("_active");
        if (menuBurger) {
            menuBurger3.classList.remove("_active21");
            menuBurger.classList.remove("_active11");
            menuBurger2.classList.remove("_active11");
            menuBurger6.classList.remove("_contact1");
            menuBody.classList.remove("_active11");
            menuBurger5.classList.remove("_active41");
            menuBurger4.classList.remove("_active41");
            menuBurger7.classList.remove("_active41");
            menuBurger8.classList.remove("_active41");
            menuBurger.classList.toggle("_active");
            menuBurger2.classList.toggle("_active");
            menuBurger6.classList.toggle("_contact");
            menuBurger3.classList.toggle("_active2");
            menuBurger4.classList.toggle("_active4");
            menuBurger5.classList.toggle("_active4");
            menuBurger7.classList.toggle("_active5");
            menuBurger8.classList.toggle("_active5");
            menuBurgercontainer.classList.toggle("_not-flex");
        }
    }));
    if (menuBody2) menuBody2.addEventListener("click", (function(e) {
        if (menuBurger) {
            menuBurger3.classList.remove("_active2");
            menuBody.classList.remove("_active");
            menuBurger.classList.remove("_active");
            menuBurger2.classList.remove("_active");
            menuBurger5.classList.remove("_active4");
            menuBurger4.classList.remove("_active4");
            menuBurger7.classList.remove("_active5");
            menuBurger8.classList.remove("_active5");
            menuBurgercontainer.classList.remove("_not-flex");
            menuBurger6.classList.remove("_contact");
            menuBurger5.classList.toggle("_active41");
            menuBurger4.classList.toggle("_active41");
            menuBurger7.classList.toggle("_active41");
            menuBurger8.classList.toggle("_active41");
            menuBurger6.classList.toggle("_contact1");
            menuBurger3.classList.toggle("_active21");
            menuBurger.classList.toggle("_active11");
            menuBurger2.classList.toggle("_active11");
            menuBody.classList.toggle("_active11");
        }
    }));
    if (menuBody3) menuBody3.addEventListener("click", (function(e) {
        if (menuBurger) ;
    }));
    window["FLS"] = true;
    isWebp();
})();