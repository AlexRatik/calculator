describe('Settings functionality', () => {
  beforeEach(() => {
    cy.visit('/settings');
  });
  it('should render settings container', () => {
    cy.get('[data-testid="settings_container"]').should('be.visible');
    cy.get('[data-testid="settings_title"]').should('have.text', 'Settings');
    cy.get('[data-testid="settings_choose_theme_select"] > option').should('have.length', '2');
    cy.get('[data-testid="settings_choose_theme_select"]').should('have.value', 'dark');
    cy.get('header').should('have.css', 'color', 'rgb(0, 0, 0)');
  });

  it('should change theme', () => {
    cy.get('[data-testid="settings_choose_theme_select"]').select('light');
    cy.get('[data-testid="settings_choose_theme_select"]').should('have.value', 'light');
    cy.get('header').should('have.css', 'color', 'rgb(255, 255, 255)');
    cy.get('[data-testid="settings_choose_theme_select"]').select('dark');
    cy.get('[data-testid="settings_choose_theme_select"]').should('have.value', 'dark');
    cy.get('header').should('have.css', 'color', 'rgb(0, 0, 0)');
  });
});
