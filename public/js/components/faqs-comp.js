class FAQSComp extends BaseContent  {
    constructor() {
        super();
        this.shadowRoot.innerHTML = `
            <section id="faqs">
            <h2>Frequently Asked Questions</h2>
            
            <article>
                <h3>Q: What is an AI-generated content marker?</h3>
                <p>A: An AI-generated content marker is a visual or digital identifier that signifies that the content has been created using artificial intelligence technology. It provides transparency and informs the audience about the source of the content.</p>
            </article>

            <article>
                <h3>Q: Why should I use AI-generated content markers?</h3>
                <p>A: Using AI-generated content markers adds transparency to your content, building trust with your audience. It showcases the innovative use of AI technology in your creative process and helps distinguish AI-generated content from other types of content.</p>
            </article>

            <article>
                <h3>Q: How can I integrate AI-generated content markers into my website or publication?</h3>
                <p>A: Integration is simple! Depending on your platform, you can use our provided code snippets, plugins for popular content management systems, or our authentication API. Choose the method that best fits your technical requirements.</p>
            </article>

            <article>
                <h3>Q: Can I customize the appearance of the content markers?</h3>
                <p>A: Absolutely! SynthGen.org offers customization options, allowing you to tailor the appearance of your AI-generated content markers to match your brand identity. Choose from various colors, sizes, and other design elements.</p>
            </article>

            <article>
                <h3>Q: Is there a verification process for the AI-generated content markers?</h3>
                <p>A: Yes, we provide verification tools and an authentication API to ensure the proper functioning of your content markers. This allows you to confirm that the markers are effectively signifying AI-generated content.</p>
            </article>

            <article>
                <h3>Q: What types of AI-generated content markers do you offer?</h3>
                <p>A: We offer a variety of markers, including badges and watermarks. You can choose the type that best fits your content and branding strategy, adding a unique touch to your AI-generated creations.</p>
            </article>

            <p>Have more questions? Feel free to <a part="link" href="/contact">contact us</a>, and we'll be happy to assist you!</p>
        </section>
        `;
    }
}
customElements.define("faqs-comp", FAQSComp);