class SignupPage {
  constructor() {
    this.emailFieldLocator = "#emailAddress";
    this.continueButtonLocator = 'button[type="submit"]';
    this.firstNameFieldLocator = "#firstName";
    this.firstNameLabelLocator = 'label[for="firstName"]';
    this.lastNameFieldLocator = "#lastName";
    this.postalCodeFieldLocator = "#postalCode";
    this.dogCountLocator = "#dogCount-trigger";
    this.countOptionsLocator = 'div[role="option"]';
    this.catCountLocator = "#catCount-trigger";
    this.passwordFieldLocator = "#password";
    this.confirmPasswordFieldLocator = "#confirmPassword";
    this.termsCheckboxLocator = "#terms";

    this.headerText_CL_1 = "Verify your email";
    this.headerText_CL_2 =
      "One more step! A verification link has been sent to your email. Please check your inbox, including your spam folder, to finish creating your account.";
  }

  fillEmailField(email) {
    cy.get(this.emailFieldLocator)
      .should("be.visible")
      .type(email, { delay: 0 });
    return this;
  }

  clickContinueButton() {
    cy.get(this.continueButtonLocator)
      .should("be.visible")
      .click({ force: true });
    return this;
  }

  fillFirstNameField(firstName) {
    cy.get(this.firstNameLabelLocator).should("be.visible");
    cy.get(this.firstNameFieldLocator).type(firstName, { delay: 0 });
    return this;
  }

  fillLastNameField(lastName) {
    cy.get(this.lastNameFieldLocator).type(lastName, { delay: 0 });
    return this;
  }

  fillPostalCodeField(postalCode) {
    cy.get(this.postalCodeFieldLocator).type(postalCode, { delay: 0 });
    return this;
  }

  selectNumOfDogs(optionIndex) {
    cy.get(this.dogCountLocator).click({ force: true });
    cy.get(this.countOptionsLocator).eq(optionIndex).click({ force: true });
    return this;
  }

  selectNumOfCats(optionIndex) {
    cy.get(this.catCountLocator).click({ force: true });
    cy.get(this.countOptionsLocator).eq(optionIndex).click({ force: true });
    return this;
  }

  fillPasswordField(password) {
    cy.get(this.passwordFieldLocator).type(password, { delay: 0 });
    return this;
  }

  fillConfirmPasswordField(password) {
    cy.get(this.confirmPasswordFieldLocator).type(password, { delay: 0 });
    return this;
  }

  clickTermsCheckbox() {
    cy.get(this.termsCheckboxLocator).click();
    return this;
  }

  verifyUserSignupSuccessfully() {
    cy.get("h1").contains(this.headerText_CL_1).should("be.visible");
    cy.get("p").contains(this.headerText_CL_2).should("be.visible");
    return this;
  }

  verifyEmailForm(errorMessage) {
    cy.get("span.error-text").contains(errorMessage).should("be.visible");
    return this;
  }
}

export default SignupPage;
