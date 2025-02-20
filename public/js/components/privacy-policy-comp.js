class PrivacyPolicyComp extends BaseContent {
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
        <div class="privacy-policy">
  <h1>Privacy Policy</h1>

  <section class="intro">
    <p>At <strong>synthgen.org</strong>, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website, tools, and services (collectively, the "Service"). By using the Service, you agree to the terms of this Privacy Policy.</p>
  </section>

  <section class="information-we-collect">
    <h2>1. Information We Collect</h2>
    <p>We collect the following types of information when you use the Service:</p>
    <ul>
      <li><strong>Personal Information</strong>: This includes information you provide directly to us, such as your name, email address, and any other details you submit when contacting us or signing up for an account.</li>
      <li><strong>Usage Data</strong>: We automatically collect information about how you interact with the Service, such as your IP address, browser type, device information, and pages visited. This data is collected using Google Analytics, a third-party analytics tool.</li>
      <li><strong>Cookies and Tracking Technologies</strong>: We use cookies and similar technologies to enhance your experience and analyze usage patterns. You can manage your cookie preferences through your browser settings.</li>
    </ul>
  </section>

  <section class="how-we-use-information">
    <h2>2. How We Use Your Information</h2>
    <p>We use the information we collect for the following purposes:</p>
    <ul>
      <li>To provide, maintain, and improve the Service.</li>
      <li>To respond to your inquiries and provide customer support.</li>
      <li>To analyze usage trends and optimize the Service using Google Analytics.</li>
      <li>To send you updates, newsletters, or promotional materials (if you have opted in).</li>
      <li>To comply with legal obligations and protect our rights.</li>
    </ul>
  </section>

  <section class="sharing-your-information">
    <h2>3. Sharing Your Information</h2>
    <p>We do not sell or rent your personal information to third parties. However, we may share your information in the following circumstances:</p>
    <ul>
      <li><strong>Service Providers</strong>: We may share information with trusted third-party service providers who assist us in operating the Service, such as hosting providers and analytics platforms. For example, we use Google Analytics to analyze usage data.</li>
      <li><strong>Legal Requirements</strong>: We may disclose your information if required by law or to protect our rights, property, or safety, or the rights, property, or safety of others.</li>
      <li><strong>Business Transfers</strong>: In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.</li>
    </ul>
  </section>

  <section class="data-security">
    <h2>4. Data Security</h2>
    <p>We take reasonable measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
  </section>

  <section class="your-choices">
    <h2>5. Your Choices</h2>
    <p>You have the following rights regarding your information:</p>
    <ul>
      <li><strong>Access and Correction</strong>: You can request access to or correction of your personal information by contacting us at <a href="mailto:privacy@synthgen.org" part="link">privacy@synthgen.org</a>.</li>
      <li><strong>Opt-Out</strong>: You can opt out of receiving promotional emails by following the unsubscribe link in the email or contacting us directly.</li>
      <li><strong>Cookies</strong>: You can manage your cookie preferences through your browser settings. To opt out of Google Analytics, you can install the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" part="link">Google Analytics Opt-Out Browser Add-On</a>.</li>
    </ul>
  </section>

  <section class="childrens-privacy">
    <h2>6. Children's Privacy</h2>
    <p>The Service is not intended for use by individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it.</p>
  </section>

  <section class="international-users">
    <h2>7. International Users</h2>
    <p>If you are accessing the Service from outside the United States, please note that your information may be transferred to, stored, and processed in the United States, where our servers are located. By using the Service, you consent to this transfer and processing.</p>
  </section>

  <section class="changes-to-policy">
    <h2>8. Changes to This Privacy Policy</h2>
    <p>We may update this Privacy Policy from time to time. If we make significant changes, we will notify you by email or through a notice on our website. Your continued use of the Service after the changes take effect constitutes your acceptance of the updated Privacy Policy.</p>
  </section>

  <section class="contact-us">
    <h2>9. Contact Us</h2>
    <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@synthgen.org" part="link">privacy@synthgen.org</a>.</p>
  </section>
</div>
</div><!-- end column 1 -->
      <!-- Column 2: Explanation and Call to Action -->
      <div class="column">
      <section class="image">
        <img src="/img/privacy.webp" alt="Boosting Trust and Credibility" />
      </section>
      </div><!-- end column 2 -->
        `;
    }
}
customElements.define("privacy-policy-comp", PrivacyPolicyComp);