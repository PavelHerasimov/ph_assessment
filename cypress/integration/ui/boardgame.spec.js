describe('boardgamegeek', () => {
    beforeEach(() => {
        cy.visit('https://www.boardgamegeek.com/advsearch/boardgame.com/')
    })

    it('should verify testing flow', () => {
        cy.get('#advsearch-title').type('Harry Potter and the Sorcerer\'s Stone Trivia Game')
        cy.get('#advsearch-yearpublished-min').type('1999')
        cy.get('#advsearch-yearpublished-max').type('2000')
        cy.get('#advsearch-min-playing-time').select('15')
        cy.get('#advsearch-max-playing-time').select('90')
        cy.get('[type="submit"]').eq(1).click()
        cy.get('[href*="harry-potter"]').should('have.text', 'Harry Potter and the Sorcerer\'s Stone Trivia Game')
    })

})