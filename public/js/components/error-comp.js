class ErrorComp extends BaseContent {
    constructor() {
      super();
      this.shadowRoot.innerHTML = `
        <h2>Error</h2><p>Oops! Something went wrong.</p>
      `;
    }
  }
  customElements.define('error-comp', ErrorComp);
  