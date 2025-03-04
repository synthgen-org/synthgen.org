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
<!-- Begin sample content -->
<div class="example-implementation">
    <h2>Example Implementation</h2>
    <p>See how synthgen.org can help you mark AI-generated content with clarity and style:</p>
<style>
    .example-implementation {
        border-top: solid 1px rgba(255, 204, 0, 1);
         margin-top: 50px;
    }
    
#example-content {
    margin: 0 auto;
    max-width: 100%; /* Ensures it never exceeds the screen width */
    width: 90%; /* Makes it fluid on smaller screens */
    background-color: #f0f0f0;
    color: #000000;
    padding: 1rem;
    text-align: left;
    font-family: 'Times New Roman', Times, serif;
    font-size: 1.25rem;
    line-height: 1.2em;
  
      & .subhead::first-letter {
        initial-letter: 2;
      }
  
      & .subhead {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
        color: var(--darker);
      }
  
      & h2 {
        font-size: 2rem;
        margin-bottom: 1rem;
        color: var(--darker);
      }
  
      & a {
        color: blue;
        text-decoration: none;
        font-weight: bold;
      }
  
      & .synthgenDemo {
        font-style: italic;
      }
  
      & .synthgenDemo:after {
        content: "✨";
        font-size: xx-small;
        vertical-align: super;

        color: transparent;
        text-shadow: 0 0 0 var(--darker);

      }

      & footer {
        width: 600px;
        background-color: #f0f0f0;
        color: #000000;
        padding: 0px;
        text-align: left;
        font-family: 'Times New Roman', Times, serif;
        line-height: 1.2em;
        font-size: small;
        margin-bottom: 1rem;
        color: var(--darker);
        width: auto;

        & .synthgen {
          font-size: smaller;
          color: transparent;
          text-shadow: 0 0 0 var(--darker);
        }
      }

      & #before {
        position: relative;
      }

      & #after {
        position: relative;
      }

      & #after {
        margin-top: 20px;
        border-top: 5px solid black;
      }

      & #before:before {
        content: "Before synthgen.org integeration";
        position: absolute;
        width: auto;
        height: auto;
        left: 0;
        top: -25px;
        font-family: 'Arial', sans-serif;
        background-color: rgba(0, 0, 0, .4);
        color:#ffffff;
        padding: 15px;
      }

    & #after:before {
        content: "After synthgen.org integeration";
        position: absolute;
        width: auto;
        height: auto;
        right: 0;
        bottom: 10px;
        font-family: 'Arial', sans-serif;
        background-color: rgba(0, 0, 0, .4);
        color:#ffffff;
        padding: 15px;
      }
    }

    /* Media query for extra small screens */
    @media (max-width: 480px) {
      .example-implementation {
          font-size: 0.9rem;
          padding: 0.5rem;
      }
  }
  </style>
<div id="example-content" data-nosnippet>
    <section id="before">
      <p class="subhead">As water levels climb, are governments doing enough to protect coastal communities?</p>
      <p>Coastal cities around the world are facing an urgent threat: <a rel="nofollow" target="_blank"
          href="https://www.climate.gov/news-features/understanding-climate/climate-change-global-sea-level">rising sea
          levels</a>. As temperatures climb and polar ice continues to melt, communities from Miami to Jakarta are
        witnessing increased flooding, eroded shorelines, and infrastructure damage. Scientists warn that without
        immediate action—ranging from improved flood defenses to reduced carbon emissions—many low-lying regions could
        become uninhabitable within decades. Governments are grappling with the challenge, but the question remains: Are
        current efforts enough to prevent a crisis?</p>
      <p>The impact is already visible. In <a href="https://en.wikipedia.org/wiki/Venice" target="_blank"
          rel="nofollow">Venice</a>, floodwaters are reaching record highs, threatening centuries-old landmarks. In the
        Philippines, entire fishing villages are relocating inland as coastlines vanish.</p>
    </section>
    <section id="after">
      <p class="subhead">As water levels climb, are governments doing enough to protect coastal communities?</p>
      <p>Coastal cities around the world are facing an urgent threat: <a rel="nofollow" target="_blank"
          href="https://www.climate.gov/news-features/understanding-climate/climate-change-global-sea-level">rising sea
          levels</a>. <span class="synthgenDemo">As temperatures climb and polar ice continues to melt, communities from Miami to Jakarta are
        witnessing increased flooding, eroded shorelines, and infrastructure damage. Scientists warn that without
        immediate action—ranging from improved flood defenses to reduced carbon emissions—many low-lying regions could
        become uninhabitable within decades. Governments are grappling with the challenge, but the question remains: Are
        current efforts enough to prevent a crisis?</span></p>
      <p>The impact is already visible. In <a href="https://en.wikipedia.org/wiki/Venice" target="_blank"
          rel="nofollow">Venice</a>, floodwaters are reaching record highs, threatening centuries-old landmarks. <span class="synthgenDemo">In the
        Philippines, entire fishing villages are relocating inland as coastlines vanish.</span></p>
        <footer>*Information italicized with a <span class="synthgen">✨</span> notation denotes text that was created wholly or partially by Artificial Intelligence.</footer>
    </section>
  </div>
  </div>
<!-- End sample content -->
</section>
</div><!-- end column 1 -->
      <!-- Column 2: Explanation and Call to Action -->
      <div class="column">
      <section class="image">
        <img src="/img/chip.webp" alt="Boosting Trust and Credibility" />
      </section>
<section class="how-it-works">
    <h2>How It Works</h2>
  <p>With synthgen.org, marking AI-generated content is simple and seamless. Here’s how you can get started:</p>

  <h3>1. Wrap AI-Generated Text in Pseudo Tags</h3>
  <p>Simply wrap any AI-generated text in <code>[ai]</code> and <code>[/ai]</code> tags. For example:</p>
  <pre><code>&lt;p&gt;Hello, this is text. [ai]This particular text was written by AI.[/ai] This text was not written by AI.&lt;/p&gt;</code></pre>

  <h3>2. Embed Our JavaScript</h3>
  <p>Include our lightweight JavaScript embed in your website:</p>
  <pre><code>&lt;script src="https://cdn.jsdelivr.net/gh/synthgen-org/synthgen-embed@1.0.0/embed.js"&gt;&lt;/script&gt;</code></pre>

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
<!--
<section class="cta">
    <h2>Ready to Mark Your AI-Generated Content?</h2>
<p>Sign up for a synthgen.org account today and start marking your AI-generated content with clarity and confidence!</p>
<a part="link" href="/sign-up" class="button">Sign Up Now</a>
</section>
-->
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
