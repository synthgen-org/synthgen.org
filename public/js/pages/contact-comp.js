class ContactComp extends BaseContent  {
    constructor() {
        super();
        this.shadowRoot.innerHTML = `
            <style>
                /* Add contact-comp styles here */
            </style>
            <h2>Welcome to the Contact Page!</h2>
        `;
    }
}
customElements.define("contact-comp", ContactComp);