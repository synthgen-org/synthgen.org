class HomeComp extends BaseContent {
    constructor() {
        super();
        this.shadowRoot.innerHTML = `
            <style>
                /* Add home-comp styles here */
            </style>
            <h2>Welcome to the Home Page!</h2>
        `;
    }
}
customElements.define("home-comp", HomeComp);