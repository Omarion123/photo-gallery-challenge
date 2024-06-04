const gallery = document.querySelector(".gallery");
const boxOne = document.querySelector(".box-one");
const boxTwo = document.querySelector(".box-two");
const boxThree = document.querySelector(".box-three");
const boxFour = document.querySelector(".box-four");
// const knowMore = document.querySelector(".know-more");

const boxes = [boxOne, boxTwo, boxThree, boxFour];

boxes.forEach((box) => {
  box.addEventListener("mouseover", function () {
    box.classList.add("hovered");
    const image = box.querySelector(".images");
    const knowMore = box.querySelector(".know-more");
    if (image && knowMore) {
      image.classList.add("hovered-image");
      knowMore.classList.add("know-more-hovered");
    }
  });

  box.addEventListener("mouseout", function () {
    box.classList.remove("hovered");
    const image = box.querySelector(".images");
    const knowMore = box.querySelector(".know-more");
    if (image && knowMore) {
      image.classList.remove("hovered-image");
      knowMore.classList.remove("know-more-hovered");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const svgTemplate = document.getElementById("svg-template").content;
  const svgContainers = document.querySelectorAll(".svg-container");

  svgContainers.forEach(container => {
    const svgClone = document.importNode(svgTemplate, true);
    container.appendChild(svgClone);
  });
});

