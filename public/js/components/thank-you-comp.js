  class ThankYouComp extends BaseContent  {
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
<div class="thank-you">
  <h1>Thank You!</h1>

  <section class="message">
    <p>We’ve received your message and appreciate you reaching out to us. Our team will review your inquiry and get back to you as soon as possible.</p>
    <p>In the meantime, feel free to explore more about synthgen.org and how we’re empowering transparency in the AI era.</p>
  </section>

  <section class="next-steps">
    <h2>What’s Next?</h2>
    <ul>
      <li><strong>Check Out Our FAQs</strong>: Many common questions are answered in our <a href="/faqs" part="link" >FAQs</a>.</li>
      <li><strong>Explore Our Tools</strong>: Learn how to mark and authenticate AI-generated content with our <a href="/get-started" part="link" >Getting Started</a> guide.</li>
      <li><strong>Join the Movement</strong>: Follow us on social media to stay updated on the latest news and developments.</li>
    </ul>
  </section>

  <!--
  <section class="social-media">
    <h2>Follow Us</h2>
    <p>Stay connected with synthgen.org and join the movement for transparent AI content:</p>
    <ul class="social-links">
      <li><a href="https://twitter.com/synthgen" target="_blank" rel="noopener noreferrer" part="link" >Twitter</a></li>
      <li><a href="https://linkedin.com/company/synthgen" target="_blank" rel="noopener noreferrer" part="link" >LinkedIn</a></li>
      <li><a href="https://facebook.com/synthgen" target="_blank" rel="noopener noreferrer" part="link" >Facebook</a></li>
    </ul>
  </section>
  -->

  <section class="cta">
    <h2>Ready to Get Started?</h2>
    <p>Mark your AI-generated content with clarity and confidence. Try our tools today—no account required!</p>
    <a href="/get-started" class="button" part="link" >Get Started</a>
  </section>
</div>
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
customElements.define("thank-you-comp", ThankYouComp);
  