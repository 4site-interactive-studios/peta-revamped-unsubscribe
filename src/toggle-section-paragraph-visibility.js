export const toggleSectionParagraphVisibility = () => {
  /**
   * Function to set the height of '.section-paragraph' elements
   * to 0px when screen width is < 600 and remove that style when screen width is >= 600.
   */
  function toggleVisibility() {
    // Select all '.section-paragraph' elements
    const sectionParagraphs = document.querySelectorAll(".section-paragraph");

    // For each '.section-paragraph' element
    sectionParagraphs.forEach((sectionParagraph) => {
      // If the screen width is >= 600
      if (window.innerWidth >= 600) {
        // Remove the height style
        sectionParagraph.style.height = "";
      } else {
        // Set the height to 0px
        sectionParagraph.style.height = "0px";
      }
    });
  }

  // Call the function initially
  toggleVisibility();

  // Call the function whenever the window is resized
  window.addEventListener("resize", toggleVisibility);
};

// Call the function
toggleSectionParagraphVisibility();
