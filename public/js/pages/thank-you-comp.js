class ThankYouComp extends BaseContent {
    constructor() {
        super();
        this.shadowRoot.innerHTML = `
            <style>
                /* Add thank-you-comp styles here */
            </style>
            <h2>Thank You!</h2>
            <p id="thank-you-message"></p>
        `;
    }

    connectedCallback() {
        const message = this.getAttribute('message') || 'Form submitted successfully!';
        this.shadowRoot.getElementById('thank-you-message').innerText = message;
    }
}

customElements.define('thank-you-comp', ThankYouComp);