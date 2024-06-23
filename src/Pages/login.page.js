class LoginPage {
    get username() { return $('~test-Username'); } // Using accessibilityId
    get password() { return $('~test-Password'); }
    get loginButton() { return $('~test-LOGIN'); }
    get menuButton() { return $('~test-Menu'); }
    get logoutButton() { return $('~test-LOGOUT'); }
    get welcomeMessage() { return $('~test-Toggle'); }

    async login(username, password) {
        await (await this.username).setValue(username);
        await (await this.password).setValue(password);
    }

    async isLoginSuccessful() {
        return this.welcomeMessage.isDisplayed();
    }
}

module.exports = new LoginPage();
