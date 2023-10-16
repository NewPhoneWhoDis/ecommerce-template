// cypress/integration/e2e.spec.js
describe('E2E test example', () => {
    it('Visits the app', () => {
      cy.visit('/');
      cy.should('exist');
    });
});
  