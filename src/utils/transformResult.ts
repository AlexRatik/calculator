export const transformResult = (val: string) => {
  const res = (+val).toFixed(3);
  return +res;
};
