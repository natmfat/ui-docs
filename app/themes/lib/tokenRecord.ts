import { colorTokens } from "natmfat/lib/tokens";

export type ColorToken = {
  displayName: string; // "default"
  tokenName: string; // primaryDefault
  tokenValue: string; // var(--primary-default)
};

const COLOR_BLACKLIST: string[] = [
  "primary",
  "positive",
  "negative",
  "black",
  "white",
];

// convert color tokens into a record
export const colorRecord = Object.entries(colorTokens).reduce(
  (acc: Record<string, ColorToken[]>, [tokenName, tokenValue]) => {
    const key = getBaseColor(tokenName);
    if (COLOR_BLACKLIST.includes(key)) {
      return acc;
    }
    return {
      ...acc,
      [key]: [
        ...(key in acc ? acc[key] : []),
        {
          displayName: tokenName.substring(key.length).toLowerCase(),
          tokenName,
          tokenValue,
        },
      ],
    };
  },
  {},
);

/**
 * Get the base color from a token name
 * @param token - Token name
 * @example
 * getBaseColor("primaryDefault")
 * // => "primary"
 */
function getBaseColor(token: string): string {
  const key: string[] = [];
  for (let i = 0; i < token.length; i++) {
    const char = token.charAt(i);
    if (char.toLocaleUpperCase() === char) {
      return key.join("");
    }
    key.push(char);
  }
  return key.join("");
}
