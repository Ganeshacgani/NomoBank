const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pages/login.page');

Given('I launch the app', async () => {
});

When('I enter a valid username and password', async () => {
    await LoginPage.login('standard_user', 'secret_sauce');
});

When('I enter an invalid username and password', async () => {
    //login with invalid password
    await LoginPage.login('standard_user', 'sauce');
});

When('I click on the login button', async () => {
    await LoginPage.loginButton.click();
});

Then('I logout from the iOS application', async () => {
  // Logout from the application
  await LoginPage.menuButton.click();
  await LoginPage.logoutButton.click();
});

Then('I should see the welcome message', async () => {
    //verify that home page toggle button is displayed
    expect(await LoginPage.isLoginSuccessful());
});

Then('I should not see the welcome message', async () => {
    expect(await LoginPage.isLoginSuccessful());
});
