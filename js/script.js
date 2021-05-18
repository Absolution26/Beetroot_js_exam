$(document).ready(function () {
    $(".slider").slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000
    })
});

$(document).ready(function () {
    $(".slider1").slick({
        dots: true,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false
    })
});
let btn = document.getElementsByClassName("button");
let hiddenText = document.getElementsByClassName("text__hidden");
let galleryHidden = document.querySelector(".gallery__hidden");

btn[0].addEventListener("click", function () {
    hiddenText[0].classList.toggle("text__hidden--visible");
    if (btn[0].innerHTML === "less details") {
        btn[0].innerHTML = "more details";
    } else if (btn[0].innerHTML === "more details") {
        btn[0].innerHTML = "less details";
    }
});

btn[1].addEventListener("click", function () {
    hiddenText[1].classList.toggle("text__hidden--visible");
    if (btn[1].innerHTML === "less details") {
        btn[1].innerHTML = "more details";
    } else if (btn[1].innerHTML === "more details") {
        btn[1].innerHTML = "less details";
    }
});

btn[2].addEventListener("click", function () {
    galleryHidden.classList.toggle("hidden");
    if (btn[2].innerHTML === "see more") {
        btn[2].innerHTML = "see less";
    } else if (btn[2].innerHTML === "see less") {
        btn[2].innerHTML = "see more";
    }
});
