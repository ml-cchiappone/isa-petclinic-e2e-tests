
"use strict";
Cypress.Commands.add('login', (username, password) => {
    cy.session([username, password], () => {
        cy.request({
            method: 'GET',
            url: '/api/account',
            failOnStatusCode: false,
        });
        cy.authenticatedRequest({
            method: 'POST',
            body: { username, password },
            url: Cypress.env('authenticationUrl'),
        }).then(({ body: { id_token } }) => {
            sessionStorage.setItem(Cypress.env('jwtStorageName'), JSON.stringify(id_token));
        });
    }, {
        validate() {
            cy.authenticatedRequest({ url: '/api/account' }).its('status').should('eq', 200);
        }
    });
});