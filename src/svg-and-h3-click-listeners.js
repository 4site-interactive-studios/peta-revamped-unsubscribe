export const addSVGAndH3ClickListeners = () => {
  /**
   * Function to add event listeners to SVG elements within section headers.
   * Clicking the SVG or its preceding H3 element will toggle the visibility of the corresponding section paragraph.
   */
  function addSVGAndH3ClickListeners() {
    // Select all SVG elements within section headers
    const svgElements = [
      ...document.querySelectorAll(".less-emails-header svg"),
      ...document.querySelectorAll(".reduce-graphic-imagery-header svg"),
    ];

    svgElements.forEach((svgElement) => {
      // Add a click event listener to each SVG element
      svgElement.addEventListener("click", toggleVisibility);

      // Get the preceding H3
      const precedingH3 = svgElement.parentElement.querySelector("h3");

      if (precedingH3) {
        // When H3 is clicked, perform the same action as if the SVG was clicked
        precedingH3.addEventListener("click", () => {
          // Create a new 'click' event
          var event = new MouseEvent("click", {
            view: window,
            bubbles: true,
            cancelable: true,
          });
          // Dispatch the event to the SVG element
          svgElement.dispatchEvent(event);
        });
      }
    });

    function toggleVisibility(e) {
      const target = e.currentTarget;
      const container = target.closest(".en__component");
      const paragraph = container.querySelector(".section-paragraph");

      if (
        target.classList.contains("hide-paragraph-button") ||
        (target.classList.length == 1 &&
          target.classList.contains("section-paragraph"))
      ) {
        target.classList.remove("hide-paragraph-button");
        target.classList.add("show-paragraph-button");
        paragraph.classList.remove("hide-section-paragraph");
        paragraph.classList.add("reveal-paragraph");
      } else {
        target.classList.remove("show-paragraph-button");
        target.classList.add("hide-paragraph-button");
        paragraph.classList.remove("reveal-paragraph");
        paragraph.classList.add("hide-paragraph-animation");

        setTimeout(() => {
          paragraph.classList.add("hide-section-paragraph");
        }, 550);
      }
    }
  }

  addSVGAndH3ClickListeners();
};
