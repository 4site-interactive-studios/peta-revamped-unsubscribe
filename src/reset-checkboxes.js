export const resetCheckboxes = () => {
  /**
   * Disable autocomplete on all checkboxes (Firefox would persist the state otherwise)
   * And set the state to unchecked
   * */
  function resetCheckboxes() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.setAttribute("autocomplete", "off");
      checkbox.checked = false;
      console.log(`Disabled autocomplete for checkbox: ${checkbox.name}`);
    });
  }
  resetCheckboxes();
};
