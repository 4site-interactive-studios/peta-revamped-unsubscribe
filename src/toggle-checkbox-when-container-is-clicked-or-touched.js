export const toggleCheckboxOnClickOrTouch = () => {
  /**
   * Function to toggle the checkbox value of a specified input
   * when a specified container is clicked or touched.
   *
   * @param {string} containerSelector - The CSS selector of the container.
   * @param {string} checkboxName - The name attribute of the checkbox.
   */
  function toggleCheckboxOnClickOrTouch(containerSelector, checkboxName) {
    // Function to toggle the checkbox value
    const toggleCheckboxValue = () => {
      // Get the checkbox element
      const checkbox = document.querySelector(`input[name="${checkboxName}"]`);

      // If the checkbox element exists
      if (checkbox) {
        // Toggle the checkbox value
        checkbox.checked = !checkbox.checked;
      }
    };

    // Get the container element
    const container = document.querySelector(containerSelector);

    // If the container element exists
    if (container) {
      // Add event listeners for click and touch events
      container.addEventListener("click", toggleCheckboxValue);
      container.addEventListener("touchend", (event) => {
        event.preventDefault();
        toggleCheckboxValue("checkbox label clicked or touched");
      });
    }

    console.log();
  }

  // Call the function for each container and checkbox pair
  toggleCheckboxOnClickOrTouch(
    ".dcf-reduce-graphic-imagery-container",
    "supporter.NOT_TAGGED_134"
  );
  toggleCheckboxOnClickOrTouch(
    ".dcf-receive-fewer-emails-container",
    "supporter.questions.1855"
  );
};
