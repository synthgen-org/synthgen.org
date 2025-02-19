class ContactComp extends BaseContent  {
    constructor() {
        super();
        this.shadowRoot.innerHTML = `
            <style>

            section {
                max-width: 600px;
                margin: 0 auto;
            }

            article {
                margin-bottom: 20px;
            }

            form {
                display: grid;
                gap: 10px;
            }

            label {
                font-weight: bold;
            }

            input,
            textarea {
                width: 100%;
                padding: 8px;
                box-sizing: border-box;
            }

            button {
                padding: 10px;
                background-color: rgba(46, 136, 165, 1);
                color: #fff;
                border: none;
                cursor: pointer;
            }

            button:hover {
                background-color: rgba(46, 136, 165, .8);
            }

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
            <section id="contact">
            <h2>Contact Us</h2>
            <p>Have questions or need assistance? Reach out to us using the contact information below or fill out the form, and we'll get back to you as soon as possible:</p>

            <article>
                <h3>Email</h3>
                <p>For general inquiries: <a part="link"  href="mailto:info@synthgen.org">info@synthgen.org</a></p>
                <p>For support: <a part="link" href="mailto:support@synthgen.org">support@synthgen.org</a></p>
            </article>

            <article>
                <h3>Phone</h3>
                <p>Call us at: +1 (555) 123-4567</p>
            </article>

            <article>
                <h3>Address</h3>
                <p>Visit us at: 123 SynthGen Street, Tech City, AI 56789</p>
            </article>

            <article>
                <h3>Contact Form</h3>
                <form action="/submit-contact" method="post">
                    <label for="name">Your Name:</label>
                    <input type="text" id="name" name="name" required>

                    <label for="email">Your Email:</label>
                    <input type="email" id="email" name="email" required>

                    <label for="message">Your Message:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>

                    <button type="submit">Submit</button>
                </form>
            </article>

            <p>We look forward to hearing from you!</p>
        </section>
        </div><!-- end column 1 -->
              <!-- Column 2: Explanation and Call to Action -->
      <div class="column">
      <section class="image">
        <img src="/img/wind-up-robot.webp" alt="Boosting Trust and Credibility" />
      </section>
      </div><!-- end column 2 -->
        `;
    }
}
customElements.define("contact-comp", ContactComp);