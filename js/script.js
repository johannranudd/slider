const slider = document.querySelectorAll(".slider");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

let counter = 0;

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
  console.log(counter);
});
prevBtn.addEventListener("click", () => {
  counter--;
  if (counter < 0) {
    counter = slider.length - 1;
  }
  slideFunction(slider, counter);
});
