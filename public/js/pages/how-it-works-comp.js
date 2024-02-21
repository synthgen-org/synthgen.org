class HowItWorksComp extends BaseContent {
    constructor() {
        super();
        this.shadowRoot.innerHTML = `
            <style>
                /* Add how-it-works-comp styles here */
            </style>
            <h2>Welcome to the How it works page!</h2>
        `;
    }
}
customElements.define("how-it-works-comp", HowItWorksComp);