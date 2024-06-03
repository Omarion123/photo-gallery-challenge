const gallery = document.querySelector(".gallery");
const boxOne = document.querySelector(".box-one");
const boxTwo = document.querySelector(".box-two");
const boxThree = document.querySelector(".box-three");
const boxFour = document.querySelector(".box-four");

const boxes = [boxOne, boxTwo, boxThree, boxFour];

boxes.forEach((box) => {
  box.addEventListener("mouseover", function () {
    box.classList.add("hovered");
    const image = box.querySelector(".images");
    if (image) {
      image.classList.add("hovered-image");
    }
  });

  box.addEventListener("mouseout", function () {
    box.classList.remove("hovered");
    const image = box.querySelector(".images");
    if (image) {
      image.classList.remove("hovered-image");
    }
  });
});
