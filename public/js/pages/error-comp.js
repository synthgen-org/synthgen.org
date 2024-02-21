class ErrorComp extends BaseContent {
    constructor() {
      super();
      this.shadowRoot.innerHTML = `
        <style>
          /* Add error-comp styles here */
        </style>
        <h2>Error</h2><p>Oops! Something went wrong.</p>
      `;
    }
  }
  customElements.define('error-comp', ErrorComp);
  