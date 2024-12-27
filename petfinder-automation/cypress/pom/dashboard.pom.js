

class DashboardPage {
    constructor() {
        this.signInButtonLocator = 'button[aria-label="sign in"]';
        this.createAccountButtonLocator = '.ptw-w-full';
        this.loginButtonLocator = 'button';
        this.myAccountButtonLocator = 'button[aria-controls="radix-:rf:"]';
    }

    clickSignInButton() {
        cy.get(this.signInButtonLocator).click();
        return this;
    }

    clickCreateAccountButton() {
        cy.get(this.createAccountButtonLocator).contains("Create Account").click();
        return this;
    }

    clickLoginButton() {
        cy.get(this.loginButtonLocator).contains("Log in").click();
        return this;
    }

    verifyUserLoggedIn() {
        cy.get(this.signInButtonLocator).should('not.exist');
        return this;
    }
    
    verifyUserFailedToLogIn(errorMessage) {
        cy.get('p#loginErrorMessage').last().contains(errorMessage).should('exist');
        return this;
    }




}

export default DashboardPage;