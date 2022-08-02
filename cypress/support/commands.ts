import "@testing-library/cypress/add-commands";
import "cypress-file-upload";
import "cypress-wait-until";

declare global {
    namespace Cypress {
        interface Chainable {
            SignIn: () => Cypress.Chainable;
        }
    }
}

Cypress.Commands.add('SignIn', () => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=s04lo9');
    cy.title().should('eq', 'Conduit');
    cy.location('protocol').should('eq', 'https:');
    cy.get('input[type="email"]').type('conduitacctst@outlook.com');
    cy.get('input[type="password"]').type('Al-123456789');
    cy.get('.btn').contains('Sign in').should('be.visible').click();
    cy.contains('Your Feed', { timeout: 40000 }).should('be.visible');
})
