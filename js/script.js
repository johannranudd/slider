const slider = document.querySelectorAll(".slider");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const profile = document.querySelectorAll(".profile h3");

profile.forEach(item => {
    item.style.marginTop = '5rem';
})

let counter = 0;

// function slideFunction(item, index) {
//     item.forEach(slideItem => {
//         slideItem.style.transform = `translate(-${index * 100}%)`
//     })
// }

// nextBtn.addEventListener("click",() => {
//     counter++;
//     slideFunction(slider, counter);
// })
// prevBtn.addEventListener("click",() => {
//     counter--;
//     slideFunction(slider, counter);
// })

window.addEventListener("DOMContentLoaded", onLoadFn);

function onLoadFn() {
    let hundred = -100;
    for (let i = 0; i < slider.length; i++) {
        hundred += 100;
        slider[i].style.left = `${hundred}%`;
        

    }
    slider.style.left = `-100%`;
    // slider[0].style.left = `${hundred}%`;
}


function slideFunction(item, index) {
  item.forEach((slideItem) => {
    slideItem.style.transform = `translate(-${index * 100}%)`;
  });
}

nextBtn.addEventListener("click", () => {
  counter++;
  if (counter === slider.length) {
    counter = 0;
  }
  slideFunction(slider, counter);
});
prevBtn.addEventListener("click", () => {
  counter--;
  if (counter < 0) {
    counter = slider.length - 1;
  }
  slideFunction(slider, counter);
});

// if (counter >)
// console.log(slider.length);
