describe('Header', () => {
  it('Shows list items', () => {
    cy.visit('/');
    cy.contains('h1', 'Coolblue Payment Methods');
  });

  it('Shows menu', () => {
    cy.visit('/');
    cy.contains('nav', 'Home');
  });
});
