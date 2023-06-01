export const convert1855CheckboxToRadioButtons = () => {
  /**
   * Function to convert a Reduce Email checkbox into two radio buttons.
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
};
