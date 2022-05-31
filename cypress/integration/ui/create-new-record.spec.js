import {clickSaveButtons, fillEmployeeInfo, fillHiringInfo} from "../../support/record-helpers";

describe('Creating a new record', () => {  //spec?

    beforeEach(() => {
        cy.visit('/')
        cy.fillLoginForm(Cypress.env('username'), Cypress.env('password'))
    });

    it('User successfully created a record', () => {
        cy.get('[data-cy="new-record1__btn"]').click()
        fillEmployeeInfo()
        fillHiringInfo()
        clickSaveButtons()
    });
})