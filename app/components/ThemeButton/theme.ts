"use server";

import { cookies } from "next/headers";

const THEME_KEY = "theme";

enum THEME {
  LIGHT = "light",
  DARK = "dark",
}

const normalize = (theme?: string): string => {
  if (theme && theme === THEME.LIGHT) {
    return theme;
  }
  return THEME.DARK;
};

export const setTheme = async (nextTheme: string) => {
  const store = await cookies();
  store.set({
    name: THEME_KEY,
    value: normalize(nextTheme),
    secure: true,
    httpOnly: true,
    // https://developer.chrome.com/blog/cookie-max-age-expires
    maxAge: 34560000,
  });
};

export const getTheme = async () => {
  const store = await cookies();
  if (store.has(THEME_KEY)) {
    return normalize(store.get(THEME_KEY)?.value);
  }
  return THEME.DARK;
};
