class HomeComp extends BaseContent {
  constructor() {
    super();
    this.shadowRoot.innerHTML = `

        <style>
        /* Add home-comp styles here */
    </style>
    <section id="home">
        <h2>Welcome to SynthGen.org</h2>
        <p>SynthGen.org provides a standardized way to inform readers and users that the content they are engaging with is AI-generated in a world where AI plays an ever-expanding role in content creation. We offer AI-generated content badges and watermarks, allowing you to transparently mark and authenticate the content produced through artificial intelligence.</p>
        <p>Our mission is to bring clarity and transparency to the content landscape, enabling websites and publications to proudly signify the use of AI technology in their creative processes.</p>
        <p>Explore our services to discover how you can implement credible markers, giving your audience confidence in the authenticity and innovation behind your AI-generated content.</p>
        <p>Key Features:</p>
        <ul>
            <li>Verified AI-Generated Content</li>
            <li>Transparent Authentication Process</li>
            <li>Easy Implementation for Websites and Publications</li>
            <li>Boost Trust and Credibility</li>
        </ul>
        <p>Ready to elevate your content with AI? Explore our <a part="link" href="/services">services</a> and start marking your AI-generated creations today!</p>
    </section>
        `;
  }
}
customElements.define("home-comp", HomeComp);
