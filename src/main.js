import "./style.css";
const userEmail = document.querySelector("#en__field_supporter_emailAddress");
const lessEmailsParagraph = document.querySelector(".less-emails-paragraph");
const enableGraphicImages = document.querySelector(
  "#en__field_supporter_NOT_TAGGED_134"
);
const graphicSVG = document.querySelector(".graphic-slider");
const offText = graphicSVG.querySelector(".off-text");
const onText = graphicSVG.querySelector(".on-text");
const graphicSlider = graphicSVG.querySelector("circle");
const unsubscribeAllBtn = document.querySelector(".unsubscribe-all-button");
const submitBtn = document.querySelector(".en__submit button");

const lessEmailsBox = document.createElement("input");
lessEmailsBox.id = "en__field_supporter_questions_1855";
lessEmailsBox.type = "checkbox";
lessEmailsBox.classList.add("en__field__input", "en__field__input--checkbox");
lessEmailsBox.name = "supporter.questions.1855";
lessEmailsBox.style.visibility = "hidden";
document.querySelector(".less-emails-section").appendChild(lessEmailsBox);

const lessEmailsBtn = document.querySelector(".less-emails-button");
lessEmailsBtn.addEventListener("click", (e) => {
  lessEmailsBox.checked = "true";
  submitBtn.click();
});

if (screen.width >= 600) {
  lessEmailsParagraph.classList.remove("hide-less-emails-paragraph");
}

if (enableGraphicImages.checked) {
  offText.style.display = "none";
  onText.style.display = "inline";
  graphicSlider.classList.remove("disable-graphic-images");
  graphicSlider.classList.add("enable-graphic-images");
}

// Send Fewer Emails Button
document
  .querySelector(".less-emails-header svg")
  .addEventListener("click", (e) => {
    const target = document.querySelector(".less-emails-header svg");
    const paragraph = document.querySelector(".less-emails-paragraph");

    if (
      target.classList.contains("hide-paragraph-button") ||
      (target.classList.length == 1 &&
        target.classList.contains("less-emails-paragraph"))
    ) {
      target.classList.remove("hide-paragraph-button");
      target.classList.add("show-paragraph-button");
      paragraph.classList.remove("hide-paragraph-animation");
      paragraph.classList.add("reveal-paragraph");
    } else {
      target.classList.remove("show-paragraph-button");
      target.classList.add("hide-paragraph-button");
      paragraph.classList.remove("reveal-paragraph");
      paragraph.classList.add("hide-paragraph-animation");

      setTimeout(() => {
        paragraph.classList.add("hide-less-emails-paragraph");
      }, 550);
    }
  });

// Reduce Graphic Imagery Button
graphicSVG.addEventListener("click", (e) => {
  if (
    graphicSlider.classList.length == 0 ||
    graphicSlider.classList.contains("disable-graphic-images")
  ) {
    graphicSlider.classList.remove("disable-graphic-images");
    graphicSlider.classList.add("enable-graphic-images");
    enableGraphicImages.checked = true;
    enableGraphicImages.value = "Y";
    offText.style.display = "none";
    setTimeout(() => {
      onText.style.display = "inline";
    }, 500);
  } else {
    graphicSlider.classList.remove("enable-graphic-images");
    graphicSlider.classList.add("disable-graphic-images");
    enableGraphicImages.checked = false;
    enableGraphicImages.value = "N";
    onText.style.display = "none";

    setTimeout(() => {
      offText.style.display = "inline";
    }, 500);
  }
});

// Unsubscribe All Button
unsubscribeAllBtn.addEventListener("click", (e) => {
  const masterSuppressionBtn = document.querySelector(
    "#en__field_supporter_questions_178"
  );
  masterSuppressionBtn.checked = true;
  masterSuppressionBtn.value = "Y";

  document
    .querySelectorAll(".subscription_title input")
    .forEach((subscription) => {
      subscription.value = "N";
      subscription.checked = false;
    });

  submitBtn.click();
});

if (userEmail.value != "") {
  userEmail.setAttribute("disabled", "");
} else {
  document.querySelector(".incorrect-email-link").style.display = "none";
}
