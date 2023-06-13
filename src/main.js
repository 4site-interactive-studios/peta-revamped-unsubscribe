import "./style.scss";
import { setBodyAttributes } from "./set-body-data-attributes";
// import { convert1855CheckboxToRadioButtons } from "./checkbox-to-radio.js";
import { setUnsubscribeAllOnClick } from "./unsubscribe-all-link.js";
// import { toggleSubscriptionCheckboxOnClick } from "./make-opt-in-labels-clickable.js";
// import { toggleCheckboxOnClickOrTouch } from "./toggle-checkbox-when-container-is-clicked-or-touched.js";
import { toggleSectionParagraphVisibility } from "./toggle-section-paragraph-visibility.js";
import { addSVGAndH3ClickListeners } from "./svg-and-h3-click-listeners";
import { emailDisabler } from "./email-disabled";
import { updateLabelContents } from "./update-label-contents";

// Encapsulate your code into a function
const runScript = () => {
  setBodyAttributes();
  // convert1855CheckboxToRadioButtons();
  setUnsubscribeAllOnClick();
  // toggleSubscriptionCheckboxOnClick();
  // toggleCheckboxOnClickOrTouch();
  toggleSectionParagraphVisibility();
  addSVGAndH3ClickListeners();
  emailDisabler();
  updateLabelContents();

  const lessEmailsRadioSelect = document.querySelector(".less-emails-picker");
  const field1855Component = document.querySelector(
    ".en__component--formblock .en__field--1855"
  );

  // Check if both elements exist
  if (lessEmailsRadioSelect && field1855Component) {
    // Clear the contents of lessEmailsRadioSelect
    lessEmailsRadioSelect.innerHTML = "";
    // Move field1855Component into lessEmailsRadioSelect
    lessEmailsRadioSelect.appendChild(field1855Component);
  }

  /**
   * toggleSliderAndCheckbox - Toggles the 'slider-disabled' and 'slider-enabled' classes on the SVG element and
   * also toggles the checked state of the associated checkbox. On first run, it also hides the
   * checkbox field container. The initial state of the SVG slider reflects the initial state of the checkbox.
   * @param {string} svgSelector - The CSS selector for the SVG element.
   * @param {string} checkboxSelector - The CSS selector for the checkbox element.
   * @param {string} checkboxWrapperSelector - The CSS selector for the checkbox wrapper element.
   */
  function toggleSliderAndCheckbox(
    svgSelector,
    checkboxSelector,
    checkboxWrapperSelector
  ) {
    // Get the SVG element
    const svg = document.querySelector(svgSelector);

    // Get the checkbox element
    const checkbox = document.querySelector(checkboxSelector);

    // Get the checkbox wrapper element
    const checkboxWrapper = document.querySelector(checkboxWrapperSelector);

    // If the SVG and checkbox exist
    if (svg && checkbox) {
      // Hide the checkbox wrapper
      checkboxWrapper.style.display = "none";

      // Set the initial state of the SVG slider to reflect the checkbox state
      if (checkbox.checked) {
        svg.classList.remove("slider-disabled");
        svg.classList.add("slider-enabled");
      } else {
        svg.classList.remove("slider-enabled");
        svg.classList.add("slider-disabled");
      }

      // Function to toggle the slider and checkbox states
      const toggleStates = () => {
        // If the checkbox is checked
        if (checkbox.checked) {
          // Uncheck the checkbox
          checkbox.checked = false;

          // Remove 'slider-enabled' and add 'slider-disabled'
          svg.classList.remove("slider-enabled");
          svg.classList.add("slider-disabled");
        } else {
          // Check the checkbox
          checkbox.checked = true;

          // Remove 'slider-disabled' and add 'slider-enabled'
          svg.classList.remove("slider-disabled");
          svg.classList.add("slider-enabled");
        }
      };

      // Add click event listener
      svg.addEventListener("click", toggleStates);

      // Add touchend event listener for touch devices
      svg.addEventListener("touchend", toggleStates);
    }
  }

  // Call the function for each SVG/checkbox pair
  toggleSliderAndCheckbox(
    ".el-receive-fewer-emails-container .graphic-slider",
    'input[type="checkbox"]#en__field_supporter_questions_1855',
    ".en__field--question.en__field--1855"
  );
  toggleSliderAndCheckbox(
    ".el-reduce-graphic-imagery-container .graphic-slider",
    'input[type="checkbox"]#en__field_supporter_NOT_TAGGED_134',
    ".en__field--NOT_TAGGED_134"
  );

  /**
   * This function is used to move the '.required-action-team-fields' element to the
   * next sibling element of the parent of the '.en__field--peta-action-team-alerts' element.
   * If the parent or the next sibling of the parent do not exist,
   * the '.required-action-team-fields' element will not be moved.
   * Event listeners attached to '.required-action-team-fields' will not be affected by the move.
   */

  function moveActionTeamFields() {
    let actionTeamDesc = document.querySelector(
      ".en__field--peta-action-team-alerts"
    );
    actionTeamDesc =
      actionTeamDesc?.parentElement?.nextElementSibling || actionTeamDesc;

    const actionTeamFields = document.querySelector(
      ".required-action-team-fields"
    );

    if (actionTeamDesc && actionTeamFields) {
      actionTeamDesc.after(actionTeamFields);
    }
  }

  // Call the function
  moveActionTeamFields();

  /**
   * Function to move the '.en__field--NOT_TAGGED_134' field into the
   * '.reduce-graphic-imagery-picker' element, replacing any contents that might already be there.
   */
  function moveNotTagged134Field() {
    // Find the elements we need
    const reduceGraphicImageryRadioSelect = document.querySelector(
      ".reduce-graphic-imagery-picker"
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

  // Shouldn't be checked by default on DCF pageload
  const dcfReducedEmailCheckbox = document.querySelector(
    ".dcf-receive-fewer-emails-container #en__field_supporter_questions_1855"
  );

  // If the checkbox exists
  if (dcfReducedEmailCheckbox) {
    // Uncheck the checkbox
    dcfReducedEmailCheckbox.checked = false;
  }

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

  // const lessEmailsBtn = document.querySelector(".less-emails-button");
  // lessEmailsBtn.addEventListener("click", (e) => {
  //   lessEmailsBox.checked = "true";
  //   submitBtn.click();
  // });
};

if (document.readyState === "loading") {
  // If the content is still loading, add an event listener for DOMContentLoaded
  document.addEventListener("DOMContentLoaded", runScript);
} else {
  // If the content has already loaded, run the function immediately
  runScript();
}
