describe('api testing', () => {

    before('fetches Todo items - GET', () => { // why this name?
        cy.login()
    });

    it('Create Record Test', () => {
        cy.createRecord(`${Cypress.env('applicationId')}`).then(response => {
            expect(response.status).to.eq(200)
            expect(response.body.name).not.to.be.empty
            expect(response.body.id).not.to.be.empty
        })
    });

    it('Get Record Test', () => {
        cy.createRecord(`${Cypress.env('applicationId')}`)
            .then(postResponse => {
                expect(postResponse.status).to.eq(200)
                expect(postResponse.body.name).not.to.be.empty

                let recordName = postResponse.body.name
                let recordId = postResponse.body.id

                cy.getRecord(`${Cypress.env('applicationId')}`, recordId)
                    .then(getResponse => {
                        expect(getResponse.status).to.eq(200)
                        expect(getResponse.body.name).to.eq(recordName)
                    });
            })
    });

    it('Delete Record Test', () => {
        cy.createRecord(`${Cypress.env('applicationId')}`)
            .then(postResponse => {
                expect(postResponse.status).to.eq(200)
                expect(postResponse.body.name).not.to.be.empty

                let recordId = postResponse.body.id

                cy.deleteRecord(`${Cypress.env('applicationId')}`, recordId)
                    .then(deleteResponse => {
                        expect(deleteResponse.status).to.eq(204)
                    });
            })
    });
})