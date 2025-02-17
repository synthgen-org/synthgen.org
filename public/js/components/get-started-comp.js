class GetStartedComp extends BaseContent {
    constructor() {
        super();
        this.shadowRoot.innerHTML = `
            <style>
                /* Add get-started-comp styles here */
            </style>
            <section id="get-started">
                <h2>Get Started</h2>
                <p>Ready to mark and authenticate your AI-generated content? Follow these simple steps to get started with SynthGen.org:</p>

                <article>
                    <h3>1. Sign Up</h3>
                    <p>Create your SynthGen.org account by signing up. Provide the necessary information and verify your email address to get full access to our services.</p>
                </article>

                <article>
                    <h3>2. Explore Our Services</h3>
                    <p>Take a look at our range of services designed to help you transparently mark and authenticate AI-generated content. Choose the services that best fit your needs.</p>
                </article>

                <article>
                    <h3>3. Select Your Marker Type</h3>
                    <p>Decide on the type of AI-generated content marker you want to use. Whether it's a badge, watermark, or a combination, choose the marker type that aligns with your content and branding strategy.</p>
                </article>

                <article>
                    <h3>4. Customize Your Marker</h3>
                    <p>Personalize the appearance of your AI-generated content marker. Explore customization options such as color schemes, sizes, and branding integration to make the marker uniquely yours.</p>
                </article>

                <article>
                    <h3>5. Implement the Marker</h3>
                    <p>Integrate the chosen marker into your content creation process. Depending on your platform, this could involve adding a simple code snippet, applying settings through our API, or utilizing our user-friendly plugins for popular content management systems.</p>
                </article>

                <article>
                    <h3>6. Verify and Authenticate</h3>
                    <p>Ensure the proper implementation of your AI-generated content marker. Use our verification tools and authentication API to confirm that the markers are functioning as intended, providing a seamless experience for your audience.</p>
                </article>

                <p>Ready to elevate your content with AI-generated markers? <a part="link"  href="/signup">Sign up</a> now and start marking your creations today!</p>
            </section>
        `;
    }
}
customElements.define("get-started-comp", GetStartedComp);