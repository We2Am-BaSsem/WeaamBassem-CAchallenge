/**
 * Intercepts all GET requests and removes the "x-cypress-is-aut-frame" header.
 * This function sets up a Cypress intercept for all GET requests and deletes the specified header.
 * The intercept is aliased as "overrideGetHeaders".
 * This stop the website from detecting that it is running in an automated test environment.
 */
export function prepareGetRequestsHeaders() {
  cy.intercept("GET", "**", (req) => {
    delete req.headers["x-cypress-is-aut-frame"];
  }).as("overrideGetHeaders");
}

/**
 * Handles redirecting to the Purina domain and suppresses specific uncaught exceptions.
 */
export function handleRedirectingToPurinaDomain() {
  cy.origin("https://myprofile.purina.com", () => {
    cy.on("uncaught:exception", (e) => {
      // Check if the error message contains the string related to the analytics issue
      if (e.message.includes("analytics is not defined")) {
        // Suppress the error and continue the test
        return false;
      }
    });
  });
}
