/// <reference types="Cypress" />

it('Google test', function () {
    cy.visit('https://www.google.com/')
    cy.get('.gLFyf').type('Cypress is good for modern application').type('{enter}')


});
