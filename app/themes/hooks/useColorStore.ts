import { colorTokens, tokenToStyle } from "natmfat/lib/tokens";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type Nullable<T> = T | null;

export type ColorVars = Record<string, Nullable<string>>;

type State = {
  colorVars: ColorVars;
  __cleared: number;
};

type Action = {
  clearColorVars: () => void;
  insertColorVars: (colorVars: ColorVars) => void;
  updateColorVar: (colorVar: string, value: Nullable<string>) => void;
};

export const useColorStore = create<State & Action>()(
  immer((set) => ({
    __cleared: 0,
    colorVars: createInitialColorVars(),
    clearColorVars: () =>
      set((state) => {
        state.colorVars = {};
        state.__cleared += 1;
      }),
    insertColorVars: (colorVars) =>
      set((state) => {
        Object.assign(state.colorVars, colorVars);
      }),
    updateColorVar: (colorVar, value) =>
      set((state) => {
        state.colorVars[colorVar] = value;
      }),
  })),
);

function createInitialColorVars() {
  return Object.values(colorTokens).reduce(
    (acc, token) => ({
      ...acc,
      [tokenToStyle(token)]: undefined,
    }),
    {},
  );
}
