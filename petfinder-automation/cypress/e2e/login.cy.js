import testCases, { TestResult } from "../ddt/login.ddt";
import DashboardPage from "../pom/dashboard.pom";
import LoginPage from "../pom/login.pom";
import { handleRedirectingToPurinaDomain, prepareGetRequestsHeaders } from "../utils/utils";


describe("Petfinder Registration Tests", () => {
  beforeEach(() => {
    // Intercepting requests to remove specific headers or set cookies
    prepareGetRequestsHeaders();

    // Visiting the homepage
    cy.visit("/", { failOnStatusCode: false });
  });

  // Loop through each test case
  testCases.forEach((testCase) => {
    it(testCase.testTitle, () => {
      // Step 1: Click on the Sign In button to navigate to the login page
      new DashboardPage()
      .clickSignInButton()
      .clickLoginButton();
  
      // Step 2: Handle uncaught exceptions before visiting the cross-origin page
      handleRedirectingToPurinaDomain();
      
      // Step 3: Fill in the login form and click the Sign In button
      new LoginPage()
      .fillEmailField(testCase.email)
      .fillPasswordField(testCase.password)
      .clickSignInButton();

      // Step 4: Verify the test result
      if (TestResult.VALID_LOGIN === testCase.testResult) {
        new DashboardPage()
        .verifyUserLoggedIn();
      } else {
        new DashboardPage()
        .verifyUserFailedToLogIn(testCase.errorMessage);
      }

    });
  
  
  
  });


});
