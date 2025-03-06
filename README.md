# ✨ synthgen.org website

[![Website](https://img.shields.io/website?down_message=offline&label=synthgen.org&up_message=online&url=https%3A%2F%2Fsynthgen.org)](https://synthgen.org)
[![GitHub license](https://img.shields.io/github/license/synthgen-org/synthgen-website)](LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/synthgen-org/synthgen-website)](https://github.com/synthgen-org/synthgen-website/issues)
[![GitHub stars](https://img.shields.io/github/stars/synthgen-org/synthgen-website?style=social)](https://github.com/synthgen-org/synthgen-website/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/synthgen-org/synthgen-website?style=social)](https://github.com/synthgen-org/synthgen-website/network/members)

Welcome to the **synthgen.org** website repository! This project is the official website for Synthgen, a platform dedicated to empowering transparency in the AI era by providing tools to mark and authenticate AI-generated content.

---

## Table of Contents
1. [About Synthgen](#about-synthgen)
2. [Website Features](#website-features)
3. [Getting Started](#getting-started)
4. [Project Structure](#project-structure)
5. [Contributing](#contributing)
6. [License](#license)
7. [Contact](#contact)

---

## About Synthgen

Synthgen is a platform that provides tools and services to help creators, publishers, and organizations mark and authenticate AI-generated content. Our mission is to foster trust and clarity in the digital content landscape by promoting transparency and innovation.

Learn more about Synthgen at [https://synthgen.org](https://synthgen.org).

---

## Website Features

The synthgen.org website includes the following pages and features:
- **Homepage**: Introduces Synthgen and its mission, with a call-to-action to get started.
- **About Us**: Explains who we are, our vision, and our values.
- **Services**: Details the tools and services we offer.
- **How It Works**: Provides a step-by-step guide to using Synthgen Embed.
- **FAQs**: Answers common questions about Synthgen and its tools.
- **Contact**: A form for users to reach out with questions or feedback.
- **Thank You Page**: A confirmation page displayed after form submission.

---

## Getting Started

To set up the synthgen.org website locally or contribute to the project, follow these steps:

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, or Edge).
- A code editor (e.g., [VS Code](https://code.visualstudio.com/)).
- Basic knowledge of HTML, CSS, and JavaScript.

### Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/synthgen-org/synthgen-website.git
   ```
2. **Navigate to the Project Directory**:
   ```bash
   cd synthgen-website
   ```
3. **Create a `.env` File**:  
   In the project root, create a new file named `.env` and add the following content:  
   ```plaintext
   PORT=8080
   ENVIRONMENT=development
   EMAIL_USER=[Your email address]
   EMAIL_PASS=[Your Gmail app password]
   ```  
   ( > **Note:** If you need help generating a Google app password, follow [this guide from Google](https://support.google.com/accounts/answer/185833?hl=en). )

4. **Install Dependencies**:  
   ```bash
   npm install
   ```  

5. **Start the Development Server**:  
   ```bash
   npm start
   ```  
   This will launch the website at `http://localhost:8080/` (or the port specified in `.env`).  

6. **Open the Project**:  
   - Open the project in your code editor.  
   - If necessary, modify `.env` to match your setup.  
   - Visit `http://localhost:8080/` in your browser to view the site.  

---

## Project Structure

The project is structured as follows:
```
synthgen-website/
├── index.html              # Homepage
├── about.html              # About Us page
├── services.html           # Services page
├── how-it-works.html       # How It Works page
├── faqs.html               # FAQs page
├── contact.html            # Contact page
├── thank-you.html          # Thank You page
├── css/                    # CSS stylesheets
│   └── styles.css          # Main stylesheet
├── js/                     # JavaScript files
│   └── main.js             # Main JavaScript file
├── img/                    # Image assets
└── README.md               # This file
```

---

## Contributing

We welcome contributions to the synthgen.org website! If you’d like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with a detailed description of your changes.

For major changes, please open an issue first to discuss your ideas.

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## Contact

Have questions or need help? Feel free to reach out to us:
- **Email**: [support@synthgen.org](mailto:support@synthgen.org)
- **Website**: [https://synthgen.org](https://synthgen.org)

---

Thank you for visiting the synthgen.org website repository! Together, we can build a more transparent and trustworthy digital ecosystem. 🌟
