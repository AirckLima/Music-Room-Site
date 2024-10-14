"use client";

import { useContext, createContext } from "react";

export type windowTags = "xl" | "lg" | "md" | "sm" | "xs";

export type LibraryContextProps = {
  windowWidth: number;
  windowTag: windowTags;
  setWindowTag: (tag: windowTags) => void;
};

export const viewportWidthMapper = {
  "1535": "xl",
  "1279": "lg",
  "1023": "md",
  "767": "sm",
  "639": "xs",
};

export function getWindowTag(x: number): windowTags {
  for (const key in viewportWidthMapper) {
    const val: windowTags = viewportWidthMapper[
      key as keyof typeof viewportWidthMapper
    ] as windowTags;

    if (x <= parseInt(key)) return val;
  }

  return "xs";
}

export const WindowContextDefaultValues = {
  windowWidth: 320,
  windowTag: "xs" as windowTags,
  setWindowTag: (tag: windowTags) => {
    return;
  },
};

export const WindowContext = createContext<LibraryContextProps>(
  WindowContextDefaultValues
);
