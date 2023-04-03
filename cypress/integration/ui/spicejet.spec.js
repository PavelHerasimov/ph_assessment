import {
    selectClildrenPassangers
} from "../../support/helpers";

describe('spicejet', () => {
    beforeEach(() => {
        cy.viewport('macbook-13')
        cy.visit('https://www.spicejet.com/')
        Cypress.on('uncaught:exception', (err) => {
            // returning false here prevents Cypress from
            // failing the test
            // but despite that the app often is crashing with error:
            // TypeError: Cannot read properties of undefined (reading 'isServer')
            //     at TLSWrap.onerror (node:_tls_wrap:411:27)
            // !try to re-run the test if the app is crashed
            if (err.message && err.message.includes('Cannot set propert')) {
                return false;
            }
            return true;
        });
    })

    it('should verify testing flow', () => {
        cy.get('[data-testid="svg-img"]').eq(11).click()
        cy.get('[data-testid="to-testID-origin"]').click().type('Agra')
        cy.get('[data-testid="to-testID-destination"]').click().clear().type('Jaipur')
        cy.get('[data-testid="undefined-calendar-day-1"]').eq(1).click()
        cy.get('[data-testid="undefined-calendar-day-15"]').eq(1).click()
        cy.get('[data-testid="home-page-travellers"]').click()
        cy.get('[data-testid="Adult-testID-plus-one-cta"]').click()
        selectClildrenPassangers()
        cy.get('[data-testid="Infant-testID-plus-one-cta"]').click()
        cy.get('[data-testid="home-page-travellers-done-cta"]').click()
        cy.wait(1000)
        cy.get('[data-testid="svg-img"]').eq(16).click()
        cy.get('.css-76zvg2.r-homxoj.r-ubezar').contains('USD').click()
        cy.get('[data-testid="home-page-flight-cta"]').click()
        cy.url()
    })

})