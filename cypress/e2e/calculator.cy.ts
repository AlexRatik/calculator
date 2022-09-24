describe('Should count simple expressions', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Just plus', () => {
    cy.get('[data-testid="keypad_button3"]').click();
    cy.get('[data-testid="keypad_button+"]').click();
    cy.get('[data-testid="keypad_button5"]').click();
    cy.get('[data-testid="keypad_button="]').click();
    cy.get('[data-testid="display_text"]').should('have.text', 5 + 3);
  });

  it('Just minus', () => {
    cy.get('[data-testid="keypad_button2"]').click();
    cy.get('[data-testid="keypad_button-"]').click();
    cy.get('[data-testid="keypad_button7"]').click();
    cy.get('[data-testid="keypad_button="]').click();
    cy.get('[data-testid="display_text"]').should('have.text', 2 - 7);
  });

  it('Just division', () => {
    cy.get('[data-testid="keypad_button2"]').click();
    cy.get('[data-testid="keypad_button/"]').click();
    cy.get('[data-testid="keypad_button7"]').click();
    cy.get('[data-testid="keypad_button="]').click();
    cy.get('[data-testid="display_text"]').should('have.text', (2 / 7).toFixed(3));
  });

  it('Just multiply', () => {
    cy.get('[data-testid="keypad_button9"]').click();
    cy.get('[data-testid="keypad_button*"]').click();
    cy.get('[data-testid="keypad_button5"]').click();
    cy.get('[data-testid="keypad_button4"]').click();
    cy.get('[data-testid="keypad_button="]').click();
    cy.get('[data-testid="display_text"]').should('have.text', 9 * 54);
  });

  it('Just remains', () => {
    cy.get('[data-testid="keypad_button1"]').click();
    cy.get('[data-testid="keypad_button0"]').click();
    cy.get('[data-testid="keypad_button0"]').click();
    cy.get('[data-testid="keypad_button%"]').click();
    cy.get('[data-testid="keypad_button2"]').click();
    cy.get('[data-testid="keypad_button4"]').click();
    cy.get('[data-testid="keypad_button="]').click();
    cy.get('[data-testid="display_text"]').should('have.text', 100 % 24);
  });
});

