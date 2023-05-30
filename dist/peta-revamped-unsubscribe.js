(function(){"use strict";try{if(typeof document!="undefined"){var n=document.createElement("style");n.appendChild(document.createTextNode(`/* 
PETA US Unsubscribe Pages
1) Email Subscription Landing Page URL:
   4Site - Development - New Unsubscribe Page - List Subscription (Warm Visitor) #48122
2) If the visitor comes to the Landing Page URL cold, they get redirected to this DCF page.
   4Site - Development - New Unsubscribe Page - DCF (Cold Visitor) #53017
3) After either of the above forms is completed, they get redirected here:
   4Site - Development - New Post-Unsubscribe All Page #48388
PETA Latino Unsubscribe Pages
1) Email Subscription Landing Page URL
   4Site - Development - New Latino Unsubscribe Page #49041
2) If the visitor comes to the Landing Page URL cold, they get redirected this DCF page.
   TBD
3) After either of the above forms is completed, they get redirected here:
   	4Site - Development - New Latino Post-Unsubscribe Mobile Opt-In Page #49060
Miscellaneous Pages (To Be Deleted After Development)
1) 4Site - Development - New Post-Unsubscribe Mobile Opt-In Page #48210 - Set up by Ry
2) 4Site - Development - New Unsubscribe Page (Take 2) #52319 - Set up by Bryan
*/
form[action="/page/48122/subscriptions/2"].en__component
  .en__component--row--1:nth-of-type(2)
  > .en__component.en__component--column--1,
form[action="/page/53017/data/2"].en__component
  .en__component--row--1:nth-of-type(2)
  > .en__component.en__component--column--1,
form[action="/page/49041/subscriptions/2"].en__component
  .en__component--row--1:nth-of-type(2)
  > .en__component.en__component--column--1,
form[action="/page/52319/subscriptions/2"].en__component
  .en__component--row--1:nth-of-type(2)
  > .en__component.en__component--column--1 {
  /* max-width: 300px; */
  margin: 0 auto;
  padding-bottom: 32px;
}
form[action="/page/48210/data/2"].en__component
  > .en__component--row--1:nth-of-type(2)
  > .en__component--column--1,
form[action="/page/48388/data/2"].en__component
  > .en__component--row--1:nth-of-type(2)
  > .en__component--column--1,
form[action="/page/49060/data/2"].en__component
  > .en__component--row--1:nth-of-type(2)
  > .en__component--column--1 {
  padding-left: 0;
  padding-right: 0;
}
.manage-emails-text-block p {
  display: none;
}
.manage-emails-text-block h1 {
  font-size: 28px;
}
.en__field--emailAddress {
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;
}
.en__field--emailAddress input {
  color: #ccc;
  height: 48px;
}
.incorrect-email-link {
  display: none;
  text-decoration: underline;
  font-weight: 600;
  line-height: 20px;
  font-size: 16px;
  letter-spacing: -0.02em;
}
.incorrect-email-link p {
  padding-bottom: 0;
}
form[action="/page/48122/subscriptions/2"] .incorrect-email-link a,
form[action="/page/53017/data/2"] .incorrect-email-link a,
form[action="/page/49041/subscriptions/2"] .incorrect-email-link a,
form[action="/page/52319/subscriptions/2"] .incorrect-email-link a {
  color: #00bfb3;
}
.less-emails-section,
.graphic-imagery-section {
  border: 1px solid #c5c5c5;
  /* max-width: 272px; */
  padding: 11px 18px;
  margin: 0 auto;
  margin-bottom: 32px;
}
.less-emails-header,
.reduce-graphic-imagery-header {
  justify-content: center;
  display: flex;
  column-gap: 18px;
  margin: 0 auto;
  margin-bottom: 16px;
}
.less-emails-header h3,
.reduce-graphic-imagery-header h3 {
  font-weight: 500;
  font-size: 18px;
  margin: 0;
  margin-top: 2px;
}
.less-emails-section svg,
.reduce-graphic-imagery-header svg {
  transition: 0.3s;
}
.show-paragraph-button {
  transform: rotate(-45deg);
}
.hide-paragraph-button {
  transform: rotate(0deg);
}
.section-paragraph {
  padding: 0;
  overflow: hidden;
  transition: 0.5s;
}
.hide-paragraph-animation {
  animation: hide 0.5s cubic-bezier(0.77, 0, 0.175, 1);
}
.hide-section-paragraph {
  height: 0;
}
.reveal-paragraph {
  height: 100%;
  animation: reveal 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  margin-bottom: 20px;
}
/* .less-emails-button {
  cursor: pointer;
  font-size: 16px;
  background-color: #d32626;
  padding: 15px 20px 13px 20px;
  color: white;
  font-weight: 600;
  border-radius: 5px;
  text-align: center;
  min-width: 238px;
  max-width: 272px;
  margin: 0 auto;
} */
/* form[action="/page/48122/subscriptions/2"] .less-emails-button,
form[action="/page/52017/subscriptions/2"] .less-emails-button,
form[action="/page/49041/subscriptions/2"] .less-emails-button,
form[action="/page/52319/subscriptions/2"] .less-emails-button {
  max-width: 392px;
  background-color: #ef4136;
  border-radius: 0;
} */
.unsubscribe-options-header h3 {
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 12px;
}
.en__field--podcast-e-news label {
  font-style: italic;
}
.required-action-team-fields {
  width: fit-content;
  margin: 0 auto;
  max-width: 258px;
  margin-left: 35px;
}
.less-emails-radio-select > .en__field--question,
.reduce-graphic-imagery-radio-select .en__field--radio {
  padding-bottom: 0;
}
.less-emails-radio-select .en__field--question > .en__field__label,
.reduce-graphic-imagery-radio-select .en__field--radio > .en__field__label {
  font-weight: 700;
}
.subscription_title > .en__field--checkbox > .en__field__label {
  width: fit-content;
  cursor: pointer;
  position: relative;
  top: -3px;
}
/* .graphic-imagery-section {
  border: 1px solid #c5c5c5;
  padding: 20px 16px 16px 16px;
}
.graphic-imagery-section h4 {
  line-height: 22px;
  margin: 0;
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 6px;
}
.graphic-imagery-section p {
  font-size: 12px;
  font-style: italic;
  line-height: 18px;
  padding: 0;
} */
/* .graphic-slider {
  cursor: pointer;
  margin-top: 16px;
}
.graphic-slider rect {
  transition: all 0.3s;
}
.latino-graphic-slider.slider-enabled circle {
  fill: white;
}
.latino-graphic-slider.slider-enabled rect {
  fill: #418fde;
} */
.off-text,
.on-text {
  transition: all 0.3s;
}
.slider-disabled .off-text {
  opacity: 1;
}
.slider-disabled .on-text {
  opacity: 0;
}
.slider-enabled .off-text {
  opacity: 0;
}
.slider-enabled .on-text {
  opacity: 1;
}
.enable-graphic-images {
  animation: turn-on 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  transform: translate(27px, 0);
}
.disable-graphic-images {
  animation: turn-off 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  transform: translate(0, 0);
}
body:not(#en__pagebuilder) .en__field--178 {
  visibility: hidden;
  height: 0;
  padding-bottom: 0;
}
form[action="/page/48122/subscriptions/2"] .unsubscribe-all-button,
form[action="/page/53017/data/2"] .unsubscribe-all-button,
form[action="/page/49041/subscriptions/2"] .unsubscribe-all-button,
form[action="/page/52319/subscriptions/2"] .unsubscribe-all-button {
  color: #ef4136;
}
.en__field--NOT_TAGGED_134 .en__field__element,
.en__field--1855 .en__field__element {
  display: flex;
  flex-direction: column;
}
.en__field--NOT_TAGGED_134 .en__field__element .en__field__label--item,
.en__field--1855 .en__field__element .en__field__label--item {
  position: relative;
  top: -3px;
}
.unsubscribe-all-button {
  text-align: center;
  color: #d32626;
  font-weight: 600;
  text-decoration: underline;
  font-size: 16px;
  cursor: pointer;
  width: fit-content;
  margin: 0 auto;
}
.preference-update-header {
  padding-left: 24px;
  padding-right: 24px;
  margin-bottom: 24px;
}
.preference-update-header p {
  padding-bottom: 0;
}
.preference-update-header h1,
.preference-update-header h2 {
  color: #254d68;
}
.preference-update-header h1 {
  font-size: 28px;
  margin-bottom: 0;
}
.preference-update-header .unsubscribe-all-header {
  margin-bottom: 15px;
}
.preference-update-header h2 {
  font-size: 20px;
  padding: 0;
  font-weight: 400;
  font-style: italic;
  margin-bottom: 16px;
}
.mobile-advocacy-parent {
  display: flex;
  flex-direction: column;
  width: 100%;
}
form[action="/page/49060/data/2"] .mobile-advocacy-header {
  background-color: #5160f1;
}
.mobile-advocacy-header {
  background-color: #418fde;
  width: 100vw;
  display: flex;
  height: 128px;
  overflow: hidden;
  position: relative;
}
.mobile-advocacy-header p:not(.mobile-join-button) {
  color: #ffffff;
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  min-width: 210px;
  padding: 25px 24px;
  letter-spacing: -0.03em;
}
.mobile-advocacy-header img {
  width: 206px;
  height: 239px;
  position: relative;
  right: 65px;
  bottom: 20px;
}
form[action="/page/49060/data/2"] .mobile-advocacy-section {
  background-color: #19252e;
}
.mobile-advocacy-section {
  color: white;
  padding: 16px 24px;
  background-color: #254d68;
  width: 100vw;
}
.mobile-advocacy-section > p:first-child {
  font-size: 16px;
}
.mobile-advocacy-section > p:nth-child(2) {
  font-size: 12px;
}
.mobile-advocacy-section a {
  color: #a3d1d6;
}
form[action="/page/49060/data/2"] .mobile-join-button {
  background-color: #00bfb3;
  border-radius: 0;
}
form[action="/page/49060/data/2"] .mobile-advocacy-header .mobile-join-button {
  display: none;
}
.mobile-join-button {
  cursor: pointer;
  background-color: #418fde;
  width: fit-content;
  padding: 15px 20px 13px 20px;
  min-width: 172px;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  border-radius: 5px;
}
.mobile-join-button a {
  color: white;
}
.latino-header-join-button {
  display: none;
}
.en__field--178 {
  visibility: hidden;
}
.en__submit {
  margin-top: 32px;
}
form[action="/page/48122/subscriptions/2"] .en__submit button,
form[action="/page/53017/data/2"] .en__submit button,
form[action="/page/49041/subscriptions/2"] .en__submit button,
form[action="/page/52319/subscriptions/2"] .en__submit button {
  background-color: #ef4136;
  border-radius: 0;
}
.privacy-policy {
  text-align: center;
}
.less-emails-header,
.reduce-graphic-imagery-header {
  justify-content: flex-start;
}
.less-emails-header h3,
.reduce-graphic-imagery-header h3 {
  font-size: 26px;
}
@keyframes reveal {
  0% {
    max-height: 0;
  }
  100% {
    max-height: 650px;
  }
}
@keyframes hide {
  0% {
    max-height: 650px;
  }
  100% {
    max-height: 0;
  }
}
@keyframes turn-off {
  0% {
    transform: translate(27px, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}
@keyframes turn-on {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(27px, 0);
  }
}
@media (min-width: 600px) {
  form[action="/page/48122/subscriptions/2"].en__component
    .en__component--row--1:nth-of-type(2)
    > .en__component.en__component--column--1,
  form[action="/page/53017/data/2"].en__component
    .en__component--row--1:nth-of-type(2)
    > .en__component.en__component--column--1,
  form[action="/page/49041/subscriptions/2"].en__component
    .en__component--row--1:nth-of-type(2)
    > .en__component.en__component--column--1,
  form[action="/page/52319/subscriptions/2"].en__component
    .en__component--row--1:nth-of-type(2)
    > .en__component.en__component--column--1 {
    margin-left: 32px;
    max-width: 775px;
    padding-bottom: 26px;
  }
  .incorrect-email-link {
    line-height: 22px;
  }
  .incorrect-email-link p {
    height: 44px;
  }
  .manage-emails-text-block {
    margin-bottom: 25px;
  }
  .manage-emails-text-block h1 {
    font-size: 32px;
  }
  .en__field--emailAddress input {
    padding-bottom: 8px;
  }
  .en__field--emailAddress input {
    width: 510px;
  }
  .less-emails-section,
  .graphic-imagery-section {
    max-width: 775px;
    padding: 24px 32px 32px 32px;
    margin-bottom: 48px;
  }
  .graphic-imagery-section {
    margin-top: 32px;
  }
  .less-emails-section svg,
  .graphic-imagery-section svg {
    display: none;
  }
  .section-paragraph {
    height: 100%;
    margin-bottom: 24px;
  }
  /* .less-emails-button {
    max-width: 176px;
    min-width: none;
  } */
  .unsubscribe-options-header h3 {
    font-size: 26px;
    margin-top: 0;
  }
  form[action="/page/48122/subscriptions/2"].en__component
    .en__component--row--1:nth-of-type(4)
    > .en__component--column--1,
  form[action="/page/53017/data/2"].en__component
    .en__component--row--1:nth-of-type(4)
    > .en__component--column--1,
  form[action="/page/49041/subscriptions/2"].en__component
    .en__component--row--1:nth-of-type(4)
    > .en__component--column--1,
  form[action="/page/52319/subscriptions/2"].en__component
    .en__component--row--1:nth-of-type(4)
    > .en__component--column--1 {
    max-width: 711px;
    margin: 0 auto;
    padding: 0;
  }
  form[action="/page/48122/subscriptions/2"].en__component
    > .en__component--row:nth-of-type(5),
  form[action="/page/53017/data/2"].en__component
    > .en__component--row:nth-of-type(5),
  form[action="/page/49041/subscriptions/2"].en__component
    > .en__component--row:nth-of-type(5),
  form[action="/page/52319/subscriptions/2"].en__component
    > .en__component--row:nth-of-type(5) {
    justify-content: center;
  }
  form[action="/page/48122/subscriptions/2"].en__component
    > .en__component--row:nth-of-type(5)
    .en__component--column,
  form[action="/page/53017/data/2"].en__component
    > .en__component--row:nth-of-type(5)
    .en__component--column,
  form[action="/page/49041/subscriptions/2"].en__component
    > .en__component--row:nth-of-type(5)
    .en__component--column,
  form[action="/page/52319/subscriptions/2"].en__component
    > .en__component--row:nth-of-type(5)
    .en__component--column {
    max-width: 400px;
  }
  .mobile-advocacy-header {
    column-gap: 10%;
    justify-content: center;
    width: 100%;
  }
  .mobile-advocacy-section {
    width: 100%;
  }
  /* .graphic-imagery-section {
    margin: 0 auto;
    margin-top: 48px;
    max-width: 775px;
    display: flex;
    column-gap: 56px;
    align-items: center;
    padding: 20px 32px;
  } */
  /* .graphic-imagery-section p {
    font-size: 13px;
    font-style: italic;
    line-height: 20px;
  } */
  /* 
  .graphic-slider {
    margin: 0;
  } */
  .en__submit {
    margin-top: 0px;
  }
  .privacy-policy {
    text-align: left;
  }
}
@media (min-width: 900px) {
  form[action="/page/48122/subscriptions/2"].en__component
    .en__component--row--1:nth-of-type(2)
    > .en__component.en__component--column--1,
  form[action="/page/53017/data/2"].en__component
    .en__component--row--1:nth-of-type(2)
    > .en__component.en__component--column--1,
  form[action="/page/49041/subscriptions/2"].en__component
    .en__component--row--1:nth-of-type(2)
    > .en__component.en__component--column--1,
  form[action="/page/52319/subscriptions/2"].en__component
    .en__component--row--1:nth-of-type(2)
    > .en__component.en__component--column--1 {
    margin-left: 107px;
  }
  .preference-update-header {
    margin: 0 auto;
    max-width: 712px;
    margin-bottom: 48px;
  }
  .preference-update-header h1 {
    font-size: 54px;
    font-weight: 800;
    line-height: 38px;
  }
  .preference-update-header h2 {
    font-size: 26px;
    line-height: 38px;
    margin-top: 10px;
  }
  .mobile-advocacy-header,
  .mobile-advocacy-section,
  form[action="/page/49060/data/2"] .mobile-advocacy-header,
  form[action="/page/49060/data/2"] .mobile-advocacy-section {
    background: transparent;
  }
  .mobile-advocacy-header {
    height: auto;
    overflow: visible;
    justify-content: initial;
  }
  .mobile-advocacy-header p:not(.mobile-join-button) {
    font-size: 32px;
    width: 240px;
    line-height: 38px;
    padding: 0;
    margin-top: 37px;
    margin-left: 50px;
  }
  .mobile-advocacy-header img {
    width: 258px;
    height: auto;
    transform: scaleX(-1);
    right: -70px;
    bottom: -140px;
    position: absolute;
  }
  .mobile-advocacy-section {
    padding: 26px 62px;
  }
  .mobile-advocacy-section > p:nth-child(2) {
    font-size: 13px;
  }
  .mobile-advocacy-section p:last-child {
    line-height: 20px;
  }
  .latino-mobile-advocacy-header {
    display: flex;
    flex-direction: column;
    row-gap: 32px;
  }
  form[action="/page/49060/data/2"]
    .mobile-advocacy-header
    .mobile-join-button {
    display: block;
    cursor: pointer;
    width: fit-content;
    padding: 15px 20px 13px 20px;
    min-width: 172px;
    text-align: center;
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    margin-left: 50px;
  }
  form[action="/page/49060/data/2"]
    .mobile-advocacy-section
    .mobile-join-button {
    display: none;
  }
  form[action="/page/49060/data/2"] .mobile-advocacy-parent {
    background-image: linear-gradient(
      -70deg,
      #19252e,
      #19252e 55%,
      #5160f1 38%,
      #5160f1
    );
  }
  form[action="/page/49060/data/2"] .mobile-advocacy-header img {
    width: 320px;
    right: -110px;
    bottom: -180px;
  }
  .mobile-advocacy-parent {
    background-image: linear-gradient(
      -70deg,
      #254d68,
      #254d68 55%,
      #418fde 38%,
      #418fde
    );
    flex-direction: row;
    overflow: hidden;
    height: 305px;
  }
}
@media screen and (max-width: 825px) {
  .unsubscribe-options-header {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}`)),document.head.appendChild(n)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
true&&(function polyfill() {
    const relList = document.createElement('link').relList;
    if (relList && relList.supports && relList.supports('modulepreload')) {
        return;
    }
    for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
        processPreload(link);
    }
    new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.type !== 'childList') {
                continue;
            }
            for (const node of mutation.addedNodes) {
                if (node.tagName === 'LINK' && node.rel === 'modulepreload')
                    processPreload(node);
            }
        }
    }).observe(document, { childList: true, subtree: true });
    function getFetchOpts(script) {
        const fetchOpts = {};
        if (script.integrity)
            fetchOpts.integrity = script.integrity;
        if (script.referrerpolicy)
            fetchOpts.referrerPolicy = script.referrerpolicy;
        if (script.crossorigin === 'use-credentials')
            fetchOpts.credentials = 'include';
        else if (script.crossorigin === 'anonymous')
            fetchOpts.credentials = 'omit';
        else
            fetchOpts.credentials = 'same-origin';
        return fetchOpts;
    }
    function processPreload(link) {
        if (link.ep)
            // ep marker = processed
            return;
        link.ep = true;
        // prepopulate the load record
        const fetchOpts = getFetchOpts(link);
        fetch(link.href, fetchOpts);
    }
}());

