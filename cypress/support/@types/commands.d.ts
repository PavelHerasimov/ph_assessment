declare namespace Cypress {
    interface Chainable {
        /**
         * creates a new board via API
         */
        login(username: string, password: string): Chainable<Element>

        getRecord(applicationId: string, recordId: string): Chainable<Element>

        deleteRecord(applicationId: string, recordId: string): Chainable<Element>

        createRecord(applicationId: string, payload: object): Chainable<Element>

        fillLoginForm(login: string, password: object): Chainable<Element>

    }
}