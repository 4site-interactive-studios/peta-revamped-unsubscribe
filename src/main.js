import "./style.css";

// Encapsulate your code into a function
const runScript = () => {
  const userEmail = document.querySelector("#en__field_supporter_emailAddress");
  // const enableGraphicImages = document.querySelector(
  //   "#en__field_supporter_NOT_TAGGED_134"
  // );
  // const graphicSVG = document.querySelector(".graphic-slider");
  // const offText = graphicSVG.querySelector(".off-text");
  // const onText = graphicSVG.querySelector(".on-text");
  // const graphicSlider = graphicSVG.querySelector("circle");
  const unsubscribeAllBtn = document.querySelector(".unsubscribe-all-button");
  const submitBtn = document.querySelector(".en__submit button");
  const actionTeamDesc = document.querySelector(
    ".en__field--peta-action-team-alerts"
  ).parentElement.nextElementSibling;
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
   * Function to convert a checkbox into two radio buttons.
   * The radio buttons will be labeled "Yes" and "No".
   * The "Yes" radio button will be selected if the checkbox was checked.
   */
  function convert1855CheckboxToRadioButtons() {
    // Find the elements we need
    const lessEmailsRadioSelect = document.querySelector(
      ".less-emails-radio-select"
    );
    const field1855Component = document.querySelector(
      ".en__component--formblock .en__field--1855"
    );

    // Check if both elements exist
    if (lessEmailsRadioSelect && field1855Component) {
      // Clear the contents of lessEmailsRadioSelect
      lessEmailsRadioSelect.innerHTML = "";

      // Replace checkbox class with radio class in field1855Component
      field1855Component.classList.remove("en__field--checkbox");
      field1855Component.classList.add("en__field--radio");

      // Move field1855Component into lessEmailsRadioSelect
      lessEmailsRadioSelect.appendChild(field1855Component);

      // Get the checkbox input and its label
      const checkboxInput = field1855Component.querySelector(
        'input[type="checkbox"]'
      );
      const checkboxLabel =
        field1855Component.querySelector(".en__field__label");

      // Check if both checkbox input and label exist
      if (checkboxInput && checkboxLabel) {
        // Place the field label above the radio select fields
        checkboxLabel.classList.add("en__field__label--positionabove");

        // Store the checkbox value and label
        const isChecked = checkboxInput.checked;
        const labelText = checkboxLabel.textContent;

        // Create new radio inputs and their labels
        const radioInputYes = document.createElement("input");
        radioInputYes.type = "radio";
        radioInputYes.name = checkboxInput.name;
        radioInputYes.value = "Y";
        radioInputYes.checked = isChecked;
        radioInputYes.id = "en__field_supporter_questions_18550";
        radioInputYes.className = "en__field__input en__field__input--radio";

        const radioLabelYes = document.createElement("label");
        radioLabelYes.htmlFor = radioInputYes.id;
        radioLabelYes.textContent = "Yes, lorem ipsum dolor sit amet";
        radioLabelYes.className = "en__field__label en__field__label--item";

        const radioInputNo = document.createElement("input");
        radioInputNo.type = "radio";
        radioInputNo.name = checkboxInput.name;
        radioInputNo.value = "N";
        radioInputNo.checked = !isChecked;
        radioInputNo.id = "en__field_supporter_questions_18551";
        radioInputNo.className = "en__field__input en__field__input--radio";

        const radioLabelNo = document.createElement("label");
        radioLabelNo.htmlFor = radioInputNo.id;
        radioLabelNo.textContent = "No, lorem ipsum dolor sit amet";
        radioLabelNo.className = "en__field__label en__field__label--item";

        // Replace the checkbox input with the radio inputs
        const fieldElement = field1855Component.querySelector(
          ".en__field__element"
        );
        // Replace checkbox class with radio class in fieldElement
        fieldElement.classList.remove("en__field__element--checkbox");
        fieldElement.classList.add("en__field__element--radio");

        fieldElement.innerHTML = "";

        const radioFieldItemYes = document.createElement("div");
        radioFieldItemYes.className = "en__field__item";
        radioFieldItemYes.appendChild(radioInputYes);
        radioFieldItemYes.appendChild(radioLabelYes);

        const radioFieldItemNo = document.createElement("div");
        radioFieldItemNo.className = "en__field__item";
        radioFieldItemNo.appendChild(radioInputNo);
        radioFieldItemNo.appendChild(radioLabelNo);

        fieldElement.appendChild(radioFieldItemYes);
        fieldElement.appendChild(radioFieldItemNo);

        // Update the main label
        checkboxLabel.htmlFor = "";
        checkboxLabel.textContent = labelText;
      }
    }
  }

  // Call the function to start the conversion
  convert1855CheckboxToRadioButtons();

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

  if (userEmail.value != "") {
    userEmail.setAttribute("disabled", "");
    document.querySelector(".incorrect-email-link").style.display = "block";
  }

  // const lessEmailsBtn = document.querySelector(".less-emails-button");
  // lessEmailsBtn.addEventListener("click", (e) => {
  //   lessEmailsBox.checked = "true";
  //   submitBtn.click();
  // });

  /**
   * Function to remove the 'hide-section-paragraph' class from
   * all '.section-paragraph' elements when the screen width is >= 600.
   */
  function removeHideClassOnWideScreens() {
    // Select all '.section-paragraph' elements
    const sectionParagraphs = document.querySelectorAll(".section-paragraph");

    // If the screen width is >= 600
    if (screen.width >= 600) {
      // For each '.section-paragraph' element
      sectionParagraphs.forEach((sectionParagraph) => {
        // Remove the 'hide-section-paragraph' class
        sectionParagraph.classList.remove("hide-section-paragraph");
      });
    }
  }

  // Call the function
  removeHideClassOnWideScreens();

  // if (enableGraphicImages.checked) {
  //   offText.style.display = "none";
  //   onText.style.display = "inline";
  //   graphicSVG.classList.add("slider-enabled");
  //   graphicSVG.classList.remove("slider-disabled");
  //   graphicSlider.classList.remove("disable-graphic-images");
  //   graphicSlider.classList.add("enable-graphic-images");
  // }

  // Make opt-in labels clickable
  document.querySelectorAll(".subscription_title").forEach((subscription) => {
    const subscription_label = subscription.querySelector("label");
    const subscription_box = subscription.querySelector("input");

    subscription_label.setAttribute("for", subscription_box.id);
  });

  /**
   * Function to add event listeners to SVG elements within section headers.
   * Clicking the SVG will toggle the visibility of the corresponding section paragraph.
   */
  function addSVGClickListeners() {
    // Select all SVG elements within section headers
    const svgElements = [
      ...document.querySelectorAll(".less-emails-header svg"),
      ...document.querySelectorAll(".reduce-graphic-imagery-header svg"),
    ];

    svgElements.forEach((svgElement) => {
      // Add a click event listener to each SVG element
      svgElement.addEventListener("click", (e) => {
        // The clicked SVG element
        const target = e.target;
        // The container that contains the clicked SVG
        const container = target.closest(".en__component");
        // The paragraph within the same container as the clicked SVG
        const paragraph = container.querySelector(".section-paragraph");

        // If the SVG has the class "hide-paragraph-button" or if it only has the class "section-paragraph"
        if (
          target.classList.contains("hide-paragraph-button") ||
          (target.classList.length == 1 &&
            target.classList.contains("section-paragraph"))
        ) {
          // Remove the "hide" class and add the "show" class to the SVG
          target.classList.remove("hide-paragraph-button");
          target.classList.add("show-paragraph-button");
          // Remove the "hide" animation class and add the "reveal" class to the paragraph
          paragraph.classList.remove("hide-section-paragraph");
          paragraph.classList.add("reveal-paragraph");
        } else {
          // If the SVG does not have the "hide" class or only has the "section-paragraph" class
          // Remove the "show" class and add the "hide" class to the SVG
          target.classList.remove("show-paragraph-button");
          target.classList.add("hide-paragraph-button");
          // Remove the "reveal" class and add the "hide" animation class to the paragraph
          paragraph.classList.remove("reveal-paragraph");
          paragraph.classList.add("hide-paragraph-animation");

          // After a delay, add the class to completely hide the paragraph
          setTimeout(() => {
            paragraph.classList.add("hide-section-paragraph");
          }, 550);
        }
      });
    });
  }

  // Call the function to add the event listeners
  addSVGClickListeners();

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
};

// Check if the document's content has already loaded
if (document.readyState === "loading") {
  // If the content is still loading, add an event listener for DOMContentLoaded
  document.addEventListener("DOMContentLoaded", runScript);
} else {
  // If the content has already loaded, run the function immediately
  runScript();
}
