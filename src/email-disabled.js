export const emailDisabler = () => {
  /**
   * Function to convert a Reduce Email checkbox into two radio buttons.
   * The radio buttons will be labeled "Yes" and "No".
   * The "Yes" radio button will be selected if the checkbox was checked.
   */
  function emailDisabler() {
    const userEmail = document.querySelector(
      "#en__field_supporter_emailAddress"
    );
    if (userEmail && userEmail.value != "") {
      userEmail.setAttribute("disabled", "");
      const incorrectEmail = document.querySelector(".incorrect-email-link");
      if (incorrectEmail) {
        incorrectEmail.style.display = "block";
      }
    }
  }
  emailDisabler();
};
