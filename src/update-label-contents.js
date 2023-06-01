export const updateLabelContents = () => {
  function updateLabelContents() {
    // Get the label for the ".dcf-receive-fewer-emails-container" element
    const fewerEmailsLabel = document.querySelector(
      ".dcf-receive-fewer-emails-container label"
    );

    // If the label exists
    if (fewerEmailsLabel) {
      // Update the label's contents
      fewerEmailsLabel.textContent = "Receive Fewer E-Mails";
    }

    // Get the label for the ".dcf-reduce-graphic-imagery-container" element
    const reduceGraphicImageryLabel = document.querySelector(
      ".dcf-reduce-graphic-imagery-container label"
    );

    // If the label exists
    if (reduceGraphicImageryLabel) {
      // Update the label's contents
      reduceGraphicImageryLabel.textContent = "Reduce Graphic Imagery";
    }
  }

  // Call the function
  updateLabelContents();
};
