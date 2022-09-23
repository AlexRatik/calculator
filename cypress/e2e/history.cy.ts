describe('history functionality', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it("should render empty history block and it's components", () => {
    cy.get('[data-testid="history_container"]').should('have.text', 'Clear');
    cy.get('[data-testid="history_list"]').should('have.text', '');
    cy.get('[data-testid="history_clear_button"]').should('have.text', 'Clear');
  });

  it("should add expression's history to history", () => {
    cy.get('[data-testid="keypad_button1"]').click();
    cy.get('[data-testid="keypad_button2"]').click();
    cy.get('[data-testid="keypad_button3"]').click();
    cy.get('[data-testid="keypad_button4"]').click();
    cy.get('[data-testid="keypad_button-"]').click();
    cy.get('[data-testid="keypad_button9"]').dblclick();
    cy.get('[data-testid="keypad_button="]').click();
    cy.get('[data-testid="display"]').should('have.text', '1135');
    cy.get('[data-testid="history_container"]').should('contain', '1234-99 = 1135');
    cy.get('[data-testid="history_container"]').should('have.length', '1');
    cy.get('[data-testid="history_list_item0"]').should('have.text', '1234-99 = 1135');
  });
});
