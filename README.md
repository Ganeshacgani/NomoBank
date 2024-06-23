# Appium Login Automation

## Setup

  Clone the repository:
   ```bash
   git clone https://github.com/your-repo/appium-login-automation.git
   cd appium-login-automation
   #install dependencies
   npm install
   Update the wdio.conf.js file with the correct path to your app:
   app: '<path_to_your_app>', // Path to your .app or .ipa file

   //For running tests on local machine
   Start Appium server:
   npx appium

   Run the tests:
   npx wdio wdio.conf.js

   //for viewing results
   Generate Allure report:
   npx allure generate allure-results --clean -o allure-report

   npx allure open allure-report
