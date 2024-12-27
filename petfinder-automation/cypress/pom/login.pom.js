

class LoginPage {
    constructor() {
        // this.emailFieldLocator = 'input#signInFormUsername';
        // this.passwordFieldLocator = 'input#signInFormPassword';
        // this.signinButtonLocator = 'button[name="signInSubmitButton"]';
        this.emailFieldLocator = '.panel-left-border > :nth-child(2) > :nth-child(1) > .cognito-asf > :nth-child(3) > #signInFormUsername';
        this.passwordFieldLocator = '.panel-left-border > :nth-child(2) > :nth-child(1) > .cognito-asf > :nth-child(5) > #signInFormPassword';
        this.signinButtonLocator = '.panel-left-border > :nth-child(2) > :nth-child(1) > .cognito-asf > .btn';

    }

    fillEmailField(email) {
        cy.get(this.emailFieldLocator)
        .first()
        .type(email, { delay: 0 });
        return this;
    }

    fillPasswordField(password) {
        cy.get(this.passwordFieldLocator)
        .first()
        .type(password, { delay: 0 });
        return this;
    }

    clickSignInButton() {
        cy.get(this.signinButtonLocator).click();
        return this;
    }
}

export default LoginPage;