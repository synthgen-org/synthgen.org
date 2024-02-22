class TermsOfServiceComp extends BaseContent {
    constructor() {
        super();
        this.shadowRoot.innerHTML = `
            <style>
                /* Add terms-of-services-comp styles here */
            </style>
            <section id="terms">
                <h2>Terms of Service</h2>
                
                <article>
                    <h3>1. Acceptance of Terms</h3>
                    <p>By accessing or using SynthGen.org, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
                </article>

                <article>
                    <h3>2. Description of Services</h3>
                    <p>SynthGen.org provides a platform for the implementation of AI-generated content markers. We reserve the right to modify or discontinue any aspect of our services at any time without notice.</p>
                </article>

                <article>
                    <h3>3. User Responsibilities</h3>
                    <p>Users are responsible for maintaining the confidentiality of their account information, including passwords. You are also responsible for all activities that occur under your account.</p>
                </article>

                <article>
                    <h3>4. Intellectual Property</h3>
                    <p>All content and materials available on SynthGen.org, including but not limited to text, graphics, logos, icons, and images, are the property of SynthGen.org or its licensors.</p>
                </article>

                <article>
                    <h3>5. Privacy Policy</h3>
                    <p>Your use of SynthGen.org is also governed by our Privacy Policy, which can be found at <a href="/privacy-policy">here</a>.</p>
                </article>

                <article>
                    <h3>6. Termination</h3>
                    <p>We reserve the right to terminate or suspend your account and access to our services for any reason, without prior notice.</p>
                </article>

                <article>
                    <h3>7. Changes to Terms of Service</h3>
                    <p>We may update these Terms of Service from time to time. Any changes will be effective immediately upon posting. It is your responsibility to review the Terms of Service periodically.</p>
                </article>

                <p>If you have any questions or concerns regarding our Terms of Service, please <a href="/contact">contact us</a>.</p>
            </section>
        `;
    }
}
customElements.define("terms-of-service-comp", TermsOfServiceComp);