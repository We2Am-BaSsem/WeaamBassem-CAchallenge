/**
 * Enum for login test results.
 * @readonly
 * @enum {string}
 */
export const TestResult = {
    VALID_LOGIN: 'VALID_LOGIN',
    INVALID_LOGIN: 'INVALID_LOGIN',
  };

/**
 * An array of test case objects for login functionality.
 * Each test case contains the following properties:
 * 
 * @typedef {Object} TestCase
 * @property {string} testTitle - The title or description of the test case.
 * @property {string} email - The email address used for the login attempt.
 * @property {string} password - The password used for the login attempt.
 * @property {TestResult} testResult - The expected result of the login attempt.
 * @property {string} errorMessage - The expected error message if the login attempt fails.
 * 
 * @type {TestCase[]}
 */
let testCases = [
    {
        testTitle: 'login with valid data',
        email: 'zuwynyla@azuretechtalk.net',
        password: 'I5<9o3{t%U1f',
        testResult: TestResult.VALID_LOGIN,
        errorMessage: ''
    },
    {
        testTitle: 'login with invalid email',
        email: 'test.test',
        password: 'I5<9o3{t%U1f',
        testResult: TestResult.INVALID_LOGIN,
        errorMessage: 'User does not exist.'
    },
    {
        testTitle: 'login with only whitespaces in email',
        email: ' ',
        password: 'I5<9o3{t%U1f',
        testResult: TestResult.INVALID_LOGIN,
        errorMessage: 'The username you entered cannot be empty or contain only spaces'
    },
    {
        testTitle: 'login with only whitespaces in data',
        email: 'test.test@test.com',
        password: ' ',
        testResult: TestResult.INVALID_LOGIN,
        errorMessage: 'The password you entered cannot be empty or contain only spaces'
    },
]

export default testCases;