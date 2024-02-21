class ServicesComp extends BaseContent {
    constructor() {
        super();
        this.shadowRoot.innerHTML = `
            <style>
                /* Add services-comp styles here */
            </style>
            <h2>Welcome to the Services page!</h2>
        `;
    }
}
customElements.define("services-comp", ServicesComp);