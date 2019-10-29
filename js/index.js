1//
const mouseover = document.querySelectorAll(".mouseover");
mouseover.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = "scale(1.2)";
        item.style.transition = "transform 0.3s";
    });
});

2//
mouseover.forEach(item => {
    item.addEventListener('mouseleave', () => {
        item.style.transform = "scale(1)";
        item.style.transition = "transform 0.3s";
    });
});

3//
const funBus = document.querySelector(".funbus");
window.addEventListener('wheel', () => {
    TweenMax.to(funBus, 0.25, {
        rotation: 25,
        x: 200,
        y: 200
    });
});

4//
const logoHeading = document.querySelector(".logo-heading");
logoHeading.addEventListener('click', (event) => {
    logoHeading.style.color = "#17A2B8";
    event.stopPropagation();
    console.log("start");});
const nav = document.querySelector(".main-navigation");
nav.addEventListener('click', (event) => {
    nav.style.background = "#FFEBCD";
    event.stopPropagation();
    console.log("end");
});

5//
const text = document.querySelectorAll("p");
text.forEach(item => {
    window.addEventListener('keydown', () => {
        item.style.color = "white";
    });
});

6//
text.forEach(item => {
    window.addEventListener('keyup', () => {
        item.style.color = "#212529";
    });
});

7//
const body = document.querySelector("body");
window.addEventListener('resize', () => {
    body.style.background = "#17A2B8";
});

8//
const destination = document.querySelector(".destination");
destination.addEventListener('dblclick', () => {
        destination.style.transform = "scale(0.5)";
        destination.style.transition = "transform 0.3s";
});

9//
const links = document.querySelectorAll("a");
links.forEach(item => {
    window.addEventListener('mousemove', () => {
        item.style.color = "#C0C0C0";
    });
});

10//
const button = document.querySelectorAll(".btn");
button.forEach(item => {
    item.addEventListener('mouseenter', () => {
        TweenMax.to(item, 1, {
            rotation: 360
        });
    });
});

11//
const h2 = document.querySelectorAll("h2");
h2.forEach(item => {
    window.addEventListener('pointerout', () => {
        item.style.color = "#C0C0C0";
    });
});

12//
h2.forEach(item => {
    window.addEventListener('pointerover', () => {
        item.style.color = "#212529";
    });
});