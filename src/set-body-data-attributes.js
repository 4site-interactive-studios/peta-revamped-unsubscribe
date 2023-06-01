export const setBodyAttributes = () => {
  // This function sets custom attributes to the body based on URL and pageJson

  function setBodyAttributes() {
    const url = new URL(window.location.href);

    // If the URL contains any of the specified page IDs, set data-page-context to "new-unsubscribe"
    if (/48122|49041|52319|53017|48210|48388|49060/.test(url.pathname)) {
      document.body.setAttribute("data-page-context", "new-unsubscribe");
    }

    // Assuming `pageJson` is a global variable, if it exists and contains a pageType, set data-page-type to its value
    if (window.pageJson && window.pageJson.pageType) {
      document.body.setAttribute("data-page-type", window.pageJson.pageType);
    }
  }

  setBodyAttributes();
};
