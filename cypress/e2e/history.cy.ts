describe('history functionality', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it("should render empty history block and it's components", () => {
    cy.get('[data-testid="historyContainer"]').should('have.text', 'Clear');
    cy.get('[data-testid="historyList"]').should('have.text', '');
    cy.get('[data-testid="historyClearButton"]').should('have.text', 'Clear');
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
    cy.get('[data-testid="historyContainer"]').should('contain', '1234-99 = 1135');
    cy.get('[data-testid="historyList"] > li').should('have.length', '1');
    cy.get('[data-testid="historyListItem0"]').should('have.text', '1234-99 = 1135');
  });

  it("should clear history by 'Clear All' button", () => {
    cy.get('[data-testid="keypad_button2"]').click();
    cy.get('[data-testid="keypad_button3"]').click();
    cy.get('[data-testid="keypad_button4"]').click();
    cy.get('[data-testid="keypad_button-"]').click();
    cy.get('[data-testid="keypad_button9"]').dblclick();
    cy.get('[data-testid="keypad_button="]').click();
    cy.get('[data-testid="historyListItem0"]').should('have.text', `234-99 = ${234 - 99}`);
    cy.get('[data-testid="clearAllButton"]').click();
    cy.get('[data-testid="historyList"] > li').should('have.length', '0');
  });

  it("should clear history by 'Clear' button", () => {
    cy.get('[data-testid="keypad_button2"]').click();
    cy.get('[data-testid="keypad_button3"]').click();
    cy.get('[data-testid="keypad_button4"]').click();
    cy.get('[data-testid="keypad_button-"]').click();
    cy.get('[data-testid="keypad_button9"]').dblclick();
    cy.get('[data-testid="keypad_button="]').click();
    cy.get('[data-testid="historyListItem0"]').should('have.text', `234-99 = ${234 - 99}`);
    cy.get('[data-testid="historyClearButton"]').click();
    cy.get('[data-testid="historyList"] > li').should('have.length', '0');
  });

  it('should show/hide history', () => {
    cy.get('[data-testid="historyContainer"]').should('have.css', 'opacity', '1');
    cy.get('[data-testid="showHideHistoryButton"]').click();
    cy.get('[data-testid="historyContainer"]').should('have.css', 'opacity', '0.2');
    cy.get('[data-testid="showHideHistoryButton"]').click();
    cy.get('[data-testid="historyContainer"]').should('have.css', 'opacity', '1');
  });
});
