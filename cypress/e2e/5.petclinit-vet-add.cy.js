describe('Logs', () => {
    const username = Cypress.env('petClinicUsername');
    const password = Cypress.env('petClinicUsername');

    beforeEach(() => {
        cy.visit('http://localhost:8080');
    });

    it('Creo una entidad con cypress', () => {
        // cy.get('[data-cy="navbar"]').get('[data-cy="adminMenu"]').click().get(`.dropdown-item[href="/admin/logs"]`).click()
        // cy.get('[data-cy="logsPageHeading"]').should('be.visible');
        cy.visit('http://localhost:8080/');
        cy.get('[data-cy="navbar"]').get('[data-cy="entity"]').click().get(`.dropdown-item[href="/vet"]`).click()
        cy.get('[data-cy="entityCreateButton"]').click()
        cy.get('[data-cy=firstname]').click();
        cy.get('[data-cy=firstname]').type('Entidad creada con cypress');
        cy.get('[data-cy=lastname]').type('cypress');
        cy.get('#save-entity > span').click();
        cy.get('.ng-submitted').submit();

    });
});

