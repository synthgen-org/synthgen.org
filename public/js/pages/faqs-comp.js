class FAQSComp extends BaseContent  {
    constructor() {
        super();
        this.shadowRoot.innerHTML = `
            <style>
                /* Add faqs-comp styles here */
            </style>
            <h2>Welcome to the FAQs Page!</h2>
        `;
    }
}
customElements.define("faqs-comp", FAQSComp);