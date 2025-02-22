class HowItWorksComp extends BaseContent {
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
      white-space: pre-wrap; /* Wrap content */
      word-wrap: break-word;  /* Ensure long words break */
      overflow-x: auto;       /* Allow horizontal scrolling */
      max-width: 100%;        /* Ensure it doesn’t exceed container width */
      display: block;
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

        <div class="how-it-works">
  <h1>How It Works</h1>

  <section class="intro">
    <h2 class="tagline">Bring Transparency to Your Content in Three Simple Steps</h2>
    <p>At <strong>synthgen.org</strong>, we’ve designed our tools to be intuitive, easy to use, and seamlessly integrated into your workflow. Here’s how you can start marking and authenticating AI-generated content today.</p>
  </section>

  <section class="step-by-step">
    <h2>Step-by-Step Guide</h2>

    <div class="step">
      <h3>Step 1: Wrap AI-Generated Content in Tags</h3>
      <p>Identify the AI-generated text in your content and wrap it in our simple <code>[ai]</code> tags. This tells our system which parts of your content were created with AI.</p>
      <pre><code>&lt;p&gt;This is human-written text. [ai]This is AI-generated text.[/ai]&lt;/p&gt;</code></pre>
      <p><strong>Example:</strong></p>
      <div class="example">
        <p>Before:</p>
        <pre><code>&lt;p&gt;As temperatures rise, coastal cities face increasing challenges from flooding and erosion.&lt;/p&gt;</code></pre>
        <p>After:</p>
        <pre><code>&lt;p&gt;As temperatures rise, [ai]coastal cities face increasing challenges from flooding and erosion.[/ai]&lt;/p&gt;</code></pre>
      </div>
    </div>

    <div class="step">
      <h3>Step 2: Embed Our JavaScript</h3>
      <p>Add our lightweight JavaScript embed to your website. This script will automatically transform your <code>[ai]</code> tags into beautifully styled, authenticated content.</p>
      <pre><code>&lt;script src="https://cdn.jsdelivr.net/gh/synthgen-org/synthgen-embed@1.0.0/embed.js"&gt;&lt;/script&gt;</code></pre>
      <p><strong>What Happens Next:</strong></p>
      <ul>
        <li>Our script scans your content for <code>[ai]</code> tags.</li>
        <li>It replaces the tags with styled HTML, adding visual indicators like italics and a ✨ symbol.</li>
      </ul>
    </div>

    <div class="step">
      <h3>Step 3: Watch It Transform</h3>
      <p>Once the script is embedded, your AI-generated content will be automatically marked and styled. Here’s what you’ll see:</p>
      <div class="example">
        <p>Before Transformation:</p>
        <pre><code>&lt;p&gt;As temperatures rise, [ai]coastal cities face increasing challenges from flooding and erosion.[/ai]&lt;/p&gt;</code></pre>
        <p>After Transformation:</p>
        <pre><code>&lt;p&gt;As temperatures rise, &lt;span class="synthgenDemo"&gt;coastal cities face increasing challenges from flooding and erosion. &lt;sup&gt;✨&lt;/sup&gt;&lt;/span&gt;&lt;/p&gt;</code></pre>
      </div>
      <p><strong>Footer Disclaimer:</strong></p>
      <p>Our script also adds a professional disclaimer to your footer, ensuring readers understand which content is AI-generated.</p>
      <pre><code>&lt;footer&gt;
  &lt;p&gt;*Information italicized with a ✨ notation denotes text that was created wholly or partially by Artificial Intelligence.&lt;/p&gt;
&lt;/footer&gt;</code></pre>
    </div>
  </section>
</div>
</div><!-- end column 1 -->
      <!-- Column 2: Explanation and Call to Action -->
      <div class="column">
      <section class="image">
        <img src="/img/code.webp" alt="Boosting Trust and Credibility" />
      </section>
        <section class="benefits">
    <h2>Why It Works</h2>
    <ul>
      <li><strong>Transparency</strong>: Clearly mark AI-generated content to build trust with your audience.</li>
      <li><strong>Ease of Use</strong>: No technical expertise required—just wrap, embed, and go.</li>
      <li><strong>Consistency</strong>: Automatically apply standardized styling and disclaimers across your site.</li>
      <li><strong>Customization</strong>: Tailor the appearance of AI markers to match your brand.</li>
    </ul>
  </section>
<!--
  <section class="get-started">
    <h2>Ready to Get Started?</h2>
    <p>Join the movement for transparent AI content. Sign up for a synthgen.org account today and start marking your AI-generated content with clarity and confidence.</p>
    <a href="/sign-up" class="button" part="link">Sign Up Now</a>
  </section>
  -->

  <section class="faq-cta">
    <h2>Have Questions?</h2>
    <p>Check out our <a href="/faqs" part="link">FAQs</a> or <a href="/contact" part="link">contact us</a> for more information.</p>
  </section>
      </div><!-- end column 2 -->
        `;
    }
}
customElements.define("how-it-works-comp", HowItWorksComp);