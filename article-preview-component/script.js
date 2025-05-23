let prof = document.querySelector(".profile");
let btn1 = document.querySelector(".op img");
let btn2 = document.querySelector(".cl img");
let shar = document.querySelector(".share");


btn1.addEventListener("click", () => {
    shar.classList.add("show");
    shar.style.animation = "opac 2s 1";
});

btn2.addEventListener("click", () => {
    shar.classList.remove("show");
});
