class PrivacyPolicyComp extends BaseContent {
    constructor() {
        super();
        this.shadowRoot.innerHTML = `
            <style>
                /* Add privacy-policy-comp styles here */
            </style>
            <h2>Welcome to the Privacy Policy page!</h2>
        `;
    }
}
customElements.define("privacy-policy-comp", PrivacyPolicyComp);