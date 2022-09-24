import { ErrorMessagesEnum } from '../../src/constants/ErrorMessages';

describe('render display', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render 0 on start', () => {
    cy.get('[data-testid="display"]').should('have.text', '0');
    cy.get('[data-testid="display_text"]').should('have.text', '0');
    cy.get('[data-testid="display_error"]').should('have.text', '');
  });

  it('should correctly render on input', () => {
    cy.get('[data-testid="keypad_button3"]').should('have.text', '3').click();
    cy.get('[data-testid="display"]').should('have.text', '3');
    cy.get('[data-testid="keypad_button/"]').should('have.text', '/').click();
    cy.get('[data-testid="display"]').should('have.text', '3/');
    cy.get('[data-testid="keypad_button1"]').should('have.text', '1').click();
    cy.get('[data-testid="display"]').should('have.text', '3/1');
    cy.get('[data-testid="keypad_button="]').should('have.text', '=').click();
    cy.get('[data-testid="display"]').should('have.text', '3');
  });

  it('should render DIVISION BY ZERO error msg', () => {
    cy.get('[data-testid="keypad_button5"]').should('have.text', '5').click();
    cy.get('[data-testid="display"]').should('have.text', '5');
    cy.get('[data-testid="keypad_button/"]').should('have.text', '/').click();
    cy.get('[data-testid="display"]').should('have.text', '5/');
    cy.get('[data-testid="keypad_button0"]').should('have.text', '0').click();
    cy.get('[data-testid="display"]').should('have.text', '5/0');
    cy.get('[data-testid="keypad_button="]').should('have.text', '=').click();
    cy.get('[data-testid="display_text"]').should('have.text', '5/0');
    cy.get('[data-testid="display_error"]').should(
      'have.text',
      `${ErrorMessagesEnum.DIVISION_BY_ZERO}`
    );
    cy.get('[data-testid="display"]').should(
      'have.text',
      `5/0${ErrorMessagesEnum.DIVISION_BY_ZERO}`
    );
  });

  it('should render INVALID BRACKETS error msg', () => {
    cy.get('[data-testid="keypad_button)"]').should('have.text', ')').click();
    cy.get('[data-testid="keypad_button="]').should('have.text', '=').click();
    cy.get('[data-testid="display_text"]').should('have.text', ')');
    cy.get('[data-testid="display_error"]').should(
      'have.text',
      `${ErrorMessagesEnum.INVALID_BRACKETS}`
    );
    cy.get('[data-testid="display"]').should('have.text', `)${ErrorMessagesEnum.INVALID_BRACKETS}`);
  });

  it('should render INVALID EXPRESSION error msg', () => {
    cy.get('[data-testid="keypad_button9"]').should('have.text', '9').click();
    cy.get('[data-testid="keypad_button-"]').should('have.text', '-').click();
    cy.get('[data-testid="display"]').should('have.text', '9-');
    cy.get('[data-testid="keypad_button("]').should('have.text', '(').click();
    cy.get('[data-testid="keypad_button)"]').should('have.text', ')').click();
    cy.get('[data-testid="display"]').should('have.text', '9-()');
    cy.get('[data-testid="keypad_button="]').should('have.text', '=').click();
    cy.get('[data-testid="display_text"]').should('have.text', '9-()');
    cy.get('[data-testid="display_error"]').should(
      'have.text',
      `${ErrorMessagesEnum.INVALID_EXPRESSION}`
    );
    cy.get('[data-testid="display"]').should(
      'have.text',
      `9-()${ErrorMessagesEnum.INVALID_EXPRESSION}`
    );
  });
});
