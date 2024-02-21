class AboutComp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
            <style>
                /* Add home-comp styles here */
            </style>
            <h2>Welcome to About!</h2>
        `;
    }
}
customElements.define("about-comp", AboutComp);