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
customElements.define("privacy-policy-comp", PrivacyPolicyComp);