const style = '';

// Encapsulate your code into a function
const runScript = () => {
  const userEmail = document.querySelector("#en__field_supporter_emailAddress");
  // const enableGraphicImages = document.querySelector(
  //   "#en__field_supporter_NOT_TAGGED_134"
  // );
  // const graphicSVG = document.querySelector(".graphic-slider");
  // const offText = graphicSVG.querySelector(".off-text");
  // const onText = graphicSVG.querySelector(".on-text");
  // const graphicSlider = graphicSVG.querySelector("circle");
  const unsubscribeAllBtn = document.querySelector(".unsubscribe-all-button");
  const submitBtn = document.querySelector(".en__submit button");
  const actionTeamDesc = document.querySelector(
    ".en__field--peta-action-team-alerts"
  ).parentElement.nextElementSibling;
  const actionTeamFields = document.querySelector(
    ".required-action-team-fields"
  );

  // const lessEmailsBox = document.createElement("input");
  // lessEmailsBox.id = "en__field_supporter_questions_1855";
  // lessEmailsBox.type = "checkbox";
  // lessEmailsBox.classList.add("en__field__input", "en__field__input--checkbox");
  // lessEmailsBox.name = "supporter.questions.1855";
  // lessEmailsBox.value = "Y";
  // lessEmailsBox.style.visibility = "hidden";
  // document.querySelector(".less-emails-section").appendChild(lessEmailsBox);
  // const lessEmailsBox = document.querySelector(
  //   "#en__field_supporter_questions_1855"
  // );

  // if (lessEmailsBox) {
  //   lessEmailsBox.removeAttribute("disabled");
  // }

  /**
   * Function to convert a checkbox into two radio buttons.
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

  /**
   * Function to move the '.en__field--NOT_TAGGED_134' field into the
   * '.reduce-graphic-imagery-radio-select' element, replacing any contents that might already be there.
   */
  function moveNotTagged134Field() {
    // Find the elements we need
    const reduceGraphicImageryRadioSelect = document.querySelector(
      ".reduce-graphic-imagery-radio-select"
    );
    const fieldNOT_TAGGED_134Component = document.querySelector(
      ".en__component--formblock .en__field--NOT_TAGGED_134"
    );

    // Check if both elements exist
    if (reduceGraphicImageryRadioSelect && fieldNOT_TAGGED_134Component) {
      // Clear the contents of reduceGraphicImageryRadioSelect
      reduceGraphicImageryRadioSelect.innerHTML = "";

      // Move fieldNOT_TAGGED_134Component into reduceGraphicImageryRadioSelect
      reduceGraphicImageryRadioSelect.appendChild(fieldNOT_TAGGED_134Component);
    }
  }

  // Call the function to start the movement
  moveNotTagged134Field();

  if (actionTeamDesc && actionTeamFields) {
    actionTeamDesc.after(actionTeamFields);
  }

  if (userEmail.value != "") {
    userEmail.setAttribute("disabled", "");
    document.querySelector(".incorrect-email-link").style.display = "block";
  }

  // const lessEmailsBtn = document.querySelector(".less-emails-button");
  // lessEmailsBtn.addEventListener("click", (e) => {
  //   lessEmailsBox.checked = "true";
  //   submitBtn.click();
  // });

  /**
   * Function to remove the 'hide-section-paragraph' class from
   * all '.section-paragraph' elements when the screen width is >= 600.
   */
  function removeHideClassOnWideScreens() {
    // Select all '.section-paragraph' elements
    const sectionParagraphs = document.querySelectorAll(".section-paragraph");

    // If the screen width is >= 600
    if (screen.width >= 600) {
      // For each '.section-paragraph' element
      sectionParagraphs.forEach((sectionParagraph) => {
        // Remove the 'hide-section-paragraph' class
        sectionParagraph.classList.remove("hide-section-paragraph");
      });
    }
  }

  // Call the function
  removeHideClassOnWideScreens();

  // if (enableGraphicImages.checked) {
  //   offText.style.display = "none";
  //   onText.style.display = "inline";
  //   graphicSVG.classList.add("slider-enabled");
  //   graphicSVG.classList.remove("slider-disabled");
  //   graphicSlider.classList.remove("disable-graphic-images");
  //   graphicSlider.classList.add("enable-graphic-images");
  // }

  // Make opt-in labels clickable
  document.querySelectorAll(".subscription_title").forEach((subscription) => {
    const subscription_label = subscription.querySelector("label");
    const subscription_box = subscription.querySelector("input");

    subscription_label.setAttribute("for", subscription_box.id);
  });

  /**
   * Function to add event listeners to SVG elements within section headers.
   * Clicking the SVG will toggle the visibility of the corresponding section paragraph.
   */
  function addSVGClickListeners() {
    // Select all SVG elements within section headers
    const svgElements = [
      ...document.querySelectorAll(".less-emails-header svg"),
      ...document.querySelectorAll(".reduce-graphic-imagery-header svg"),
    ];

    svgElements.forEach((svgElement) => {
      // Add a click event listener to each SVG element
      svgElement.addEventListener("click", (e) => {
        // The clicked SVG element
        const target = e.target;
        // The container that contains the clicked SVG
        const container = target.closest(".en__component");
        // The paragraph within the same container as the clicked SVG
        const paragraph = container.querySelector(".section-paragraph");

        // If the SVG has the class "hide-paragraph-button" or if it only has the class "section-paragraph"
        if (
          target.classList.contains("hide-paragraph-button") ||
          (target.classList.length == 1 &&
            target.classList.contains("section-paragraph"))
        ) {
          // Remove the "hide" class and add the "show" class to the SVG
          target.classList.remove("hide-paragraph-button");
          target.classList.add("show-paragraph-button");
          // Remove the "hide" animation class and add the "reveal" class to the paragraph
          paragraph.classList.remove("hide-section-paragraph");
          paragraph.classList.add("reveal-paragraph");
        } else {
          // If the SVG does not have the "hide" class or only has the "section-paragraph" class
          // Remove the "show" class and add the "hide" class to the SVG
          target.classList.remove("show-paragraph-button");
          target.classList.add("hide-paragraph-button");
          // Remove the "reveal" class and add the "hide" animation class to the paragraph
          paragraph.classList.remove("reveal-paragraph");
          paragraph.classList.add("hide-paragraph-animation");

          // After a delay, add the class to completely hide the paragraph
          setTimeout(() => {
            paragraph.classList.add("hide-section-paragraph");
          }, 550);
        }
      });
    });
  }

  // Call the function to add the event listeners
  addSVGClickListeners();

  // Reduce Graphic Imagery Button
  // graphicSVG.addEventListener("click", (e) => {
  //   if (
  //     graphicSlider.classList.length == 0 ||
  //     graphicSlider.classList.contains("disable-graphic-images")
  //   ) {
  //     graphicSlider.classList.remove("disable-graphic-images");
  //     graphicSlider.classList.add("enable-graphic-images");
  //     graphicSVG.classList.add("slider-enabled");
  //     graphicSVG.classList.remove("slider-disabled");
  //     enableGraphicImages.checked = true;
  //     enableGraphicImages.value = "Y";
  //     // offText.style.display = "none";
  //     // setTimeout(() => {
  //     //   onText.style.display = "inline";
  //     // }, 500);
  //   } else {
  //     graphicSlider.classList.remove("enable-graphic-images");
  //     graphicSlider.classList.add("disable-graphic-images");
  //     graphicSVG.classList.add("slider-disabled");
  //     graphicSVG.classList.remove("slider-enabled");
  //     enableGraphicImages.checked = false;
  //     enableGraphicImages.value = "N";
  //     // onText.style.display = "none";
  //     // setTimeout(() => {
  //     //   offText.style.display = "inline";
  //     // }, 500);
  //   }
  // });

  // Unsubscribe All Button
  unsubscribeAllBtn.addEventListener("click", (e) => {
    const masterSuppressionBtn = document.querySelector(
      "#en__field_supporter_questions_178"
    );
    masterSuppressionBtn.checked = true;
    masterSuppressionBtn.value = "Y";

    document
      .querySelectorAll(".subscription_title input")
      .forEach((subscription) => {
        subscription.value = "N";
        subscription.checked = false;
      });

    submitBtn.click();
  });
};

// Check if the document's content has already loaded
if (document.readyState === "loading") {
  // If the content is still loading, add an event listener for DOMContentLoaded
  document.addEventListener("DOMContentLoaded", runScript);
} else {
  // If the content has already loaded, run the function immediately
  runScript();
}
