class GetStartedComp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
            <style>
                /* Add get-started-comp styles here */
            </style>
            <h2>Welcome to the Get Started Page!</h2>
        `;
    }
}
customElements.define("get-started-comp", GetStartedComp);