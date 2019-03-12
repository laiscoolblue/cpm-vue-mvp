describe('Header', () => {
  it('Shows correct title', () => {
    cy.visit('/');
    cy.contains('h1', 'Coolblue Payment Methods');
  });
});
