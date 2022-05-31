export const fillEmployeeInfo = (
    firstName = 'Johnny',
    lastName = 'Depp',
    streetAddress = 'Holly Hills 55',
    city = 'LA',
    state = 'CA',
    telephone = '(111) 111-1111',
    zip = '95131',
    email = 'a@a.com',
    text = 'note'
): Cypress.Chainable<JQuery<HTMLElement>> => {
    cy.get('[name="aHdR_gHQmRT8ItVTL"]').type(firstName)
    cy.get('[name="aHxOeHmCTIGd_hg1b"]').type(lastName)
    cy.get('[name="aJDBDjjIFiTemxLGc"]').type(streetAddress)
    cy.get('[name="aFjm80LnbJf780V6p"]').type(city)
    cy.get('[name="aIaHwVkkr_seOK096"]').type(state)
    cy.get('[name="aJX7sLD3xZH9TlVps"]').type(telephone)
    cy.get('[name="aKTyoAgO27gfZC0Vd"]').type(zip)
    cy.get('[name="aGgc3qp6gt3dDR_na"]').type(email)
    return cy.get('[name="aJr4VxhqeQ4fAZgO7"]').type(text)
}

export const fillHiringInfo = (
    employeeId = 'emp2022'
    ): Cypress.Chainable<JQuery<HTMLElement>> => {
    cy.get('[name="aIuEa7EWYrg958AiM"]').eq(0).click()
    cy.get('[name="aGMfQEKK_1G7WdqEK"]').eq(3).click()
    cy.get('[name="aFPpUOs0uSrcRCKYZ"]').eq(1).click()
    cy.get('[name="aG_YiSItNjs7vGALq"]').type(employeeId)
    cy.get('[name="aHJVM3nf4afdc4Kv5"]').click()
    return cy.get('div.select2-result-label div').contains('The Beatles').click()
}

export const clickSaveButtons = (): Cypress.Chainable<JQuery<HTMLElement>> => {
   cy.get('.save-button.btn-primary').click()
   return cy.get('.btn.btn-primary').eq(2).click()
}