import {
    assertCaelTab,
    assertIeltsTab,
    assertkCelpipTab,
    assertPteTab,
} from "../../support/helpers";

describe('fourmodules', () => {
    beforeEach(() => {
        cy.visit('https://www.fourmodules.com/')
    })

    it('should verify page elements 1st section', () => {
        cy.get('.main-menu.fullShow').contains('CD-IELTS').click()
        cy.url().should('include', 'https://www.fourmodules.com/ielts')
        cy.get('.btn.btn-green').contains('Any Questions?').should('be.visible').click()
        cy.get('#exampleModalLabel')
            .should('be.visible')
            .invoke('text')
            .should('eq', 'How can we help?')
        cy.get('[aria-label="Close"]').eq(0).click()
        cy.get('.btn.btn-green').contains('Take Free Demo').should('be.visible').click()
        cy.url().should('include', 'https://www.fourmodules.com/signup')
    })

    it('should verify page elements 2nd section', () => {
        assertIeltsTab()
        assertPteTab()
        assertkCelpipTab()
        assertCaelTab()
    })

})