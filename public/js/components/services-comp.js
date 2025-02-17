class ServicesComp extends BaseContent {
  constructor() {
    super();
    this.shadowRoot.innerHTML = `
            <section id="services">
            <h2>Our Services</h2>
            <p>At SynthGen.org, we offer a range of services designed to help you transparently mark and authenticate AI-generated content. Explore our offerings below:</p>
            
            <article>
                <h3>AI-Generated Content Badges</h3>
                <p>Stand out with our AI-generated content badges. Easily integrate these badges into your content to let your audience know that what they're experiencing is the result of innovative AI technology.</p>
                <p>Benefits:</p>
                <ul>
                    <li>Instant Recognition</li>
                    <li>Enhanced Credibility</li>
                    <li>Customizable Designs</li>
                </ul>
                </article>

            <article>
                <h3>Watermarking Solutions</h3>
                <p>Implement our watermarking solutions to add a layer of transparency to your AI-generated content. Our watermarks serve as a visual indicator, reinforcing the authenticity of your creations.</p>
                <p>Key Features:</p>
                <ul>
                    <li>Visible and Invisible Watermarks</li>
                    <li>Anti-Counterfeiting Measures</li>
                    <li>Configurable Settings</li>
                </ul>
                </article>

            <p>Ready to enhance your content with AI-generated markers? Explore our services and start marking your creations today!</p>
        </section>
        `;
  }
}
customElements.define("services-comp", ServicesComp);
