class ServicesComp extends BaseContent {
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
        <!-- Column 1 content -->
        <div class="services">
  <h1>Services</h1>

  <section class="intro">
     <h2 class="tagline">Empower Your Content with Transparency</h2>
    <p>At <strong>synthgen.org</strong>, we provide a suite of tools and services designed to help you mark, authenticate, and showcase AI-generated content with clarity and confidence. Whether you're a publisher, content creator, or organization, our solutions are tailored to meet your needs and foster trust with your audience.</p>
  </section>

  <section class="our-services">
    <h2>Our Services</h2>

    <div class="service">
      <h3>1. AI-Generated Content Marking</h3>
      <p>Easily identify and mark AI-generated text, images, and videos with our intuitive tools.</p>
      <h4>How It Works</h4>
      <p>Wrap AI-generated content in simple <code>[ai]</code> tags, and let our JavaScript embed transform it into beautifully styled, authenticated content.</p>
      <h4>Benefits</h4>
      <ul>
        <li>Build trust with your audience by clearly labeling AI-generated content.</li>
        <li>Maintain transparency without disrupting your workflow.</li>
      </ul>
    </div>

    <!--
    <div class="service">
      <h3>2. Customizable Badges and Watermarks</h3>
      <p>Add visual indicators to your AI-generated content with our customizable badges and watermarking tools.</p>
      <h4>Features</h4>
      <ul>
        <li>Choose from a variety of badge designs to match your brand.</li>
        <li>Add subtle yet clear watermarks to images and videos.</li>
      </ul>
      <h4>Benefits</h4>
      <ul>
        <li>Enhance credibility by visibly marking AI-generated content.</li>
        <li>Customize indicators to align with your brand identity.</li>
      </ul>
    </div>
    -->

    <div class="service">
      <h3>2. JavaScript Embed for Seamless Integration</h3>
      <p>Integrate our tools into your website or platform with just a few lines of code.</p>
      <h4>How It Works</h4>
      <ul>
        <li>Add our lightweight JavaScript embed to your site.</li>
        <li>Automatically transform <code>[ai]</code> tags into styled, authenticated content.</li>
      </ul>
      <h4>Benefits</h4>
      <ul>
        <li>No technical expertise required—our tools are designed for easy implementation.</li>
        <li>Save time with automated content marking and disclaimer generation.</li>
      </ul>
    </div>

    <div class="service">
      <h3>3. Footer Disclaimers</h3>
      <p>Automatically append professional, standardized disclaimers to your content.</p>
      <h4>Features</h4>
      <ul>
        <li>Clearly indicate which parts of your content are AI-generated.</li>
        <li>Customize disclaimer text to suit your needs.</li>
      </ul>
      <h4>Benefits</h4>
      <ul>
        <li>Provide readers with clear, consistent information.</li>
        <li>Strengthen trust and credibility with transparent communication.</li>
      </ul>
    </div>

    <!--
    <div class="service">
      <h3>5. API for Developers</h3>
      <p>For advanced users, our API allows you to integrate AI content marking directly into your applications.</p>
      <h4>Features</h4>
      <ul>
        <li>Programmatically mark and authenticate AI-generated content.</li>
        <li>Access detailed documentation and support.</li>
      </ul>
      <h4>Benefits</h4>
      <ul>
        <li>Seamlessly integrate transparency tools into your workflows.</li>
        <li>Scale AI content marking across large platforms.</li>
      </ul>
    </div>
    -->
  </section>
   <section class="why-choose-us">
    <h2>Why Choose synthgen.org?</h2>
    <ul>
      <li><strong>Trust and Credibility</strong>: Show your commitment to transparency and innovation.</li>
      <li><strong>Ease of Use</strong>: Our tools are designed for seamless integration and minimal disruption.</li>
      <li><strong>Customization</strong>: Tailor our solutions to fit your brand and workflow.</li>
      <li><strong>Scalability</strong>: Whether you're a small blog or a large publication, our tools grow with you.</li>
    </ul>
  </section>
</div>
</div><!-- end column 1 -->
      <!-- Column 2: Explanation and Call to Action -->
      <div class="column">
      <section class="image">
        <img src="/img/arm.webp" alt="Boosting Trust and Credibility" />
      </section>
      <!--
        <section class="get-started">
    <h2>Get Started Today</h2>
    <p>Ready to bring transparency to your content? Explore our services and discover how you can implement credible markers for AI-generated content.</p>
    <a href="/sign-up" part="link" class="button">Sign Up Now</a>
  </section>
  -->

  <section class="faq-cta">
    <h2>Have Questions?</h2>
    <p>Check out our <a href="/faqs" part="link">FAQs</a> or <a href="/contact" part="link">contact us</a> for more information.</p>
  </section>

  <section class="use-cases">
    <h2>Example Use Cases</h2>
    <ul>
      <li><strong>Publishers</strong>: Mark AI-generated articles and blog posts to maintain reader trust.</li>
      <li><strong>E-commerce</strong>: Label AI-generated product descriptions and reviews for transparency.</li>
      <li><strong>Educational Platforms</strong>: Clearly identify AI-generated learning materials.</li>
      <li><strong>Social Media</strong>: Watermark AI-generated images and videos to ensure authenticity.</li>
    </ul>
  </section>

  <section class="join-movement">
    <h2>Join the Movement for Transparent AI Content</h2>
    <p>At synthgen.org, we believe that transparency is the foundation of trust in the digital age. By marking AI-generated content, you’re not just embracing innovation—you’re building a more trustworthy digital ecosystem.</p>
    <p><strong>Empowering Transparency in the AI Era – Authenticate, Mark, and Trust AI-Generated Content.</strong></p>
  </section>
      </div><!-- end column 2 -->
        `;
  }
}
customElements.define("services-comp", ServicesComp);
