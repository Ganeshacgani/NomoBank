class LoginPage {
    get username() { return $('~test-Username'); } // Using accessibilityId
    get password() { return $('~test-Password'); }
    get loginButton() { return $('~test-LOGIN'); }
    get menuButton() { return $('~test-Menu'); }
    get logoutButton() { return $('~test-LOGOUT'); }
    get welcomeMessage() { return $('~test-Toggle'); }

    async login(username, password) {
        await (await this.username).waitForDisplayed({ timeout: 90000 });
        await (await this.username).setValue(username);
        await (await this.password).waitForDisplayed({ timeout: 50000 });
        await (await this.password).setValue(password);
    }

    async isLoginSuccessful() {
        return this.welcomeMessage.isDisplayed();
    }
}

module.exports = new LoginPage();
