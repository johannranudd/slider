const slider = document.querySelectorAll('.slider');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

function slideFunction(item, index) {
    console.log(item);
    console.log(index);
}

slideFunction(slider, 5)
// slider.forEach(eachItem => {
//     // item.style.transform = "translateX(-0%)";
// })