export const assertIeltsTab = (
): Cypress.Chainable => {
    cy.get('.main-menu.fullShow').eq(0).invoke('text').should('eq', 'CD-IELTS')
    cy.get('[href="/ielts"]').contains('About')
    return cy.get('[href="/ielts-packages-pricing"]').contains('Pricing & Package')
}

export const assertPteTab = (
): Cypress.Chainable => {
    cy.get('.main-menu.fullShow').eq(1).invoke('text').should('eq', 'PTE')
    cy.get('[href="/pte"]').contains('About')
    return cy.get('[href="/pte-packages-pricing"]').contains('Pricing & Package')
}

export const assertkCelpipTab = (
): Cypress.Chainable => {
    cy.get('.main-menu.fullShow').eq(2).invoke('text').should('eq', 'CELPIP')
    cy.get('[href="/celpip"]').contains('About')
    return cy.get('[href="/celpip-packages-pricing"]').contains('Pricing & Package')
}

export const assertCaelTab = (
): Cypress.Chainable => {
    cy.get('.main-menu.fullShow').eq(3).invoke('text').should('eq', 'CAEL')
    cy.get('[href="/cael"]').contains('About')
    return cy.get('[href="/cael-packages-pricing"]').contains('Pricing & Package')
}

export const selectClildrenPassangers = (
): Cypress.Chainable => {
    Cypress._.times(3, () => {
        cy.get('[data-testid="Children-testID-plus-one-cta"]').click()
    })
    return
}