import faker from 'faker'

describe('Login page', () => {
    beforeEach(()=>{
        cy.visit('/')
    });

    it('User successfully logged in', () => {
        cy.fillLoginForm(Cypress.env('username'), Cypress.env('password'))
        cy.get('[data-cy="welcome__container"]')
            .find('h1')
            .contains('Complete Your Profile')
        cy.visit('/logout')
    });

    it('User failed to login with invalid credentials', () => {
        cy.fillLoginForm('pherasimov', faker.random.word())
        cy.get('.login-error').contains('Login failed.')
    });

    it('User failed to login without credentials', () => {
        cy.get('[data-cy="submit__btn"]')
            .click( {force: true} )
        cy.get('[data-cy="username__input"]')
            .find('input').should('have.class', 'ng-invalid')
    });
});