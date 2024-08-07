import "./style.scss";
import { setBodyAttributes } from "./set-body-data-attributes";
// import { convert1855CheckboxToRadioButtons } from "./checkbox-to-radio.js";
import { setUnsubscribeAllOnClick } from "./unsubscribe-all-link.js";
import { toggleSubscriptionCheckboxOnClick } from "./make-opt-in-labels-clickable.js";
// import { toggleCheckboxOnClickOrTouch } from "./toggle-checkbox-when-container-is-clicked-or-touched.js";
// import { toggleSectionParagraphVisibility } from "./toggle-section-paragraph-visibility.js";
import { addSVGAndH3ClickListeners } from "./svg-and-h3-click-listeners";
import { emailDisabler } from "./email-disabled";
import { updateLabelContents } from "./update-label-contents";
import { resetCheckboxes } from "./reset-checkboxes.js";

// Encapsulate your code into a function
const runScript = () => {
  setBodyAttributes();
  resetCheckboxes();
  // convert1855CheckboxToRadioButtons();
  setUnsubscribeAllOnClick();
  toggleSubscriptionCheckboxOnClick();
  // toggleCheckboxOnClickOrTouch();
  // toggleSectionParagraphVisibility();
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
        console.log("checkbox", checkbox);
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
      // svg.addEventListener("touchend", toggleStates);
    }
  }

  // Call the function for each SVG/checkbox pair
  // toggleSliderAndCheckbox(
  //   ".el-receive-fewer-emails-container .graphic-slider",
  //   'input[type="checkbox"]#en__field_supporter_questions_1855',
  //   ".en__field--question.en__field--1855"
  // );
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
      let actionTeamFieldsFirstName = actionTeamFields.querySelector(
        '[for="en__field_supporter_firstName"]'
      );

      // Check if the URL contains 'petalatino.com'
      let url = window.location.href;
      let labelText = url.includes("petalatino.com")
        ? "Inscripción al equipo de acción:"
        : "Action Team Signup:";

      actionTeamFieldsFirstName.insertAdjacentHTML(
        "afterbegin",
        `<span class="en__field__label action-team-signup-field-label" style="">${labelText}</span>`
      );
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

  (function toggleCheckboxOnClick() {
    let label = document.querySelector(
      "div:not(.less-emails-picker) > .en__field--1855 > label"
    );
    let checkbox = document.querySelector(
      'input[name="supporter.questions.1855"]'
    );

    if (label && checkbox) {
      label.addEventListener("click", () => {
        checkbox.checked = !!!checkbox.checked;
      });
    }
  })();

  (function setStatusAttributeFromURL() {
    // Create a URLSearchParams object
    let params = new URLSearchParams(window.location.search);

    // Check if the 'status' parameter is in the URL
    if (params.has("status")) {
      // If 'status' is found, get its value and set it as an attribute on the body
      let statusValue = params.get("status");
      document.body.setAttribute("data-status", statusValue);
    }
  })();

  // const lessEmailsBox = document.createElement("input");
  // lessEmailsBox.id = "en__field_supporter_questions_1855";
  // lessEmailsBox.type = "checkbox";
  // lessEmailsBox.classList.add("en__field__input", "en__field__input--checkbox");
  // lessEmailsBox.name = "supporter.questions.1855";
  // lessEmailsBox.value = "Y";
  // lessEmailsBox.style.visibility = "hidden";
  // document.querySelector(".less-emails-section").appendChild(lessEmailsBox);
  const lessEmailsBox = document.querySelector(
    "#en__field_supporter_questions_1855"
  );

  const lessEmailsBtn = document.querySelector(".less-emails-button");
  if (lessEmailsBtn && lessEmailsBox) {
    lessEmailsBtn.addEventListener("click", (e) => {
      lessEmailsBox.checked = true;
      const submitBtn = document.querySelector(".en__submit button");
      if (submitBtn) {
        submitBtn.click();
      }
    });
  }

  // If the URL is 53017 or 55607, wich is for cold visitors, we should unchecked the Master Supression list checkbox on page load
  /**
   * This function unchecks the "supporter.questions.178" checkbox if it exists.
   * It runs only when "53017" is present anywhere in the URL.
   */
  function uncheckQuestions178Checkbox() {
    const url = window.location.href;
    if (url.includes("53017") || url.includes("55607")) {
      const questions178Checkbox = document.querySelector(
        "input[name='supporter.questions.178']"
      );
      if (questions178Checkbox) {
        questions178Checkbox.checked = false;
      }
    }
  }

  // Call the function to uncheck the checkbox if the condition is met
  uncheckQuestions178Checkbox();

  console.log("PETA Custom JS loaded");
  document.body.setAttribute("data-custom-js", "loaded");
};

// While the window.PETA_URL object is not available, keep checking every 100ms
let interval = setInterval(() => {
  if (window.PETA_URL) {
    clearInterval(interval);
    setTimeout(() => {
      runScript();
    }, 200);
  } else {
    console.log("PETA_URL is not available");
  }
}, 100);
