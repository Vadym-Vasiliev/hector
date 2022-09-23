const radioBtns = document.querySelectorAll('[name="radio-btn"]');
const radioContents = document.querySelectorAll(".main-card-list");

function contentShow(btnIndex) {
  radioContents.forEach((radioContent, indexContent) => {
    if (indexContent === btnIndex) {
      radioContent.classList.add("visible");
    } else {
      radioContent.classList.remove("visible");
    }
  });
}

radioBtns.forEach((radioBtn, btnIndex) => {
  radioBtn.addEventListener("change", () => {
    contentShow(btnIndex);
  });
});
