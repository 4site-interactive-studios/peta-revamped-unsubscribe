import "./style.scss";
import { setBodyAttributes } from "./set-body-data-attributes";
import { convert1855CheckboxToRadioButtons } from "./checkbox-to-radio.js";
import { setUnsubscribeAllOnClick } from "./unsubscribe-all-link.js";
import { toggleSubscriptionCheckboxOnClick } from "./make-opt-in-labels-clickable.js";
import { toggleCheckboxOnClickOrTouch } from "./toggle-checkbox-when-container-is-clicked-or-touched.js";
import { toggleSectionParagraphVisibility } from "./toggle-section-paragraph-visibility.js";
import { addSVGAndH3ClickListeners } from "./svg-and-h3-click-listeners";
import { emailDisabler } from "./email-disabled";
import { updateLabelContents } from "./update-label-contents";

// Encapsulate your code into a function
const runScript = () => {
  // Check if "data-new-unsubscribe" is a data attribute on the body
  // if (document.body.getAttribute("data-new-unsubscribe")) {
  //   // Check if the document's content has already loaded
  // }
  setBodyAttributes();
  convert1855CheckboxToRadioButtons();
  setUnsubscribeAllOnClick();
  toggleSubscriptionCheckboxOnClick();
  toggleCheckboxOnClickOrTouch();
  toggleSectionParagraphVisibility();
  addSVGAndH3ClickListeners();
  emailDisabler();
  updateLabelContents();

  // const enableGraphicImages = document.querySelector(
  //   "#en__field_supporter_NOT_TAGGED_134"
  // );
  // const graphicSVG = document.querySelector(".graphic-slider");
  // const offText = graphicSVG.querySelector(".off-text");
  // const onText = graphicSVG.querySelector(".on-text");
  // const graphicSlider = graphicSVG.querySelector("circle");

  const submitBtn = document.querySelector(".en__submit button");
  let actionTeamDesc = document.querySelector(
    ".en__field--peta-action-team-alerts"
  );
  if (actionTeamDesc) {
    let actionTeamDescParent = actionTeamDesc.parentElement;
    if (actionTeamDescParent) {
      let actionTeamDescParentNextSibling =
        actionTeamDescParent.nextElementSibling;
      if (actionTeamDescParentNextSibling) {
        actionTeamDesc = actionTeamDescParentNextSibling;
      }
    }
  }
  const actionTeamFields = document.querySelector(
    ".required-action-team-fields"
  );

  // const lessEmailsBox = document.createElement("input");
  // lessEmailsBox.id = "en__field_supporter_questions_1855";
  // lessEmailsBox.type = "checkbox";
  // lessEmailsBox.classList.add("en__field__input", "en__field__input--checkbox");
  // lessEmailsBox.name = "supporter.questions.1855";
  // lessEmailsBox.value = "Y";
  // lessEmailsBox.style.visibility = "hidden";
  // document.querySelector(".less-emails-section").appendChild(lessEmailsBox);
  // const lessEmailsBox = document.querySelector(
  //   "#en__field_supporter_questions_1855"
  // );

  // if (lessEmailsBox) {
  //   lessEmailsBox.removeAttribute("disabled");
  // }

  /**
   * Function to move the '.en__field--NOT_TAGGED_134' field into the
   * '.reduce-graphic-imagery-radio-select' element, replacing any contents that might already be there.
   */
  function moveNotTagged134Field() {
    // Find the elements we need
    const reduceGraphicImageryRadioSelect = document.querySelector(
      ".reduce-graphic-imagery-radio-select"
    );
    const fieldNOT_TAGGED_134Component = document.querySelector(
      ".en__component--formblock .en__field--NOT_TAGGED_134"
    );

    // Check if both elements exist
    if (reduceGraphicImageryRadioSelect && fieldNOT_TAGGED_134Component) {
      // Clear the contents of reduceGraphicImageryRadioSelect
      reduceGraphicImageryRadioSelect.innerHTML = "";

      // Move fieldNOT_TAGGED_134Component into reduceGraphicImageryRadioSelect
      reduceGraphicImageryRadioSelect.appendChild(fieldNOT_TAGGED_134Component);
    }
  }

  // Call the function to start the movement
  moveNotTagged134Field();

  if (actionTeamDesc && actionTeamFields) {
    actionTeamDesc.after(actionTeamFields);
  }

  // Shouldn't be checked by default on DCF pageload
  const dcfReducedEmailCheckbox = document.querySelector(
    ".dcf-receive-fewer-emails-container #en__field_supporter_questions_1855"
  );

  // If the checkbox exists
  if (dcfReducedEmailCheckbox) {
    // Uncheck the checkbox
    dcfReducedEmailCheckbox.checked = false;
  }

  // const lessEmailsBtn = document.querySelector(".less-emails-button");
  // lessEmailsBtn.addEventListener("click", (e) => {
  //   lessEmailsBox.checked = "true";
  //   submitBtn.click();
  // });

  // if (enableGraphicImages.checked) {
  //   offText.style.display = "none";
  //   onText.style.display = "inline";
  //   graphicSVG.classList.add("slider-enabled");
  //   graphicSVG.classList.remove("slider-disabled");
  //   graphicSlider.classList.remove("disable-graphic-images");
  //   graphicSlider.classList.add("enable-graphic-images");
  // }

  // Reduce Graphic Imagery Button
  // graphicSVG.addEventListener("click", (e) => {
  //   if (
  //     graphicSlider.classList.length == 0 ||
  //     graphicSlider.classList.contains("disable-graphic-images")
  //   ) {
  //     graphicSlider.classList.remove("disable-graphic-images");
  //     graphicSlider.classList.add("enable-graphic-images");
  //     graphicSVG.classList.add("slider-enabled");
  //     graphicSVG.classList.remove("slider-disabled");
  //     enableGraphicImages.checked = true;
  //     enableGraphicImages.value = "Y";
  //     // offText.style.display = "none";
  //     // setTimeout(() => {
  //     //   onText.style.display = "inline";
  //     // }, 500);
  //   } else {
  //     graphicSlider.classList.remove("enable-graphic-images");
  //     graphicSlider.classList.add("disable-graphic-images");
  //     graphicSVG.classList.add("slider-disabled");
  //     graphicSVG.classList.remove("slider-enabled");
  //     enableGraphicImages.checked = false;
  //     enableGraphicImages.value = "N";
  //     // onText.style.display = "none";
  //     // setTimeout(() => {
  //     //   offText.style.display = "inline";
  //     // }, 500);
  //   }
  // });
};

if (document.readyState === "loading") {
  // If the content is still loading, add an event listener for DOMContentLoaded
  document.addEventListener("DOMContentLoaded", runScript);
} else {
  // If the content has already loaded, run the function immediately
  runScript();
}
