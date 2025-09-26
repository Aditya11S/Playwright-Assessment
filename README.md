![Playwright](https://img.shields.io/badge/Playwright-Automation-blue)
# Playwright Login Page Automation
---
## Project Overview
As part of assignment, this project automates the login functionality of "https://practicetestautomation.com/practice-test-login/" and 6 test cases. These are functional test cases which includes both positive and negative test cases. Below is the further information : 

- **Framework :** Playwright
- **Language :** JavaScript
- **Browser :** Chromium, Firefox, WebKit
- **Testcase :** 11 functional test cases (6 positive, 5 negative)
- **Automated Test cases :** 6 test cases

---
## Prerequisites
- Node.js >= 22
- npm
- Git
---

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone 'https://github.com/Aditya11S/Playwright-Assessment'
   cd Playwright-Assessment

2. Install dependencies:
    ```bash
    npm install

3. Install Playwright browsers:
    ```bash
    npx playwright install
---

## How to Run / View Reports
1. All test
    ```bash
    npm run test

2. Run specific file
    ```bash
    npm run test:login

3. Run specific file in specific browser
    ```bash
    npx playwright test tests/Logic.spec.js --project=chromium

4. Run specific file in specific browser with headed mode (by default : Headless)
    ```bash
    npx playwright test tests/Logic.spec.js --project=chromium --headed

5. View test report
    ```bash
    npm run report

## Note: 
- All the test cases are mentioned / written in the Coverage.md file.