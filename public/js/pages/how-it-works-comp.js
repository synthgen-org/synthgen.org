class HowItWorksComp extends BaseContent {
    constructor() {
        super();
        this.shadowRoot.innerHTML = `
            <style>
                /* Add how-it-works-comp styles here */
            </style>
            <section id="how-it-works">
                <h2>How It Works</h2>
                <p>Implementing AI-generated content markers with SynthGen.org is a straightforward process. Follow these simple steps to add transparency and authenticity to your content:</p>
                
                <article>
                    <h3>1. Sign Up or Log In</h3>
                    <p>Get started by creating an account on SynthGen.org or log in if you already have one. This account will be your gateway to accessing and managing AI-generated content markers.</p>
                </article>

                <article>
                    <h3>2. Choose Your Marker Type</h3>
                    <p>Select the type of AI-generated content marker that best suits your needs. Whether it's a badge, watermark, or a combination of both, choose the marker type that aligns with your content and branding strategy.</p>
                </article>

                <article>
                    <h3>3. Customize Your Marker</h3>
                    <p>Personalize the appearance of your AI-generated content marker. Explore customization options such as color schemes, sizes, and branding integration to make the marker uniquely yours.</p>
                </article>

                <article>
                    <h3>4. Implement the Marker</h3>
                    <p>Integrate the chosen marker into your content creation process. Depending on your platform, this could involve adding a simple code snippet, applying settings through our API, or utilizing our user-friendly plugins for popular content management systems.</p>
                </article>

                <article>
                    <h3>5. Verify and Authenticate</h3>
                    <p>Ensure the proper implementation of your AI-generated content marker. Use our verification tools and authentication API to confirm that the markers are functioning as intended, providing a seamless experience for your audience.</p>
                </article>

                <p>By following these steps, you can confidently mark your AI-generated content and showcase the innovative use of technology in your creative process. Ready to get started? Explore our <a href="/services">services</a> and begin marking your creations today!</p>
            </section>
        `;
    }
}
customElements.define("how-it-works-comp", HowItWorksComp);