function imgSlider(index) {
    document.querySelector('.starbucks').src = `assets/img/img${index}.png`;
}

const colorsArr = ['#017143', '#eb7495', '#d752b1'];

function changeCircleColor(color = 0) {
    const circle = document.querySelector('.circle');
    circle.style.backgroundColor = colorsArr[color];
}

const triggers = document.querySelectorAll('.trigger');

triggers.forEach((trigger, index) => {
    trigger.addEventListener('click', () => {
        imgSlider(index + 1);
        changeCircleColor(index);
    });
});



const menuToggle = document.querySelector('.toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
})