import { navLinks } from '../../src/constants/navLinks';

describe('router functionality', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should render navigation panel', () => {
    cy.get('[data-testid="header"]').should('contain', 'Calculator');
    cy.get('[data-testid="header_title"]').should('have.text', 'Calculator');
    cy.get('[data-testid="header_nav"]')
      .should('be.visible')
      .find('a')
      .should(($a) => {
        expect($a).to.have.length(3);
        expect($a.eq(0)).to.contain(navLinks[0].text);
        expect($a.eq(1)).to.contain(navLinks[1].text);
        expect($a.eq(2)).to.contain(navLinks[2].text);
      });
  });

  it('should start from /fc path', () => {
    cy.location('pathname').should('eq', '/fc');
  });

  it('should navigate to /cc', () => {
    cy.location('pathname').should('eq', '/');
    cy.get('[data-testid="header_nav_item0"]').click();
    cy.location('pathname').should('eq', '/cc');
  });
  it('should navigate to /fc', () => {
    cy.get('[data-testid="header_nav_item1"]').click();
    cy.location('pathname').should('eq', '/fc');
  });
  it('should navigate to /settings', () => {
    cy.get('[data-testid="header_nav_item2"]').click();
    cy.location('pathname').should('eq', '/settings');
  });
});
