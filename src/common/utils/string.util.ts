/**
 * Capitalize first char of a word.
 *
 * If word is capitalized this will be lowercase then the first char will be capitalized.
 *
 * @param text text to be transformed.
 *
 * @returns Text with first char capitalized.
 */
export const capitalize = (text: string) => {
  return `${text.charAt(0).toUpperCase()}${text.slice(1).toLowerCase()}`;
};

/**
 * Capitalize each word of given target text.
 *
 * @param target Target text.
 *
 * @return A string value.
 */
export const capitalizeEach = (target: string): string => {
  return target
    .split(' ')
    .map((part: string) => {
      return capitalize(part);
    })
    .join(' ');
};
