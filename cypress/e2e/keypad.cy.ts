import { keypadButtons } from '../../src/constants/keypadButtons';

describe('render keypad', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render right text inside button', () => {
    keypadButtons.forEach((buttonText) => {
      cy.get(`[data-testid="keypad_button${buttonText}"]`).should('have.text', buttonText);
    });
  });
});
