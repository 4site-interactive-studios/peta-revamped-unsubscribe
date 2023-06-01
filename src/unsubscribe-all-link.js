export const setUnsubscribeAllOnClick = () => {
  /**
   * Function to set the value of master suppression checkbox to true,
   * set the value of all subscription checkboxes to false,
   * and then simulate a click on the submit button,
   * when the "Unsubscribe All" button is clicked.
   */
  function setUnsubscribeAllOnClick() {
    // Get the "Unsubscribe All" button
    const unsubscribeAllBtn = document.querySelector(".unsubscribe-all-button");

    // If the "Unsubscribe All" button exists
    if (unsubscribeAllBtn) {
      // Add a click event listener to the "Unsubscribe All" button
      unsubscribeAllBtn.addEventListener("click", (e) => {
        // Get the master suppression checkbox
        const masterSuppressionBtn = document.querySelector(
          "#en__field_supporter_questions_178"
        );

        // If the master suppression checkbox exists
        if (masterSuppressionBtn) {
          // Set the value of the master suppression checkbox to true
          masterSuppressionBtn.checked = true;
          masterSuppressionBtn.value = "Y";
        }

        // Get all subscription checkboxes
        const subscriptionCheckboxes = document.querySelectorAll(
          ".subscription_title input"
        );

        // For each subscription checkbox
        subscriptionCheckboxes.forEach((subscription) => {
          // Set the value of the subscription checkbox to false
          subscription.value = "N";
          subscription.checked = false;
        });

        // Get the submit button
        const submitBtn = document.querySelector(".en__submit button");

        // If the submit button exists
        if (submitBtn) {
          // Simulate a click on the submit button
          submitBtn.click();
        }
      });
    }
  }

  // Call the function
  setUnsubscribeAllOnClick();
};
