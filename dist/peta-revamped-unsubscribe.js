(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode(`/* 
PETA US Unsubscribe Pages
1) Email Subscription Landing Page URL:
   4Site - Development - New Unsubscribe Page - List Subscription (Warm Visitor) #48122
2) If the visitor comes to the Landing Page URL cold, they get redirected to this DCF page.
   4Site - Development - New Unsubscribe Page - DCF (Cold Visitor) #53017
3) After either of the above forms is completed, they get redirected here:
   4Site - Development - New Post-Unsubscribe All Page #48388
PETA Latino Unsubscribe Pages
1) Email Subscription Landing Page URL
  4Site - Development - New Latino Unsubscribe Page (Warm Visitor) #49041
2) If the visitor comes to the Landing Page URL cold, they get redirected to this DCF page.
   4Site - Development - PETA Latino - New Unsubscribe Page - DCF (Cold Visitor) #55607
3) After either of the above forms is completed, they get redirected here:
   4Site - Development - New PETA Latino Post-Unsubscribe All Page #49060
Miscellaneous Pages (To Be Deleted After Development)
1) 4Site - Development - New Post-Unsubscribe Mobile Opt-In Page #48210 - Set up by Ry
2) 4Site - Development - New Unsubscribe Page (Take 2) #52319 - Set up by Bryan
*/
[data-page-context=new-unsubscribe] form[action="/page/48210/data/2"].en__component > .en__component--row--1:nth-of-type(2) > .en__component--column--1,
[data-page-context=new-unsubscribe] form[action="/page/48388/data/2"].en__component > .en__component--row--1:nth-of-type(2) > .en__component--column--1,
[data-page-context=new-unsubscribe] form[action="/page/49060/data/2"].en__component > .en__component--row--1:nth-of-type(2) > .en__component--column--1 {
  padding-left: 0;
  padding-right: 0;
}
[data-page-context=new-unsubscribe] .manage-emails-text-block p {
  display: none;
}
[data-page-context=new-unsubscribe] .manage-emails-text-block h1 {
  font-size: 28px;
}
[data-page-context=new-unsubscribe] .en__field--emailAddress {
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;
}
[data-page-context=new-unsubscribe] #en__field_supporter_emailAddress {
  height: 48px;
  width: 100% !important;
}
[data-page-context=new-unsubscribe] #en__field_supporter_emailAddress[disabled] {
  color: #ccc;
}
[data-page-context=new-unsubscribe] .incorrect-email-link {
  display: none;
  text-decoration: underline;
  font-weight: 600;
  line-height: 20px;
  font-size: 16px;
  letter-spacing: -0.02em;
}
[data-page-context=new-unsubscribe] .incorrect-email-link p {
  padding-bottom: 0;
}
[data-page-context=new-unsubscribe] form[action="/page/48122/subscriptions/2"] .incorrect-email-link a,
[data-page-context=new-unsubscribe] form[action="/page/53017/data/2"] .incorrect-email-link a,
[data-page-context=new-unsubscribe] form[action="/page/55607/data/2"] .incorrect-email-link a,
[data-page-context=new-unsubscribe] form[action="/page/49041/subscriptions/2"] .incorrect-email-link a,
[data-page-context=new-unsubscribe] form[action="/page/52319/subscriptions/2"] .incorrect-email-link a {
  color: #00bfb3;
}
[data-page-context=new-unsubscribe] .manage-emails-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: 32px;
}
[data-page-context=new-unsubscribe] .manage-emails-container > * {
  max-width: 530px;
  width: 100%;
}
[data-page-context=new-unsubscribe] .unsubscribe-options-header {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
[data-page-context=new-unsubscribe] .unsubscribe-options-header > * {
  max-width: 710px;
  width: 100%;
}
[data-page-context=new-unsubscribe] .email-preferences-copy {
  padding-bottom: 32px;
}
[data-page-context=new-unsubscribe] .less-emails-header,
[data-page-context=new-unsubscribe] .reduce-graphic-imagery-header {
  display: flex;
  column-gap: 18px;
  margin: 0 auto;
  margin-bottom: 16px;
}
[data-page-context=new-unsubscribe] .less-emails-header h3,
[data-page-context=new-unsubscribe] .reduce-graphic-imagery-header h3 {
  font-weight: 500;
  font-size: 18px;
  margin: 0;
  margin-top: 2px;
}
[data-page-context=new-unsubscribe] .en__field--reduced-e-mail-program.en__field--radio .en__field__item,
[data-page-context=new-unsubscribe] .en__field--NOT_TAGGED_134.en__field--radio .en__field__item {
  display: flex;
}
[data-page-context=new-unsubscribe] .show-paragraph-button {
  transform: rotate(-45deg);
}
[data-page-context=new-unsubscribe] .hide-paragraph-button {
  transform: rotate(0deg);
}
[data-page-context=new-unsubscribe] .less-emails-section .section-paragraph,
[data-page-context=new-unsubscribe] .graphic-imagery-section .section-paragraph {
  padding: 0;
}
[data-page-context=new-unsubscribe] .less-emails-section .section-paragraph,
[data-page-context=new-unsubscribe] .graphic-imagery-section .section-paragraph {
  margin-bottom: 24px;
}
[data-page-context=new-unsubscribe] .hide-paragraph-animation {
  animation: hide 0.5s cubic-bezier(0.77, 0, 0.175, 1);
}
[data-page-context=new-unsubscribe] .reveal-paragraph {
  height: 100%;
  animation: reveal 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  margin-bottom: 20px;
  height: auto !important;
}
[data-page-context=new-unsubscribe] .less-emails-button {
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
  max-width: 392px;
  background-color: #ef4136;
  border-radius: 0;
  min-width: none;
}
[data-page-context=new-unsubscribe] .unsubscribe-options-header h3 {
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 12px;
}
[data-page-context=new-unsubscribe] .en__field--podcast-e-news label {
  font-style: italic;
}
[data-page-context=new-unsubscribe] .required-action-team-fields {
  width: fit-content;
  margin: 0 auto;
  max-width: 258px;
  margin-left: 35px;
}
[data-page-context=new-unsubscribe] .required-action-team-fields .action-team-signup-field-label {
  font-weight: 700;
}
[data-page-context=new-unsubscribe] .required-action-team-fields .action-team-signup-field-label:after {
  content: none;
}
[data-page-context=new-unsubscribe] .less-emails-picker > .en__field--question,
[data-page-context=new-unsubscribe] .reduce-graphic-imagery-picker .en__field--radio {
  padding-bottom: 0;
}
[data-page-context=new-unsubscribe] .less-emails-picker .en__field--question > .en__field__label,
[data-page-context=new-unsubscribe] .reduce-graphic-imagery-picker .en__field--radio > .en__field__label {
  font-weight: 700;
}
[data-page-context=new-unsubscribe] .subscription_title > .en__field--checkbox > .en__field__label {
  width: fit-content;
  cursor: pointer;
  position: relative;
  top: -3px;
  max-width: calc(100% - 36px);
}
[data-page-context=new-unsubscribe] .subscription_title > .en__field--checkbox .en__field__input--checkbox {
  cursor: pointer;
}
[data-page-context=new-unsubscribe] .graphic-slider {
  cursor: pointer;
}
[data-page-context=new-unsubscribe] .graphic-slider rect {
  transition: all 0.3s;
}
[data-page-context=new-unsubscribe] .graphic-slider.slider-enabled circle {
  fill: white;
}
[data-page-context=new-unsubscribe] .graphic-slider.slider-enabled rect {
  fill: #41de42;
}
[data-page-context=new-unsubscribe] .off-text,
[data-page-context=new-unsubscribe] .on-text {
  transition: all 0.3s;
}
[data-page-context=new-unsubscribe] .slider-disabled .off-text {
  opacity: 1;
}
[data-page-context=new-unsubscribe] .slider-disabled .on-text {
  opacity: 0;
}
[data-page-context=new-unsubscribe] .slider-enabled .off-text {
  opacity: 0;
}
[data-page-context=new-unsubscribe] .slider-enabled .on-text {
  opacity: 1;
}
[data-page-context=new-unsubscribe] .slider-enabled circle {
  cx: 45px;
}
[data-page-context=new-unsubscribe] .enable-graphic-images {
  animation: turn-on 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  transform: translate(27px, 0);
}
[data-page-context=new-unsubscribe] .disable-graphic-images {
  animation: turn-off 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  transform: translate(0, 0);
}
[data-page-context=new-unsubscribe] body:not(#en__pagebuilder) .en__field--178 {
  visibility: hidden;
  height: 0;
  padding-bottom: 0;
}
[data-page-context=new-unsubscribe] form[action="/page/48122/subscriptions/2"] .unsubscribe-all-button,
[data-page-context=new-unsubscribe] form[action="/page/53017/data/2"] .unsubscribe-all-button,
[data-page-context=new-unsubscribe] form[action="/page/55607/data/2"] .unsubscribe-all-button,
[data-page-context=new-unsubscribe] form[action="/page/49041/subscriptions/2"] .unsubscribe-all-button,
[data-page-context=new-unsubscribe] form[action="/page/52319/subscriptions/2"] .unsubscribe-all-button {
  color: #ef4136;
}
[data-page-context=new-unsubscribe] .en__field--NOT_TAGGED_134 .en__field__element,
[data-page-context=new-unsubscribe] .en__field--1855 .en__field__element {
  display: flex;
  flex-direction: column;
}
[data-page-context=new-unsubscribe] .en__field--NOT_TAGGED_134 .en__field__element .en__field__label--item,
[data-page-context=new-unsubscribe] .en__field--1855 .en__field__element .en__field__label--item {
  position: relative;
}
[data-page-context=new-unsubscribe] .unsubscribe-all-button {
  text-align: center;
  color: #d32626;
  font-weight: 600;
  text-decoration: underline;
  font-size: 16px;
  cursor: pointer;
  width: fit-content;
  margin: 0 auto;
}
[data-page-context=new-unsubscribe] .preference-update-header {
  padding-left: 24px;
  padding-right: 24px;
  margin-bottom: 24px;
}
[data-page-context=new-unsubscribe] .preference-update-header p {
  padding-bottom: 0;
}
[data-page-context=new-unsubscribe] .preference-update-header h1,
[data-page-context=new-unsubscribe] .preference-update-header h2 {
  color: #254d68;
}
[data-page-context=new-unsubscribe] .preference-update-header h1 {
  font-size: 28px;
  margin-bottom: 0;
}
[data-page-context=new-unsubscribe] .preference-update-header .unsubscribe-all-header {
  margin-bottom: 15px;
}
[data-page-context=new-unsubscribe] .preference-update-header h2 {
  font-size: 20px;
  padding: 0;
  font-weight: 400;
  font-style: italic;
  margin-bottom: 16px;
}
[data-page-context=new-unsubscribe] .mobile-advocacy-parent {
  display: flex;
  flex-direction: column;
  width: 100%;
}
[data-page-context=new-unsubscribe] form[action="/page/49060/data/2"] .mobile-advocacy-header {
  background-color: #5160f1;
}
[data-page-context=new-unsubscribe] .mobile-advocacy-header {
  background-color: #418fde;
  width: 100vw;
  display: flex;
  height: 128px;
  overflow: hidden;
  position: relative;
}
[data-page-context=new-unsubscribe] .mobile-advocacy-header p:not(.mobile-join-button) {
  color: #ffffff;
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  min-width: 210px;
  padding: 25px 24px;
  letter-spacing: -0.03em;
}
[data-page-context=new-unsubscribe] .mobile-advocacy-header img {
  width: 206px;
  height: 239px;
  position: relative;
  right: 65px;
  bottom: 20px;
}
[data-page-context=new-unsubscribe] form[action="/page/49060/data/2"] .mobile-advocacy-section {
  background-color: #19252e;
}
[data-page-context=new-unsubscribe] .mobile-advocacy-section {
  color: white;
  padding: 16px 24px;
  background-color: #254d68;
  width: 100vw;
}
[data-page-context=new-unsubscribe] .mobile-advocacy-section > p:first-child {
  font-size: 16px;
}
[data-page-context=new-unsubscribe] .mobile-advocacy-section > p:nth-child(2) {
  font-size: 12px;
}
[data-page-context=new-unsubscribe] .mobile-advocacy-section a {
  color: #a3d1d6;
}
[data-page-context=new-unsubscribe] form[action="/page/49060/data/2"] .mobile-join-button {
  background-color: #00bfb3;
  border-radius: 0;
}
[data-page-context=new-unsubscribe] form[action="/page/49060/data/2"] .mobile-advocacy-header .mobile-join-button {
  display: none;
}
[data-page-context=new-unsubscribe] .mobile-join-button {
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
[data-page-context=new-unsubscribe] .mobile-join-button a {
  color: white;
}
[data-page-context=new-unsubscribe] .latino-header-join-button {
  display: none;
}
[data-page-context=new-unsubscribe] .en__field--178 {
  visibility: hidden;
}
[data-page-context=new-unsubscribe] .en__submit {
  margin-top: 32px;
}
[data-page-context=new-unsubscribe] form[action="/page/48122/subscriptions/2"] .en__submit button,
[data-page-context=new-unsubscribe] form[action="/page/53017/data/2"] .en__submit button,
[data-page-context=new-unsubscribe] form[action="/page/55607/data/2"] .en__submit button,
[data-page-context=new-unsubscribe] form[action="/page/49041/subscriptions/2"] .en__submit button,
[data-page-context=new-unsubscribe] form[action="/page/52319/subscriptions/2"] .en__submit button {
  background-color: #ef4136;
  border-radius: 0;
}
[data-page-context=new-unsubscribe] .privacy-policy {
  text-align: center;
}
[data-page-context=new-unsubscribe] .less-emails-header,
[data-page-context=new-unsubscribe] .reduce-graphic-imagery-header {
  justify-content: flex-start;
  align-items: center;
}
@media screen and (min-width: 480px) {
  [data-page-context=new-unsubscribe] .less-emails-header h3,
  [data-page-context=new-unsubscribe] .reduce-graphic-imagery-header h3 {
    font-size: 26px;
  }
}
@media screen and (max-width: 479px) {
  [data-page-context=new-unsubscribe] .less-emails-header h3,
  [data-page-context=new-unsubscribe] .reduce-graphic-imagery-header h3 {
    font-size: 16px;
    font-weight: 600;
  }
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
  [data-page-context=new-unsubscribe] form[action="/page/48122/subscriptions/2"].en__component .en__component--row--1:nth-of-type(2) > .en__component.en__component--column--1,
  [data-page-context=new-unsubscribe] form[action="/page/53017/data/2"].en__component .en__component--row--1:nth-of-type(2) > .en__component.en__component--column--1,
  [data-page-context=new-unsubscribe] form[action="/page/55607/data/2"].en__component .en__component--row--1:nth-of-type(2) > .en__component.en__component--column--1,
  [data-page-context=new-unsubscribe] form[action="/page/49041/subscriptions/2"].en__component .en__component--row--1:nth-of-type(2) > .en__component.en__component--column--1,
  [data-page-context=new-unsubscribe] form[action="/page/52319/subscriptions/2"].en__component .en__component--row--1:nth-of-type(2) > .en__component.en__component--column--1 {
    /* margin-left: 32px; */
  }
  [data-page-context=new-unsubscribe] .incorrect-email-link {
    line-height: 22px;
  }
  [data-page-context=new-unsubscribe] .incorrect-email-link p {
    height: 44px;
  }
  [data-page-context=new-unsubscribe] .manage-emails-text-block {
    margin-bottom: 25px;
  }
  [data-page-context=new-unsubscribe] .manage-emails-text-block h1 {
    font-size: 32px;
  }
  [data-page-context=new-unsubscribe] #en__field_supporter_emailAddress {
    padding-bottom: 8px;
  }
  [data-page-context=new-unsubscribe] #en__field_supporter_emailAddress {
    width: 100%;
  }
  [data-page-context=new-unsubscribe] .graphic-imagery-section {
    margin-top: 32px;
  }
  [data-page-context=new-unsubscribe] .less-emails-section .hide-paragraph-button,
  [data-page-context=new-unsubscribe] .graphic-imagery-section .hide-paragraph-button {
    display: none;
  }
  [data-page-context=new-unsubscribe] .section-paragraph {
    height: 100%;
    animation: none;
  }
  [data-page-context=new-unsubscribe] .unsubscribe-options-header h3 {
    font-size: 26px;
    margin-top: 0;
  }
  [data-page-context=new-unsubscribe] .mobile-advocacy-header {
    column-gap: 10%;
    justify-content: center;
    width: 100%;
  }
  [data-page-context=new-unsubscribe] .mobile-advocacy-section {
    width: 100%;
  }
  [data-page-context=new-unsubscribe] .en__submit {
    margin-top: 0px;
  }
  [data-page-context=new-unsubscribe] .privacy-policy {
    text-align: left;
  }
}
[data-page-context=new-unsubscribe] .dcf-receive-fewer-emails-container-and-reduce-graphic-imagery-container {
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 0 1rem 2rem 1rem;
  display: grid !important;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-auto-rows: 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  justify-items: center;
}
[data-page-context=new-unsubscribe] .dcf-receive-fewer-emails-container-and-reduce-graphic-imagery-container .en__field--checkbox .en__field__item {
  padding-top: 0px !important; /* PETA Latino pages have a different value than vanilla PETA pages, this makes them the same */
}
[data-page-context=new-unsubscribe] .dcf-receive-fewer-emails-container-and-reduce-graphic-imagery-container .en__field--checkbox .en__field__label--item {
  margin-top: 0px !important; /* PETA Latino pages have a different value than vanilla PETA pages, this makes them the same */
  margin-left: 0px !important; /* PETA Latino pages have a different value than vanilla PETA pages, this makes them the same */
}
[data-page-context=new-unsubscribe] .dcf-receive-fewer-emails-container-and-reduce-graphic-imagery-container .en__field__label {
  line-height: 1.4 !important; /* PETA Latino pages have a different value than vanilla PETA pages, this makes them the same */
}
[data-page-context=new-unsubscribe] .dcf-receive-fewer-emails-container-and-reduce-graphic-imagery-container .en__field__input--checkbox {
  margin: 0 !important;
  flex-basis: initial;
}
[data-page-context=new-unsubscribe] .dcf-receive-fewer-emails-container-and-reduce-graphic-imagery-container .en__field--checkbox label {
  width: 100%;
}
[data-page-context=new-unsubscribe] .dcf-receive-fewer-emails-container-and-reduce-graphic-imagery-container #en__field_supporter_questions_1855 + label {
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute !important;
  width: 1px;
}
[data-page-context=new-unsubscribe] .dcf-receive-fewer-emails-container-and-reduce-graphic-imagery-container #en__field_supporter_NOT_TAGGED_134 {
  width: 23px;
  height: 23px;
}
[data-page-context=new-unsubscribe] .dcf-receive-fewer-emails-container-and-reduce-graphic-imagery-container + div .en__field--checkbox[style*=overflow-x] {
  display: none; /* Hides Remember Me which was showing up on PETA Latino pages */
}
[data-page-context=new-unsubscribe] .dcf-receive-fewer-emails-container {
  justify-self: flex-end;
}
[data-page-context=new-unsubscribe] .dcf-reduce-graphic-imagery-container {
  justify-self: flex-start;
}
[data-page-context=new-unsubscribe] .dcf-receive-fewer-emails-container,
[data-page-context=new-unsubscribe] .dcf-reduce-graphic-imagery-container {
  border: 1px solid #c5c5c5;
  border-radius: 4px;
  max-width: 352px;
  padding: 1rem;
  flex: 1 0 auto;
  height: 100%;
}
[data-page-context=new-unsubscribe] .dcf-receive-fewer-emails-container .en__field__item,
[data-page-context=new-unsubscribe] .dcf-reduce-graphic-imagery-container .en__field__item {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0;
  gap: 15px;
}
[data-page-context=new-unsubscribe] .dcf-receive-fewer-emails-container label,
[data-page-context=new-unsubscribe] .dcf-reduce-graphic-imagery-container label {
  font-size: 22px !important;
  font-weight: 700;
  flex-basis: 100%;
  padding-bottom: 0;
}
[data-page-context=new-unsubscribe] .dcf-receive-fewer-emails-container p,
[data-page-context=new-unsubscribe] .dcf-reduce-graphic-imagery-container p {
  line-height: 1.25rem;
  font-size: 14px;
  padding-bottom: 0;
}
[data-page-context=new-unsubscribe] .dcf-receive-fewer-emails-container .en__field__element--checkbox .en__field__item,
[data-page-context=new-unsubscribe] .dcf-reduce-graphic-imagery-container .en__field__element--checkbox .en__field__item {
  padding-bottom: 0;
}
[data-page-context=new-unsubscribe] .dcf-receive-fewer-emails-container .en__field--1855 {
  display: flex !important; /* PETA Latino pages have a different value than vanilla PETA pages, this makes them the same */
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
}
[data-page-context=new-unsubscribe] .el-receive-fewer-emails-container,
[data-page-context=new-unsubscribe] .el-reduce-graphic-imagery-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
[data-page-context=new-unsubscribe] .el-receive-fewer-emails-container > *:first-child,
[data-page-context=new-unsubscribe] .el-reduce-graphic-imagery-container > *:first-child {
  border: 1px solid #c5c5c5;
  max-width: 775px;
  padding: 24px 32px 32px 32px;
  margin-bottom: 48px;
}
[data-page-context=new-unsubscribe] .privacy-policy {
  max-width: 630px;
  margin-left: auto;
  margin-right: auto;
}
[data-page-context=new-unsubscribe] .email-preferences-copy {
  max-width: 630px;
  margin-left: auto;
  margin-right: auto;
}
[data-page-context=new-unsubscribe] .en__component--advcolumn.center .en__field--emailAddress {
  max-width: 450px;
  margin-bottom: 1rem;
  margin-left: auto;
  margin-right: auto;
}
@media (max-width: 900px) {
  [data-page-context=new-unsubscribe] .dcf-receive-fewer-emails-container-and-reduce-graphic-imagery-container {
    display: flex !important;
    flex-direction: column;
  }
  [data-page-context=new-unsubscribe] .dcf-receive-fewer-emails-container,
  [data-page-context=new-unsubscribe] .dcf-reduce-graphic-imagery-container {
    max-width: 450px;
  }
}
@media (min-width: 900px) {
  [data-page-context=new-unsubscribe] .el-opt-in-columns {
    justify-content: center;
  }
  [data-page-context=new-unsubscribe] .el-opt-in-column {
    max-width: 379px;
  }
  [data-page-context=new-unsubscribe] .preference-update-header {
    margin: 0 auto;
    max-width: 712px;
    margin-bottom: 48px;
  }
  [data-page-context=new-unsubscribe] .preference-update-header h1 {
    font-size: 54px;
    font-weight: 800;
    line-height: 38px;
  }
  [data-page-context=new-unsubscribe] .preference-update-header h2 {
    font-size: 26px;
    line-height: 38px;
    margin-top: 10px;
  }
  [data-page-context=new-unsubscribe] .mobile-advocacy-header,
  [data-page-context=new-unsubscribe] .mobile-advocacy-section,
  [data-page-context=new-unsubscribe] form[action="/page/49060/data/2"] .mobile-advocacy-header,
  [data-page-context=new-unsubscribe] form[action="/page/49060/data/2"] .mobile-advocacy-section {
    background: transparent;
  }
  [data-page-context=new-unsubscribe] .mobile-advocacy-header {
    height: auto;
    overflow: visible;
    justify-content: initial;
  }
  [data-page-context=new-unsubscribe] .mobile-advocacy-header p:not(.mobile-join-button) {
    font-size: 32px;
    width: 240px;
    line-height: 38px;
    padding: 0;
    margin-top: 37px;
    margin-left: 50px;
  }
  [data-page-context=new-unsubscribe] .mobile-advocacy-header img {
    width: 258px;
    height: auto;
    transform: scaleX(-1);
    right: -70px;
    bottom: -140px;
    position: absolute;
  }
  [data-page-context=new-unsubscribe] .mobile-advocacy-section {
    padding: 26px 62px;
  }
  [data-page-context=new-unsubscribe] .mobile-advocacy-section > p:nth-child(2) {
    font-size: 13px;
  }
  [data-page-context=new-unsubscribe] .mobile-advocacy-section p:last-child {
    line-height: 20px;
  }
  [data-page-context=new-unsubscribe] .latino-mobile-advocacy-header {
    display: flex;
    flex-direction: column;
    row-gap: 32px;
  }
  [data-page-context=new-unsubscribe] form[action="/page/49060/data/2"] .mobile-advocacy-header .mobile-join-button {
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
  [data-page-context=new-unsubscribe] form[action="/page/49060/data/2"] .mobile-advocacy-section .mobile-join-button {
    display: none;
  }
  [data-page-context=new-unsubscribe] form[action="/page/49060/data/2"] .mobile-advocacy-parent {
    background-image: linear-gradient(-70deg, #19252e, #19252e 55%, #5160f1 38%, #5160f1);
  }
  [data-page-context=new-unsubscribe] form[action="/page/49060/data/2"] .mobile-advocacy-header img {
    width: 320px;
    right: -110px;
    bottom: -180px;
  }
  [data-page-context=new-unsubscribe] .mobile-advocacy-parent {
    background-image: linear-gradient(-70deg, #254d68, #254d68 55%, #418fde 38%, #418fde);
    flex-direction: row;
    overflow: hidden;
    height: 305px;
  }
}
@media screen and (max-width: 600px) {
  [data-page-context=new-unsubscribe] .unsubscribe-options-header h3 {
    margin-top: 0px;
  }
}
@media screen and (max-width: 832px) {
  [data-page-context=new-unsubscribe] .unsubscribe-options-header > * {
    max-width: 100%;
  }
}
[data-page-context=new-unsubscribe] [name="supporter.questions.1855"],
[data-page-context=new-unsubscribe] [name="supporter.NOT_TAGGED_134"],
[data-page-context=new-unsubscribe] div:not(.less-emails-picker) > .en__field--1855 > label {
  cursor: pointer;
}
[data-page-context=new-unsubscribe]:not(#en__pagebuilder) div:not(.dcf-receive-fewer-emails-container) > div > .en__field--1855 {
  display: none;
}
[data-page-context=new-unsubscribe]:not(#en__pagebuilder):not([data-status=unsubscribe]) .has-status_unsubscribe, [data-page-context=new-unsubscribe]:not(#en__pagebuilder):not([data-status=update]) .has-status_update {
  display: none;
}
[data-page-context=new-unsubscribe][data-custom-js=loaded] {
  opacity: 1;
}`)),document.head.appendChild(e)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();
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

