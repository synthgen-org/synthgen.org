class ContactComp extends BaseContent  {
    constructor() {
        super();
        this.shadowRoot.innerHTML = `
            <style>

            section {
                max-width: 600px;
                margin: 0 auto;
            }

            article {
                margin-bottom: 20px;
            }

            form {
                display: grid;
                gap: 10px;
            }

            label {
                font-weight: bold;
            }

            input,
            textarea {
                width: 100%;
                padding: 8px;
                box-sizing: border-box;
            }

            button {
                padding: 10px;
                background-color: #3498db;
                color: #fff;
                border: none;
                cursor: pointer;
            }

            button:hover {
                background-color: #2980b9;
            }
            </style>
            <section id="contact">
            <h2>Contact Us</h2>
            <p>Have questions or need assistance? Reach out to us using the contact information below or fill out the form, and we'll get back to you as soon as possible:</p>

            <article>
                <h3>Email</h3>
                <p>For general inquiries: <a part="link"  href="mailto:info@synthgen.org">info@synthgen.org</a></p>
                <p>For support: <a part="link" href="mailto:support@synthgen.org">support@synthgen.org</a></p>
            </article>

            <article>
                <h3>Phone</h3>
                <p>Call us at: +1 (555) 123-4567</p>
            </article>

            <article>
                <h3>Address</h3>
                <p>Visit us at: 123 SynthGen Street, Tech City, AI 56789</p>
            </article>

            <article>
                <h3>Contact Form</h3>
                <form action="/submit-contact" method="post">
                    <label for="name">Your Name:</label>
                    <input type="text" id="name" name="name" required>

                    <label for="email">Your Email:</label>
                    <input type="email" id="email" name="email" required>

                    <label for="message">Your Message:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>

                    <button type="submit">Submit</button>
                </form>
            </article>

            <p>We look forward to hearing from you!</p>
        </section>
        `;
    }
}
customElements.define("contact-comp", ContactComp);