class HomeComp extends BaseContent {
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
      <!-- Column 1: Before and After Example -->
      <div class="column">
<section class="welcome">
    <h1>Welcome to synthgen.org</h1>
    <h2 class="tagline">Empowering Transparency in the AI Era – Authenticate, Mark, and Trust AI-Generated Content.</h2>
    <p>In a world where AI plays an ever-expanding role in content creation, synthgen.org provides a standardized way to inform readers and users that the content they’re engaging with is AI-generated. Our tools and services allow you to transparently mark and authenticate AI-generated content, fostering trust and clarity in the digital landscape.</p>
  </section>
<section class="our-mission">
    <h2>Our Mission</h2>
<p>At synthgen.org, we’re on a mission to bring clarity and transparency to the content landscape. By providing tools to mark and authenticate AI-generated content, we empower websites and publications to proudly signify the use of AI technology in their creative processes.</p>
    <section class="why-choose">
        <h3>Why Choose synthgen.org?</h3>
    <ul>
        <li>Verified AI-Generated Content: Clearly mark content created with AI to build trust with your audience.</li>
        <li>Transparent Authentication: Provide a standardized way to authenticate AI-generated text.</li>
        <li>Easy Implementation: Our tools are designed for seamless integration into your website or publication.</li>
        <li>Boost Trust and Credibility: Show your commitment to transparency and innovation.</li>
</section>
</section>
</div><!-- end column 1 -->
      <!-- Column 2: Explanation and Call to Action -->
      <div class="column">
<section class="how-it-works">
    <h2>How It Works</h2>
  <p>With synthgen.org, marking AI-generated content is simple and seamless. Here’s how you can get started:</p>

  <h3>1. Wrap AI-Generated Text in Pseudo Tags</h3>
  <p>Simply wrap any AI-generated text in <code>[ai]</code> and <code>[/ai]</code> tags. For example:</p>
  <pre><code>&lt;p&gt;Hello, this is text. [ai]This particular text was written by AI.[/ai] This text was not written by AI.&lt;/p&gt;</code></pre>

  <h3>2. Embed Our JavaScript</h3>
  <p>Include our lightweight JavaScript embed in your website:</p>
  <pre><code>&lt;script src="https://synthgen.org/path-to-embed.js"&gt;&lt;/script&gt;</code></pre>

  <h3>3. Watch It Transform</h3>
  <p>Our script will automatically:</p>
  <ul>
    <li>Replace <code>[ai]</code> tags with beautifully styled HTML:</li>
  </ul>
  <pre><code>&lt;p&gt;Hello, this is text. &lt;span style="font-style: italic;"&gt;This particular text was written by AI. &lt;sup&gt;✨&lt;/sup&gt;&lt;/span&gt; This text was not written by AI.&lt;/p&gt;</code></pre>
  <ul>
    <li>Add a clear disclaimer to your footer:</li>
  </ul>
  <pre><code>&lt;footer&gt;
  &lt;p&gt;Information italicized with a ✨ notation denotes text that was created wholly or partially by Artificial Intelligence.&lt;/p&gt;
&lt;/footer&gt;</code></pre>
</section>
<section class="get-started">
    <h2>Get Started Today</h2>
<p>Ready to bring transparency to your content? Explore our services and discover how you can implement credible markers for AI-generated content.</p>
<a href="/services" part="link" class="button">Explore Our Services</a>
</section>
<section class="cta">
    <h2>Ready to Mark Your AI-Generated Content?</h2>
<p>Sign up for a synthgen.org account today and start marking your AI-generated content with clarity and confidence!</p>
<a part="link" href="/sign-up" class="button">Sign Up Now</a>
</section>
<section class="faq">
    <h2>Frequently Asked Questions</h2>
<p>Have questions about synthgen.org? Check out our <a href="/faqs" part="link" class="button">FAQs</a></p>
</section>
<section class="contact">
    <h2>Contact Us</h2>
<p>Have a question or need assistance? Contact our team at <a part="link" href="mailto:info@synthgen.org">info@synthgen.org</a> for support.</p>
    <section>
</section>
<section class="key-features">
<ul>
    <li>AI-Generated Content Badges: Visually mark AI-generated content with our customizable badges.</li>
    <li>Watermarking Tools: Add subtle yet clear indicators to images, videos, and text.</li>
    <li>JavaScript Embed: Automatically transform [ai] tags into styled, authenticated content.</li>
    <li>Footer Disclaimers: Automatically append clear, professional disclaimers to your website.</li>
</ul>
</section>
<section class="join-the-movement">
<h1>Join the Movement for Transparent AI Content</h1>
<p>At synthgen.org, we believe in empowering creators and readers alike. By marking AI-generated content, you’re not just embracing innovation – you’re building trust in the digital age.</p>
<h2 class="tagline">Empowering Transparency in the AI Era – Authenticate, Mark, and Trust AI-Generated Content.</h2>
</section>
      </div><!-- end column 2 -->
        `;
  }
}
customElements.define("home-comp", HomeComp);