const setBodyAttributes = () => {
  // This function sets custom attributes to the body based on URL and pageJson

  function setBodyAttributes() {
    const url = new URL(window.location.href);

    // If the URL contains any of the specified page IDs, set data-page-context to "new-unsubscribe"
    if (/48122|49041|52319|53017|55607|48210|48388|49060/.test(url.pathname)) {
      document.body.setAttribute("data-page-context", "new-unsubscribe");
    }

    // Assuming `pageJson` is a global variable, if it exists and contains a pageType, set data-page-type to its value
    if (window.pageJson && window.pageJson.pageType) {
      document.body.setAttribute("data-page-type", window.pageJson.pageType);
    }
  }

  setBodyAttributes();
};

const setUnsubscribeAllOnClick = () => {
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

const toggleSubscriptionCheckboxOnClick = () => {
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
    // let subscriptionDescriptions = document.querySelectorAll(
    //   ".subscription_description"
    // );

    // for each title, bind a click event listener
    subscriptionTitles.forEach((title, index) => {
      let input = title.querySelector('input[type="checkbox"]');
      let titleLabel = title.querySelector("label");

      // for the corresponding title label
      titleLabel.addEventListener("click", (event) => {
        // console.log("title clicked", event);
        event.preventDefault();
        if (event.target.tagName !== "INPUT") input.checked = !input.checked;

        // Create a bubbling change event and dispatch it
        const changeEvent = new Event("change", { bubbles: true });
        input.dispatchEvent(changeEvent);
      });

      // for the corresponding description paragraph
      // let description = subscriptionDescriptions[index];
      // description.addEventListener("click", (event) => {
      //   // console.log("description clicked", event);
      //   event.preventDefault();
      //   if (event.target.tagName !== "INPUT") input.checked = !input.checked;

      //   // Create a bubbling change event and dispatch it
      //   const changeEvent = new Event("change", { bubbles: true });
      //   input.dispatchEvent(changeEvent);
      // });
    });
  }
  toggleSubscriptionCheckboxOnClick();
};

