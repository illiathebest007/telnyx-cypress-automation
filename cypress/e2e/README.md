# 🚀 Telnyx UI Automation Project

[![Telnyx Smoke Tests](https://github.com/illiathebest007/telnyx-cypress-automation/actions/workflows/main.yaml/badge.svg)](https://github.com/illiathebest007/telnyx-cypress-automation/actions)
[![Cypress Cloud](https://img.shields.io/badge/Cypress-Cloud-brightgreen)](https://cloud.cypress.io/projects/1oj5xg)

Automated Smoke Test suite for **Telnyx.com**. The project is designed to handle localization (US/EU) and dynamic elements, integrated with **GitHub Actions** and **Cypress Cloud**.

## 🛠 Prerequisites & Installation

### 1. Environment Setup
- **Node.js**: Ensure you have v18 or higher.
- **Git**: Installed and configured.

### 2. Project Installation
Clone the repo and install dependencies:
```bash
git clone [https://github.com/illiathebest007/telnyx-cypress-automation.git](https://github.com/illiathebest007/telnyx-cypress-automation.git)
cd test_squad_telnyx_cypress
npm install

Note: npm install automatically installs Cypress v13+ as specified in package.json.

3. Cypress Verification
To ensure Cypress is correctly installed and its binary is ready:
npx cypress verify

🧪 Running Tests
Graphical User Interface (GUI)
To debug and watch tests in a real browser:
npx cypress open

Headless Mode (CLI)
To run tests in the background (as they run in GitHub Actions):
npx cypress run

💡 Technical Solutions & Stability
In this project, we solved several "flaky" test issues caused by server latency and regional differences:

Cookie Banner Handling: Used ID selectors (#onetrust-accept-btn-handler) for stability across different languages.

Handling Hidden Elements: Applied { force: true } for elements covered by animations.

Network Resilience: Configured retries: { runMode: 2 } in cypress.config.js to handle 502 Bad Gateway errors from the server.

Wait Strategies: Used custom timeouts (up to 120s) for heavy pages like /contact-us.

🔄 Development Workflow
To update the project and trigger the CI/CD pipeline:

git add .

git commit -m "fix: your descriptive message"

git push origin main

✅ Future Improvements (TODO)
As suggested by experienced mentors, the next steps for this project are:

[ ] Page Object Pattern (POP): Refactor tests to separate UI selectors from test logic.

[ ] BDD / Gherkin: Integrate Cucumber to write scenarios in plain English.

[ ] Parallelization: Configure multi-threaded execution in GitHub Actions for faster runs.

[ ] Advanced Reporting: Add Allure reports for better visual analysis.