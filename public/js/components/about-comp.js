class AboutComp extends BaseContent  {
    constructor() {
        super();
        this.shadowRoot.innerHTML = `
<style>
    h1 {
        font-size: x-large;
    }
    h2.tagline {
        color: rgba(255, 204, 0, 1);
    }

    pre {
  background-color: rgba(112, 112, 112, 1);
  padding: 15px;
  border-radius: 5px;
  border: 1px solid #ddd;
  overflow-x: auto; /* Adds horizontal scroll for long lines */
  font-family: 'Courier New', Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  margin: 10px 0;
}

code {
  background-color: rgba(112, 112, 112, 1);
  padding: 2px 4px;
  border-radius: 3px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 14px;
  color: rgba(105, 226, 240, 1);
}

.columns {
  display: flex;
  flex-wrap: wrap; /* Wrap items to new line */
  gap: 40px; /* Space between columns */
}

.column {
  flex: 1; /* Equal width for both columns */
  min-width: 40%; /* Minimum width for column */
}

.column img {
  width: 100%;  /* Make image take full column width */
  height: auto; /* Maintain aspect ratio */
  object-fit: cover; /* Ensures the image covers the space */
  object-position: center; /* Locks perspective to the middle */
  display: block; /* Prevents unwanted spacing */
  border-bottom: solid 1px rgba(255, 204, 0, 1);
}

/* Responsive styles */
@media (max-width: 1000px) {

  .columns {
    flex-direction: column; /* Stack items vertically */
    gap: 20px; /* Adjust spacing for better readability */\
  }

  .column {
    min-width: 100%; /* Make each column take full width */
  }


    </style>
        <div class="columns">
      <div class="column">
<section class="welcome">
    <h1>About synthgen.org</h1>
    <h2 class="tagline">Authenticate, Mark, and Trust AI-Generated Content.</h2>
      <p>In an era where artificial intelligence is transforming how content is created, <strong>synthgen.org</strong> stands at the forefront of promoting transparency and trust. Our platform provides a standardized, easy-to-implement solution for marking and authenticating AI-generated content, ensuring that readers and users can engage with confidence.</p>

  <h3>Our Mission</h3>
  <p>At SynthGen, we believe that transparency is the cornerstone of trust in the digital age. Our mission is to empower creators, publishers, and organizations to openly signify the use of AI in their content creation processes. By providing tools to clearly mark AI-generated text, images, and videos, we help bridge the gap between innovation and accountability.</p>

  <h3>Why SynthGen?</h3>
  <ul>
    <li><strong>Verified AI-Generated Content</strong>: Clearly identify AI-created content with our intuitive tagging system and visual markers.</li>
    <li><strong>Transparent Authentication</strong>: Standardize the way AI-generated content is presented, fostering trust and credibility.</li>
    <li><strong>Seamless Integration</strong>: Our lightweight tools are designed for easy implementation, ensuring a smooth experience for developers and content creators alike.</li>
    <li><strong>Boost Trust and Credibility</strong>: Show your audience that you value transparency by openly embracing AI innovation.</li>
  </ul>

  <h3>How It Works</h3>
  <p>SynthGen makes it simple to mark AI-generated content:</p>
  <ol>
    <li><strong>Wrap AI-Generated Text</strong>: Use our <code>[ai]</code> and <code>[/ai]</code> tags to denote AI-created content.</li>
    <li><strong>Embed Our JavaScript</strong>: Add our lightweight script to your website.</li>
    <li><strong>Transform and Authenticate</strong>: Watch as our tools automatically style and mark your content, appending clear disclaimers to ensure transparency.</li>
  </ol>

  <h3>Join the Movement for Transparent AI Content</h3>
  <p>SynthGen is more than a platform—it’s a movement. By adopting our tools, you’re not just embracing the future of content creation; you’re also building trust with your audience and contributing to a more transparent digital landscape.</p>
  <p>Whether you’re a publisher, educator, or content creator, SynthGen empowers you to innovate responsibly. Together, let’s redefine how the world engages with AI-generated content.</p>
</section>
</section>
</div><!-- end column 1 -->
      <!-- Column 2: Explanation and Call to Action -->
      <div class="column">
      <section class="image">
        <img src="/img/robot.webp" alt="Boosting Trust and Credibility" />
      </section>
      </div><!-- end column 2 -->
        `;
    }
}
customElements.define("about-comp", AboutComp);