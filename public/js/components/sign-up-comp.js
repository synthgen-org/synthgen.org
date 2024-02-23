class SignUpComp extends BaseContent {
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
        background-color: #3498db;
        color: #fff;
        border: none;
        cursor: pointer;
    }

    button:hover {
        background-color: #2980b9;
    }
    </style>
    <section id="contact">
    <h2>Sign Up</h2>
    <article>
        <form id="signupForm">
  
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
  
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
  
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
  
        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" required>
  
        <button type="button" id="signupBtn">Sign Up</button>
  
        <p id="errorMessage"></p>
      </form>
    </article>
</section>
        `;
  }
}
customElements.define("sign-up-comp", SignUpComp);
