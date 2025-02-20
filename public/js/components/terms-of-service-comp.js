class TermsOfServiceComp extends BaseContent {
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
        <div class="terms-of-service">
  <h1>Terms of Service</h1>

  <section class="intro">
    <p>Welcome to <strong>synthgen.org</strong>! These Terms of Service ("Terms") govern your use of our website, tools, and services (collectively, the "Service"). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the Service.</p>
  </section>

  <section class="overview">
    <h2>1. Overview</h2>
    <p>synthgen.org provides tools and services to help users mark and authenticate AI-generated content. Our Service is designed to promote transparency and trust in the digital content landscape. By using our Service, you agree to comply with these Terms and all applicable laws and regulations.</p>
  </section>

  <section class="eligibility">
    <h2>2. Eligibility</h2>
    <p>To use the Service, you must:</p>
    <ul>
      <li>Be at least 13 years of age (or the minimum legal age in your jurisdiction).</li>
      <li>Have the legal capacity to agree to these Terms.</li>
      <li>Use the Service only for lawful purposes.</li>
    </ul>
    <p>If you are using the Service on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.</p>
  </section>

  <section class="user-responsibilities">
    <h2>3. User Responsibilities</h2>
    <p>By using the Service, you agree to:</p>
    <ul>
      <li>Use the Service only for its intended purpose of marking and authenticating AI-generated content.</li>
      <li>Not use the Service to create or distribute harmful, misleading, or illegal content.</li>
      <li>Not attempt to reverse-engineer, decompile, or otherwise misuse the Service.</li>
      <li>Comply with all applicable laws and regulations.</li>
    </ul>
  </section>

  <section class="intellectual-property">
    <h2>4. Intellectual Property</h2>
    <p>All content, tools, and technology provided by synthgen.org are protected by intellectual property laws. You may use the Service as permitted by these Terms, but you may not:</p>
    <ul>
      <li>Copy, modify, or distribute our content or technology without prior written consent.</li>
      <li>Use our trademarks, logos, or branding without permission.</li>
    </ul>
    <p>You retain ownership of any content you create or upload using the Service. However, by using the Service, you grant synthgen.org a non-exclusive, worldwide license to use, display, and process your content solely for the purpose of providing the Service.</p>
  </section>

  <section class="privacy">
    <h2>5. Privacy</h2>
    <p>Your use of the Service is subject to our <a href="/privacy-policy" part="link">Privacy Policy</a>, which explains how we collect, use, and protect your information. By using the Service, you agree to the terms of our Privacy Policy.</p>
  </section>

  <section class="disclaimer">
    <h2>6. Disclaimer of Warranties</h2>
    <p>The Service is provided "as is" and "as available" without warranties of any kind, either express or implied. synthgen.org does not guarantee that the Service will be error-free, uninterrupted, or secure. Your use of the Service is at your own risk.</p>
  </section>

  <section class="limitation-of-liability">
    <h2>7. Limitation of Liability</h2>
    <p>To the fullest extent permitted by law, synthgen.org and its affiliates, officers, employees, and agents will not be liable for any indirect, incidental, special, or consequential damages arising out of or related to your use of the Service. This includes, but is not limited to, damages for loss of profits, data, or business opportunities.</p>
  </section>

  <section class="termination">
    <h2>8. Termination</h2>
    <p>We reserve the right to suspend or terminate your access to the Service at any time, with or without notice, for any reason, including but not limited to a violation of these Terms. You may also stop using the Service at any time.</p>
  </section>

  <section class="changes-to-terms">
    <h2>9. Changes to These Terms</h2>
    <p>We may update these Terms from time to time. If we make significant changes, we will notify you by email or through a notice on our website. Your continued use of the Service after the changes take effect constitutes your acceptance of the updated Terms.</p>
  </section>

<section class="governing-law">
  <h2>10. Governing Law</h2>
  <p>These Terms are governed by the laws of the State of Wisconsin, without regard to its conflict of laws principles. Any disputes arising out of or related to these Terms or the Service will be resolved exclusively in the courts of Wisconsin.</p>
</section>

  <section class="contact">
    <h2>11. Contact Us</h2>
    <p>If you have any questions about these Terms, please contact us at <a href="mailto:legal@synthgen.org" part="link">legal@synthgen.org</a>.</p>
  </section>
</div>
</div><!-- end column 1 -->
      <!-- Column 2: Explanation and Call to Action -->
      <div class="column">
      <section class="image">
        <img src="/img/papers.webp" alt="Boosting Trust and Credibility" />
      </section>
      </div><!-- end column 2 -->
        `;
    }
}
customElements.define("terms-of-service-comp", TermsOfServiceComp);