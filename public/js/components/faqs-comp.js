class FAQSComp extends BaseContent  {
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
        <div class="faq">
  <h1>Frequently Asked Questions</h1>

  <section class="intro">
    <p>Have questions about synthgen.org? We’ve got answers! Below, you’ll find answers to some of the most common questions about our tools, services, and mission. If you don’t see what you’re looking for, feel free to <a href="/contact" part="link">contact us</a>.</p>
  </section>

  <section class="questions">
    <h2>General Questions</h2>

    <div class="question">
      <h3>What is synthgen.org?</h3>
      <p>synthgen.org is a platform dedicated to bringing transparency to AI-generated content. We provide tools and services that allow creators to mark and authenticate AI-generated text, images, and videos, fostering trust and clarity in the digital landscape.</p>
    </div>

    <div class="question">
      <h3>Why is marking AI-generated content important?</h3>
      <p>As AI becomes more integrated into content creation, it’s essential to maintain transparency. Marking AI-generated content helps build trust with your audience, ensures ethical practices, and provides clarity about the origin of the content.</p>
    </div>

    <div class="question">
      <h3>Who can use synthgen.org?</h3>
      <p>Our tools are designed for anyone who creates or publishes content, including publishers, bloggers, e-commerce platforms, educational institutions, and social media users. Whether you’re an individual or an organization, synthgen.org can help you bring transparency to your content.</p>
    </div>
  </section>

  <section class="questions">
    <h2>Using Our Tools</h2>

    <div class="question">
      <h3>How do I mark AI-generated content?</h3>
      <p>Simply wrap your AI-generated text in <code>[ai]</code> and <code>[/ai]</code> tags. For example:</p>
      <pre><code>&lt;p&gt;This is human-written text. [ai]This is AI-generated text.[/ai]&lt;/p&gt;</code></pre>
      <p>Our JavaScript embed will automatically transform these tags into styled, authenticated content.</p>
    </div>

    <div class="question">
      <h3>How do I integrate synthgen.org into my website?</h3>
      <p>Add our lightweight JavaScript embed to your website by including the following code:</p>
      <pre><code>&lt;script src="https://cdn.jsdelivr.net/gh/synthgen-org/synthgen-embed@1.0.0/embed.js"&gt;&lt;/script&gt;</code></pre>
      <p>Once embedded, our script will automatically process your <code>[ai]</code> tags and add a footer disclaimer.</p>
    </div>

    <div class="question">
      <h3>Do I need technical expertise to use synthgen.org?</h3>
      <p>Not at all. Our tools are designed to be user-friendly and require no technical expertise. Just wrap your content in <code>[ai]</code> tags and embed our JavaScript—we’ll handle the rest.</p>
    </div>
  </section>

  <section class="questions">
    <h2>Pricing and Plans</h2>

    <div class="question">
      <h3>Is synthgen.org free to use?</h3>
      <p>Yes! Right now, we offer a <strong>free tier</strong> that includes all the tools you need to mark and authenticate AI-generated content. In the future, we may introduce a paid option with advanced features like customization and analytics.</p>
    </div>

    <div class="question">
      <h3>What features are included in the free tier?</h3>
      <p>Our free tier includes:</p>
      <ul>
        <li>AI-generated content marking with <code>[ai]</code> tags.</li>
        <li>Automatic transformation of tags into styled, authenticated content.</li>
        <li>Footer disclaimers to inform readers about AI-generated content.</li>
      </ul>
    </div>

    <div class="question">
      <h3>Will there be paid plans in the future?</h3>
      <p>We are considering introducing a paid option in the future, which may include advanced features such as customization options and detailed analytics. However, our free tier will always remain available for basic usage.</p>
    </div>
  </section>

  <section class="questions">
    <h2>Technical Questions</h2>

    <div class="question">
      <h3>Does synthgen.org work with all types of content?</h3>
      <p>Yes! Our tools can be used to mark AI-generated text, images, and videos. Whether you’re publishing articles, product descriptions, or social media posts, synthgen.org has you covered.</p>
    </div>

    <div class="question">
      <h3>How does synthgen.org ensure data privacy?</h3>
      <p>We take data privacy seriously. Our tools are designed to process content locally on your website, ensuring that your data remains secure and private. We do not store or access your content.</p>
    </div>
  </section>

  <section class="questions">
    <h2>Support and Contact</h2>

    <div class="question">
      <h3>How can I get help if I have an issue?</h3>
      <p>Our support team is here to help! You can reach out to us at <a href="mailto:support@synthgen.org" part="link">support@synthgen.org</a> or visit our <a href="/contact" part="link">Contact</a> page for more options.</p>
    </div>

    <!--
    <div class="question">
      <h3>Do you offer tutorials or documentation?</h3>
      <p>Yes, we provide comprehensive documentation, tutorials, and guides to help you get started with synthgen.org. Visit our <a href="/docs" part="link">Documentation</a> page to learn more.</p>
    </div>
    -->
  </section>

  <section class="cta">
    <h2>Still Have Questions?</h2>
    <p>If you don’t see your question here, don’t hesitate to <a href="/contact" part="link">contact us</a>. We’re happy to help!</p>
  </section>
</div>
</div><!-- end column 1 -->
      <!-- Column 2: Explanation and Call to Action -->
      <div class="column">
      <section class="image">
        <img src="/img/42.webp" alt="Boosting Trust and Credibility" />
      </section>
      </div><!-- end column 2 -->
        `;
    }
}
customElements.define("faqs-comp", FAQSComp);