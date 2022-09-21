export const transformResult = (val: number) => {
  const str = String(val);
  const dotIndex = str.indexOf('.');
  if (dotIndex === -1 || str.length - dotIndex <= 3) {
    return +val;
  } else {
    return (+val).toFixed(3);
  }
};
