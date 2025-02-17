class AboutComp extends BaseContent  {
    constructor() {
        super();
        this.shadowRoot.innerHTML = `
            <section id="about">
                <h2>About SynthGen.org</h2>
                <p>SynthGen.org is a pioneering platform in the realm of AI-generated content, dedicated to revolutionizing how individuals and organizations communicate the origin of their content in an AI-driven era.</p>
                <p>Our team, comprised of passionate experts in artificial intelligence and content creation, envisions a future where transparency and innovation go hand in hand. We believe in empowering content creators to embrace the use of AI technology while ensuring audiences are informed about the AI-driven nature of the content they consume.</p>
                <p>At SynthGen.org, we are committed to:</p>
                <ul>
                    <li>Fostering Transparency: Providing a clear and standardized way to signify AI-generated content.</li>
                    <li>Promoting Innovation: Encouraging the integration of AI technology in creative processes.</li>
                    <li>Building Trust: Enhancing the relationship between content creators and consumers through transparency.</li>
                </ul>
                <p>Join us on this exciting journey as we shape the future of content creation and contribute to a world where AI and human creativity seamlessly coexist.</p>
                <!--<p>For more information about our team and the minds behind SynthGen.org, please visit our <a href="/team">Team</a> page.</p>-->
            </section>
        `;
    }
}
customElements.define("about-comp", AboutComp);