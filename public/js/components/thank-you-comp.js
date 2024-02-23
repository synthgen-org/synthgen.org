// thank-you-comp.js
class ThankYouComp extends BaseContent {
    constructor() {
      super();
      this.shadowRoot.innerHTML = `
        <style>
            /* Add styles for thank-you component */
        </style>
        <h2>Thank You!</h2>
        <p>Your form has been submitted successfully.</p>
      `;
    }
  }
  
  customElements.define("thank-you-comp", ThankYouComp);
  