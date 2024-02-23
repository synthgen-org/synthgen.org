// thank-you-comp.js
class SubmitContactComp extends BaseContent {
    constructor() {
      super();
      this.shadowRoot.innerHTML = `
        <style>
            /* Add styles for thank-you component */
        </style>
        <h2>Thank You! - Submit Contact </h2>
        <p>Your form has been submitted successfully.</p>
      `;
    }
  }
  
  customElements.define("submit-contact-comp", SubmitContactComp);
  