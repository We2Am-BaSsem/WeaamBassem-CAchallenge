export let emailFormTestCases = [
    {
        testTitle: 'signup with email without @',
        email: `user_${Date.now()}`,
        errorMessages: 'Email is missing @'
    },
    {
        testTitle: 'signup with email without domain',
        email: `user_${Date.now()}@chosenx`,
        errorMessages: 'Email is missing a domain ex: .com'
    },
    {
        testTitle: 'signup with email without mail service',
        email: `user_${Date.now()}.chosenx@`,
        errorMessages: 'Please provide an email in this format: name@example.com'
    },
]