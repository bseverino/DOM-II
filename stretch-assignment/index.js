const rockets = document.querySelectorAll(".block");
const red = document.querySelector(".block--red");
const blue = document.querySelector(".block--blue");
const green = document.querySelector(".block--green");
const pink = document.querySelector(".block--pink");
const gray = document.querySelector(".block--gray");

rockets.forEach(item => {
    item.addEventListener('mousedown', () => {
        TweenMax.fromTo(item, 10, {x: 0}, {x: 800});      
    });
   item.addEventListener('mouseoff', () => {
        TweenMax.to(item, 0.25, {x: 0});
    });
    window.addEventListener('mouseup', () => {
        TweenMax.to(item, 0.25, {x: 0});
    });
});