// https://docs.cypress.io/api/introduction/api.html

describe('Home', () => {
  it('shows the title', () => {
    cy.visit('/');
    cy.contains('h1', 'Coolblue Payment Methods');
  });

  it('shows no campaign found message', () => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/campaigns',
      response: []
    });

    cy.visit('/');
    cy.contains('p', 'No campaings found :(');
  });

  it('goes to pre-sets page', () => {
    cy.visit('/');
    cy.get('[data-cy="list-component"] li').first().find('a').click();
    cy.url().should('contain', '/campaign')
  });
});

describe('List', () => {
  it('renders', () => {
    cy.visit('/');
    cy.get('[data-cy="list-component"]');
  });
});

describe('Presets', () => {
  it('show no results found message if no results found', () => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/pre-sets*',
      response: []
    });

    cy.visit('/');
    cy.get('[data-cy="list-component"] li').first().find('a').click();
    cy.contains('p', 'No pre-set found related to this campaign :/');
  });

  it.only('show no results found message if no results found2', () => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/pre-sets*',
      response: []
    });

    cy.visit('/campaign/1');
    cy.contains('p', 'No pre-set found related to this campaign :/');
  });
});
