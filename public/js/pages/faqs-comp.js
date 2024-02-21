class FAQSComp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
            <style>
                /* Add faqs-comp styles here */
            </style>
            <h2>Welcome to the FAQs Page!</h2>
        `;
    }
}
customElements.define("faqs-comp", FAQSComp);