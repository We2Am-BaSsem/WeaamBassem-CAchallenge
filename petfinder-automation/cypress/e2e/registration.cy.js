import { emailFormTestCases } from "../ddt/registeration.ddt";
import DashboardPage from "../pom/dashboard.pom";
import SignupPage from "../pom/signup.pom";
import { handleRedirectingToPurinaDomain, prepareGetRequestsHeaders } from "../utils/utils";

describe("Petfinder Registration Tests", () => {
  beforeEach(() => {
    // Intercepting requests to remove specific headers or set cookies
    prepareGetRequestsHeaders();

    // Intercepts all POST requests and modifies the request headers
    cy.intercept("POST", "**", (req) => {
      delete req.headers["x-cypress-is-aut-frame"];
      req.headers["cookie"] =
        "ak_bmsc=C10D1AF1E270436F2D3798C57268F464~000000000000000000000000000000~YAAQEBTfrdlj4/iTAQAArZSaBRpcNADFGX18+Dr9TuSpd0+q98jWOMuB4PTx4sHvMQlkCSV8YboXIYbYxesSLIVfUpTQDB0D5l529JVA34WidS9QyQEdxcEhrX37Fkw8FHRUzIndaW7jfZ5TpQetJkge1//29caJU1cCdTlYC1ZfpNLRz+P9Jjq0Y9Bhzk2KWad80Xsd+9bR9UbQLIrqreitkKTXBDE1IaP1DlWpujQjte+miKqhNXIaasc/Nl0p816r+HViisvfNL5hHdHt6iCXKkqugcugszLCC2TiQhefKS9gH59PsycNLnEbn471jgzX8YVH/VurTHWjVAW7UMJtJjbKA2Kb6panlWGIrXZ6ogFeovR8HC3V6Zr11BCuv8pw0urIDaz8u6t9ZdG34hf3YqRl0IDTIqq0rjSN2WQgsJQ/mJM+fOu2nIfGc+ibaBV1jBHUA9eF/EQgnQ==; last-origin={%22origin%22:%22https://www.petfinder.com/%22%2C%22property%22:%22petfinder%22%2C%22method%22:%22undefined%22%2C%22client%22:%226gmsl23kdd0607g6qdbgknqsd1%22%2C%22aid%22:%22undefined%22%2C%22referrer%22:%22https://myprofile.purina.com/sign-up?aid=undefined&client=6gmsl23kdd0607g6qdbgknqsd1&method=undefined&origin=https%253A%252F%252Fwww.petfinder.com%252F&property=petfinder&sign-up-source=PFPetfinderSiteRegistration%22%2C%22signUpSource%22:%22PFPetfinderSiteRegistration%22}; OptanonConsent=isGpcEnabled=0&datestamp=Fri+Dec+27+2024+02%3A53%3A25+GMT%2B0200+(Eastern+European+Standard+Time)&version=202410.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&landingPath=https%3A%2F%2Fmyprofile.purina.com%2Fsign-up%3Fproperty%3Dpetfinder%26origin%3Dhttps%253A%252F%252Fwww.petfinder.com%252F%26client%3D6gmsl23kdd0607g6qdbgknqsd1%26aid%3Dundefined%26method%3Dundefined%26sign-up-source%3DPFPetfinderSiteRegistration&groups=C0001%3A1%2CC0003%3A1%2CBG142%3A0%2CC0002%3A0%2CC0004%3A0; ab.storage.sessionId.a7a57684-7cc6-4c98-b7aa-83e5b1afe6bc=%7B%22g%22%3A%229ea42cfd-40b0-0b67-8005-9ebc4d732f1b%22%2C%22e%22%3A1735262605886%2C%22c%22%3A1735260805886%2C%22l%22%3A1735260805886%7D; ab.storage.deviceId.a7a57684-7cc6-4c98-b7aa-83e5b1afe6bc=%7B%22g%22%3A%220b2fbd8c-2a44-d8d8-dc5f-97fa26664ba0%22%2C%22c%22%3A1735260805888%2C%22l%22%3A1735260805888%7D";
    }).as("overridePostHeaders");
    
    // Visiting the homepage
    cy.visit("/", { failOnStatusCode: false });
  });

  it.only("should successfully register a new user", () => {
    // Step 1: Click on the Sign In button to navigate to the login page
    new DashboardPage()
      .clickSignInButton()
      .clickCreateAccountButton();

    // Step 2: Handle uncaught exceptions before visiting the cross-origin page
    handleRedirectingToPurinaDomain();

    // Step 4: Continue with form submission
    new SignupPage()
    .fillEmailField(`user_${Date.now()}@chosenx.com`)
    .clickContinueButton()
    .fillFirstNameField('Poya')
    .fillLastNameField('Poyan')
    .fillPostalCodeField('10001')
    .selectNumOfDogs(1)
    .selectNumOfCats(3)
    .clickContinueButton()
    .fillPasswordField("Secret_sauce#123")
    .fillConfirmPasswordField("Secret_sauce#123")
    .clickTermsCheckbox()
    .clickContinueButton()
    .verifyUserSignupSuccessfully();
  });


  emailFormTestCases.forEach((testCase) => {
    it(testCase.testTitle, () => {
      // Step 1: Click on the Sign In button to navigate to the login page
      new DashboardPage()
        .clickSignInButton()
        .clickCreateAccountButton();
  
      // Step 2: Handle uncaught exceptions before visiting the cross-origin page
      handleRedirectingToPurinaDomain();
  
      // Step 4: Continue with form submission
      new SignupPage()
      .fillEmailField(testCase.email)
      .clickContinueButton()
      .verifyEmailForm(testCase.errorMessages);
    });
  });
});
