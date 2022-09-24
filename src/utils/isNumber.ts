export const isNumber = (val: string) => {
  return val === '.' || !Number.isNaN(parseFloat(val));
};
