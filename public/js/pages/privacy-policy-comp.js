class PrivacyPolicyComp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
            <style>
                /* Add privacy-policy-comp styles here */
            </style>
            <h2>Welcome to the Privacy Policy page!</h2>
        `;
    }
}
customElements.define("privacy-policy-comp", PrivacyPolicyComp);