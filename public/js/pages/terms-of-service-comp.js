class TermsOfServiceComp extends BaseContent {
    constructor() {
        super();
        this.shadowRoot.innerHTML = `
            <style>
                /* Add terms-of-services-comp styles here */
            </style>
            <h2>Welcome to the Terms of Service page!</h2>
        `;
    }
}
customElements.define("terms-of-service-comp", TermsOfServiceComp);