const addSVGAndH3ClickListeners = () => {
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

const emailDisabler = () => {
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

const updateLabelContents = () => {
  function updateLabelContents() {
    const langValue = document.documentElement.getAttribute("lang");

    // Get the label for the ".dcf-receive-fewer-emails-container" element
    const fewerEmailsLabel = document.querySelector(
      ".dcf-receive-fewer-emails-container label"
    );

    // If the label exists
    if (fewerEmailsLabel) {
      if (langValue === "es") {
        // Update the label's contents
        fewerEmailsLabel.textContent = "Recibir menos correos electrónicos";
      } else {
        // Update the label's contents
        fewerEmailsLabel.textContent = "Receive Fewer E-Mails";
      }
    }

    // Get the label for the ".dcf-reduce-graphic-imagery-container" element
    const reduceGraphicImageryLabel = document.querySelector(
      ".dcf-reduce-graphic-imagery-container label"
    );

    // If the label exists
    if (reduceGraphicImageryLabel) {
      // Update the label's contents
      if (langValue === "es") {
        reduceGraphicImageryLabel.textContent =
          "Reducir las imágenes sensibles";
      } else {
        reduceGraphicImageryLabel.textContent = "Reduce Graphic Imagery";
      }
    }
  }

  // Call the function
  updateLabelContents();
};

// Encapsulate your code into a function
const runScript = () => {
  setBodyAttributes();
  // convert1855CheckboxToRadioButtons();
  setUnsubscribeAllOnClick();
  toggleSubscriptionCheckboxOnClick();
  // toggleCheckboxOnClickOrTouch();
  // toggleSectionParagraphVisibility();
  addSVGAndH3ClickListeners();
  emailDisabler();
  updateLabelContents();

  const lessEmailsRadioSelect = document.querySelector(".less-emails-picker");
  const field1855Component = document.querySelector(
    ".en__component--formblock .en__field--1855"
  );

  // Check if both elements exist
  if (lessEmailsRadioSelect && field1855Component) {
    // Clear the contents of lessEmailsRadioSelect
    lessEmailsRadioSelect.innerHTML = "";
    // Move field1855Component into lessEmailsRadioSelect
    lessEmailsRadioSelect.appendChild(field1855Component);
  }

  /**
   * toggleSliderAndCheckbox - Toggles the 'slider-disabled' and 'slider-enabled' classes on the SVG element and
   * also toggles the checked state of the associated checkbox. On first run, it also hides the
   * checkbox field container. The initial state of the SVG slider reflects the initial state of the checkbox.
   * @param {string} svgSelector - The CSS selector for the SVG element.
   * @param {string} checkboxSelector - The CSS selector for the checkbox element.
   * @param {string} checkboxWrapperSelector - The CSS selector for the checkbox wrapper element.
   */
  function toggleSliderAndCheckbox(
    svgSelector,
    checkboxSelector,
    checkboxWrapperSelector
  ) {
    // Get the SVG element
    const svg = document.querySelector(svgSelector);

    // Get the checkbox element
    const checkbox = document.querySelector(checkboxSelector);

    // Get the checkbox wrapper element
    const checkboxWrapper = document.querySelector(checkboxWrapperSelector);

    // If the SVG and checkbox exist
    if (svg && checkbox) {
      // Hide the checkbox wrapper
      checkboxWrapper.style.display = "none";

      // Set the initial state of the SVG slider to reflect the checkbox state
      if (checkbox.checked) {
        svg.classList.remove("slider-disabled");
        svg.classList.add("slider-enabled");
      } else {
        svg.classList.remove("slider-enabled");
        svg.classList.add("slider-disabled");
      }

      // Function to toggle the slider and checkbox states
      const toggleStates = () => {
        // If the checkbox is checked
        console.log("checkbox", checkbox);
        if (checkbox.checked) {
          // Uncheck the checkbox
          checkbox.checked = false;

          // Remove 'slider-enabled' and add 'slider-disabled'
          svg.classList.remove("slider-enabled");
          svg.classList.add("slider-disabled");
        } else {
          // Check the checkbox
          checkbox.checked = true;

          // Remove 'slider-disabled' and add 'slider-enabled'
          svg.classList.remove("slider-disabled");
          svg.classList.add("slider-enabled");
        }
      };

      // Add click event listener
      svg.addEventListener("click", toggleStates);

      // Add touchend event listener for touch devices
      // svg.addEventListener("touchend", toggleStates);
    }
  }

  // Call the function for each SVG/checkbox pair
  toggleSliderAndCheckbox(
    ".el-receive-fewer-emails-container .graphic-slider",
    'input[type="checkbox"]#en__field_supporter_questions_1855',
    ".en__field--question.en__field--1855"
  );
  toggleSliderAndCheckbox(
    ".el-reduce-graphic-imagery-container .graphic-slider",
    'input[type="checkbox"]#en__field_supporter_NOT_TAGGED_134',
    ".en__field--NOT_TAGGED_134"
  );

  /**
   * This function is used to move the '.required-action-team-fields' element to the
   * next sibling element of the parent of the '.en__field--peta-action-team-alerts' element.
   * If the parent or the next sibling of the parent do not exist,
   * the '.required-action-team-fields' element will not be moved.
   * Event listeners attached to '.required-action-team-fields' will not be affected by the move.
   */

  function moveActionTeamFields() {
    let actionTeamDesc = document.querySelector(
      ".en__field--peta-action-team-alerts"
    );
    actionTeamDesc =
      actionTeamDesc?.parentElement?.nextElementSibling || actionTeamDesc;

    const actionTeamFields = document.querySelector(
      ".required-action-team-fields"
    );

    if (actionTeamDesc && actionTeamFields) {
      let actionTeamFieldsFirstName = actionTeamFields.querySelector(
        '[for="en__field_supporter_firstName"]'
      );
      actionTeamFieldsFirstName.insertAdjacentHTML(
        "afterbegin",
        '<span class="en__field__label action-team-signup-field-label" style="">Action Team Signup:</span>'
      );
      actionTeamDesc.after(actionTeamFields);
    }
  }

  // Call the function
  moveActionTeamFields();

  /**
   * Function to move the '.en__field--NOT_TAGGED_134' field into the
   * '.reduce-graphic-imagery-picker' element, replacing any contents that might already be there.
   */
  function moveNotTagged134Field() {
    // Find the elements we need
    const reduceGraphicImageryRadioSelect = document.querySelector(
      ".reduce-graphic-imagery-picker"
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

  // Shouldn't be checked by default on DCF pageload
  const dcfReducedEmailCheckbox = document.querySelector(
    ".dcf-receive-fewer-emails-container #en__field_supporter_questions_1855"
  );

  // If the checkbox exists
  if (dcfReducedEmailCheckbox) {
    // Uncheck the checkbox
    dcfReducedEmailCheckbox.checked = false;

    // Need this second one because it was unchecking on PETA Latino pages
    window.addEventListener("load", function () {
      dcfReducedEmailCheckbox.checked = false;
    });
  }

  (function toggleCheckboxOnClick() {
    let label = document.querySelector(
      "div:not(.less-emails-picker) > .en__field--1855 > label"
    );
    let checkbox = document.querySelector(
      'input[name="supporter.questions.1855"]'
    );

    if (label && checkbox) {
      label.addEventListener("click", () => {
        checkbox.checked = !checkbox.checked;
      });
    }
  })();

  (function setStatusAttributeFromURL() {
    // Create a URLSearchParams object
    let params = new URLSearchParams(window.location.search);

    // Check if the 'status' parameter is in the URL
    if (params.has("status")) {
      // If 'status' is found, get its value and set it as an attribute on the body
      let statusValue = params.get("status");
      document.body.setAttribute("data-status", statusValue);
    }
  })();

  // const lessEmailsBox = document.createElement("input");
  // lessEmailsBox.id = "en__field_supporter_questions_1855";
  // lessEmailsBox.type = "checkbox";
  // lessEmailsBox.classList.add("en__field__input", "en__field__input--checkbox");
  // lessEmailsBox.name = "supporter.questions.1855";
  // lessEmailsBox.value = "Y";
  // lessEmailsBox.style.visibility = "hidden";
  // document.querySelector(".less-emails-section").appendChild(lessEmailsBox);
  const lessEmailsBox = document.querySelector(
    "#en__field_supporter_questions_1855"
  );

  const lessEmailsBtn = document.querySelector(".less-emails-button");
  if (lessEmailsBtn && lessEmailsBox) {
    lessEmailsBtn.addEventListener("click", (e) => {
      lessEmailsBox.checked = "true";
      const submitBtn = document.querySelector(".en__submit button");
      if (submitBtn) {
        submitBtn.click();
      }
    });
  }

  // If the URL is 53017, wich is for cold visitors, we should unchecked the Master Supression list checkbox on page load
  /**
   * This function unchecks the "supporter.questions.178" checkbox if it exists.
   * It runs only when "53017" is present anywhere in the URL.
   */
  function uncheckQuestions178Checkbox() {
    const url = window.location.href;
    if (url.includes("53017" )) {
      const questions178Checkbox = document.querySelector(
        "input[name='supporter.questions.178']"
      );
      if (questions178Checkbox) {
        questions178Checkbox.checked = false;
      }
    }
  }

  // Call the function to uncheck the checkbox if the condition is met
  uncheckQuestions178Checkbox();

  console.log("PETA Custom JS loaded");
  document.body.setAttribute("data-custom-js", "loaded");
};

if (document.readyState === "loading") {
  // If the content is still loading, add an event listener for DOMContentLoaded
  document.addEventListener("DOMContentLoaded", runScript);
} else {
  // If the content has already loaded, run the function immediately
  runScript();
}
