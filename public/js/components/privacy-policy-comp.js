class PrivacyPolicyComp extends BaseContent {
    constructor() {
        super();
        this.shadowRoot.innerHTML = `
            <section id="privacy-policy">
                <h2>Privacy Policy</h2>

                <article>
                    <p>Your privacy is important to us. This Privacy Policy outlines the types of personal information we collect when you use SynthGen.org, how we use it, and the steps we take to protect it.</p>
                </article>

                <article>
                    <h3>1. Information We Collect</h3>
                    <p>We may collect personal information, such as names, email addresses, and user preferences, when voluntarily submitted by our users. We also collect non-personal information, such as browser type and IP address, for analytical purposes.</p>
                </article>

                <article>
                    <h3>2. How We Use Your Information</h3>
                    <p>We use the information collected to provide and improve our services, personalize user experience, and communicate with users. We may also use aggregated, non-personal information for statistical analysis.</p>
                </article>

                <article>
                    <h3>3. Information Sharing</h3>
                    <p>We do not sell, trade, or otherwise transfer your personal information to outside parties. This does not include trusted third parties who assist us in operating our website or servicing you, as long as those parties agree to keep this information confidential.</p>
                </article>

                <article>
                    <h3>4. Security Measures</h3>
                    <p>We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
                </article>

                <article>
                    <h3>5. Cookies</h3>
                    <p>We use cookies to enhance your experience on our site. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your web browser, enabling the site's systems to recognize your browser and capture and remember certain information.</p>
                </article>

                <article>
                    <h3>6. Changes to Privacy Policy</h3>
                    <p>We may update this Privacy Policy from time to time. Any changes will be effective immediately upon posting. It is your responsibility to review the Privacy Policy periodically.</p>
                </article>

                <p>If you have any questions or concerns regarding our Privacy Policy, please <a part="link"  href="/contact">contact us</a>.</p>
            </section>
        `;
    }
}
customElements.define("privacy-policy-comp", PrivacyPolicyComp);