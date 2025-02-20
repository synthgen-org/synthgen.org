class GetStartedComp extends BaseContent {
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
        <div class="getting-started">
  <h1>Getting Started</h1>

  <section class="intro">
    <p>Welcome to <strong>synthgen.org</strong>! We’re excited to help you bring transparency to your AI-generated content. Follow these simple steps to get started with our tools—no account required!</p>
  </section>

  <section class="step-by-step">
    <h2 class="tagline">Step-by-Step Guide</h2>

    <div class="step">
      <h3>Step 1: Wrap AI-Generated Content in Tags</h3>
      <p>Identify the AI-generated text in your content and wrap it in our simple <code>[ai]</code> tags. This tells our system which parts of your content were created with AI.</p>
      <p><strong>Example:</strong></p>
      <pre><code>&lt;p&gt;This is human-written text. [ai]This is AI-generated text.[/ai]&lt;/p&gt;</code></pre>
      <p>Our tools will automatically transform these tags into styled, authenticated content.</p>
    </div>

    <div class="step">
      <h3>Step 2: Embed Our JavaScript</h3>
      <p>Add our lightweight JavaScript embed to your website. This script will automatically process your <code>[ai]</code> tags and add visual indicators to your AI-generated content.</p>
      <p>Include the following code in your website’s HTML:</p>
      <pre><code>&lt;script src="https://cdn.jsdelivr.net/gh/synthgen-org/synthgen-embed@1.0.0/embed.js"&gt;&lt;/script&gt;</code></pre>
      <p>Once embedded, our script will:</p>
      <ul>
        <li>Replace <code>[ai]</code> tags with styled HTML.</li>
        <li>Add a professional footer disclaimer to your website.</li>
      </ul>
    </div>

    <div class="step">
      <h3>Step 3: Review and Publish</h3>
      <p>After embedding the script, review your content to ensure everything looks great. Once you’re satisfied, publish your content and let your audience know you’re committed to transparency!</p>
    </div>
  </section>

  <section class="benefits">
    <h2>Why Use synthgen.org?</h2>
    <p>By marking your AI-generated content with synthgen.org, you’re:</p>
    <ul>
      <li><strong>Building Trust</strong>: Show your audience that you value transparency and honesty.</li>
      <li><strong>Embracing Innovation</strong>: Proudly showcase your use of cutting-edge AI technology.</li>
      <li><strong>Simplifying Compliance</strong>: Meet ethical and legal standards for AI-generated content.</li>
    </ul>
  </section>

  <section class="faq-cta">
    <h2>Have Questions?</h2>
    <p>Check out our <a href="/faqs" part="link" >FAQs</a> or <a href="/contact" part="link" >contact us</a> for assistance. We’re here to help!</p>
  </section>

</div>
</div><!-- end column 1 -->
      <!-- Column 2: Explanation and Call to Action -->
      <div class="column">
      <section class="image">
        <img src="/img/neuralNetwork.webp" alt="Boosting Trust and Credibility" />
      </section>
      </div><!-- end column 2 -->
        `;
    }
}
customElements.define("get-started-comp", GetStartedComp);