describe('Should count more difficult operations', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('All inclusive', () => {
    const expression = 357 - (241 % 132) + (85 * 3) / 4;
    cy.get('[data-testid="keypad_button3"]').click();
    cy.get('[data-testid="keypad_button5"]').click();
    cy.get('[data-testid="keypad_button7"]').click();
    cy.get('[data-testid="keypad_button-"]').click();
    cy.get('[data-testid="keypad_button2"]').click();
    cy.get('[data-testid="keypad_button4"]').click();
    cy.get('[data-testid="keypad_button1"]').click();
    cy.get('[data-testid="keypad_button%"]').click();
    cy.get('[data-testid="keypad_button1"]').click();
    cy.get('[data-testid="keypad_button3"]').click();
    cy.get('[data-testid="keypad_button2"]').click();
    cy.get('[data-testid="keypad_button+"]').click();
    cy.get('[data-testid="keypad_button8"]').click();
    cy.get('[data-testid="keypad_button5"]').click();
    cy.get('[data-testid="keypad_button*"]').click();
    cy.get('[data-testid="keypad_button3"]').click();
    cy.get('[data-testid="keypad_button/"]').click();
    cy.get('[data-testid="keypad_button4"]').click();
    cy.get('[data-testid="keypad_button="]').click();
    cy.get('[data-testid="display_text"]').should('have.text', expression);
  });

  it('With brackets', () => {
    const expression = 3 * (3 + 28 - (95 % (44 - 12))) + 45 / 4;
    cy.get('[data-testid="keypad_button3"]').click();
    cy.get('[data-testid="keypad_button*"]').click();
    cy.get('[data-testid="keypad_button("]').click();
    cy.get('[data-testid="keypad_button("]').click();
    cy.get('[data-testid="keypad_button3"]').click();
    cy.get('[data-testid="keypad_button+"]').click();
    cy.get('[data-testid="keypad_button2"]').click();
    cy.get('[data-testid="keypad_button8"]').click();
    cy.get('[data-testid="keypad_button)"]').click();
    cy.get('[data-testid="keypad_button-"]').click();
    cy.get('[data-testid="keypad_button9"]').click();
    cy.get('[data-testid="keypad_button5"]').click();
    cy.get('[data-testid="keypad_button%"]').click();
    cy.get('[data-testid="keypad_button("]').click();
    cy.get('[data-testid="keypad_button4"]').click();
    cy.get('[data-testid="keypad_button4"]').click();
    cy.get('[data-testid="keypad_button-"]').click();
    cy.get('[data-testid="keypad_button1"]').click();
    cy.get('[data-testid="keypad_button2"]').click();
    cy.get('[data-testid="keypad_button)"]').click();
    cy.get('[data-testid="keypad_button)"]').click();
    cy.get('[data-testid="keypad_button+"]').click();
    cy.get('[data-testid="keypad_button4"]').click();
    cy.get('[data-testid="keypad_button5"]').click();
    cy.get('[data-testid="keypad_button/"]').click();
    cy.get('[data-testid="keypad_button4"]').click();
    cy.get('[data-testid="keypad_button="]').click();
    cy.get('[data-testid="display_text"]').should('have.text', expression);
  });

  it('With toggleSign', () => {
    const expression = -7 * (2 + (-18 % (-9123 % (-424 - -12)))) + 450 / -24;
    cy.get('[data-testid="keypad_button7"]').click();
    cy.get('[data-testid="keypad_button+/-"]').click();
    cy.get('[data-testid="keypad_button*"]').click();
    cy.get('[data-testid="keypad_button("]').click();
    cy.get('[data-testid="keypad_button2"]').click();
    cy.get('[data-testid="keypad_button+"]').click();
    cy.get('[data-testid="keypad_button1"]').click();
    cy.get('[data-testid="keypad_button8"]').click();
    cy.get('[data-testid="keypad_button+/-"]').click();
    cy.get('[data-testid="keypad_button%"]').click();
    cy.get('[data-testid="keypad_button("]').click();
    cy.get('[data-testid="keypad_button9"]').click();
    cy.get('[data-testid="keypad_button1"]').click();
    cy.get('[data-testid="keypad_button2"]').click();
    cy.get('[data-testid="keypad_button3"]').click();
    cy.get('[data-testid="keypad_button+/-"]').click();
    cy.get('[data-testid="keypad_button%"]').click();
    cy.get('[data-testid="keypad_button("]').click();
    cy.get('[data-testid="keypad_button4"]').click();
    cy.get('[data-testid="keypad_button2"]').click();
    cy.get('[data-testid="keypad_button4"]').click();
    cy.get('[data-testid="keypad_button+/-"]').click();
    cy.get('[data-testid="keypad_button-"]').click();
    cy.get('[data-testid="keypad_button1"]').click();
    cy.get('[data-testid="keypad_button2"]').click();
    cy.get('[data-testid="keypad_button+/-"]').click();
    cy.get('[data-testid="keypad_button)"]').click();
    cy.get('[data-testid="keypad_button)"]').click();
    cy.get('[data-testid="keypad_button)"]').click();
    cy.get('[data-testid="keypad_button+"]').click();
    cy.get('[data-testid="keypad_button4"]').click();
    cy.get('[data-testid="keypad_button5"]').click();
    cy.get('[data-testid="keypad_button0"]').click();
    cy.get('[data-testid="keypad_button/"]').click();
    cy.get('[data-testid="keypad_button2"]').click();
    cy.get('[data-testid="keypad_button4"]').click();
    cy.get('[data-testid="keypad_button+/-"]').click();
    cy.get('[data-testid="keypad_button="]').click();
    cy.get('[data-testid="display_text"]').should('have.text', expression);
  });

  it('With float dot', () => {
    const expression = 6.32 + 5.321 * 0.001 + (100.992 % (33.43 - 10.12));
    cy.get('[data-testid="keypad_button6"]').click();
    cy.get('[data-testid="keypad_button."]').click();
    cy.get('[data-testid="keypad_button3"]').click();
    cy.get('[data-testid="keypad_button2"]').click();
    cy.get('[data-testid="keypad_button+"]').click();
    cy.get('[data-testid="keypad_button5"]').click();
    cy.get('[data-testid="keypad_button."]').click();
    cy.get('[data-testid="keypad_button3"]').click();
    cy.get('[data-testid="keypad_button2"]').click();
    cy.get('[data-testid="keypad_button1"]').click();
    cy.get('[data-testid="keypad_button*"]').click();
    cy.get('[data-testid="keypad_button0"]').click();
    cy.get('[data-testid="keypad_button."]').click();
    cy.get('[data-testid="keypad_button0"]').click();
    cy.get('[data-testid="keypad_button0"]').click();
    cy.get('[data-testid="keypad_button1"]').click();
    cy.get('[data-testid="keypad_button+"]').click();
    cy.get('[data-testid="keypad_button("]').click();
    cy.get('[data-testid="keypad_button1"]').click();
    cy.get('[data-testid="keypad_button0"]').click();
    cy.get('[data-testid="keypad_button0"]').click();
    cy.get('[data-testid="keypad_button."]').click();
    cy.get('[data-testid="keypad_button9"]').click();
    cy.get('[data-testid="keypad_button9"]').click();
    cy.get('[data-testid="keypad_button2"]').click();
    cy.get('[data-testid="keypad_button%"]').click();
    cy.get('[data-testid="keypad_button("]').click();
    cy.get('[data-testid="keypad_button3"]').click();
    cy.get('[data-testid="keypad_button3"]').click();
    cy.get('[data-testid="keypad_button."]').click();
    cy.get('[data-testid="keypad_button4"]').click();
    cy.get('[data-testid="keypad_button3"]').click();
    cy.get('[data-testid="keypad_button-"]').click();
    cy.get('[data-testid="keypad_button1"]').click();
    cy.get('[data-testid="keypad_button0"]').click();
    cy.get('[data-testid="keypad_button."]').click();
    cy.get('[data-testid="keypad_button1"]').click();
    cy.get('[data-testid="keypad_button2"]').click();
    cy.get('[data-testid="keypad_button)"]').click();
    cy.get('[data-testid="keypad_button)"]').click();
    cy.get('[data-testid="keypad_button="]').click();
    cy.get('[data-testid="display_text"]').should('have.text', expression.toFixed(3));
  });
});
