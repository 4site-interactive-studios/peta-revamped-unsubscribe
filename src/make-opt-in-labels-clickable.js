export const toggleSubscriptionCheckboxOnClick = () => {
  /**
   * This function, toggleSubscriptionCheckboxOnClick, adds interactivity to the subscription_title
   * and subscription_description divs such that clicking on these divs will toggle the checked status
   * of the corresponding checkbox input. This function assumes that there are matching pairs of
   * .subscription_title and .subscription_description divs in the DOM, and that each .subscription_title
   * div contains exactly one checkbox input.
   */
  function toggleSubscriptionCheckboxOnClick() {
    // get all subscription_title and subscription_description divs
    let subscriptionTitles = document.querySelectorAll(".subscription_title");
    let subscriptionDescriptions = document.querySelectorAll(
      ".subscription_description"
    );

    // for each title, bind a click event listener
    subscriptionTitles.forEach((title, index) => {
      let input = title.querySelector('input[type="checkbox"]');

      // for the corresponding title label
      title.addEventListener("click", () => {
        input.checked = !input.checked;
      });

      // for the corresponding description paragraph
      let description = subscriptionDescriptions[index];
      description.addEventListener("click", () => {
        input.checked = !input.checked;
      });
    });
  }
  toggleSubscriptionCheckboxOnClick();
};
