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
      response: [],
    });


    cy.visit('/');
    cy.contains('p', 'No campaings found :(');
  });

  it('goes to pre-sets page', () => {
    cy.visit('/');
    cy.get('[data-cy="list-component"] li').first().find('a').click();
    cy.url().should('contain', '/campaign');
  });
});

describe('List', () => {
  it('renders', () => {
    cy.visit('/');
    cy.get('[data-cy="list-component"]');
  });
});

describe('Presets', () => {
  describe('with no results found', () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: 'GET',
        url: 'http://localhost:3000/pre-sets*',
        response: [],
      });
    });

    it('when navigating from home', () => {
      cy.visit('/');
      cy.get('[data-cy="list-component"] li').first().find('a').click();
      cy.contains('p', 'No pre-set found related to this campaign :/');
    });

    it('when navigating directly through url', () => {
      cy.visit('/campaign/1');
      cy.contains('p', 'No pre-set found related to this campaign :/');
    });
  });

  describe('with no results found', () => {
    it('goes to "Issue new voucher" page', () => {
      cy.visit('/campaign/1');
      cy.get('[data-cy="list-component"] li').first().find('a').click();
      cy.url().should('contain', '/issue-voucher');
    });
  });
});

describe('Issuing Voucher', () => {
  beforeEach(() => cy.visit('/issue-voucher/1'));

  it('setting a value and clicking the button', () => {
    cy.get('[name="value"]').type(5);

    cy.get('button').click();

    cy.contains('.message', 'Voucher issued! Yey!');
  });

  it('not setting a value and clicking the button', () => {
    cy.get('button').click();

    cy.contains('.message', 'Missing required fields');
  });

  it('should clear value input after submitting', () => {
    cy.get('[name="value"]').type(5);

    cy.get('button').click();

    cy.get('[name="value"]').should('be.empty');
  });

  it('should show issued voucher for customer', () => {
    cy.get('[name="value"]').type(20);

    cy.get('button').click();

    cy.visit('/customer');

    cy.get('.list li').last().contains('20');
  });
});
