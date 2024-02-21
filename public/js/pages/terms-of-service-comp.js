class TermsOfServicesComp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
            <style>
                /* Add terms-of-services-comp styles here */
            </style>
            <h2>Welcome to the Terms of Service page!</h2>
        `;
    }
}
customElements.define("terms-of-services-comp", TermsOfServicesComp);