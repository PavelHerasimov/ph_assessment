import { JSONPath } from 'jsonpath-plus';
import faker from 'faker'
import '@bahmutov/cy-api'


Cypress.Commands.add('login', (username = Cypress.env('username'), password = Cypress.env('password')) => {
    cy.api({
        method: 'POST',
        url: Cypress.env('baseUrl') + '/api/user/login/',
        body: {
            'username': username,
            'password': password
        }}).then(
            (response) => {
                Cypress.env('applicationId', JSONPath({ path: '$.permission..[?(@.type=="Application")].id', json: response.body }))
                Cypress.env('userId', response.body.id)
                Cypress.env('userName', response.body.displayName)
                Cypress.env('token', response.body.token)

    })
});

Cypress.Commands.add('getRecord', (applicationId, recordId) => {
    cy.api({
        method: 'GET',
        url: `${Cypress.env('baseUrl')}/api/app/${applicationId}/record/${recordId}`,
        headers: { 'Content-Type': 'application/json; charset=utf-8'},
        auth: { bearer: `${Cypress.env('token')}` }
    })
});

Cypress.Commands.add('createRecord', (applicationId) => {
    cy.api({
        method: 'GET',
        url: `${Cypress.env('baseUrl')}/api/app/${applicationId}/record`,
        headers: { 'Content-Type': 'application/json; charset=utf-8', },
        auth: { bearer: `${Cypress.env('token')}` },
        }).then(
            (getBaseRecordResponse) => {

                let postPayload = getBaseRecordResponse.body
                postPayload['coeditSession'] = {"editors": [{"id": `${Cypress.env('userId')}`, "name": `${Cypress.env('userName')}`}],"fields": {},"values": {}}
                postPayload['values']['5fed3a0c7571db02a9226400'] = 1
                postPayload['values']['aFjm80LnbJf780V6p'] = faker.datatype.uuid()
                postPayload['values']['aHdR_gHQmRT8ItVTL'] = faker.datatype.uuid()
                postPayload['values']['aHxOeHmCTIGd_hg1b'] = faker.datatype.uuid()

                cy.api({
                    method: 'POST',
                    url: `${Cypress.env('baseUrl')}/api/app/${applicationId}/record`,
                    headers: { 'Content-Type': 'application/json; charset=utf-8', },
                    auth: { bearer: `${Cypress.env('token')}` },
                    body: postPayload,
                })
    })
});

Cypress.Commands.add('deleteRecord', (applicationId, recordId) => {
    cy.api({
        method: 'DELETE',
        url: `${Cypress.env('baseUrl')}/api/app/${applicationId}/record/${recordId}`,
        headers: { 'Content-Type': 'application/json; charset=utf-8'},
        auth: { bearer: `${Cypress.env('token')}` }
    })
});

Cypress.Commands.add('fillLoginForm', (login, password) => {
    cy.get('.preloader').should('not.exist')
    cy.get('[data-cy="username__input"]')
        .find('input')
        .type(login)
    cy.get('[data-cy="password__input"]')
        .find('input')
        .type(password)
    cy.get('[data-cy="submit__btn"]')
        .click()
});