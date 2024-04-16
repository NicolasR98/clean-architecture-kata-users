export const validateRegexp = (pattern: RegExp, text: string): boolean =>
  pattern.test(text);

export const isStringEmpty = (str: string): boolean =>
  !str || str.trim().length === 0;
