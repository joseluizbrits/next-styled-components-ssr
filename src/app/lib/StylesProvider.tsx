"use client";

import StyledComponentsRegistry from "./registry";

function StylesProvider({ children }: { children: React.ReactNode }) {
  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}

export default StylesProvider;
