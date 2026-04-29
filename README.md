# Telnyx UI Automation Project

[![Telnyx Smoke Tests](https://github.com/illiathebest007/telnyx-cypress-automation/actions/workflows/main.yaml/badge.svg)](https://github.com/illiathebest007/telnyx-cypress-automation/actions)
[![Cypress Cloud](https://img.shields.io/badge/Cypress-Cloud-brightgreen)](https://cloud.cypress.io/projects/1oj5xg)

This project contains an automated Smoke Test suite for the **Telnyx.com** website. It is designed to handle localization (US/EU) and dynamic elements, integrated with **GitHub Actions** and **Cypress Cloud**.

## 🛠 Prerequisites & Installation

### 1. Environment Setup
- **Node.js**: v18 or higher.
- **Git**: Installed and configured.

### 2. Project Installation
Clone the repo and install all dependencies (including Cypress):
```bash
git clone [https://github.com/illiathebest007/telnyx-cypress-automation.git](https://github.com/illiathebest007/telnyx-cypress-automation.git)
cd test_squad_telnyx_cypress
npm install
```
3. Cypress Verification
To ensure Cypress was installed correctly and its binary is ready:

```Bash
npx cypress verify
🧪 Running Tests
Graphical User Interface (GUI)
To debug and watch tests in a real browser:
```
```Bash
npx cypress open
Headless Mode (CLI)
To run tests in the background (as they run in GitHub Actions):
```
```Bash
npx cypress run
```
💡 Technical Solutions & Stability
During development, several "flaky" test issues were resolved to ensure stability in CI/CD:

Cookie Banner Handling: Used stable ID selectors (#onetrust-accept-btn-handler) for reliable interaction across different regions.

Handling Hidden Elements: Applied { force: true } for elements covered by animations or overlapping layers.

Network Resilience: Configured retries: { runMode: 2 } in cypress.config.js to handle transient server errors like 502 Bad Gateway.

Custom Timeouts: Increased pageLoadTimeout and added specific timeout (up to 120s) for heavy pages like /contact-us. 

🔄 Development Workflow
To update the project and trigger the automated pipeline:
```
git add .

git commit -m "your message"

git push origin main
```

✅ Future Improvements (TODO)
Next steps to make the project production-ready:

[ ] Page Object Pattern (POP): Refactor to separate UI selectors from test logic.

[ ] BDD / Gherkin: Integrate Cucumber for better test readability.

[ ] Parallelization: Configure multi-threaded execution in CI/CD to save time.

[ ] Advanced Reporting: Add Allure reports for professional visualization.
