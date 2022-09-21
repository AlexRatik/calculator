const font = 'sans-serif';

const black = '#000000';
const white = '#ffffff';
const error = '#c86464';
const primaryLight = '#fdd1d1';
const secondaryLight = white;
const primaryDark = '#684545';
const secondaryDark = black;
const borderLight = '#727272';
const borderDark = '#f7f9fa';
const lightBg = '#f5f5f5';
const darkBg = '#3e3e3e';
const slimBorderWidth = '1px';
const blockBorderWidth = '2px';

const defaultTheme = {
  font,
  spaces: ['0', '4px', '8px', '16px', '32px', '64px', '128px'],
  fontSizes: ['12px', '14px', '16px', '20px', '24px', '32px', '40px', '56px', '72px', '80px'],
  keySize: '80px',
  headerHeight: '80px',
  slimBorderWidth,
  blockBorderWidth,
  webkitScrollBarWidth: '5px',
  defaultTransition: '100ms',
  colors: {
    black,
    white,
    error,
  },
};

export const lightTheme = {
  ...defaultTheme,
  defaultBorder: `${slimBorderWidth} solid ${borderLight}`,
  blockBorder: `${blockBorderWidth} solid ${borderLight}`,
  borderColor: borderLight,
  fontColor: black,
  body: lightBg,
  headerColor: white,
  headerBg: darkBg,
  displayUpper: 'grey',
  primary: primaryLight,
  secondary: secondaryLight,
};

export const darkTheme = {
  ...defaultTheme,
  defaultBorder: `${slimBorderWidth} solid ${borderDark}`,
  blockBorder: `${blockBorderWidth} solid ${borderDark}`,
  borderColor: borderDark,
  fontColor: white,
  body: darkBg,
  headerColor: black,
  headerBg: lightBg,
  displayUpper: '#d7dbe0',
  primary: primaryDark,
  secondary: secondaryDark,
};
